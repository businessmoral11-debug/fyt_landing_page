import { useEffect, useRef, type RefObject } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { SPRING_CALM } from "@/app/designSystem";

let cachedReduceMotion: boolean | null = null;
function prefersReducedMotion(): boolean {
  if (cachedReduceMotion === null) {
    cachedReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return cachedReduceMotion;
}

export interface CursorGlow<T extends HTMLElement> {
  ref: RefObject<T | null>;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

// Cursor-following radial highlight — position only, never tilt/rotation
// (see useTilt for that). Pointer position is springed (x/y, in % of the
// element's box) and written straight to CSS custom properties
// (`--glow-x`/`--glow-y`) via direct DOM mutation on every spring tick —
// never through React state — so the highlight tracks the cursor at a full
// frame rate without this hook's consumer ever re-rendering. The actual
// glow is a plain CSS radial-gradient in the consumer's markup that reads
// those two properties; this hook only ever moves its *position*.
export function useCursorGlow<T extends HTMLElement = HTMLElement>(): CursorGlow<T> {
  const ref = useRef<T>(null);
  const mx = useSpring(useMotionValue(50), SPRING_CALM);
  const my = useSpring(useMotionValue(50), SPRING_CALM);

  useEffect(() => {
    const unsubX = mx.on("change", (v) => {
      ref.current?.style.setProperty("--glow-x", `${v}%`);
    });
    const unsubY = my.on("change", (v) => {
      ref.current?.style.setProperty("--glow-y", `${v}%`);
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [mx, my]);

  function onMouseMove(e: React.MouseEvent) {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function onMouseLeave() {
    mx.set(50);
    my.set(50);
  }

  return { ref, onMouseMove, onMouseLeave };
}
