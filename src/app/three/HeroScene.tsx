import { useEffect, useMemo, useRef } from "react";
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
  // Both large asteroids get the 2k texture set + real displacement map —
  // approved reference composition has exactly two hero-quality rocks, so
  // both can afford the nicer treatment (previously only the right one had
  // it). The four small corner rocks stay at 1k / use lower LOD nodes,
  // which also gives them a visibly different silhouette from the two
  // large ones despite sharing the same 3 underlying scans.
  rock1: "/models/moon-rock-01/moon_rock_01_1k.gltf",
  rock1Hi: "/models/moon-rock-01/moon_rock_01_2k.gltf",
  rock2: "/models/moon-rock-02/moon_rock_02_1k.gltf",
  rock2Hi: "/models/moon-rock-02/moon_rock_02_2k.gltf",
  rock3: "/models/moon-rock-03/moon_rock_03_1k.gltf",
} as const;
const ROCK1_DISPLACEMENT_URL = "/models/moon-rock-01/textures/moon_rock_01_disp_2k.jpg";
const ROCK2_DISPLACEMENT_URL = "/models/moon-rock-02/textures/moon_rock_02_disp_2k.jpg";

useGLTF.preload(ASTEROID_MODEL_URLS.rock1);
useGLTF.preload(ASTEROID_MODEL_URLS.rock1Hi);
useGLTF.preload(ASTEROID_MODEL_URLS.rock2);
useGLTF.preload(ASTEROID_MODEL_URLS.rock2Hi);
useGLTF.preload(ASTEROID_MODEL_URLS.rock3);

interface AsteroidSpec {
  key: string;
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  rotationSpeed: number;
  driftRadius: number;
  driftSpeed: number;
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
// procedurally-scattered field. Rotation and drift are both extremely
// slow, tuned per-instance (large rocks barely move at all; small ones a
// little more) so everything reads as "heavy," never as a floating prop.
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
    mesh.position.set(
      basePos[0] + Math.sin(t * spec.driftSpeed) * spec.driftRadius,
      basePos[1] + Math.cos(t * spec.driftSpeed * 0.8) * spec.driftRadius * 0.6,
      basePos[2] + Math.sin(t * spec.driftSpeed * 0.55) * spec.driftRadius * 0.35,
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
  const rock1Hi = useGLTF(ASTEROID_MODEL_URLS.rock1Hi);
  const rock2 = useGLTF(ASTEROID_MODEL_URLS.rock2);
  const rock2Hi = useGLTF(ASTEROID_MODEL_URLS.rock2Hi);
  const rock3 = useGLTF(ASTEROID_MODEL_URLS.rock3);
  const rock1Displacement = useTexture(ROCK1_DISPLACEMENT_URL);
  const rock2Displacement = useTexture(ROCK2_DISPLACEMENT_URL);

  useEffect(() => {
    rock1Displacement.colorSpace = THREE.NoColorSpace;
    rock1Displacement.needsUpdate = true;
    rock2Displacement.colorSpace = THREE.NoColorSpace;
    rock2Displacement.needsUpdate = true;
  }, [rock1Displacement, rock2Displacement]);

  const rock1LOD0 = rock1.nodes["moon_rock_01_LOD0"] as THREE.Mesh;
  const rock1LOD2 = (rock1.nodes["moon_rock_01_LOD2"] as THREE.Mesh) ?? rock1LOD0;
  const rock1LOD3 = (rock1.nodes["moon_rock_01_LOD3"] as THREE.Mesh) ?? rock1LOD0;
  const rock1HiLOD0 = rock1Hi.nodes["moon_rock_01_LOD0"] as THREE.Mesh;
  const rock2Mesh = rock2.nodes["moon_rock_02_LOD0"] as THREE.Mesh;
  const rock2HiMesh = rock2Hi.nodes["moon_rock_02_LOD0"] as THREE.Mesh;
  const rock3Mesh = rock3.nodes["moon_rock_03_LOD0"] as THREE.Mesh;

  const specs = useMemo<AsteroidSpec[]>(
    () => [
      // ── 2 large — mirrored position/scale, same vertical alignment,
      // both a comfortable margin inside the frame edge (never cropped).
      {
        key: "large-left",
        geometry: rock1HiLOD0.geometry,
        material: rock1HiLOD0.material,
        position: [-5.7, 0.3, -3.6],
        rotation: [1.1, 2.4, -0.4],
        scale: 14.4,
        rotationSpeed: 0.003,
        driftRadius: 0.015,
        driftSpeed: 0.006,
        colorTint: 1.02,
        roughnessJitter: -0.01,
        displacementMap: rock1Displacement,
        displacementScale: 0.016,
      },
      {
        key: "large-right",
        geometry: rock2HiMesh.geometry,
        material: rock2HiMesh.material,
        position: [5.7, 0.3, -3.6],
        rotation: [0.3, -0.6, 0.15],
        scale: 14.4,
        rotationSpeed: 0.0032,
        driftRadius: 0.015,
        driftSpeed: 0.0065,
        colorTint: 0.94,
        roughnessJitter: 0.02,
        displacementMap: rock2Displacement,
        displacementScale: 0.016,
      },
      // ── 4 small — one per corner, each a different rock/LOD so no two
      // share a silhouette; a little more movement than the large pair but
      // still slow.
      {
        key: "small-top-left",
        geometry: rock3Mesh.geometry,
        material: rock3Mesh.material,
        position: [-4.2, 3.0, -4.0],
        rotation: [0.6, 1.2, 0.3],
        scale: 3.0,
        rotationSpeed: 0.006,
        driftRadius: 0.02,
        driftSpeed: 0.01,
        colorTint: 1,
        roughnessJitter: 0,
      },
      {
        key: "small-top-right",
        geometry: rock1LOD2.geometry,
        material: rock1LOD0.material,
        position: [4.6, 2.9, -4.3],
        rotation: [2.1, 0.4, 1.6],
        scale: 2.6,
        rotationSpeed: 0.0068,
        driftRadius: 0.022,
        driftSpeed: 0.011,
        colorTint: 0.95,
        roughnessJitter: 0.03,
      },
      {
        key: "small-lower-left",
        geometry: rock2Mesh.geometry,
        material: rock2Mesh.material,
        position: [-2.3, -3.0, -4.6],
        rotation: [0.9, 3.0, 0.5],
        scale: 2.1,
        rotationSpeed: 0.0064,
        driftRadius: 0.018,
        driftSpeed: 0.009,
        colorTint: 1.05,
        roughnessJitter: -0.02,
      },
      {
        key: "small-lower-right",
        geometry: rock1LOD3.geometry,
        material: rock1LOD0.material,
        position: [2.6, -3.1, -4.8],
        rotation: [1.7, 2.0, 2.4],
        scale: 1.8,
        rotationSpeed: 0.0075,
        driftRadius: 0.024,
        driftSpeed: 0.012,
        colorTint: 0.98,
        roughnessJitter: 0.02,
      },
    ],
    [rock1HiLOD0, rock1Displacement, rock2HiMesh, rock2Displacement, rock3Mesh, rock1LOD2, rock1LOD0, rock2Mesh, rock1LOD3],
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
// Circular soft-edged points via a small custom shader (per-vertex size +
// color + twinkle phase) — never the default square point sprites. Ordinary
// alpha blending throughout, deliberately not additive: additive blending
// is what makes overlapping points melt into a hazy glow instead of reading
// as small, sharp, discrete points the way real background stars do.
const STAR_VERTEX_SHADER = `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aPhase;
  varying vec3 vColor;
  varying float vPhase;
  uniform float uPixelRatio;
  void main() {
    vColor = aColor;
    vPhase = aPhase;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (260.0 / -mvPosition.z) * uPixelRatio;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const STAR_FRAGMENT_SHADER = `
  varying vec3 vColor;
  varying float vPhase;
  uniform float uTime;
  uniform float uTwinkle;
  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d = length(uv);
    float alpha = smoothstep(0.5, 0.05, d);
    float twinkle = mix(1.0, 0.78 + 0.22 * sin(uTime * 0.55 + vPhase * 6.2831), uTwinkle);
    gl_FragColor = vec4(vColor, alpha * twinkle);
  }
`;

// A small handful of brighter "hero" stars get a faint 4-point sparkle
// cross on top of the same soft circular core, echoing the visible glints
// on a few bright stars in real night-sky photography — deliberately used
// on only a few dozen points, not the whole field.
const SPARKLE_STAR_FRAGMENT_SHADER = `
  varying vec3 vColor;
  varying float vPhase;
  uniform float uTime;
  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d = length(uv);
    float core = smoothstep(0.5, 0.0, d);
    float crossH = smoothstep(0.05, 0.0, abs(uv.y)) * smoothstep(0.5, 0.0, abs(uv.x));
    float crossV = smoothstep(0.05, 0.0, abs(uv.x)) * smoothstep(0.5, 0.0, abs(uv.y));
    float sparkle = max(crossH, crossV) * 0.55;
    float twinkle = 0.8 + 0.2 * sin(uTime * 0.45 + vPhase * 6.2831);
    gl_FragColor = vec4(vColor, clamp(core + sparkle, 0.0, 1.0) * twinkle);
  }
`;

function pickStarColor(): THREE.Color {
  const roll = Math.random();
  if (roll < 0.72) return new THREE.Color(0xf4f6ff);
  if (roll < 0.94) return new THREE.Color(0xaecbff);
  return new THREE.Color(0xffdcb0);
}

function StarLayer({
  count, radiusMin, radiusMax, sizeMin, sizeMax, twinkle, opacity, sparkle = false,
}: {
  count: number; radiusMin: number; radiusMax: number; sizeMin: number; sizeMax: number; twinkle: number; opacity: number; sparkle?: boolean;
}) {
  const { positions, colors, sizes, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = radiusMin + Math.random() * (radiusMax - radiusMin);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.7 - 3;
      const c = pickStarColor();
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = sizeMin + Math.random() * (sizeMax - sizeMin);
      phases[i] = Math.random();
    }
    return { positions, colors, sizes, phases };
  }, [count, radiusMin, radiusMax, sizeMin, sizeMax]);

  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTwinkle: { value: twinkle },
      uPixelRatio: { value: typeof window === "undefined" ? 1 : Math.min(window.devicePixelRatio, 1.5) },
    }),
    [twinkle],
  );

  useFrame(({ clock }) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={STAR_VERTEX_SHADER}
        fragmentShader={sparkle ? SPARKLE_STAR_FRAGMENT_SHADER : STAR_FRAGMENT_SHADER}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        opacity={opacity}
      />
    </points>
  );
}

// ─── COSMIC DUST ─────────────────────────────────────────────────────────────
// Same circular-point shader, far smaller/dimmer than any star layer —
// "almost invisible, only enough to create depth."
function CosmicDust({ count = 80 }: { count?: number }) {
  const { positions, colors, sizes, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const dustColor = new THREE.Color(0x7fa0d9);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5;
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.6 - 1;
      colors[i * 3] = dustColor.r;
      colors[i * 3 + 1] = dustColor.g;
      colors[i * 3 + 2] = dustColor.b;
      sizes[i] = 0.35 + Math.random() * 0.7;
      phases[i] = Math.random();
    }
    return { positions, colors, sizes, phases };
  }, [count]);

  const groupRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTwinkle: { value: 0 },
      uPixelRatio: { value: typeof window === "undefined" ? 1 : Math.min(window.devicePixelRatio, 1.5) },
    }),
    [],
  );

  useFrame(({ clock }, delta) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.003;
  });

  return (
    <points ref={groupRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={STAR_VERTEX_SHADER}
        fragmentShader={STAR_FRAGMENT_SHADER}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        opacity={0.1}
      />
    </points>
  );
}

// ─── MILKY-WAY-STYLE GALAXY BAND ─────────────────────────────────────────────
// A single wide, diagonally-rotated plane carrying a canvas-generated soft
// horizontal band (brightest along its center line, fading top/bottom, with
// a scatter of low-alpha cloud blotches for texture) — a band, not a
// centered blob, closer to how the Milky Way actually reads in a wide shot.
// Ordinary alpha blending, very low final opacity.
function useGalaxyBandTexture(): THREE.CanvasTexture {
  return useMemo(() => {
    const w = 1024, h = 384;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "rgba(18,26,48,0)");
    grad.addColorStop(0.35, "rgba(42,62,106,0.22)");
    grad.addColorStop(0.5, "rgba(66,90,144,0.32)");
    grad.addColorStop(0.65, "rgba(42,62,106,0.22)");
    grad.addColorStop(1, "rgba(18,26,48,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 46; i++) {
      const x = Math.random() * w;
      const y = h * 0.5 + (Math.random() - 0.5) * h * 0.42;
      const r = 36 + Math.random() * 84;
      const alpha = 0.04 + Math.random() * 0.07;
      const blotch = ctx.createRadialGradient(x, y, 0, x, y, r);
      blotch.addColorStop(0, `rgba(96,124,182,${alpha})`);
      blotch.addColorStop(1, "rgba(96,124,182,0)");
      ctx.fillStyle = blotch;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);
}

function GalaxyBand() {
  const texture = useGalaxyBandTexture();
  return (
    <mesh position={[0, 0.6, -24]} rotation={[0, 0, 0.3]}>
      <planeGeometry args={[48, 18]} />
      <meshBasicMaterial map={texture} transparent opacity={0.4} depthWrite={false} />
    </mesh>
  );
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

// Cinematic deep-space hero backdrop, built around real photogrammetry-
// scanned rock assets (see ASTEROID_MODEL_URLS) rather than any procedural
// geometry: a layered starfield, a proper asteroid field (large/medium
// individually placed + instanced distant fragments), faint drifting dust,
// and a barely-visible Milky-Way-style band, with slow cinematic camera
// drift and mouse parallax. Rendered as a background layer behind the
// existing orbital radar stage (HeroStage in App.tsx) — see HeroSceneGate
// for the desktop/reduced-motion gating that decides whether this mounts.
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

      <GalaxyBand />
      <StarLayer count={1600} radiusMin={16} radiusMax={42} sizeMin={0.45} sizeMax={1.1} twinkle={0.3} opacity={0.45} />
      <StarLayer count={420} radiusMin={9} radiusMax={17} sizeMin={0.85} sizeMax={1.6} twinkle={0.45} opacity={0.6} />
      <StarLayer count={80} radiusMin={5} radiusMax={9.5} sizeMin={1.3} sizeMax={2.2} twinkle={0.5} opacity={0.75} />
      <StarLayer count={16} radiusMin={4} radiusMax={8} sizeMin={2.4} sizeMax={3.4} twinkle={0.55} opacity={0.9} sparkle />
      <CosmicDust />
      <AsteroidField />
      <Rig mouse={mouse} />
    </Canvas>
  );
}
