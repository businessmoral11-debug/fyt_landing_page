// Motion tuning for the Pricing configurator premium polish pass — kept out
// of App.tsx, same convention as proofInNumbersMotion.ts /
// productShowcaseMotion.ts. Pricing() was already one of the most
// Framer-Motion-dense sections of the page before this pass (shared-layout
// pill morphs, magnetic CTA, ambient blobs, per-panel scroll reveals,
// AnimatePresence tab switch) — these constants extend that existing
// system rather than replace it.
import type { Transition } from "motion/react";

// ─── Selected pill: lift + soft glow (the glow pulse itself already
// existed on the layoutId pill background; this adds the lift). ──────────
export const PRICING_PILL_LIFT_Y = -3;
export const PRICING_PILL_LIFT_TRANSITION: Transition = { type: "spring", stiffness: 420, damping: 30 };

// ─── Card idle float (2px, 12s) + border breathing (10s) — both live on a
// wrapper OUTSIDE PanelCard's own motion.div, since that inner element
// already owns `whileInView`/`whileHover` targeting opacity/y/boxShadow and
// Framer Motion can't combine an independent continuous `animate` loop with
// those on the same component (same split already used in
// proofInNumbersMotion.ts / productShowcaseMotion.ts). ────────────────────
export const PRICING_CARD_FLOAT_AMPLITUDE_PX = 2;
export const PRICING_CARD_FLOAT_DURATION_S = 12;
export const pricingCardFloatY = [0, -PRICING_CARD_FLOAT_AMPLITUDE_PX, 0];
export const PRICING_CARD_FLOAT_TRANSITION: Transition = {
  duration: PRICING_CARD_FLOAT_DURATION_S,
  repeat: Infinity,
  ease: "easeInOut",
};

export const PRICING_CARD_BREATHE_DURATION_S = 10;
export const PRICING_CARD_BREATHE_OPACITY = [0, 1, 0];

// ─── Reflection sweep every 15s. `x` percentages are relative to the
// sweep bar's OWN width, not its container's (see productShowcaseMotion.ts
// for the math and the bug this avoids) — the bar here is `w-1/3`, so
// fully clearing the card needs roughly -100%/+300%, with margin. ─────────
export const PRICING_REFLECTION_SWEEP_DURATION_S = 2;
export const PRICING_REFLECTION_SWEEP_CYCLE_S = 15;
export const PRICING_REFLECTION_SWEEP_REPEAT_DELAY_S = PRICING_REFLECTION_SWEEP_CYCLE_S - PRICING_REFLECTION_SWEEP_DURATION_S;
export const PRICING_REFLECTION_SWEEP_TRANSITION: Transition = {
  duration: PRICING_REFLECTION_SWEEP_DURATION_S,
  repeat: Infinity,
  repeatDelay: PRICING_REFLECTION_SWEEP_REPEAT_DELAY_S,
  ease: "easeInOut",
};
export const pricingReflectionSweep = { x: ["-115%", "315%"] } as const;
export const PRICING_REFLECTION_SWEEP_INITIAL_X = "-115%";

// ─── Value-change flash: whenever step/plan/platform/size changes, the 3
// results panels (Selection, Rules, Benefits) each flash a brief blue
// overlay, staggered 80ms apart, 300ms each — a visible echo of "these
// values just updated together", distinct from PanelCard's one-time
// scroll-triggered entrance. ────────────────────────────────────────────
export const PRICING_FLASH_STAGGER_MS = 80;
export const PRICING_FLASH_DURATION_MS = 300;
export const pricingFlashOpacity = [0, 0.16, 0];
export const PRICING_FLASH_TRANSITION: Transition = { duration: PRICING_FLASH_DURATION_MS / 1000, ease: "easeOut" };

// ─── Mouse spotlight over the whole configurator — ambient, very subtle. ──
export const PRICING_SPOTLIGHT_OPACITY = 0.06;

// ─── CTA: slow gradient shift (a subtle animated overlay on top of the
// existing solid #3b82f6 background — the base color is unchanged, see
// App.tsx comment), arrow hover-slide (CSS group-hover, no JS), spring on
// click (already existed via whileTap — untouched). ────────────────────────
export const PRICING_CTA_GRADIENT_DURATION_S = 10;
export const pricingCtaGradientPosition = { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } as const;

// ─── Price counts smoothly (spring-driven tween through intermediate
// values) instead of snapping — same technique as ProofInNumbers'
// CountUpStat, applied here to a value that can go up OR down (unlike a
// one-way count-up), so it's a plain spring-follow rather than an
// eased 0->1 progress. ─────────────────────────────────────────────────
export const PRICING_PRICE_SPRING: Transition = { stiffness: 90, damping: 20, mass: 1 };

// ─── Progress line: 4 segments (Step/Type/Platform/Size), each lights up
// once the user has interacted with that group at least once. ────────────
export const PRICING_PROGRESS_SEGMENT_TRANSITION: Transition = { duration: 0.4, ease: "easeOut" };

// ─── One-time completion sequence, once all 4 groups have been touched:
// connection line glows -> cards pulse -> price settles -> CTA glows.
// Delays are staggered from a shared t=0 rather than chained callbacks, the
// same declarative-sequencing idiom used throughout this codebase (see
// proofInNumbersMotion.ts's connection-line comment for the same
// reasoning) — each delay is simply "when this beat starts" and CSS/Framer
// transitions handle the rest.
export const PRICING_COMPLETION_LINE_GLOW_DELAY_S = 0;
export const PRICING_COMPLETION_LINE_GLOW_DURATION_S = 0.6;
export const PRICING_COMPLETION_CARD_PULSE_DELAY_S = 0.3;
export const PRICING_COMPLETION_CARD_PULSE_DURATION_S = 0.7;
export const pricingCompletionCardPulse = { scale: [1, 1.02, 1] } as const;
export const PRICING_COMPLETION_CTA_GLOW_DELAY_S = 0.8;
export const PRICING_COMPLETION_CTA_GLOW_DURATION_S = 1.2;
export const pricingCompletionCtaGlow = {
  boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 40px 8px rgba(59,130,246,0.55)", "0 0 0px rgba(59,130,246,0)"],
} as const;
