// Pure scale math for rendering the desktop 1440×1080 hero radar stage
// (HeroStage in App.tsx) at mobile widths. The stage's own layers (rings,
// beam, node) never change; a single uniform CSS scale shrinks the whole
// composition to fit the viewport, so mobile is a faithful miniature of
// the desktop scene rather than a separate design.

export const HERO_STAGE_WIDTH = 1440;
export const HERO_STAGE_HEIGHT = 1080;

// Uniform scale factor that fits the fixed-size stage to `viewportWidth`.
export function heroStageScale(viewportWidth: number): number {
  return viewportWidth / HERO_STAGE_WIDTH;
}

// Net on-screen size of a MOBILE-ONLY label (dot + gap + text), as a
// fraction of its declared LOCAL (pre-scale) size — see heroLabelScale
// below for why this stays constant across viewports instead of shrinking
// away on small phones like the rest of the stage does. 0.5 keeps all 5
// mobile labels (MOBILE_ORBIT_LABELS/MOBILE_LABEL_LAYOUT in heroOrbit.ts),
// spread across 2 independent rows instead of 1 shared ellipse, clear of
// each other and of the viewport edges down to 320px — verified by the
// regression test below. Re-run that test (or its rationale in
// docs/superpowers/plans/2026-08-01-mobile-hero-two-row-labels.md) before
// changing this value or MOBILE_LABEL_LAYOUT's wrapWidth figures.
export const HERO_LABEL_BOOST = 0.5;

// Local scale to apply to each mobile label's own wrapper (dot + gap +
// text), nested inside the already-uniformly-scaled mobile stage
// (HeroStageMobile applies `scale(stageScale)` to the whole 1440x1080
// composition). Because transforms compose multiplicatively, a label
// wrapper carrying `scale(heroLabelScale(stageScale))` renders at an
// on-screen size of exactly `stageScale * heroLabelScale(stageScale) ===
// HERO_LABEL_BOOST` — i.e. HERO_LABEL_BOOST times the label's declared
// LOCAL size, independent of viewport width, rather than shrinking away to
// near-nothing on small phones like the rest of the stage does. Desktop's
// direct <HeroStage /> call passes no labelScale prop, so it defaults to 1
// (unchanged).
export function heroLabelScale(stageScale: number): number {
  return HERO_LABEL_BOOST / stageScale;
}
