import { useEffect, useState } from "react";

// True once the page has scrolled past `threshold` — drives the nav's
// shrink-on-scroll treatment. Reads native `window.scrollY`, which Lenis
// (see smoothScroll.tsx) keeps in sync via real scroll events, so this needs
// no awareness of whether smooth scroll is active.
export function useScrollShrink(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > threshold);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return scrolled;
}
