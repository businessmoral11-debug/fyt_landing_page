import { memo, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

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

useGLTF.preload(ASTEROID_MODEL_URLS.rock1);
useGLTF.preload(ASTEROID_MODEL_URLS.rock2);
useGLTF.preload(ASTEROID_MODEL_URLS.rock2Hi);
useGLTF.preload(ASTEROID_MODEL_URLS.rock3);
useGLTF.preload(ASTEROID_MODEL_URLS.rock5Hi);

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

// Cinematic deep-space hero backdrop, built around real photogrammetry-
// scanned rock assets (see ASTEROID_MODEL_URLS) rather than any procedural
// geometry: a realistic THREE.Points starfield (Starfield) behind the fixed
// 6-asteroid composition (AsteroidField), with slow cinematic camera drift
// and mouse parallax. Rendered as a background layer behind the existing
// orbital radar stage (HeroStage in App.tsx) — see HeroSceneGate for the
// desktop/reduced-motion gating that decides whether this mounts at all.
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
      shadows
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* No HDRI environment map (no texture asset available for one) — a
          small light rig stands in: weak cool ambient, a warm-white key
          light (slightly stronger now, for more defined specular pickup on
          the rock surfaces) casting real shadow maps across the asteroid
          field, a soft blue rim light from the opposite side, and a very
          weak warm hemisphere fill so shadow sides never go fully flat. */}
      <ambientLight intensity={0.14} color="#33507f" />
      <hemisphereLight args={["#fff3e2", "#141c34", 0.16]} />
      <directionalLight
        position={[6, 5, 6]}
        intensity={1.3}
        color="#fff3e2"
        castShadow
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
      <AsteroidField />
      <Rig mouse={mouse} />
    </Canvas>
  );
}
