// Motion tuning for the "Proof in Numbers" premium polish pass — kept out of
// App.tsx (same rationale as proveSkillReveal.ts / howItWorksReveal.ts) so
// the timing values are independently reviewable/testable instead of buried
// as inline transition props.
import type { TargetAndTransition, Transition, Variants } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// ─── Section entrance: badge → heading → paragraph → CTA → card 1-4 ────────
// One orchestrating container (the glass panel) with staggerChildren, and a
// single `item` variant reused by every one of those 8 elements in that
// exact DOM order — Framer Motion stages child reveals in render order, so
// no per-element delay math is needed, just consistent variant names.
export const PROOF_REVEAL_STAGGER = 0.1; // seconds between each of the 8 items
export const PROOF_REVEAL_DELAY_CHILDREN = 0.05;

export const proofRevealContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: PROOF_REVEAL_STAGGER,
      delayChildren: PROOF_REVEAL_DELAY_CHILDREN,
    },
  },
};

export const proofRevealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

// ─── Idle "alive" motion: the whole panel breathes very slightly ───────────
export const PROOF_FLOAT_DURATION_S = 16; // within the requested 14-18s window
export const PROOF_FLOAT_TRANSITION: Transition = {
  duration: PROOF_FLOAT_DURATION_S,
  repeat: Infinity,
  ease: "easeInOut",
};
export const PROOF_FLOAT_Y = [0, -5, 0];

// ─── Ambient blue glow behind the panel ─────────────────────────────────────
export const PROOF_AMBIENT_GLOW_DURATION_S = 12;
export const PROOF_AMBIENT_GLOW_OPACITY = [0.08, 0.16, 0.08];
export const PROOF_AMBIENT_GLOW_TRANSITION: Transition = {
  duration: PROOF_AMBIENT_GLOW_DURATION_S,
  repeat: Infinity,
  ease: "easeInOut",
};

// ─── Card hover ──────────────────────────────────────────────────────────
// Spring, not a fixed duration — but tuned (stiffness/damping) to settle in
// roughly the requested ~300ms, matching every other spring interaction
// already in this codebase (see magnetic.ts / tilt.ts SPRING constants).
export const PROOF_CARD_HOVER_TRANSITION: Transition = { type: "spring", stiffness: 300, damping: 22 };
// Framer Motion replaces (not merges) the `boxShadow` value on hover, so the
// resting-state inset highlights (inner top-light / inner blue tint — see
// the card's base `style.boxShadow` in App.tsx) are repeated here alongside
// the deeper outer glow, or hovering would visually strip them away.
export const proofCardHover = {
  y: -8,
  scale: 1.02,
  borderColor: "rgba(96,165,250,0.5)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.09), inset 0 0 40px rgba(59,130,246,0.06), " +
    "0 24px 60px -18px rgba(59,130,246,0.4), 0 0 0 1px rgba(96,165,250,0.25)",
} as const;

// ─── Per-icon idle animation (very subtle; each of the 4 stats reads
// differently at a glance without drawing attention to itself) ─────────────
export const PROOF_ICON_DOLLAR_PULSE: Transition = { duration: 4, repeat: Infinity, ease: "easeInOut" };
export const proofIconDollarPulse = { scale: [1, 1.08, 1] } as const;

// "Network pulse" for Funded Traders is a soft expanding ring behind the
// icon circle (classic ping), not a scale on the icon itself.
export const PROOF_ICON_NETWORK_RING_TRANSITION: Transition = { duration: 2.2, repeat: Infinity, ease: "easeOut" };
export const proofIconNetworkRing = { scale: [1, 1.5], opacity: [0.5, 0] } as const;

export const PROOF_ICON_GLOBE_SPIN_TRANSITION: Transition = { duration: 20, repeat: Infinity, ease: "linear" };
export const proofIconGlobeSpin = { rotate: 360 } as const;

// Fast dip + slow recovery reads as a "pulse" rather than smooth breathing.
export const PROOF_ICON_LIGHTNING_TRANSITION: Transition = { duration: 3.4, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 1] };
export const proofIconLightningPulse = { opacity: [1, 0.5, 1], scale: [1, 1.05, 1] } as const;

// Convenience lookup for the icon wrapper's `animate`/`transition` props.
// "people" is intentionally empty here — its motion is the separate
// expanding ring (proofIconNetworkRing) rendered behind the icon, not an
// animation on the icon itself.
export type ProofIconKind = "dollar" | "people" | "globe" | "lightning";
export const PROOF_ICON_MOTION: Record<ProofIconKind, { animate?: TargetAndTransition; transition?: Transition }> = {
  dollar: { animate: proofIconDollarPulse, transition: PROOF_ICON_DOLLAR_PULSE },
  people: {},
  globe: { animate: proofIconGlobeSpin, transition: PROOF_ICON_GLOBE_SPIN_TRANSITION },
  lightning: { animate: proofIconLightningPulse, transition: PROOF_ICON_LIGHTNING_TRANSITION },
};

// ─── Number shimmer ──────────────────────────────────────────────────────
// A background-position sweep across a background-clip:text gradient — the
// one deliberate exception to the "transform/opacity/filter only" rule,
// because a text-shaped light sweep isn't achievable any other way without
// duplicating the text as a mask, and background-position compositing is
// still cheap (no layout, no repaint of surrounding content). Delayed past
// the ~1.2s count-up duration so it only ever plays once counting is done,
// then repeats every PROOF_SHIMMER_CYCLE_S seconds — see the keyframe
// percentages on the shimmer keyframes for why the sweep itself is a brief
// fraction of that cycle rather than continuous.
export const PROOF_SHIMMER_CYCLE_S = 9; // within the requested 8-10s window
export const PROOF_SHIMMER_DELAY_S = 1.6; // just after the 1200ms count-up finishes

// ─── Button reflection sweep (every ~8s, not continuous) ───────────────────
export const PROOF_BUTTON_SWEEP_DURATION_S = 1.6;
export const PROOF_BUTTON_SWEEP_CYCLE_S = 8;
export const PROOF_BUTTON_SWEEP_REPEAT_DELAY_S = PROOF_BUTTON_SWEEP_CYCLE_S - PROOF_BUTTON_SWEEP_DURATION_S;
export const PROOF_BUTTON_SWEEP_TRANSITION: Transition = {
  duration: PROOF_BUTTON_SWEEP_DURATION_S,
  repeat: Infinity,
  repeatDelay: PROOF_BUTTON_SWEEP_REPEAT_DELAY_S,
  ease: "easeInOut",
};
export const proofButtonSweep = { x: ["-120%", "220%"] } as const;

// ─── Faint data-connection lines between the 4 stat cards ──────────────────
// A "hub and spoke" layout in a 0-100 viewBox matching the 2x2 grid: one
// line from each card's inner corner to the shared center point. Every
// PROOF_DATA_LINE_LIGHT_CYCLE_S seconds a small light travels along each
// line (staggered so all four don't fire in lockstep) rather than a
// constant animated dash — "every few seconds", per the request, not
// a constant sweep.
export interface DataLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
export const PROOF_DATA_LINES: readonly DataLine[] = [
  { x1: 22, y1: 22, x2: 50, y2: 50 }, // top-left card → center
  { x1: 78, y1: 22, x2: 50, y2: 50 }, // top-right card → center
  { x1: 22, y1: 78, x2: 50, y2: 50 }, // bottom-left card → center
  { x1: 78, y1: 78, x2: 50, y2: 50 }, // bottom-right card → center
];
export const PROOF_DATA_LINE_LIGHT_CYCLE_S = 3.6;
export const PROOF_DATA_LINE_LIGHT_DURATION_S = 1.1;
export const PROOF_DATA_LINE_LIGHT_STAGGER_S = 0.5; // offset between each of the 4 lights
