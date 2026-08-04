// Motion tuning for the "Proof in Numbers" section — kept out of App.tsx
// (same rationale as proveSkillReveal.ts / howItWorksReveal.ts) so the
// timing values are independently reviewable/testable instead of buried as
// inline transition props.
import type { TargetAndTransition, Transition, Variants } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const PROOF_SPRING: Transition = { type: "spring", stiffness: 90, damping: 18, mass: 1 };

// ─── Section entrance: left content slides in from the left, right stats
// slide in from the right, both starting together ("meet in the middle").
// Each side is itself a stagger container for its own children — the
// spring's own settle time (~0.5-0.6s at this stiffness/damping) is folded
// into delayChildren so the inner reveals feel like they follow the slide
// rather than racing ahead of it.
export const PROOF_SIDE_SLIDE_X = 80; // px-equivalent (Framer treats bare numbers on x as px)

export const proofLeftReveal: Variants = {
  hidden: { opacity: 0, x: -PROOF_SIDE_SLIDE_X },
  show: {
    opacity: 1,
    x: 0,
    transition: { ...PROOF_SPRING, staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const proofRightReveal: Variants = {
  hidden: { opacity: 0, x: PROOF_SIDE_SLIDE_X },
  show: {
    opacity: 1,
    x: 0,
    transition: { ...PROOF_SPRING, staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

// Simple fade+rise — badge and paragraph, no scale (kept deliberately
// plainer than the button/card reveals so those two read as the "premium"
// beats of the sequence, not every element).
export const proofRevealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

// ─── Heading: reveals line-by-line, not word-by-word (Hero already owns the
// word-by-word treatment via RevealWords — this section's heading is only
// ever 2 lines, so a per-line stagger reads as more deliberate/premium).
export const proofHeadlineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
export const proofHeadlineLine: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

// ─── Button: fades up with a slight scale — distinct from the plain fade
// used by the badge/paragraph, since this is the left column's final beat.
export const proofButtonReveal: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

// ─── Stat cards: TL → TR → BL → BR (natural DOM/grid order already matches
// this — no reordering needed), 80ms apart via proofRightReveal's
// staggerChildren above.
export const PROOF_CARD_STAGGER = 0.08;
export const proofCardReveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
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

// Each card also floats independently, on top of the panel-level float
// above — small (2-3px) and slow (10-12s), with a per-index phase offset so
// the 4 cards never move in lockstep. This is a SEPARATE continuous
// `animate` on an outer wrapper per card (not the card element that also
// carries the entrance `variants` + `whileHover` — Framer Motion can't
// combine an inherited-variant target state and an independent explicit
// `animate` loop on the same component) — see ProofStatCard in App.tsx.
export const PROOF_CARD_FLOAT_AMPLITUDE_PX = 2.5; // within the requested 2-3px
export const PROOF_CARD_FLOAT_DURATION_S = 11; // within the requested 10-12s
export const PROOF_CARD_FLOAT_STAGGER_S = 1.1; // per-card start offset, index 0-3

// ─── Card hover: lift + hover-only extras. Framer Motion replaces (not
// merges) the `boxShadow` value on hover, so the resting-state inset
// highlights (inner top-light / inner blue tint — see the card's base
// `style.boxShadow` in App.tsx) are repeated here alongside the deeper
// outer glow, or hovering would visually strip them away.
export const PROOF_CARD_HOVER_TRANSITION: Transition = { type: "spring", stiffness: 300, damping: 22 };
export const proofCardHover = {
  y: -4,
  scale: 1.015,
  borderColor: "rgba(96,165,250,0.5)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.09), inset 0 0 40px rgba(59,130,246,0.06), " +
    "0 24px 60px -18px rgba(59,130,246,0.4), 0 0 0 1px rgba(96,165,250,0.25)",
} as const;

// ─── Card border "breathing" — a separate absolutely-positioned bordered
// overlay per card, animated on `opacity` only (never `borderColor`
// directly, which isn't GPU-composited) so this stays within the
// transform/opacity-only budget. See PROOF_CARD_BREATHE_STAGGER_S for the
// per-card phase offset.
export const PROOF_CARD_BREATHE_DURATION_S = 10;
export const PROOF_CARD_BREATHE_OPACITY = [0, 1, 0];
export const PROOF_CARD_BREATHE_STAGGER_S = 0.4;

// ─── Per-icon idle animation (very subtle; each of the 4 stats reads
// differently at a glance without drawing attention to itself), all cycling
// within the requested 8-10s window with a per-icon start delay so the 4
// icons never animate in lockstep with each other.
const PROOF_ICON_CYCLE_S = 9;
export const PROOF_ICON_DOLLAR_PULSE: Transition = { duration: PROOF_ICON_CYCLE_S, repeat: Infinity, ease: "easeInOut" };
export const proofIconDollarPulse = { scale: [1, 1.08, 1] } as const;

// "Network pulse" for Funded Traders is a soft expanding ring behind the
// icon circle, not a scale on the icon itself.
export const PROOF_ICON_NETWORK_RING_TRANSITION: Transition = {
  duration: PROOF_ICON_CYCLE_S,
  repeat: Infinity,
  ease: "easeInOut",
  delay: 1,
};
export const proofIconNetworkRing = { scale: [1, 1.5], opacity: [0.5, 0] } as const;

export const PROOF_ICON_GLOBE_SPIN_TRANSITION: Transition = { duration: PROOF_ICON_CYCLE_S, repeat: Infinity, ease: "linear", delay: 2 };
export const proofIconGlobeSpin = { rotate: 360 } as const;

// Fast dip + slow recovery reads as a "pulse" rather than smooth breathing.
export const PROOF_ICON_LIGHTNING_TRANSITION: Transition = {
  duration: PROOF_ICON_CYCLE_S,
  repeat: Infinity,
  ease: "easeInOut",
  times: [0, 0.15, 1],
  delay: 3,
};
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
// one deliberate exception to the "transform/opacity only" rule, because a
// text-shaped light sweep isn't achievable any other way without
// duplicating the text as a mask, and background-position compositing is
// still cheap (no layout, no repaint of surrounding content). Delayed past
// the ~1.2s count-up duration so it only ever plays once counting is done,
// then repeats every PROOF_SHIMMER_CYCLE_S seconds.
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

// ─── Faint hub-and-spoke data-connection lines between the 4 stat cards ────
// (unchanged from the prior pass — a different, always-faintly-visible
// decorative detail from the new left↔right "meeting line" below).
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

// ─── New: the single left↔right "meeting line" — grows once, after both
// content halves have visually arrived, then briefly plays a one-shot
// traveling glow. Hover-brightening is CSS-only (a `:has()` rule in
// tailwind.css) rather than React state, so no re-render is involved.
export const PROOF_CONNECTION_LINE_DELAY_S = 0.7; // ~ when the left/right springs have settled
export const PROOF_CONNECTION_LINE_DURATION_S = 0.5;
export const PROOF_CONNECTION_LINE_OPACITY = 0.3;
export const PROOF_CONNECTION_LINE_TRAVEL_DELAY_S = PROOF_CONNECTION_LINE_DELAY_S + PROOF_CONNECTION_LINE_DURATION_S;
export const PROOF_CONNECTION_LINE_TRAVEL_DURATION_S = 1;

// ─── Section-wide mouse spotlight (distinct from each card's own, brighter,
// tightly-clipped cursor glow) — very subtle, ambient, follows the cursor
// anywhere within the panel.
export const PROOF_SPOTLIGHT_OPACITY = 0.05;
