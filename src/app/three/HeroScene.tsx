import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import * as THREE from "three";

// ─── PROCEDURAL NOISE ───────────────────────────────────────────────────────
// No texture/asset pipeline exists in this project (no bundled or fetched
// image assets for 3D use), so asteroid "surface detail" comes from actual
// geometry displacement + recomputed normals rather than baked normal/
// roughness map textures. This is a deterministic hash-based value-noise +
// fBm implementation — no new dependency (no simplex-noise package) — run
// once per asteroid at mount via useMemo, never per-frame.
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

// ─── ASTEROIDS ───────────────────────────────────────────────────────────────
// Irregular rocky shapes: an icosahedron displaced by low-frequency fBm
// (overall lumpy silhouette) + a handful of gaussian-falloff "craters" +
// high-frequency fBm (fine surface grain), with normals recomputed after —
// the geometry itself carries the shading detail a normal map would
// otherwise provide.
function createAsteroidGeometry(seed: number, detail: number): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(1, detail);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();

  const craterCount = 3 + Math.floor(hash3(seed, 1.7, 9.2, seed) * 3);
  const craters: { center: THREE.Vector3; radius: number; depth: number }[] = [];
  for (let i = 0; i < craterCount; i++) {
    const theta = hash3(i, seed, 3.1, seed) * Math.PI * 2;
    const phi = Math.acos(2 * hash3(i, seed, 7.7, seed) - 1);
    craters.push({
      center: new THREE.Vector3(Math.sin(phi) * Math.cos(theta), Math.sin(phi) * Math.sin(theta), Math.cos(phi)),
      radius: 0.16 + hash3(i, seed, 11.3, seed) * 0.24,
      depth: 0.05 + hash3(i, seed, 15.9, seed) * 0.07,
    });
  }

  const irregularity = 0.3 + hash3(seed, 21.4, 5.5, seed) * 0.18;

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const base = fbm3(v.x, v.y, v.z, seed, 4);
    let displacement = 1 + (base - 0.5) * irregularity;
    for (const c of craters) {
      const d = v.distanceTo(c.center);
      if (d < c.radius) {
        const t = 1 - d / c.radius;
        displacement -= c.depth * t * t;
      }
    }
    displacement += (fbm3(v.x * 7, v.y * 7, v.z * 7, seed + 91, 3) - 0.5) * 0.045;
    v.multiplyScalar(Math.max(0.5, displacement));
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

const ASTEROID_COLORS = ["#8a8478", "#6e6a63", "#7c7268", "#5f5b57", "#877e70"] as const;

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
    <mesh ref={ref} geometry={geometry} scale={spec.scale}>
      <meshStandardMaterial color={spec.color} roughness={spec.roughness} metalness={0.04} />
    </mesh>
  );
}

function AsteroidField() {
  const specs = useMemo<AsteroidSpec[]>(() => {
    const count = 6;
    const out: AsteroidSpec[] = [];
    for (let i = 0; i < count; i++) {
      const seed = i * 13.37 + 4.2;
      out.push({
        seed,
        detail: i < 2 ? 3 : 2,
        position: [
          (hash3(seed, 1, 1, seed) - 0.5) * 9,
          (hash3(seed, 2, 2, seed) - 0.5) * 5,
          -2.5 - hash3(seed, 3, 3, seed) * 6,
        ],
        scale: 0.35 + hash3(seed, 4, 4, seed) * 0.55,
        rotationSpeed: 0.04 + hash3(seed, 5, 5, seed) * 0.08,
        driftRadius: 0.15 + hash3(seed, 6, 6, seed) * 0.25,
        driftSpeed: 0.03 + hash3(seed, 7, 7, seed) * 0.04,
        roughness: 0.82 + hash3(seed, 8, 8, seed) * 0.13,
        color: ASTEROID_COLORS[i % ASTEROID_COLORS.length],
      });
    }
    return out;
  }, []);

  return (
    <>
      {specs.map((spec) => (
        <Asteroid key={spec.seed} spec={spec} />
      ))}
    </>
  );
}

// ─── STARFIELD ───────────────────────────────────────────────────────────────
// Circular soft-edged points via a small custom shader (per-vertex size +
// color + twinkle phase) rather than THREE.PointsMaterial's default square
// sprites — no texture needed, the circle is computed in the fragment
// shader from distance-to-center.
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
    gl_PointSize = aSize * (300.0 / -mvPosition.z) * uPixelRatio;
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
    float alpha = smoothstep(0.5, 0.0, d);
    float twinkle = mix(1.0, 0.55 + 0.45 * sin(uTime * 1.6 + vPhase * 6.2831), uTwinkle);
    gl_FragColor = vec4(vColor, alpha * twinkle);
  }
`;

function pickStarColor(): THREE.Color {
  const roll = Math.random();
  if (roll < 0.68) return new THREE.Color(0xffffff);
  if (roll < 0.93) return new THREE.Color(0xbfd7ff);
  return new THREE.Color(0xffe3c2);
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
        blending={THREE.AdditiveBlending}
        opacity={opacity}
      />
    </points>
  );
}

// ─── COSMIC DUST ─────────────────────────────────────────────────────────────
// Same circular-point technique as the stars, but larger/softer/dimmer and
// closer to camera, with the whole layer given a very slow independent
// rotation for a gentle drifting-past feel instead of per-particle CPU work.
function CosmicDust({ count = 220 }: { count?: number }) {
  const { positions, colors, sizes, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const dustColor = new THREE.Color(0x9cc2ff);
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5;
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.6 - 1;
      colors[i * 3] = dustColor.r;
      colors[i * 3 + 1] = dustColor.g;
      colors[i * 3 + 2] = dustColor.b;
      sizes[i] = 1.2 + Math.random() * 2.2;
      phases[i] = Math.random();
    }
    return { positions, colors, sizes, phases };
  }, [count]);

  const groupRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTwinkle: { value: 0.15 },
      uPixelRatio: { value: typeof window === "undefined" ? 1 : Math.min(window.devicePixelRatio, 1.5) },
    }),
    [],
  );

  useFrame(({ clock }, delta) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.006;
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
        blending={THREE.AdditiveBlending}
        opacity={0.35}
      />
    </points>
  );
}

// ─── NEBULA ──────────────────────────────────────────────────────────────────
// A single large, far-back plane carrying a canvas-generated soft radial
// gradient (no image asset needed) at very low opacity — just enough to keep
// the deep background from reading as flat black.
function useNebulaTexture(): THREE.CanvasTexture {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, "rgba(96,165,250,0.35)");
    gradient.addColorStop(0.45, "rgba(59,130,246,0.14)");
    gradient.addColorStop(1, "rgba(10,20,40,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

function Nebula() {
  const texture = useNebulaTexture();
  return (
    <mesh position={[1.5, 0.5, -18]} rotation={[0, 0, 0.4]}>
      <planeGeometry args={[26, 26]} />
      <meshBasicMaterial map={texture} transparent opacity={0.22} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

// ─── CAMERA RIG ──────────────────────────────────────────────────────────────
// Multi-frequency sine drift (several irrational-ish periods layered, so the
// path never repeats in an obviously loopy way) plus a lerped mouse-parallax
// offset — smoothed, never snapping, so the whole thing reads as slow
// cinematic drift rather than a reactive/gimmicky camera.
function Rig({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  useFrame(({ camera, clock }: RootState) => {
    const t = clock.getElapsedTime();
    const driftX = Math.sin(t * 0.055) * 0.14 + Math.sin(t * 0.021) * 0.06;
    const driftY = Math.cos(t * 0.042) * 0.09 + Math.cos(t * 0.017) * 0.05;
    const targetX = mouse.current.x * 0.45 + driftX;
    const targetY = mouse.current.y * 0.28 + driftY;
    camera.position.x += (targetX - camera.position.x) * 0.035;
    camera.position.y += (targetY - camera.position.y) * 0.035;
    camera.lookAt(0, 0, -3);
  });
  return null;
}

// Realistic deep-space hero backdrop — layered starfield, procedurally
// weathered asteroids, drifting cosmic dust, and a barely-visible nebula
// wash, with slow cinematic camera drift and mouse parallax. Rendered as a
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
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Soft blue ambient fill + a warm-white key light standing in for a
          distant sun, plus a dim blue rim/fill from the opposite side — no
          HDRI environment map (no texture asset available), but this three-
          light setup gives the asteroids real directional shading. */}
      <ambientLight intensity={0.22} color="#3b5a8f" />
      <directionalLight position={[6, 4, 5]} intensity={1.3} color="#fff2e0" />
      <pointLight position={[-5, -2, -3]} intensity={0.5} color="#3b82f6" />

      <Nebula />
      <StarLayer count={1800} radiusMin={14} radiusMax={40} sizeMin={0.6} sizeMax={1.6} twinkle={0.5} opacity={0.55} />
      <StarLayer count={500} radiusMin={8} radiusMax={16} sizeMin={1.2} sizeMax={2.4} twinkle={0.7} opacity={0.7} />
      <StarLayer count={130} radiusMin={4} radiusMax={9} sizeMin={2} sizeMax={3.6} twinkle={0.9} opacity={0.85} />
      <CosmicDust />
      <AsteroidField />
      <Rig mouse={mouse} />
    </Canvas>
  );
}
