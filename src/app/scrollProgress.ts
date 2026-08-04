import { useMotionValue, useMotionValueEvent, type MotionValue } from "motion/react";

// Generic scroll-progress helper shared by every pinned-scroll-reveal
// section in this codebase that needs it (currently: ProveYourSkill's
// desktop and mobile pinned blocks in App.tsx — see proveSkillReveal.ts
// for the reveal-timing data those sections drive off this). Originally
// built specifically for ProveYourSkill's desktop card reveal, then moved
// here once a second consumer (ProveYourSkill's mobile pinned block)
// needed the exact same fix.

// Advances only when `latest` exceeds the running max — never decreases.
// Pulled out as a pure function (rather than inlined in the hook below) so
// the "never goes backward" rule is directly unit-testable without a
// React/DOM environment — this project's vitest config runs in plain
// "node", with no jsdom/testing-library available.
// Deliberately uses a strict `>` comparison rather than `Math.max`: this
// makes a non-finite (NaN) sample a no-op (the previous max is kept)
// instead of permanently poisoning the tracked value the way
// `Math.max(prev, NaN)` would. This is defensive rather than a fix for an
// observed failure: framer-motion's useScroll clamps a display:none
// target's progress to exactly 0, not NaN, so this guard exists in case
// that internal behavior ever changes, not because NaN is known to occur
// today. (It only protects the `latest` argument — a NaN `previousMax`
// would still poison the ratchet forever, though nothing produces one
// currently.)
export function trackMonotonicMax(previousMax: number, latest: number): number {
  return latest > previousMax ? latest : previousMax;
}

// Wraps a scroll-linked progress MotionValue (e.g. a pinned section's
// scrollYProgress) so the value driving its reveal only ever increases.
// Raw scrollYProgress can wobble backward by a fraction of a percent from
// trackpad momentum/rubber-banding during a fast scroll — since each
// card's opacity/x/y is driven directly off that value, even a tiny
// backward wobble was visible as a flicker/dim once a card was already at
// (or near) full opacity. Ratcheting removes the wobble by construction:
// the output can only hold or advance, never retreat, so a card can never
// visibly fade while the user keeps scrolling down. Trade-off, confirmed
// acceptable with the project owner: if the user deliberately scrolls back
// up through the section, cards stay fully visible instead of
// reverse-animating. The ratchet does reset to 0 when the source progress
// itself returns to exactly 0 (the section scrolled all the way back
// above/at the viewport), so a full exit-and-re-entry still replays the
// reveal from the start.
export function useMonotonicProgress(source: MotionValue<number>): MotionValue<number> {
  const output = useMotionValue(source.get());
  useMotionValueEvent(source, "change", (latest) => {
    output.set(latest === 0 ? 0 : trackMonotonicMax(output.get(), latest));
  });
  return output;
}
