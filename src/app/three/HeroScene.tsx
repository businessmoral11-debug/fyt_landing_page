import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import * as THREE from "three";

// ─── PROCEDURAL NOISE ───────────────────────────────────────────────────────
// No texture/asset pipeline exists in this project, so every "surface
// detail" cue below (rocky bumps, craters, ambient occlusion in the
// crevices) is generated from geometry + vertex color rather than baked
// normal/roughness/AO map textures. This is a deterministic hash-based
// value-noise + fBm implementation — no new dependency — run once per
// asteroid at mount via useMemo, never per-frame.
function hash3(x: number, y: number, z: number, seed: number): number {
  const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7 + seed * 269.5) * 43758.5453;
  return h - Math.floor(h);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function valueNoise3D(x: number, y: number, z: number, seed: number): number {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const w = zf * zf * (3 - 2 * zf);
  const c000 = hash3(xi, yi, zi, seed);
  const c100 = hash3(xi + 1, yi, zi, seed);
  const c010 = hash3(xi, yi + 1, zi, seed);
  const c110 = hash3(xi + 1, yi + 1, zi, seed);
  const c001 = hash3(xi, yi, zi + 1, seed);
  const c101 = hash3(xi + 1, yi, zi + 1, seed);
  const c011 = hash3(xi, yi + 1, zi + 1, seed);
  const c111 = hash3(xi + 1, yi + 1, zi + 1, seed);
  const x00 = lerp(c000, c100, u);
  const x10 = lerp(c010, c110, u);
  const x01 = lerp(c001, c101, u);
  const x11 = lerp(c011, c111, u);
  const y0 = lerp(x00, x10, v);
  const y1 = lerp(x01, x11, v);
  return lerp(y0, y1, w);
}

function fbm3(x: number, y: number, z: number, seed: number, octaves: number): number {
  let amp = 0.5, freq = 1, sum = 0, norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += valueNoise3D(x * freq, y * freq, z * freq, seed + i * 17.13) * amp;
    norm += amp;
    amp *= 0.5;
    freq *= 2.15;
  }
  return sum / norm;
}

// ─── ASTEROID GEOMETRY ───────────────────────────────────────────────────────
// Irregular rocky shape: an icosahedron pushed by layered fBm (lumpy,
// non-spherical silhouette) + several gaussian-falloff craters + fine
// high-frequency grain, normals recomputed after. flatShading (applied on
// the material, not here) turns the facets into a deliberately angular,
// rock-like read instead of a smooth balloon. A per-vertex color channel
// carries a baked ambient-occlusion approximation — darker inside/near
// crater walls, full brightness on exposed high points — multiplied by the
// material's own color at render time (how vertexColors works in three.js),
// which is what gives craters visible depth without a real AO map.
function createAsteroidGeometry(seed: number, detail: number, irregularityOverride?: number): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(1, detail);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  const count = pos.count;

  const craterCount = 4 + Math.floor(hash3(seed, 1.7, 9.2, seed) * 4);
  const craters: { center: THREE.Vector3; radius: number; depth: number }[] = [];
  for (let i = 0; i < craterCount; i++) {
    const theta = hash3(i, seed, 3.1, seed) * Math.PI * 2;
    const phi = Math.acos(2 * hash3(i, seed, 7.7, seed) - 1);
    craters.push({
      center: new THREE.Vector3(Math.sin(phi) * Math.cos(theta), Math.sin(phi) * Math.sin(theta), Math.cos(phi)),
      radius: 0.14 + hash3(i, seed, 11.3, seed) * 0.26,
      depth: 0.07 + hash3(i, seed, 15.9, seed) * 0.1,
    });
  }

  const irregularity = irregularityOverride ?? 0.34 + hash3(seed, 21.4, 5.5, seed) * 0.2;
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    v.fromBufferAttribute(pos, i);
    const base = fbm3(v.x, v.y, v.z, seed, 4);
    let displacement = 1 + (base - 0.5) * irregularity;
    let occlusion = 0;
    for (const c of craters) {
      const d = v.distanceTo(c.center);
      if (d < c.radius) {
        const t = 1 - d / c.radius;
        displacement -= c.depth * t * t;
        occlusion = Math.max(occlusion, t * 0.55);
      }
    }
    displacement += (fbm3(v.x * 8, v.y * 8, v.z * 8, seed + 91, 3) - 0.5) * 0.05;
    v.multiplyScalar(Math.max(0.5, displacement));
    pos.setXYZ(i, v.x, v.y, v.z);

    // Baked AO: 1.0 = fully lit, down to ~0.45 deep inside a crater wall.
    const ao = 1 - occlusion;
    colors[i * 3] = ao;
    colors[i * 3 + 1] = ao;
    colors[i * 3 + 2] = ao;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  return geo;
}

const ASTEROID_COLORS = ["#8f887a", "#726a5f", "#7d7365", "#635c55", "#8a8072", "#716a5c"] as const;

interface AsteroidSpec {
  seed: number;
  detail: number;
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
  driftRadius: number;
  driftSpeed: number;
  roughness: number;
  color: string;
  castShadow: boolean;
}

function Asteroid({ spec }: { spec: AsteroidSpec }) {
  const geometry = useMemo(() => createAsteroidGeometry(spec.seed, spec.detail), [spec.seed, spec.detail]);
  const rotAxis = useMemo(
    () => new THREE.Vector3(hash3(spec.seed, 1, 1, spec.seed) - 0.5, hash3(spec.seed, 2, 2, spec.seed) - 0.5, hash3(spec.seed, 3, 3, spec.seed) - 0.5).normalize(),
    [spec.seed],
  );
  const ref = useRef<THREE.Mesh>(null);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(({ clock }, delta) => {
    const mesh = ref.current;
    if (!mesh) return;
    mesh.rotateOnAxis(rotAxis, spec.rotationSpeed * delta);
    const t = clock.getElapsedTime();
    mesh.position.set(
      spec.position[0] + Math.sin(t * spec.driftSpeed + spec.seed) * spec.driftRadius,
      spec.position[1] + Math.cos(t * spec.driftSpeed * 0.8 + spec.seed * 1.3) * spec.driftRadius * 0.6,
      spec.position[2] + Math.sin(t * spec.driftSpeed * 0.55 + spec.seed * 2.1) * spec.driftRadius * 0.35,
    );
  });

  return (
    <mesh ref={ref} geometry={geometry} scale={spec.scale} castShadow={spec.castShadow} receiveShadow={spec.castShadow}>
      <meshStandardMaterial color={spec.color} roughness={spec.roughness} metalness={0.03} vertexColors flatShading />
    </mesh>
  );
}

// Tiny distant fragments share one of a handful of low-detail base shapes
// via real THREE.InstancedMesh (GPU-instanced, one draw call per group) —
// the numerous, visually minor tier is where "instanced rendering where
// possible" actually pays off, while the few large/medium asteroids that
// viewers can actually study keep fully unique per-instance geometry.
function FragmentInstances({ geometry, color, count, spread, baseScale, seed }: {
  geometry: THREE.BufferGeometry; color: string; count: number; spread: number; baseScale: number; seed: number;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const instances = useMemo(() => {
    const out: { position: THREE.Vector3; axis: THREE.Vector3; speed: number; scale: number; driftPhase: number }[] = [];
    for (let i = 0; i < count; i++) {
      const s = seed + i * 5.13;
      out.push({
        position: new THREE.Vector3(
          (hash3(s, 1, 1, s) - 0.5) * spread,
          (hash3(s, 2, 2, s) - 0.5) * spread * 0.55,
          -6 - hash3(s, 3, 3, s) * 10,
        ),
        axis: new THREE.Vector3(hash3(s, 4, 4, s) - 0.5, hash3(s, 5, 5, s) - 0.5, hash3(s, 6, 6, s) - 0.5).normalize(),
        speed: 0.02 + hash3(s, 7, 7, s) * 0.04,
        scale: baseScale * (0.5 + hash3(s, 8, 8, s) * 0.9),
        driftPhase: hash3(s, 9, 9, s) * Math.PI * 2,
      });
    }
    return out;
  }, [count, spread, baseScale, seed]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const rotations = useRef(instances.map(() => new THREE.Euler(0, 0, 0)));

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    instances.forEach((inst, i) => {
      const rot = rotations.current[i];
      rot.x += inst.axis.x * inst.speed * delta;
      rot.y += inst.axis.y * inst.speed * delta;
      rot.z += inst.axis.z * inst.speed * delta;
      dummy.position.copy(inst.position);
      dummy.rotation.copy(rot);
      dummy.scale.setScalar(inst.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, undefined, instances.length]}>
      <meshStandardMaterial color={color} roughness={0.9} metalness={0.03} vertexColors flatShading />
    </instancedMesh>
  );
}

function AsteroidField() {
  const largeSpecs = useMemo<AsteroidSpec[]>(() => {
    const out: AsteroidSpec[] = [];
    for (let i = 0; i < 3; i++) {
      const seed = i * 31.7 + 2.1;
      out.push({
        seed,
        detail: 4,
        position: [(hash3(seed, 1, 1, seed) - 0.5) * 6, (hash3(seed, 2, 2, seed) - 0.5) * 3.4, -3 - hash3(seed, 3, 3, seed) * 2.5],
        scale: 0.75 + hash3(seed, 4, 4, seed) * 0.5,
        rotationSpeed: 0.012 + hash3(seed, 5, 5, seed) * 0.02,
        driftRadius: 0.06 + hash3(seed, 6, 6, seed) * 0.08,
        driftSpeed: 0.015 + hash3(seed, 7, 7, seed) * 0.015,
        roughness: 0.86 + hash3(seed, 8, 8, seed) * 0.1,
        color: ASTEROID_COLORS[i % ASTEROID_COLORS.length],
        castShadow: true,
      });
    }
    return out;
  }, []);

  const mediumSpecs = useMemo<AsteroidSpec[]>(() => {
    const out: AsteroidSpec[] = [];
    for (let i = 0; i < 6; i++) {
      const seed = i * 19.3 + 47.6;
      out.push({
        seed,
        detail: 3,
        position: [(hash3(seed, 1, 1, seed) - 0.5) * 9, (hash3(seed, 2, 2, seed) - 0.5) * 5, -6 - hash3(seed, 3, 3, seed) * 5],
        scale: 0.32 + hash3(seed, 4, 4, seed) * 0.32,
        rotationSpeed: 0.015 + hash3(seed, 5, 5, seed) * 0.025,
        driftRadius: 0.05 + hash3(seed, 6, 6, seed) * 0.08,
        driftSpeed: 0.012 + hash3(seed, 7, 7, seed) * 0.015,
        roughness: 0.84 + hash3(seed, 8, 8, seed) * 0.12,
        color: ASTEROID_COLORS[(i + 2) % ASTEROID_COLORS.length],
        castShadow: true,
      });
    }
    return out;
  }, []);

  // 3 fragment "families" of 6 instances each = 18 tiny distant pieces.
  const fragmentGeoA = useMemo(() => createAsteroidGeometry(101, 1, 0.45), []);
  const fragmentGeoB = useMemo(() => createAsteroidGeometry(202, 1, 0.4), []);
  const fragmentGeoC = useMemo(() => createAsteroidGeometry(303, 1, 0.5), []);
  useEffect(
    () => () => {
      fragmentGeoA.dispose();
      fragmentGeoB.dispose();
      fragmentGeoC.dispose();
    },
    [fragmentGeoA, fragmentGeoB, fragmentGeoC],
  );

  return (
    <>
      {largeSpecs.map((spec) => (
        <Asteroid key={spec.seed} spec={spec} />
      ))}
      {mediumSpecs.map((spec) => (
        <Asteroid key={spec.seed} spec={spec} />
      ))}
      <FragmentInstances geometry={fragmentGeoA} color="#7d7568" count={6} spread={12} baseScale={0.12} seed={11} />
      <FragmentInstances geometry={fragmentGeoB} color="#8f887a" count={6} spread={14} baseScale={0.09} seed={23} />
      <FragmentInstances geometry={fragmentGeoC} color="#655e54" count={6} spread={13} baseScale={0.1} seed={37} />
    </>
  );
}

// ─── STARFIELD ───────────────────────────────────────────────────────────────
// Circular soft-edged points via a small custom shader (per-vertex size +
// color + twinkle phase) rather than the default square point sprites.
// Deliberately plain alpha blending, not additive — additive blending is
// what makes overlapping points accumulate into a hazy glow; ordinary stars
// in real astrophotography read as small, sharp, discrete points, not blobs.
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
    float twinkle = mix(1.0, 0.75 + 0.25 * sin(uTime * 0.6 + vPhase * 6.2831), uTwinkle);
    gl_FragColor = vec4(vColor, alpha * twinkle);
  }
`;

function pickStarColor(): THREE.Color {
  const roll = Math.random();
  if (roll < 0.72) return new THREE.Color(0xf4f6ff);
  if (roll < 0.94) return new THREE.Color(0xaecbff);
  return new THREE.Color(0xffdcb0);
}

function StarLayer({
  count, radiusMin, radiusMax, sizeMin, sizeMax, twinkle, opacity,
}: {
  count: number; radiusMin: number; radiusMax: number; sizeMin: number; sizeMax: number; twinkle: number; opacity: number;
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
        fragmentShader={STAR_FRAGMENT_SHADER}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        opacity={opacity}
      />
    </points>
  );
}

// ─── COSMIC DUST ─────────────────────────────────────────────────────────────
// Same circular-point shader as the stars, but far smaller and dimmer —
// "almost invisible, only enough to create depth", not a visible layer of
// its own. Ordinary alpha blending, not additive, for the same reason as
// the starfield.
function CosmicDust({ count = 90 }: { count?: number }) {
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
      sizes[i] = 0.4 + Math.random() * 0.8;
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
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.004;
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
        opacity={0.12}
      />
    </points>
  );
}

// ─── NEBULA ──────────────────────────────────────────────────────────────────
// One large, far-back plane carrying a canvas-generated radial gradient at
// very low opacity, ordinary (not additive) blending so it reads as a
// barely-there deep-blue wash rather than a glowing circle.
function useNebulaTexture(): THREE.CanvasTexture {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, "rgba(42,68,120,0.5)");
    gradient.addColorStop(0.5, "rgba(24,40,74,0.22)");
    gradient.addColorStop(1, "rgba(8,12,22,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

function Nebula() {
  const texture = useNebulaTexture();
  return (
    <mesh position={[2, 0.8, -26]} rotation={[0, 0, 0.5]}>
      <planeGeometry args={[34, 34]} />
      <meshBasicMaterial map={texture} transparent opacity={0.14} depthWrite={false} />
    </mesh>
  );
}

// ─── CAMERA RIG ──────────────────────────────────────────────────────────────
// Multiple slow, layered sine periods (never repeats in an obviously loopy
// way) plus a lerped, low-strength mouse-parallax offset — smoothed, never
// snapping. Amplitudes kept deliberately tiny: "extremely slow," "no sudden
// movement."
function Rig({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  useFrame(({ camera, clock }: RootState) => {
    const t = clock.getElapsedTime();
    const driftX = Math.sin(t * 0.035) * 0.08 + Math.sin(t * 0.013) * 0.035;
    const driftY = Math.cos(t * 0.027) * 0.05 + Math.cos(t * 0.011) * 0.03;
    const targetX = mouse.current.x * 0.28 + driftX;
    const targetY = mouse.current.y * 0.18 + driftY;
    camera.position.x += (targetX - camera.position.x) * 0.025;
    camera.position.y += (targetY - camera.position.y) * 0.025;
    camera.lookAt(0, 0, -4);
  });
  return null;
}

// Realistic deep-space hero backdrop: a layered starfield, a proper asteroid
// field (large/medium hand-crafted + instanced distant fragments), faint
// drifting dust, and a barely-visible nebula wash, with slow cinematic
// camera drift and mouse parallax. Rendered as a background layer behind the
// existing orbital radar stage (HeroStage in App.tsx) — see HeroSceneGate for
// the desktop/reduced-motion gating that decides whether this mounts at all.
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
      {/* No HDRI (no texture asset available) — a small three-light rig
          stands in: weak ambient fill, one warm-white key light (casts real
          shadow maps onto/between the large+medium asteroids), and a dim
          blue rim light from the opposite side. */}
      <ambientLight intensity={0.16} color="#33507f" />
      <directionalLight
        position={[6, 5, 6]}
        intensity={1.1}
        color="#fff3e2"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      <pointLight position={[-6, -3, -4]} intensity={0.35} color="#3b82f6" />

      <Nebula />
      <StarLayer count={1600} radiusMin={16} radiusMax={42} sizeMin={0.45} sizeMax={1.1} twinkle={0.35} opacity={0.5} />
      <StarLayer count={420} radiusMin={9} radiusMax={17} sizeMin={0.9} sizeMax={1.7} twinkle={0.5} opacity={0.65} />
      <StarLayer count={90} radiusMin={5} radiusMax={9.5} sizeMin={1.4} sizeMax={2.4} twinkle={0.6} opacity={0.8} />
      <CosmicDust />
      <AsteroidField />
      <Rig mouse={mouse} />
    </Canvas>
  );
}
