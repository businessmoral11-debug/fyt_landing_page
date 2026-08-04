import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import * as THREE from "three";

// Loose spherical cloud of additive-blended points, drifting in a slow
// autonomous rotation. Positions are computed once (useMemo) since the count
// never changes — only the group's rotation animates per frame.
function ParticleField({ count = 900 }: { count?: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3.4 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.55;
      arr[i * 3 + 2] = radius * Math.cos(phi) * 0.7 - 1.5;
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#7fb2ff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// A soft "holographic" orb: a low-opacity filled icosahedron nested inside a
// slightly larger wireframe shell, both unlit (meshBasicMaterial) so they
// stay visible and consistent regardless of scene lighting. Bobs gently on
// its own phase-offset sine wave rather than a shared clock, so multiple
// orbs never move in lockstep.
function GlowOrb({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const group = useRef<THREE.Group>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.position.y = position[1] + Math.sin(t * 0.35 + seed) * 0.22;
    group.current.rotation.y = t * 0.06;
    group.current.rotation.x = t * 0.03;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color={color} transparent opacity={0.07} />
      </mesh>
      <mesh scale={1.15}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

// Subtle autonomous camera drift plus a lerped mouse-parallax offset — never
// snaps to the pointer, always eases toward it, so the effect reads as
// "ambient" rather than reactive/gimmicky.
function Rig({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  useFrame(({ camera, clock }: RootState) => {
    const t = clock.getElapsedTime();
    const targetX = mouse.current.x * 0.5 + Math.sin(t * 0.07) * 0.12;
    const targetY = mouse.current.y * 0.3 + Math.cos(t * 0.05) * 0.08;
    camera.position.x += (targetX - camera.position.x) * 0.045;
    camera.position.y += (targetY - camera.position.y) * 0.045;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// Ambient hero backdrop: a drifting particle field plus three soft glowing
// orbs, with gentle mouse-parallax camera movement. Rendered as a background
// layer behind the existing orbital radar stage (HeroStage in App.tsx) — see
// HeroSceneGate for the desktop/reduced-motion gating that decides whether
// this mounts at all.
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
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 2, 4]} intensity={1.1} color="#60a5fa" />
      <ParticleField />
      <GlowOrb position={[2.3, 0.5, -1.2]} scale={1.05} color="#3b82f6" />
      <GlowOrb position={[-2.5, -0.5, -2]} scale={0.75} color="#60a5fa" />
      <GlowOrb position={[0.2, 1.5, -3]} scale={0.55} color="#93c5fd" />
      <Rig mouse={mouse} />
    </Canvas>
  );
}
