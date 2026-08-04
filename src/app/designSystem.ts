// ─── FYT Global Design Language ─────────────────────────────────────────
// Shared visual/motion vocabulary for the whole site. Every section-level
// motion file added this session (proofInNumbersMotion.ts,
// productShowcaseMotion.ts, pricingMotion.ts, livePayoutsMotion.ts) grew
// its own easing curves, spring configs, and glow opacities independently —
// this file is the single source those should now draw from, so the site
// reads as ONE product instead of a set of individually-tuned sections.
//
// Positioning: premium SaaS / modern fintech — Apple-level simplicity,
// Stripe-quality polish, technology-first. NOT a trading-terminal or
// crypto aesthetic: no candlestick imagery, no neon glow, no gimmicky
// flashes. If an effect is obvious enough that a user would consciously
// notice "that's animating", it's tuned too strong — halve it.
//
// This file establishes the language; it does not retrofit it everywhere
// on its own. tilt.ts / magnetic.ts / cursorGlow.ts (the shared,
// site-wide interaction primitives) and the global CTA/spotlight
// constants in App.tsx now draw from it directly. The section-specific
// motion files each still hold their own local numbers for now — bringing
// each of those in line is deliberately a separate, later, per-section
// pass rather than one large mechanical rewrite touching every already-
// shipped section at once.

import type { Transition } from "motion/react";

// ─── Easing ──────────────────────────────────────────────────────────────
// The one eased curve used for every non-spring entrance/reveal site-wide.
export const EASE_STANDARD = [0.16, 1, 0.3, 1] as const;

// Two spring "personalities" — deliberately only two, not one per hook.
// CALM is the default for anything pointer-follow/idle (magnetic pull,
// tilt, cursor glow, hover lifts): soft, slightly damped, never bouncy.
// SNAPPY is reserved for direct-feedback moments only (button press/click)
// where a touch more responsiveness reads as "quality", not "flashy".
export const SPRING_CALM: Transition = { type: "spring", stiffness: 260, damping: 28, mass: 0.5 };
export const SPRING_SNAPPY: Transition = { type: "spring", stiffness: 380, damping: 26 };

// ─── Duration scale ──────────────────────────────────────────────────────
export const DURATION_XS_S = 0.2;
export const DURATION_SM_S = 0.35;
export const DURATION_MD_S = 0.55;
export const DURATION_LG_S = 0.8;

// ─── Hover lift ceiling ────────────────────────────────────────────────
// 4px is the site-wide maximum — several sections built earlier this
// session used 8px card lifts; that reads as "obvious" per the brief and
// should come down to this ceiling when each section gets revisited.
export const LIFT_SUBTLE_PX = 2;
export const LIFT_STANDARD_PX = 4;

// ─── Brand blue — single source, not re-declared per section ─────────────
export const BRAND_BLUE = "#3b82f6";
export const BRAND_BLUE_LIGHT = "#60a5fa";

// ─── Glow ceilings ─────────────────────────────────────────────────────
// CursorSpotlight (the one sitewide cursor-follow glow, mounted once in
// App()) already shipped at 0.08 and reads correctly calm — that's the
// reference point these ceilings are calibrated against, not an arbitrary
// number. Several section-local glows this session went as high as
// 0.5-0.6; anything above HOVER should be treated as a bug going forward.
export const GLOW_OPACITY_RESTING = 0.08;
export const GLOW_OPACITY_HOVER = 0.18;

export function brandGlow(blurPx: number, opacity: number = GLOW_OPACITY_HOVER): string {
  return `0 0 ${blurPx}px rgba(59,130,246,${opacity})`;
}

// ─── Idle-loop cadence floor ─────────────────────────────────────────────
// Nothing that loops indefinitely (breathing dots, pulsing badges, ambient
// glows) should cycle faster than this — quicker reads as nervous/gamey
// rather than calm. Slower is always fine; this is a floor, not a target.
export const BREATHE_DURATION_MIN_S = 3;
