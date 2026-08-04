// Motion tuning for the "Recent Rewards" live table premium polish pass —
// kept out of App.tsx, same convention as proofInNumbersMotion.ts /
// productShowcaseMotion.ts / pricingMotion.ts.
import type { Transition } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// ─── Row entrance stagger (70ms per row, index-based delay — see the
// comment on the row's transition in App.tsx for why this is a plain
// per-row delay rather than a parent staggerChildren container: rows are
// also driven by AnimatePresence for real-time websocket adds/removes, and
// an index-based delay composes with that safely where a variants-based
// stagger container would not). ───────────────────────────────────────────
export const LIVE_PAYOUTS_ROW_STAGGER_S = 0.07;
export const LIVE_PAYOUTS_ROW_DURATION_S = 0.45;

// Cascading reveal offsets, relative to each row's own delay: reward count-
// up starts first (roughly with the row), the Verified badge follows, then
// the online dot's idle breathing begins.
export const LIVE_PAYOUTS_AMOUNT_DELAY_S = 0.1;
export const LIVE_PAYOUTS_BADGE_DELAY_S = 0.35;
export const LIVE_PAYOUTS_DOT_DELAY_S = 0.5;

// ─── Row hover: brighten + 2px lift + blue border glow, 250ms. ─────────────
export const LIVE_PAYOUTS_ROW_HOVER_TRANSITION: Transition = { duration: 0.25, ease: EASE_OUT_EXPO };
export const livePayoutsRowHover = {
  y: -2,
  backgroundColor: "rgba(59,130,246,0.045)",
  borderColor: "rgba(59,130,246,0.3)",
  boxShadow: "0 8px 20px -12px rgba(59,130,246,0.35)",
} as const;

// ─── Status: Verified badge pulse + online dot breathe — both opacity-only
// loops (never color/box-shadow directly), a few seconds apart, gentle. ────
export const LIVE_PAYOUTS_BADGE_PULSE_DURATION_S = 4.5;
export const livePayoutsBadgePulse = { opacity: [1, 0.6, 1] } as const;
export const LIVE_PAYOUTS_DOT_BREATHE_DURATION_S = 3.2;
export const livePayoutsDotBreathe = { opacity: [1, 0.45, 1], scale: [1, 1.15, 1] } as const;

// ─── Reward amount: subtle blue glow, count-up handled inline (reuses
// parseCountUpSegments/renderCountUp from countUp.ts, same as
// ProofInNumbers' CountUpStat). ───────────────────────────────────────────
export const LIVE_PAYOUTS_AMOUNT_GLOW = "0 0 12px rgba(59,130,246,0.25)";
export const LIVE_PAYOUTS_AMOUNT_SPRING: Transition = { stiffness: 90, damping: 20, mass: 1 };

// ─── Header: connecting-badge pulsing dot, divider grow-in, column labels
// fade upward. ─────────────────────────────────────────────────────────────
export const LIVE_PAYOUTS_HEADER_DOT_TRANSITION: Transition = { duration: 1.8, repeat: Infinity, ease: "easeInOut" };
export const livePayoutsHeaderDotPulse = { opacity: [1, 0.4, 1], scale: [1, 1.2, 1] } as const;
export const LIVE_PAYOUTS_DIVIDER_TRANSITION: Transition = { duration: 0.7, ease: EASE_OUT_EXPO };
export const LIVE_PAYOUTS_COLUMN_LABEL_STAGGER_S = 0.06;

// ─── Button: slow gradient movement, arrow 6px hover-slide (CSS), lift +
// soft glow on hover, spring on click (HeroCta's own whileTap already
// provides the spring — untouched). ────────────────────────────────────────
export const LIVE_PAYOUTS_CTA_GRADIENT_DURATION_S = 9;
export const livePayoutsCtaGradientPosition = { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } as const;

// ─── Background: soft radial glow + reflection sweep every 15-20s. ────────
export const LIVE_PAYOUTS_BG_GLOW_OPACITY = 0.07; // within the requested 5-8%
export const LIVE_PAYOUTS_REFLECTION_SWEEP_DURATION_S = 2;
export const LIVE_PAYOUTS_REFLECTION_SWEEP_CYCLE_S = 17.5; // within the requested 15-20s window
export const LIVE_PAYOUTS_REFLECTION_SWEEP_REPEAT_DELAY_S = LIVE_PAYOUTS_REFLECTION_SWEEP_CYCLE_S - LIVE_PAYOUTS_REFLECTION_SWEEP_DURATION_S;
export const LIVE_PAYOUTS_REFLECTION_SWEEP_TRANSITION: Transition = {
  duration: LIVE_PAYOUTS_REFLECTION_SWEEP_DURATION_S,
  repeat: Infinity,
  repeatDelay: LIVE_PAYOUTS_REFLECTION_SWEEP_REPEAT_DELAY_S,
  ease: "easeInOut",
};
// Bar is w-1/3 of the table — see productShowcaseMotion.ts for why these
// percentages (not the naive -130%/230%) are what actually clears it.
export const livePayoutsReflectionSweep = { x: ["-115%", "315%"] } as const;
export const LIVE_PAYOUTS_REFLECTION_SWEEP_INITIAL_X = "-115%";

export const LIVE_PAYOUTS_SPOTLIGHT_OPACITY = 0.06;
