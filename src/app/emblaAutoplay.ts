import Autoplay from "embla-carousel-autoplay";
import type { EmblaPluginType } from "embla-carousel";

// Builds the plugin list for an embla carousel: an Autoplay instance when
// motion is allowed, or no plugins at all under prefers-reduced-motion —
// callers pass the result straight into useEmblaCarousel's second argument
// instead of re-implementing this branch in every autoscrolling carousel
// (FeaturedIn, Testimonials' mobile carousel, LivePayouts).
// `embla-carousel` itself isn't a direct dependency (embla-carousel-react
// depends on it transitively and re-exports these exact types from it —
// see node_modules/embla-carousel-react/components/EmblaCarousel.d.ts),
// so this import resolves without adding another explicit package.
export function buildAutoplayPlugins(
  prefersReducedMotion: boolean | null | undefined,
  { delay = 4000, stopOnInteraction }: { delay?: number; stopOnInteraction?: boolean } = {},
): EmblaPluginType[] {
  if (prefersReducedMotion) return [];
  const autoplayOptions: { delay: number; stopOnInteraction?: boolean } = { delay };
  if (stopOnInteraction !== undefined) {
    autoplayOptions.stopOnInteraction = stopOnInteraction;
  }
  return [Autoplay(autoplayOptions)];
}
