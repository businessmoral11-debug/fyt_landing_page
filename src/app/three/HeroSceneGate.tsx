import { useEffect, useState } from "react";
import HeroScene from "./HeroScene";

// Statically imported (not React.lazy + dynamic import()) so the Hero scene's
// module — including its module-scope useGLTF.preload()/useTexture.preload()
// calls — is evaluated as part of the main bundle immediately, instead of
// behind a separate chunk request that only starts fetching assets after
// that chunk itself has finished downloading. That JS-chunk-then-assets
// serialization was a source of the visible "asteroids/starfield pop in a
// moment later" delay on refresh; bundling it eagerly and letting the asset
// preloads fire at the earliest possible moment removes that serialization.
// The trade-off is a larger main bundle (three.js/R3F/drei ship for every
// visitor, not just ones who'll render the Canvas) — accepted here because
// this is a desktop-only, above-the-fold hero element where perceived load
// speed matters more than shaving the initial JS payload.
//
// No Suspense here anymore — HeroScene owns its own internal Suspense
// boundary now, wrapped only around the asteroid meshes (see the comment on
// HeroScene() in HeroScene.tsx). An outer boundary here would hold back the
// Canvas's own DOM node — and therefore the starfield and lighting, which
// have no asset dependency at all — until the asteroid assets finished
// loading, which was the other half of the pop-in delay.
//
// The `canRender3D()` gate below still prevents the Canvas/WebGL context
// itself from ever being constructed on mobile/coarse-pointer/reduced-motion
// — only the JS module and its asset preloads are no longer conditional.
// The existing SVG orbital stage (HeroStage in App.tsx) always renders
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
  return <HeroScene />;
}
