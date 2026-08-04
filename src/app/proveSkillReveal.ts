// Scroll-pinned reveal timing for the "Prove your trading skill." section's
// 5 desktop pain-point cards (ProveYourSkill in App.tsx), modeled on the
// pinned-section-with-staggered-card-reveal pattern observed on
// https://sadewa.framer.website/'s "Eliminate the bottlenecks that hold you
// back" section. These values are NOT measured from that site — Framer's
// compiled output doesn't expose readable timing curves — they're a
// deliberate reproduction of the *pattern* (pin, stagger top-to-bottom, each
// card converges from outside its resting spot, brief hold before release),
// confirmed acceptable with the project owner rather than assumed.

export interface CardReveal {
  fadeStart: number; // scrollYProgress (0-1) where this card starts fading/sliding in
  fadeEnd: number;   // scrollYProgress (0-1) where this card reaches full opacity/resting position
  fromX: number;     // px horizontal offset animated FROM (0 = no horizontal slide)
  fromY: number;     // px vertical offset animated FROM (0 = no vertical slide)
}

// How tall the scroll-tracking wrapper is, in vh — this is how much scroll
// distance the pinned reveal takes before the section releases and resumes
// normal scrolling. Originally 250; trimmed to 180 (plus a shorter hold
// below) after the project owner flagged too much empty scroll space in
// this section. Raised to 220 (2026-07-30, project owner request) purely to
// give the user more physical scroll distance — and so more time — between
// one card's reveal starting and the next one starting; the fadeStart/
// fadeEnd/hold fractions in PROVE_SKILL_CARD_REVEALS below are UNCHANGED, so
// every card's relative timing/overlap/hold ratio stays exactly as tuned —
// only the physical scroll distance each fraction maps to grows. One
// accepted consequence: the post-reveal hold (scrollYProgress 0.85-1, after
// the last card's fadeEnd) is now ~33vh of absolute scroll distance instead
// of ~27vh at 180vh — proportionally longer, since the hold's fraction of
// the total (0.15) is unchanged but the total itself grew. This is expected
// and intentional, not a bug, but is worth a specific look during visual QA
// since a near-identical "too much empty scroll" complaint is what drove the
// earlier 250vh→180vh trim on this same wrapper.
export const PROVE_SKILL_SCROLL_HEIGHT_VH = 220;

// One entry per PROVE_SKILL_CARDS index in App.tsx, same order: 0 top-left,
// 1 top-right, 2 mid-left, 3 mid-right, 4 bottom-center. Reveal windows
// overlap slightly for a continuous feel and leave scrollYProgress 0.85-1 as
// a (shortened, per owner feedback — was 0.75-1) hold at full visibility
// before the section unpins. fromX/fromY make each card converge toward its
// resting spot from the outside: top-row cards drop in from above, the
// mid-row and bottom-center cards rise from below, and each side card slides
// in from its own side.
export const PROVE_SKILL_CARD_REVEALS: readonly CardReveal[] = [
  { fadeStart: 0,    fadeEnd: 0.2,  fromX: -24, fromY: -24 }, // top-left
  { fadeStart: 0.12, fadeEnd: 0.32, fromX: 24,  fromY: -24 }, // top-right
  { fadeStart: 0.28, fadeEnd: 0.48, fromX: -24, fromY: 24 },  // mid-left
  { fadeStart: 0.4,  fadeEnd: 0.6,  fromX: 24,  fromY: 24 },  // mid-right
  { fadeStart: 0.55, fadeEnd: 0.85, fromX: 0,   fromY: 24 },  // bottom-center
];

// Mobile-only pinned reveal (see the `lg:hidden` pinned block in
// ProveYourSkill, App.tsx). Unlike the desktop cards, which scatter across
// quadrants and converge from their own side, mobile's 5 cards sit in a
// plain vertical stack — so each card's entrance is a straight fade + rise
// (fromY only, no fromX) staggered top-to-bottom in the same order they
// appear in the stack. These fractions are a deliberate engineering
// starting point, not a negotiated/measured value — expect to retune after
// visual QA, the same way PROVE_SKILL_SCROLL_HEIGHT_VH itself was retuned
// post-launch.
export const PROVE_SKILL_MOBILE_SCROLL_HEIGHT_VH = 200;

export const PROVE_SKILL_MOBILE_CARD_REVEALS: readonly CardReveal[] = [
  { fadeStart: 0,    fadeEnd: 0.25, fromX: 0, fromY: 24 },
  { fadeStart: 0.15, fadeEnd: 0.4,  fromX: 0, fromY: 24 },
  { fadeStart: 0.3,  fadeEnd: 0.55, fromX: 0, fromY: 24 },
  { fadeStart: 0.45, fadeEnd: 0.7,  fromX: 0, fromY: 24 },
  { fadeStart: 0.6,  fadeEnd: 0.85, fromX: 0, fromY: 24 },
];
