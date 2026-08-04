import { Suspense, lazy, useEffect, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

// Gate, not just visual hiding: on mobile/coarse-pointer/reduced-motion this
// never imports three.js or constructs a WebGL context at all — "replace
// heavy 3D scenes with lightweight alternatives on mobile" from the redesign
// brief. The existing SVG orbital stage (HeroStage in App.tsx) always renders
// underneath regardless, so there is no blank gap when this opts out.
function canRender3D(): boolean {
  return (
    window.matchMedia("(min-width: 1024px)").matches &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function HeroSceneGate() {
  const [enabled, setEnabled] = useState(canRender3D);

  useEffect(() => {
    const queries = [
      window.matchMedia("(min-width: 1024px)"),
      window.matchMedia("(pointer: fine)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ];
    const update = () => setEnabled(canRender3D());
    queries.forEach((q) => q.addEventListener("change", update));
    return () => queries.forEach((q) => q.removeEventListener("change", update));
  }, []);

  if (!enabled) return null;
  return (
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>
  );
}
