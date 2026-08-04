import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

// Lenis intercepts wheel/touch input and drives scroll via its own RAF loop,
// but still dispatches native `scroll` events on the scrolling element — so
// every existing Framer Motion `useScroll()` reveal (Prove Your Skill, How It
// Works, Comparison Table, etc.) keeps working unmodified. Reduced-motion
// users get plain native scrolling instead: Lenis is simply never
// instantiated, rather than instantiated-then-disabled, so there's no smooth-
// scroll easing left over to fight assistive scrolling.
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotionQuery.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    });

    // If the user's OS preference flips mid-session, stop smoothing rather
    // than requiring a reload.
    function handleChange(e: MediaQueryListEvent) {
      if (e.matches) lenis.destroy();
    }
    reduceMotionQuery.addEventListener("change", handleChange);

    return () => {
      reduceMotionQuery.removeEventListener("change", handleChange);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
