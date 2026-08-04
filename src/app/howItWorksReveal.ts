// Scroll-pinned reveal timing + dim/peak color targets for the "How It
// Works" section's 4-step row (HowItWorks in App.tsx), modeled on the same
// pinned-section-with-staggered-reveal pattern used by ProveYourSkill (see
// proveSkillReveal.ts) — pin the section, dedicate extra scroll distance to
// the reveal, then release into normal flow. Unlike ProveSkillReveal's
// smoother overlapping card stagger, steps here activate with a fast,
// strictly sequential (non-overlapping) ramp for a "jumpy" feel, and the
// connecting line grows in as a single bar alongside them instead of being
// present (just recolored) from the start.

export interface StepReveal {
  fadeStart: number; // scrollYProgress (0-1) where this element starts ramping from dim to peak
  fadeEnd: number;   // scrollYProgress (0-1) where this element reaches full peak brightness
}

// How tall the scroll-tracking wrapper is, in vh — this is how much scroll
// distance the pinned reveal takes before the section releases and resumes
// normal scrolling.
export const HOW_IT_WORKS_SCROLL_HEIGHT_VH = 200;

// One entry per HOW_IT_WORKS_STEPS index. The first 0.12 of scrollYProgress
// is a pure dwell (nothing ramps) so the section reads as fully dim the
// moment it's landed on; each step then ramps over a narrow (0.10-wide)
// window, one fully finishing before the next starts — sequential, not
// overlapping, for a quick "pop" per step rather than a blended crossfade.
// The last step finishes at 0.82, leaving 0.82-1 as a hold at full
// brightness before the section releases (mirrors PROVE_SKILL_CARD_REVEALS'
// same hold-before-release design, whose last card finishes by 0.85).
export const HOW_IT_WORKS_STEP_REVEALS: readonly StepReveal[] = [
  { fadeStart: 0.12, fadeEnd: 0.22 },
  { fadeStart: 0.32, fadeEnd: 0.42 },
  { fadeStart: 0.52, fadeEnd: 0.62 },
  { fadeStart: 0.72, fadeEnd: 0.82 },
];

// The connecting line grows (scaleX 0 -> 1, transform-origin: left) across
// the same span the 4 steps activate in, so its leading edge reaches each
// step's dot at roughly the moment that step lights up.
export const HOW_IT_WORKS_LINE_REVEAL: StepReveal = {
  fadeStart: HOW_IT_WORKS_STEP_REVEALS[0].fadeStart,
  fadeEnd: HOW_IT_WORKS_STEP_REVEALS[HOW_IT_WORKS_STEP_REVEALS.length - 1].fadeEnd,
};

// Fixed RGB targets the ring/dot/number alphas below interpolate against.
export const HOW_IT_WORKS_RING_RGB = "59,130,246"; // #3b82f6
export const HOW_IT_WORKS_DOT_RGB = "238,240,246"; // #eef0f6
export const HOW_IT_WORKS_NUMBER_RGB = "96,165,250"; // #60a5fa

// Resting (dim, t=0) vs. peak (fully lit, t=1) alpha targets — driven by
// useTransform against each step's own StepReveal window. Peak glow alphas
// are boosted beyond the pre-existing static values (ring 0.55, dot 0.7)
// for a more dramatic "lighting up" moment, per the higher-contrast
// treatment requested.
export const HOW_IT_WORKS_RING_BORDER_ALPHA = { dim: 0.1, peak: 1 } as const;
export const HOW_IT_WORKS_RING_GLOW_ALPHA = { dim: 0.05, peak: 0.75 } as const;
export const HOW_IT_WORKS_DOT_BG_ALPHA = { dim: 0.1, peak: 1 } as const;
export const HOW_IT_WORKS_DOT_GLOW_ALPHA = { dim: 0, peak: 0.9 } as const;
export const HOW_IT_WORKS_NUMBER_ALPHA = { dim: 0.1, peak: 1 } as const;

// The 56px icon circle's border alpha — peak 0.4 matches the circle's
// pre-existing always-on static value, so nothing changes at full
// brightness; only the resting/dim state gets darker.
export const HOW_IT_WORKS_ICON_BORDER_ALPHA = { dim: 0.08, peak: 0.4 } as const;

// The icon glyph itself fades in as a whole (via an opacity wrapper around
// HowItWorksIcon) rather than only its circle border dimming.
export const HOW_IT_WORKS_ICON_GLYPH_OPACITY = { dim: 0.15, peak: 1 } as const;

// Label color goes from a dark muted gray-blue to white (not an alpha
// interpolation against a fixed RGB — a direct color-to-color transform).
export const HOW_IT_WORKS_LABEL_DIM_HEX = "#4a4f63";
export const HOW_IT_WORKS_LABEL_PEAK_HEX = "#ffffff";

// Description color, same direct color-to-color transform pattern as the
// label above.
export const HOW_IT_WORKS_DESC_DIM_HEX = "#8a90a3";
export const HOW_IT_WORKS_DESC_PEAK_HEX = "#ffffff";

// Static (non-scroll-driven) glow on the connecting line bar itself, for
// visual weight as it draws in. The bar's own growth (scaleX) is the
// reveal; the glow doesn't need its own separate animation.
export const HOW_IT_WORKS_LINE_GLOW = "0 0 12px rgba(59,130,246,0.6)";
