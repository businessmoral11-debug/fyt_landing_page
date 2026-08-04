import { motion, useReducedMotion } from "motion/react";

// A soft, slowly-drifting blurred glow — the "ambient background animation"
// layered behind a section's real content. Animates only `x`/`y` (Framer
// Motion compiles these to a GPU-composited `translate3d`, never top/left),
// so it never affects layout and costs nothing on the main thread once
// running. Static (no animate prop at all) under reduced motion rather than
// merely paused, so there's zero animation work scheduled.
export function AmbientBlob({
  className, color, size = 480, duration = 20,
}: {
  className?: string; color: string; size?: number; duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(70px)",
        willChange: reduceMotion ? undefined : "transform",
      }}
      animate={reduceMotion ? undefined : { x: [0, 34, -24, 0], y: [0, -26, 22, 0] }}
      transition={reduceMotion ? undefined : { duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
