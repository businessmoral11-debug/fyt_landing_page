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
// geometry: a bare dark background plus the fixed 6-asteroid composition
// (AsteroidField), with slow cinematic camera drift and mouse parallax.
// No starfield/dust/nebula layer for now — deliberately removed (was
// reading as distracting glowing sparkle clutter rather than a quiet
// backdrop); that layer gets rebuilt separately later. Rendered as a
// background layer behind the existing orbital radar stage (HeroStage in
// App.tsx) — see HeroSceneGate for the desktop/reduced-motion gating that
// decides whether this mounts at all.
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

      <AsteroidField />
      <Rig mouse={mouse} />
    </Canvas>
  );
}
