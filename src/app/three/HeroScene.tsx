import { memo, Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

// ─── ASTEROID SCENE TOGGLE ──────────────────────────────────────────────────
// Soft-disabled, not deleted: every asteroid asset/component below (models,
// textures, AsteroidField, Asteroid) stays fully intact so the previous
// asteroid-field hero can come back by flipping this one flag to `true` —
// nothing else in this file needs to change to switch back. While disabled,
// the model/texture preloads are also skipped (no point downloading assets
// for a scene that isn't rendering) and <AsteroidField/> itself never
// mounts, so it costs nothing at runtime either.
const ASTEROIDS_ENABLED = false;

// ─── REAL ASTEROID ASSETS ────────────────────────────────────────────────────
// Real, photogrammetry-scanned rock models (Poly Haven's "Moon Rock" set —
// CC0-licensed, no attribution required, no login/API key needed) — not
// procedural geometry. Each ships proper PBR textures (base color, GL-space
// normal map, and a packed ambient-occlusion/roughness/metalness map) baked
// from an actual photographed rock, loaded here via glTF exactly as
// authored. Files live in /public/models/ (see that folder for the source
// manifest) and are served as plain static assets, not bundled through
// Vite's JS import graph — this is how glTF's own relative references to
// its .bin buffer and texture files resolve correctly at runtime.
const ASTEROID_MODEL_URLS = {
  // Both large asteroids get a 2k texture set + real displacement map. The
  // large-left slot uses moon_rock_05 (Poly Haven's roundest scan — max/min
  // dimension ratio ~1.13, vs. ~2.82 for moon_rock_01) instead of rock1:
  // rock1's real scanned proportions are genuinely elongated, so no amount
  // of rotation ever reads as "rounded" from every angle — swapping the
  // source model (not deforming it) is what the user explicitly asked for.
  // rock1 (1k) stays loaded because the two small-right corner rocks still
  // use its lower LOD nodes for silhouette variety. The four small corner
  // rocks stay at 1k / lower LOD nodes throughout.
  rock1: "/models/moon-rock-01/moon_rock_01_1k.gltf",
  rock2: "/models/moon-rock-02/moon_rock_02_1k.gltf",
  rock2Hi: "/models/moon-rock-02/moon_rock_02_2k.gltf",
  rock3: "/models/moon-rock-03/moon_rock_03_1k.gltf",
  rock5Hi: "/models/moon-rock-05/moon_rock_05_2k.gltf",
} as const;
const ROCK2_DISPLACEMENT_URL = "/models/moon-rock-02/textures/moon_rock_02_disp_2k.jpg";
const ROCK5_DISPLACEMENT_URL = "/models/moon-rock-05/textures/moon_rock_05_disp_2k.jpg";

if (ASTEROIDS_ENABLED) {
  useGLTF.preload(ASTEROID_MODEL_URLS.rock1);
  useGLTF.preload(ASTEROID_MODEL_URLS.rock2);
  useGLTF.preload(ASTEROID_MODEL_URLS.rock2Hi);
  useGLTF.preload(ASTEROID_MODEL_URLS.rock3);
  useGLTF.preload(ASTEROID_MODEL_URLS.rock5Hi);
  // The two displacement maps were being fetched lazily on first render inside
  // AsteroidField's useTexture() calls — preloaded here too so every asset
  // (models + textures) starts downloading at module-evaluation time, not
  // staggered behind component mount.
  useTexture.preload(ROCK2_DISPLACEMENT_URL);
  useTexture.preload(ROCK5_DISPLACEMENT_URL);
}

interface AsteroidSpec {
  key: string;
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  /** Radians/second — kept tiny throughout ("less than 1° every several
   *  seconds" for the large pair). */
  rotationSpeed: number;
  /** World-unit peak amplitude of vertical floating motion. At this scene's
   *  camera/depth setup roughly 1 world unit ≈ 84 screen px at the large
   *  asteroids' depth (a fixed-camera estimate, not measured against a real
   *  render), so e.g. 0.048 ≈ 4px peak / 8px peak-to-peak. */
  floatAmplitudeY: number;
  /** Seconds for one full vertical float cycle. */
  floatPeriod: number;
  /** World-unit peak amplitude of horizontal drift — deliberately on its
   *  own, shorter-than-vertical amplitude and a different period from the
   *  float cycle, so the path is a lazy figure/wander rather than a clean
   *  repeating ellipse (which would read as "orbiting"). */
  driftAmplitudeX: number;
  driftPeriod: number;
  /** Radians — offsets this instance's sine phase so multiple asteroids
   *  never move in lockstep with each other. */
  phaseOffset: number;
  colorTint: number;
  roughnessJitter: number;
  /** Real displacement map (from the same scan, not synthetic) applied via
   *  MeshStandardMaterial's built-in displacementMap — adds genuine extra
   *  surface relief (deeper crater floors, chipped-looking edges) beyond
   *  what the base mesh resolution shows, without touching the geometry
   *  data itself. Reserved for the two large hero rocks. */
  displacementMap?: THREE.Texture;
  displacementScale?: number;
  displacementBias?: number;
}

// One real asteroid mesh: never distorted (geometry is used exactly as
// loaded — only position/rotation/scale as a whole object, plus a per-
// instance material clone for slight color/roughness variation and,
// optionally, a real displacement map, are ever touched). Every position/
// rotation/scale value in this file is a fixed, hand-placed number, not
// randomized — this is a deliberate 6-asteroid composition, not a
// procedurally-scattered field.
//
// Per-frame, only `mesh.position` and a `rotateOnAxis` call are ever
// touched — never geometry attributes, never material properties — so this
// stays GPU-friendly (transform-only) the whole time. Motion is two
// independent sine waves (vertical float + horizontal drift) on their own
// periods and phases, smooth and continuous with no direction-change
// spikes or bounce — "heavy object drifting," not a bouncing/orbiting prop.
function Asteroid({ spec }: { spec: AsteroidSpec }) {
  const material = useMemo(() => {
    const m = spec.material.clone() as THREE.MeshStandardMaterial;
    m.color.multiplyScalar(spec.colorTint);
    if (typeof m.roughness === "number") {
      m.roughness = THREE.MathUtils.clamp(m.roughness + spec.roughnessJitter, 0.35, 1);
    }
    if (spec.displacementMap) {
      m.displacementMap = spec.displacementMap;
      m.displacementScale = spec.displacementScale ?? 0.02;
      m.displacementBias = spec.displacementBias ?? -(spec.displacementScale ?? 0.02) / 2;
    }
    m.needsUpdate = true;
    return m;
  }, [spec.material, spec.colorTint, spec.roughnessJitter, spec.displacementMap, spec.displacementScale, spec.displacementBias]);

  useEffect(() => () => material.dispose(), [material]);

  const rotAxis = useMemo(() => new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(), []);
  const ref = useRef<THREE.Mesh>(null);
  const basePos = spec.position;

  useFrame(({ clock }, delta) => {
    const mesh = ref.current;
    if (!mesh) return;
    mesh.rotateOnAxis(rotAxis, spec.rotationSpeed * delta);
    const t = clock.getElapsedTime();
    const floatPhase = (t / spec.floatPeriod) * Math.PI * 2 + spec.phaseOffset;
    const driftPhase = (t / spec.driftPeriod) * Math.PI * 2 + spec.phaseOffset * 1.3;
    mesh.position.set(
      basePos[0] + Math.sin(driftPhase) * spec.driftAmplitudeX,
      basePos[1] + Math.sin(floatPhase) * spec.floatAmplitudeY,
      basePos[2],
    );
  });

  return (
    <mesh
      ref={ref}
      geometry={spec.geometry}
      material={material}
      position={spec.position}
      rotation={spec.rotation}
      scale={spec.scale}
      castShadow
      receiveShadow
    />
  );
}

// Exactly 6 asteroids, fixed composition: 2 large (left/right, mirrored
// weight, same vertical alignment, both kept well inside the frame so
// neither ever clips) + 4 small ones at the four corners (top-left,
// top-right, lower-left, lower-right), all positioned clear of the
// centered headline/trust-badge/description/button column. No field, no
// random scatter, no instancing — six hand-placed objects.
function AsteroidField() {
  const rock1 = useGLTF(ASTEROID_MODEL_URLS.rock1);
  const rock2 = useGLTF(ASTEROID_MODEL_URLS.rock2);
  const rock2Hi = useGLTF(ASTEROID_MODEL_URLS.rock2Hi);
  const rock3 = useGLTF(ASTEROID_MODEL_URLS.rock3);
  const rock5Hi = useGLTF(ASTEROID_MODEL_URLS.rock5Hi);
  const rock2Displacement = useTexture(ROCK2_DISPLACEMENT_URL);
  const rock5Displacement = useTexture(ROCK5_DISPLACEMENT_URL);

  useEffect(() => {
    rock2Displacement.colorSpace = THREE.NoColorSpace;
    rock2Displacement.needsUpdate = true;
    rock5Displacement.colorSpace = THREE.NoColorSpace;
    rock5Displacement.needsUpdate = true;
  }, [rock2Displacement, rock5Displacement]);

  const rock1LOD0 = rock1.nodes["moon_rock_01_LOD0"] as THREE.Mesh;
  const rock1LOD2 = (rock1.nodes["moon_rock_01_LOD2"] as THREE.Mesh) ?? rock1LOD0;
  const rock1LOD3 = (rock1.nodes["moon_rock_01_LOD3"] as THREE.Mesh) ?? rock1LOD0;
  const rock2Mesh = rock2.nodes["moon_rock_02_LOD0"] as THREE.Mesh;
  const rock2HiMesh = rock2Hi.nodes["moon_rock_02_LOD0"] as THREE.Mesh;
  const rock3Mesh = rock3.nodes["moon_rock_03_LOD0"] as THREE.Mesh;
  const rock5HiLOD0 = rock5Hi.nodes["moon_rock_05_LOD0"] as THREE.Mesh;

  const specs = useMemo<AsteroidSpec[]>(
    () => [
      // ── 2 large — deliberately different apparent sizes now (right is
      // still the bigger of the two, ~28%, but no longer dominant), both
      // scales derived from real-world scan dimensions (Poly Haven
      // `dimensions` metadata: rock5 avg ~75.5mm, rock2 avg ~233.8mm) times
      // scale so the *apparent* on-screen size moves by the requested
      // percentage — matching raw `scale` numbers between two different
      // scans does not produce equal visual size. `scale` stays a single
      // uniform number for both (never per-axis) — geometry is never
      // stretched, squashed, or otherwise deformed anywhere in this file.
      //
      // Left: previously rock1 (elongated scan, ratio ~2.82) rotated to
      // try to hide its long axis — no orientation of an elongated mesh
      // reads as "rounded" from every angle, so per explicit request this
      // now uses rock5 instead (Poly Haven's roundest moon-rock scan,
      // ratio ~1.13 — genuinely chunky/spherical, not a rotation trick).
      // Old apparent size (rock1 @ scale 16.2) ≈2.16 units; new scale
      // (31.4) targets ≈2.37 units, a ~10% increase, at the same position.
      {
        key: "large-left",
        geometry: rock5HiLOD0.geometry,
        material: rock5HiLOD0.material,
        position: [-5.5, -2.2, -3.6],
        rotation: [0.6, 2.1, -0.3],
        scale: 31.4,
        rotationSpeed: 0.0022,
        // Float amplitude/period retuned to the requested 6–10px / 10–16s
        // window (~84 world-units-to-px at this depth): 0.08 ≈ 6.7px, 13s.
        floatAmplitudeY: 0.08,
        floatPeriod: 13,
        driftAmplitudeX: 0.018,
        driftPeriod: 29,
        phaseOffset: 0,
        colorTint: 1.02,
        roughnessJitter: -0.01,
        displacementMap: rock5Displacement,
        displacementScale: 0.007,
      },
      // Right: same rock2 model, same rotation/material/displacement —
      // only resized (previous pass) and now moved up (this pass) so the
      // two large rocks don't sit on the same horizontal line. +0.8 on Y
      // (this scene's +Y is up — small-top-left sits at y=3.0, small-
      // lower-left at y=-3.0 — so "move upward" means increasing Y here,
      // not the negative delta a screen-space/image convention would
      // suggest). At this new position + the already-reduced scale (13.0,
      // apparent size ≈3.03 units ≈ radius 1.5), the rock's top edge sits
      // well inside the visible frustum at this depth and its right edge
      // has generous clearance from the viewport edge — no clipping.
      {
        key: "large-right",
        geometry: rock2HiMesh.geometry,
        material: rock2HiMesh.material,
        position: [5.0, 1.1, -3.6],
        rotation: [0.3, -0.6, 0.15],
        scale: 13.0,
        rotationSpeed: 0.0024,
        // Float amplitude/period retuned to the requested 6–10px / 10–16s
        // window: 0.095 ≈ 8px, 15s.
        floatAmplitudeY: 0.095,
        floatPeriod: 15,
        driftAmplitudeX: 0.018,
        driftPeriod: 26,
        phaseOffset: Math.PI,
        colorTint: 0.94,
        roughnessJitter: 0.02,
        displacementMap: rock2Displacement,
        displacementScale: 0.018,
      },
      // ── 4 small — one per corner, each a different rock/LOD so no two
      // share a silhouette; slightly more float/drift amplitude than the
      // large pair, each on its own period and phase so none of the four
      // ever move in sync with each other or with the large pair.
      {
        key: "small-top-left",
        geometry: rock3Mesh.geometry,
        material: rock3Mesh.material,
        position: [-4.2, 3.0, -4.0],
        rotation: [0.6, 1.2, 0.3],
        scale: 3.51,
        rotationSpeed: 0.0048,
        floatAmplitudeY: 0.07,
        floatPeriod: 14,
        driftAmplitudeX: 0.03,
        driftPeriod: 19,
        phaseOffset: 0.8,
        colorTint: 1,
        roughnessJitter: 0,
      },
      {
        key: "small-top-right",
        geometry: rock1LOD2.geometry,
        material: rock1LOD0.material,
        position: [4.6, 2.9, -4.3],
        rotation: [2.1, 0.4, 1.6],
        scale: 3.04,
        rotationSpeed: 0.0055,
        floatAmplitudeY: 0.08,
        floatPeriod: 16,
        driftAmplitudeX: 0.034,
        driftPeriod: 21,
        phaseOffset: 2.6,
        colorTint: 0.95,
        roughnessJitter: 0.03,
      },
      {
        key: "small-lower-left",
        geometry: rock2Mesh.geometry,
        material: rock2Mesh.material,
        position: [-2.3, -3.0, -4.6],
        rotation: [0.9, 3.0, 0.5],
        scale: 2.46,
        rotationSpeed: 0.0052,
        floatAmplitudeY: 0.065,
        floatPeriod: 12.5,
        driftAmplitudeX: 0.026,
        driftPeriod: 17,
        phaseOffset: 4.4,
        colorTint: 1.05,
        roughnessJitter: -0.02,
      },
      {
        key: "small-lower-right",
        geometry: rock1LOD3.geometry,
        material: rock1LOD0.material,
        position: [2.6, -3.1, -4.8],
        rotation: [1.7, 2.0, 2.4],
        scale: 2.11,
        rotationSpeed: 0.006,
        floatAmplitudeY: 0.085,
        floatPeriod: 15.5,
        driftAmplitudeX: 0.032,
        driftPeriod: 22,
        phaseOffset: 5.9,
        colorTint: 0.98,
        roughnessJitter: 0.02,
      },
    ],
    [rock5HiLOD0, rock5Displacement, rock2HiMesh, rock2Displacement, rock3Mesh, rock1LOD2, rock1LOD0, rock2Mesh, rock1LOD3],
  );

  return (
    <>
      {specs.map((spec) => (
        <Asteroid key={spec.key} spec={spec} />
      ))}
    </>
  );
}

// ─── STARFIELD ───────────────────────────────────────────────────────────────
// Real photograph reference (NASA-style deep-field), not a game particle
// system: tiny hard-edged circular points, almost all white, a very small
// fraction faintly blue/yellow-tinted, no glow/bloom/soft sprites anywhere.
// Point size is specified directly in CSS pixels (see uPixelRatio below) and
// held constant regardless of camera distance — realistic stars don't get
// visibly bigger as the camera drifts a few units, so `sizeAttenuation`-style
// perspective scaling is deliberately not used.
const STAR_VERTEX_SHADER = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  uniform float uPixelRatio;
  varying vec3 vColor;
  void main() {
    vColor = aColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aSize * uPixelRatio;
  }
`;
// Hard `discard` past radius 0.5 — a crisp circular cutout with no feathered
// alpha falloff, so there is no soft/blurry/glow edge at any size.
const STAR_FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  varying vec3 vColor;
  void main() {
    vec2 centered = gl_PointCoord - vec2(0.5);
    if (dot(centered, centered) > 0.25) discard;
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

interface StarLayerProps {
  /** World-space Z depth (negative = further from camera). */
  depth: number;
  count: number;
  /** Point sizes in CSS px for the three size buckets (~90% / ~9% / ~1%). */
  baseSize: number;
  midSize: number;
  brightSize: number;
  /** Target apparent drift speed in CSS px/sec, left → right. */
  speedPxPerSec: number;
}

interface StarLayerData {
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  width: number;
  speed: number;
}

// One depth layer of the starfield: a tiled, seamlessly-wrapping field of
// THREE.Points. Two copies of the same geometry sit side by side inside a
// group (`width` apart, exactly matching the geometry's own random spread),
// and only the group's `position.x` is ever touched per frame.
//
// Everything else — the Float32Arrays, the BufferGeometry, the
// ShaderMaterial — is built exactly once, on the very first useFrame tick,
// and stored in a plain ref (`dataRef`), never in React state. This is
// deliberately NOT a useMemo(): useMemo still re-runs its factory whenever
// its dependency values change identity, and this component has no props
// that should ever legitimately do that mid-session, so building inside the
// render loop's first tick (which never re-executes, and is completely
// outside React's render/commit cycle) is what actually guarantees the
// geometry is independent of every possible React re-render — including
// ones unrelated to this component (e.g. a parent re-rendering for a page
// scroll reason that has nothing to do with the starfield). Steady-state,
// every subsequent frame does exactly one thing: advance and wrap
// `group.position.x` — no allocations, no attribute writes, no state
// updates.
function StarLayer({ depth, count, baseSize, midSize, brightSize, speedPxPerSec }: StarLayerProps) {
  const group = useRef<THREE.Group>(null);
  const tileA = useRef<THREE.Points>(null);
  const tileB = useRef<THREE.Points>(null);
  const dataRef = useRef<StarLayerData | null>(null);

  useFrame((state, delta) => {
    if (!dataRef.current) {
      const { camera, viewport, size, gl } = state;
      const vp = viewport.getCurrentViewport(camera, [0, 0, depth]);
      // 35% margin beyond the visible frustum at this depth so a tile never
      // runs out of stars at the edges, even on very wide viewports.
      const width = vp.width * 1.35;
      const height = vp.height * 1.35;
      const pxPerUnit = size.width / vp.width;
      const speed = speedPxPerSec / pxPerUnit;

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * width;
        positions[i * 3 + 1] = (Math.random() - 0.5) * height;
        positions[i * 3 + 2] = depth + (Math.random() - 0.5) * 2;

        // Almost all white; a very small, subtle fraction pale blue/yellow
        // — never a saturated color.
        const colorRoll = Math.random();
        let r = 0.95, g = 0.96, b = 1.0;
        if (colorRoll < 0.05) {
          r = 0.75; g = 0.83; b = 1.0; // pale blue
        } else if (colorRoll < 0.08) {
          r = 1.0; g = 0.92; b = 0.76; // pale yellow
        }
        colors[i * 3 + 0] = r;
        colors[i * 3 + 1] = g;
        colors[i * 3 + 2] = b;

        // ~90% tiny base points, ~9% slightly larger, ~1% "slightly
        // brighter" (bigger, never glowing) — per the reference composition.
        const sizeRoll = Math.random();
        sizes[i] = sizeRoll < 0.01 ? brightSize : sizeRoll < 0.1 ? midSize : baseSize;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: { uPixelRatio: { value: gl.getPixelRatio() } },
        vertexShader: STAR_VERTEX_SHADER,
        fragmentShader: STAR_FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
      });

      dataRef.current = { geometry, material, width, speed };
      if (tileA.current) {
        tileA.current.geometry = geometry;
        tileA.current.material = material;
      }
      if (tileB.current) {
        tileB.current.geometry = geometry;
        tileB.current.material = material;
        tileB.current.position.x = width;
      }
    }

    const data = dataRef.current;
    const g = group.current;
    if (!data || !g) return;
    g.position.x = (g.position.x + data.speed * delta) % data.width;
  });

  useEffect(() => {
    return () => {
      dataRef.current?.geometry.dispose();
      dataRef.current?.material.dispose();
    };
  }, []);

  return (
    <group ref={group}>
      <points ref={tileA} />
      <points ref={tileB} />
    </group>
  );
}
const MemoStarLayer = memo(StarLayer);

// Three depth layers — far (smallest, slowest, densest), middle, and near
// (largest points, fastest, sparsest) — all drifting left → right at an
// almost imperceptible speed. The differing depths/speeds, combined with
// the existing camera parallax in `Rig`, are what create the cinematic
// depth read; layer placement never overlaps the asteroid field (z ≤ -12,
// well behind the asteroids at z ≈ -3.6 to -4.8).
//
// Props below are literal constants, so `memo` on StarLayer (and on this
// component itself, from its call site in HeroScene) means page-scroll-
// driven re-renders of ancestors never propagate into this subtree at all.
function Starfield() {
  return (
    <>
      <MemoStarLayer depth={-40} count={2200} baseSize={1.0} midSize={1.4} brightSize={1.8} speedPxPerSec={0.5} />
      <MemoStarLayer depth={-25} count={900} baseSize={1.2} midSize={1.7} brightSize={2.3} speedPxPerSec={0.8} />
      <MemoStarLayer depth={-15} count={220} baseSize={1.6} midSize={2.1} brightSize={3.0} speedPxPerSec={1.2} />
    </>
  );
}
const MemoStarfield = memo(Starfield);

// ─── CINEMATIC ATMOSPHERE ────────────────────────────────────────────────────
// Replaces the asteroid field visually (see ASTEROIDS_ENABLED above) with an
// elegant, minimal space atmosphere — soft aurora/nebula, a faint center
// glow, a slow radar sweep, and a few drifting dust motes. Everything here is
// pure procedural geometry/shaders (no textures fetched over the network, no
// GLTF), so none of it needs Suspense and all of it is ready on the very
// first frame — satisfying "background ready before hero text appears" for
// free, the same way Starfield already did.
//
// Every material below follows the same rule the rest of this file already
// established for AsteroidField/StarLayer: build the geometry/material
// exactly ONCE (inside the first useFrame tick, cached in a ref — never
// useMemo, which can re-run on unrelated re-renders) and, every frame after
// that, touch nothing but a uniform value or a transform — never rebuild
// geometry, never allocate.

// A soft, slowly-morphing glow blob — reused for BOTH the aurora (behind the
// headline) and the nebula (a second, larger/fainter/slower layer elsewhere
// in the frame) via different props, rather than two separate shaders for
// what is visually the same technique at different settings.
const AURORA_VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const AURORA_FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uSpeed;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv - 0.5;
    float t = uTime * uSpeed;
    // Two soft, independently-drifting blobs whose overlap is what reads as
    // "morphing" — no noise texture needed, just slow sine-warped offsets.
    vec2 c1 = vec2(sin(t * 0.7) * 0.18, cos(t * 0.5) * 0.12);
    vec2 c2 = vec2(sin(t * 0.42 + 2.1) * 0.22, cos(t * 0.6 + 1.3) * 0.16);
    float d1 = length(uv - c1);
    float d2 = length(uv - c2);
    float band = smoothstep(0.5, 0.0, d1) * 0.65 + smoothstep(0.42, 0.0, d2) * 0.55;
    gl_FragColor = vec4(uColor, band * uOpacity);
  }
`;

interface AuroraData {
  geometry: THREE.PlaneGeometry;
  material: THREE.ShaderMaterial;
}

function Aurora({
  position,
  scale,
  color,
  opacity,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  opacity: number;
  speed: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const dataRef = useRef<AuroraData | null>(null);

  useFrame(({ clock }) => {
    if (!dataRef.current) {
      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(color) },
          uOpacity: { value: opacity },
          uSpeed: { value: speed },
        },
        vertexShader: AURORA_VERTEX_SHADER,
        fragmentShader: AURORA_FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      dataRef.current = { geometry, material };
      if (mesh.current) {
        mesh.current.geometry = geometry;
        mesh.current.material = material;
      }
    }
    dataRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
  });

  useEffect(() => {
    return () => {
      dataRef.current?.geometry.dispose();
      dataRef.current?.material.dispose();
    };
  }, []);

  return <mesh ref={mesh} position={position} scale={scale} />;
}
const MemoAurora = memo(Aurora);

// Soft center glow — a round bloom blended with a taller, narrower "shaft"
// at the same origin, together reading as "a soft light source with a
// faint volumetric column" without an actual raymarched volumetric-light
// technique (unnecessary weight for how subtle this needs to be). Built
// from a single procedurally-generated radial-gradient CanvasTexture
// (created once, not per frame) rather than a custom shader — this element
// is meant to be near-static, so there's no morphing math to justify one.
function createRadialGlowTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(210,225,255,1)");
  gradient.addColorStop(0.35, "rgba(130,175,255,0.55)");
  gradient.addColorStop(1, "rgba(60,120,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface CenterGlowData {
  texture: THREE.CanvasTexture;
  roundMaterial: THREE.SpriteMaterial;
  shaftMaterial: THREE.SpriteMaterial;
}

function CenterGlow({ position }: { position: [number, number, number] }) {
  const round = useRef<THREE.Sprite>(null);
  const shaft = useRef<THREE.Sprite>(null);
  const dataRef = useRef<CenterGlowData | null>(null);

  useFrame(({ clock }) => {
    if (!dataRef.current) {
      const texture = createRadialGlowTexture();
      const roundMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.16 });
      const shaftMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.07 });
      dataRef.current = { texture, roundMaterial, shaftMaterial };
      if (round.current) round.current.material = roundMaterial;
      if (shaft.current) shaft.current.material = shaftMaterial;
    }
    // Barely-there breathing — "blend naturally", not "pulse".
    const t = clock.getElapsedTime();
    const breathe = 0.85 + Math.sin(t * 0.15) * 0.15;
    dataRef.current.roundMaterial.opacity = 0.16 * breathe;
    dataRef.current.shaftMaterial.opacity = 0.07 * breathe;
  });

  useEffect(() => {
    return () => {
      dataRef.current?.texture.dispose();
      dataRef.current?.roundMaterial.dispose();
      dataRef.current?.shaftMaterial.dispose();
    };
  }, []);

  return (
    <group position={position}>
      <sprite ref={round} scale={[5, 5, 1]} />
      <sprite ref={shaft} scale={[2.2, 8, 1]} />
    </group>
  );
}

// Radar sweep — a single rotating "comet tail" wedge (bright at its leading
// edge, fading out over ~35% of a turn going backward, hard-cut ahead of
// it) centered on the same point as the orbit rings' node. One full
// rotation every 15-20s; opacity stays under 8% (see uOpacity below) so it
// reads as ambient motion, never as a literal "scanning" sci-fi HUD.
const RADAR_VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const RADAR_FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;
    float angle = atan(uv.y, uv.x);
    // Trail fades out over ~35% of a turn behind the leading edge (angle 0);
    // nothing ahead of the leading edge at all (hard cut, angle > 0).
    float trail = angle > 0.0 ? 0.0 : clamp(1.0 + angle / (3.14159265 * 0.35), 0.0, 1.0);
    float radial = smoothstep(0.5, 0.08, dist);
    gl_FragColor = vec4(uColor, trail * radial * uOpacity);
  }
`;
const RADAR_PERIOD_S = 18; // within the requested 15-20s window

interface RadarData {
  geometry: THREE.PlaneGeometry;
  material: THREE.ShaderMaterial;
}

function RadarSweep({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null);
  const dataRef = useRef<RadarData | null>(null);

  useFrame(({ clock }) => {
    if (!dataRef.current) {
      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.ShaderMaterial({
        uniforms: { uColor: { value: new THREE.Color("#5b9dff") }, uOpacity: { value: 0.07 } },
        vertexShader: RADAR_VERTEX_SHADER,
        fragmentShader: RADAR_FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      dataRef.current = { geometry, material };
      if (mesh.current) {
        mesh.current.geometry = geometry;
        mesh.current.material = material;
      }
    }
    if (mesh.current) {
      mesh.current.rotation.z = -(clock.getElapsedTime() / RADAR_PERIOD_S) * Math.PI * 2;
    }
  });

  useEffect(() => {
    return () => {
      dataRef.current?.geometry.dispose();
      dataRef.current?.material.dispose();
    };
  }, []);

  return <mesh ref={mesh} position={position} scale={9} />;
}

// Dust — a handful of soft, independently-floating motes (deliberately NOT
// the Starfield technique: dust needs soft/blurred edges and gentle
// multi-axis drift, where stars need crisp points and a one-directional
// scroll). Motion is entirely in the vertex shader (a per-point sine drift
// keyed off a random "seed" attribute) so, same as the aurora/radar above,
// the only per-frame CPU-side work is a single uTime uniform write.
const DUST_VERTEX_SHADER = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vSeed;
  void main() {
    vec3 pos = position;
    pos.x += sin(uTime * 0.05 + aSeed * 6.2831) * 0.7;
    pos.y += cos(uTime * 0.04 + aSeed * 3.14159) * 0.5;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = (5.0 + aSeed * 3.0) * uPixelRatio;
    vSeed = aSeed;
  }
`;
const DUST_FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  uniform float uTime;
  varying float vSeed;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float shape = smoothstep(0.5, 0.0, d);
    float twinkle = 0.55 + 0.45 * sin(uTime * 0.15 + vSeed * 12.0);
    gl_FragColor = vec4(0.75, 0.85, 1.0, shape * twinkle * 0.06);
  }
`;
const DUST_COUNT = 40;

interface DustData {
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
}

function Dust() {
  const points = useRef<THREE.Points>(null);
  const dataRef = useRef<DustData | null>(null);

  useFrame(({ clock, gl }) => {
    if (!dataRef.current) {
      const positions = new Float32Array(DUST_COUNT * 3);
      const seeds = new Float32Array(DUST_COUNT);
      for (let i = 0; i < DUST_COUNT; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = -2 - Math.random() * 6;
        seeds[i] = Math.random();
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
      const material = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uPixelRatio: { value: gl.getPixelRatio() } },
        vertexShader: DUST_VERTEX_SHADER,
        fragmentShader: DUST_FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
      });
      dataRef.current = { geometry, material };
      if (points.current) {
        points.current.geometry = geometry;
        points.current.material = material;
      }
    }
    dataRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
  });

  useEffect(() => {
    return () => {
      dataRef.current?.geometry.dispose();
      dataRef.current?.material.dispose();
    };
  }, []);

  return <points ref={points} />;
}

// ─── CAMERA RIG ──────────────────────────────────────────────────────────────
// Multiple slow, layered sine periods (never an obviously repeating loop)
// plus a lerped, low-strength mouse-parallax offset, smoothed and never
// snapping. Amplitudes kept deliberately tiny — "almost imperceptible."
function Rig({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  useFrame(({ camera, clock }: RootState) => {
    const t = clock.getElapsedTime();
    const driftX = Math.sin(t * 0.03) * 0.06 + Math.sin(t * 0.011) * 0.03;
    const driftY = Math.cos(t * 0.024) * 0.04 + Math.cos(t * 0.009) * 0.025;
    const targetX = mouse.current.x * 0.22 + driftX;
    const targetY = mouse.current.y * 0.14 + driftY;
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, -4);
  });
  return null;
}

// Cinematic hero backdrop. As of ASTEROIDS_ENABLED = false above, this is a
// minimal, elegant space atmosphere — the realistic THREE.Points starfield
// (Starfield, unchanged and still the "tiny star" look), a soft morphing
// aurora + fainter nebula layer, a faint center bloom/volumetric glow behind
// the orbit stage's node, a slow radar sweep, and a handful of drifting dust
// motes — with the same slow cinematic camera drift and mouse parallax as
// before (Rig, untouched). Rendered as a background layer behind the
// existing orbital radar stage (HeroStage in App.tsx) — see HeroSceneGate
// for the desktop/reduced-motion gating that decides whether this mounts at
// all. AsteroidField still renders too, gated behind ASTEROIDS_ENABLED, so
// flipping that one flag restores the previous scene exactly.
//
// Suspense sits HERE, inside the Canvas, wrapped only around AsteroidField —
// not around the whole scene, and not above the Canvas in HeroSceneGate.
// AsteroidField is the only part of this scene that depends on any network
// asset (useGLTF/useTexture); every other element here — Starfield and all
// of the new atmosphere below — is pure procedural geometry/shaders with no
// external files and no Suspense dependency at all, so it's guaranteed
// ready on the first frame regardless of the asteroid toggle. Putting
// Suspense above the Canvas (the previous setup, before an earlier fix)
// meant React held back the Canvas's own DOM node — the whole scene,
// lighting included — until every GLTF/texture had finished loading, which
// is what produced a "text appears, then the whole scene pops in a moment
// later" delay; the boundary stays scoped to AsteroidField alone so that
// can never happen again, asteroids on or off.
export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e: PointerEvent) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      shadows={ASTEROIDS_ENABLED}
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* This light rig exists solely for AsteroidField's PBR materials
          (real photogrammetry rocks need real lighting to read correctly) —
          none of the new atmosphere below uses standard/lit materials at
          all (Points, Sprites, and unlit ShaderMaterials all ignore scene
          lights entirely), so the shadow-casting machinery specifically is
          gated off with the asteroid toggle (see ASTEROIDS_ENABLED above):
          zero shadow-casters means a shadow-map pass would be pure wasted
          GPU work. The lights themselves stay mounted either way — cheap,
          and harmless to anything unlit — so flipping the toggle back on
          needs no changes here. */}
      <ambientLight intensity={0.14} color="#33507f" />
      <hemisphereLight args={["#fff3e2", "#141c34", 0.16]} />
      <directionalLight
        position={[6, 5, 6]}
        intensity={1.3}
        color="#fff3e2"
        castShadow={ASTEROIDS_ENABLED}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-6, -3, -4]} intensity={0.38} color="#3b82f6" />

      <MemoStarfield />

      {/* Aurora behind the headline (upper frame) + a fainter, larger,
          slower nebula layer further back and off-center — same component,
          different tuning, so they read as two distinct atmospheric layers
          rather than one obvious blob. Both well under the requested
          6-10% opacity. */}
      <MemoAurora position={[0, 2.2, -14]} scale={14} color="#5b8fff" opacity={0.09} speed={1} />
      <MemoAurora position={[-3, -0.5, -20]} scale={22} color="#4d7fe0" opacity={0.05} speed={0.6} />

      {/* Soft bloom + faint volumetric column behind the orbit stage's
          center node (HeroStage in App.tsx renders that node in DOM/SVG at
          roughly this same screen position; this glow sits behind it in
          the WebGL layer). */}
      <CenterGlow position={[0, -1.8, -3]} />
      <RadarSweep position={[0, -1.8, -2.8]} />

      <Dust />

      {ASTEROIDS_ENABLED && (
        <Suspense fallback={null}>
          <AsteroidField />
        </Suspense>
      )}
      <Rig mouse={mouse} />
    </Canvas>
  );
}
