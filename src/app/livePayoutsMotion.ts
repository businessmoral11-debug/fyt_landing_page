// Motion + timing constants for the "Recent Rewards" premium card-feed
// redesign — kept out of App.tsx, same convention as proofInNumbersMotion.ts
// / productShowcaseMotion.ts / pricingMotion.ts.
import type { Transition } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// ─── Card entrance: fade + blur + move up, 80ms stagger. Index-based delay
// (not a variants/staggerChildren container) for the same reason as the
// previous table redesign — this list is driven by AnimatePresence for
// real-time websocket adds/removes, and a per-card delay composes safely
// with that (an already-mounted card doesn't replay when a new one is
// prepended) where a shared stagger container would not. ──────────────────
export const LIVE_PAYOUTS_CARD_STAGGER_S = 0.08;
export const LIVE_PAYOUTS_CARD_DURATION_S = 0.55;
export const LIVE_PAYOUTS_CARD_BLUR_PX = 8;

// Cascading reveal, relative to each card's own delay: amount count-up ->
// verified checkmark draws in -> live dot starts breathing.
export const LIVE_PAYOUTS_AMOUNT_DELAY_S = 0.15;
export const LIVE_PAYOUTS_CHECK_DELAY_S = 0.45;
export const LIVE_PAYOUTS_DOT_DELAY_S = 0.55;

// ─── Card hover: 8px lift, border glow, rotate toward cursor (max 3deg —
// via useTilt(3)), amount glows brighter, spring. ───────────────────────
export const LIVE_PAYOUTS_CARD_HOVER_TRANSITION: Transition = { type: "spring", stiffness: 280, damping: 24 };
export const livePayoutsCardHover = {
  y: -8,
  borderColor: "rgba(59,130,246,0.4)",
  boxShadow: "0 32px 64px -24px rgba(59,130,246,0.28), 0 0 0 1px rgba(59,130,246,0.12)",
} as const;
export const LIVE_PAYOUTS_CARD_TILT_MAX_DEG = 3;
export const LIVE_PAYOUTS_CARD_SPOTLIGHT_OPACITY = 0.14;

// ─── Status: live dot breathes, Verified badge's checkmark draws in once
// (pathLength 0->1) rather than just fading. ────────────────────────────
export const LIVE_PAYOUTS_DOT_BREATHE_DURATION_S = 3;
export const livePayoutsDotBreathe = { opacity: [1, 0.45, 1], scale: [1, 1.15, 1] } as const;
export const LIVE_PAYOUTS_CHECK_DRAW_DURATION_S = 0.5;

// ─── Reward amount: counts from 0 (parseCountUpSegments/renderCountUp,
// same as CountUpStat/AnimatedRewardAmount before), blue glow, and a
// shimmer sweep every 8s once settled — same background-clip:text
// technique as ProofInNumbers' number shimmer (tailwind.css). ──────────────
export const LIVE_PAYOUTS_AMOUNT_SPRING: Transition = { stiffness: 90, damping: 20, mass: 1 };
export const LIVE_PAYOUTS_AMOUNT_GLOW = "0 0 20px rgba(59,130,246,0.35)";
export const LIVE_PAYOUTS_AMOUNT_GLOW_HOVER = "0 0 32px rgba(59,130,246,0.55)";

// ─── Button: shimmer sweep every 5s (distinct, faster cadence from the
// slow background gradient), magnetic + lift + glow on hover already
// covered by HeroCta (magneticStrength) + a wrapping whileHover — see
// App.tsx. Bar is w-1/3, percentages account for that (see
// productShowcaseMotion.ts for the underlying math). ────────────────────
export const LIVE_PAYOUTS_CTA_GRADIENT_DURATION_S = 8;
export const livePayoutsCtaGradientPosition = { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } as const;
export const LIVE_PAYOUTS_CTA_SHIMMER_DURATION_S = 1.1;
export const LIVE_PAYOUTS_CTA_SHIMMER_CYCLE_S = 5;
export const LIVE_PAYOUTS_CTA_SHIMMER_REPEAT_DELAY_S = LIVE_PAYOUTS_CTA_SHIMMER_CYCLE_S - LIVE_PAYOUTS_CTA_SHIMMER_DURATION_S;
export const LIVE_PAYOUTS_CTA_SHIMMER_TRANSITION: Transition = {
  duration: LIVE_PAYOUTS_CTA_SHIMMER_DURATION_S,
  repeat: Infinity,
  repeatDelay: LIVE_PAYOUTS_CTA_SHIMMER_REPEAT_DELAY_S,
  ease: "easeInOut",
};
export const livePayoutsCtaShimmer = { x: ["-115%", "315%"] } as const;
export const LIVE_PAYOUTS_CTA_SHIMMER_INITIAL_X = "-115%";

// ─── Background: soft radial glow + floating blur (AmbientBlob, reused
// as-is) + subtle noise. ───────────────────────────────────────────────
export const LIVE_PAYOUTS_BG_GLOW_OPACITY = 0.08;
export const LIVE_PAYOUTS_NOISE_OPACITY = 0.02;

// ─── Divider reveal (inside each card, above "View Reward") ────────────
export const LIVE_PAYOUTS_DIVIDER_TRANSITION: Transition = { duration: 0.5, ease: EASE_OUT_EXPO };

// ─── Dev-only live-feed simulation cadence (see liveRewardsFeed.ts) — the
// real backend only ever pushes on genuine reward events, so the "every
// 8-10s a new reward slides in" cadence described in the design brief is
// approximated locally, in dev only, purely so the entrance/exit motion is
// actually observable while developing. ───────────────────────────────────
export const LIVE_PAYOUTS_DEV_ROTATION_INTERVAL_MS = 9000; // within the requested 8-10s window
