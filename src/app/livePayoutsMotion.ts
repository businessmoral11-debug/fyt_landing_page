// Motion + timing constants for the "Recent Rewards" premium TABLE redesign
// — kept out of App.tsx, same convention as proofInNumbersMotion.ts /
// productShowcaseMotion.ts / pricingMotion.ts. This supersedes the brief
// card-feed variant from the previous commit — the table structure is back
// by explicit request ("DO NOT convert it into cards"), now with heavier
// premium treatment than the original table polish pass.
import type { Transition } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// ─── Row entrance: 70ms stagger, index-based delay (not a variants/
// staggerChildren container) — this table is also driven by AnimatePresence
// for real-time websocket adds/removes, and a per-row delay composes safely
// with that (an already-mounted row doesn't replay when a new one is
// prepended) where a shared stagger container would not. ──────────────────
export const LIVE_PAYOUTS_ROW_STAGGER_S = 0.07;
export const LIVE_PAYOUTS_ROW_DURATION_S = 0.5;
export const LIVE_PAYOUTS_ROW_BLUR_PX = 6;

// Cascading reveal, relative to each row's own delay.
export const LIVE_PAYOUTS_AMOUNT_DELAY_S = 0.12;
export const LIVE_PAYOUTS_CHECK_DELAY_S = 0.4;
export const LIVE_PAYOUTS_DOT_DELAY_S = 0.5;

// ─── Row hover: brightens, left accent line grows, border glows, 2px lift,
// spring. ──────────────────────────────────────────────────────────────
export const LIVE_PAYOUTS_ROW_HOVER_TRANSITION: Transition = { type: "spring", stiffness: 340, damping: 26 };
export const livePayoutsRowHover = {
  y: -2,
  backgroundColor: "rgba(59,130,246,0.05)",
  borderColor: "rgba(59,130,246,0.28)",
} as const;

// ─── Trader: avatar gradient (static style, not animated), online dot
// breathes, name brightens on hover (CSS group-hover, no JS). ─────────────
export const LIVE_PAYOUTS_DOT_BREATHE_DURATION_S = 3;
export const livePayoutsDotBreathe = { opacity: [1, 0.45, 1], scale: [1, 1.15, 1] } as const;

// ─── Amount: counts up (parseCountUpSegments/renderCountUp + persistent
// spring, same technique as CountUpStat), blue glow, shimmer every 6-8s. ──
export const LIVE_PAYOUTS_AMOUNT_SPRING: Transition = { stiffness: 90, damping: 20, mass: 1 };
export const LIVE_PAYOUTS_AMOUNT_GLOW = "0 0 16px rgba(59,130,246,0.3)";
export const LIVE_PAYOUTS_AMOUNT_GLOW_HOVER = "0 0 26px rgba(59,130,246,0.5)";
export const LIVE_PAYOUTS_AMOUNT_SHIMMER_S = "7s"; // within the requested 6-8s window

// ─── Status: Verified pill draws its checkmark in once, then pulses gently
// every few seconds. ─────────────────────────────────────────────────────
export const LIVE_PAYOUTS_CHECK_DRAW_DURATION_S = 0.5;
export const LIVE_PAYOUTS_BADGE_PULSE_DURATION_S = 4;
export const livePayoutsBadgePulse = { opacity: [1, 0.65, 1] } as const;

// ─── Header: sticky offset (below the sticky nav bar — see Nav()'s own
// scrolled/unscrolled height in App.tsx), animated divider, column-label
// stagger, scanning light sweep every ~6s, connecting-badge blink on a
// newly-arrived row. ───────────────────────────────────────────────────
export const LIVE_PAYOUTS_HEADER_STICKY_TOP_PX = 84;
export const LIVE_PAYOUTS_DIVIDER_TRANSITION: Transition = { duration: 0.7, ease: EASE_OUT_EXPO };
export const LIVE_PAYOUTS_COLUMN_LABEL_STAGGER_S = 0.06;
export const LIVE_PAYOUTS_HEADER_DOT_TRANSITION: Transition = { duration: 1.8, repeat: Infinity, ease: "easeInOut" };
export const livePayoutsHeaderDotPulse = { opacity: [1, 0.4, 1], scale: [1, 1.2, 1] } as const;
export const LIVE_PAYOUTS_SCAN_LIGHT_DURATION_S = 1.6;
export const LIVE_PAYOUTS_SCAN_LIGHT_CYCLE_S = 6;
export const LIVE_PAYOUTS_SCAN_LIGHT_REPEAT_DELAY_S = LIVE_PAYOUTS_SCAN_LIGHT_CYCLE_S - LIVE_PAYOUTS_SCAN_LIGHT_DURATION_S;
export const LIVE_PAYOUTS_SCAN_LIGHT_TRANSITION: Transition = {
  duration: LIVE_PAYOUTS_SCAN_LIGHT_DURATION_S,
  repeat: Infinity,
  repeatDelay: LIVE_PAYOUTS_SCAN_LIGHT_REPEAT_DELAY_S,
  ease: "easeInOut",
};
// Bar is w-1/4 of the header — see the note in productShowcaseMotion.ts for
// why these percentages (not naive -130%/230%) are what actually clears it.
export const livePayoutsScanLight = { x: ["-120%", "420%"] } as const;
export const LIVE_PAYOUTS_SCAN_LIGHT_INITIAL_X = "-120%";
export const LIVE_PAYOUTS_BADGE_BLINK_DURATION_S = 0.5;
export const livePayoutsBadgeBlink = { opacity: [1, 0.3, 1], scale: [1, 1.25, 1] } as const;

// ─── Button: 56-60px tall, glass highlight, moving gradient, glow on
// hover, arrow slides right, magnetic (HeroCta), spring click (HeroCta),
// slow idle float. ─────────────────────────────────────────────────────
export const LIVE_PAYOUTS_CTA_GRADIENT_DURATION_S = 8;
export const livePayoutsCtaGradientPosition = { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } as const;
export const LIVE_PAYOUTS_CTA_FLOAT_AMPLITUDE_PX = 3;
export const LIVE_PAYOUTS_CTA_FLOAT_DURATION_S = 10;
export const livePayoutsCtaFloatY = [0, -LIVE_PAYOUTS_CTA_FLOAT_AMPLITUDE_PX, 0];
export const LIVE_PAYOUTS_CTA_FLOAT_TRANSITION: Transition = {
  duration: LIVE_PAYOUTS_CTA_FLOAT_DURATION_S,
  repeat: Infinity,
  ease: "easeInOut",
};

// ─── Background: subtle radial glow + vignette + noise. ────────────────
export const LIVE_PAYOUTS_BG_GLOW_OPACITY = 0.07;
export const LIVE_PAYOUTS_VIGNETTE_OPACITY = 0.05;
export const LIVE_PAYOUTS_NOISE_OPACITY = 0.02;

export const LIVE_PAYOUTS_SPOTLIGHT_OPACITY = 0.12; // per-row spotlight

// ─── Dev-only live-feed simulation cadence (see liveRewardsFeed.ts) — the
// real backend only ever pushes on genuine reward events, so the "every
// 8-12s a new reward slides in" cadence described in the design brief is
// approximated locally, in dev only, purely so the entrance/exit motion is
// actually observable while developing.
export const LIVE_PAYOUTS_DEV_ROTATION_INTERVAL_MS = 10000; // within the requested 8-12s window
