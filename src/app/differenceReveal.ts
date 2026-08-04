// Reveal timing for the "The difference is clear." comparison section
// (ComparisonTable in App.tsx). Two independent effects, both modeled on
// https://sadewa.framer.website/'s equivalent section, confirmed by live
// scrolling through that site (not just reading its static HTML — an
// earlier attempt based on static HTML alone missed that this section
// pins and crossfades; see the pinned-crossfade-correction plan for the
// live-scrolling evidence):
//
// 1. On first scrolling into view, the heading's words cascade in
//    left-to-right (DIFFERENCE_HEADING_* below — unchanged from the
//    original, correct implementation).
// 2. On continued scrolling, the section pins (sticky) for an extra
//    scroll distance, during which the already-revealed heading slides
//    left out of view while the FYT-Advantage badge/heading/subcopy
//    and the comparison grid — as one combined content block — slide
//    in from the right to replace it in the same spot
//    (DIFFERENCE_PIN_SCROLL_HEIGHT_VH / DIFFERENCE_HEADING_EXIT_REVEAL /
//    DIFFERENCE_CONTENT_ENTER_REVEAL below). This is the same
//    tall-wrapper-plus-sticky-child, scrollYProgress-driven technique
//    already used for PROVE_SKILL_SCROLL_HEIGHT_VH / PROVE_SKILL_CARD_REVEALS
//    in proveSkillReveal.ts. Like ProveYourSkill, this section also has a
//    mobile pinned variant (DifferenceMobilePinnedCrossfade in App.tsx),
//    reusing these same constants unchanged — the fadeStart/fadeEnd
//    fractions below are resolution-independent scroll-progress values, and
//    the xFrom/xTo slide distances already safely exceed any mobile
//    viewport's narrower clip width (see the derivation comments below).
//    prefers-reduced-motion still gets a plain static stacked layout
//    instead, at any breakpoint (see ComparisonTable in App.tsx).
//
// What's measured vs. reproduced:
// - The word initial opacity (0.001) and initial x-offset (20px) were read
//   directly out of the reference site's server-rendered HTML — exact, not
//   estimates.
// - The content block's 400px initial x-offset was read the same way, from
//   the (now differently-used) "Difference" content wrapper — but that raw
//   400px measurement is NOT what DIFFERENCE_CONTENT_ENTER_REVEAL.xFrom uses
//   today: 400px isn't enough to actually clip the content block out of the
//   section's overflow-hidden container (a normal-flow, full-width block
//   only 400px offset still overlaps the visible area), so xFrom was
//   widened to 1400 for correctness — see the comment on
//   DIFFERENCE_CONTENT_ENTER_REVEAL below for the full reasoning.
// - The stagger delay between words, each word's duration, the pin scroll
//   height, and the exact scrollYProgress breakpoints where the heading
//   finishes exiting / the content starts and finishes entering are NOT
//   independently measurable with certainty (Framer's real runtime timing
//   isn't exposed by static HTML, and rapid programmatic scroll sampling
//   produced inconsistent readings — see the correction plan). These are a
//   deliberate reproduction of the *pattern* observed via live screenshots
//   (heading visible → slides left over roughly the first third of the
//   pinned scroll range, exiting the clipped view → content block slides in
//   from the right starting at the very beginning of the pinned range,
//   reaching full visibility by just under halfway through — well before
//   the heading has fully exited, so there's no gap where the section
//   renders blank — with a hold after), confirmed acceptable with the
//   project owner rather than assumed.

import type { Variants } from "motion/react";

// One entry per word in the heading, in display order. Kept as a literal
// array (not a runtime .split()) so the rendered word count/order is
// explicit and can't silently drift if the heading copy changes without
// this file being updated to match.
export const DIFFERENCE_HEADING_WORDS: readonly string[] = ["The", "difference", "is", "clear."];

export const DIFFERENCE_HEADING_WORD_STAGGER_S = 0.08;
export const DIFFERENCE_HEADING_WORD_DURATION_S = 0.4;

// Shared easing for the heading's word-stagger entrance.
const DIFFERENCE_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const DIFFERENCE_HEADING_PARENT_VARIANTS: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: DIFFERENCE_HEADING_WORD_STAGGER_S } },
};

export const DIFFERENCE_HEADING_WORD_VARIANTS: Variants = {
  hidden: { opacity: 0.001, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DIFFERENCE_HEADING_WORD_DURATION_S, ease: DIFFERENCE_EASE },
  },
};

// A single scroll-driven crossfade window: as `progress` (scrollYProgress
// of the pinned wrapper) moves from fadeStart to fadeEnd, x interpolates
// linearly from xFrom to xTo. The opacityFrom/opacityTo fields are still
// declared below purely for shape-compatibility (so existing object
// literals didn't need restructuring) — nothing reads them at runtime
// anymore. Do NOT assume they're functional or "fix" the crossfade by
// wiring opacity back up: it was deliberately removed because opacity
// motion values were found to desync from their own inline style under
// this project's motion/framer-motion versions (see the comments on
// DIFFERENCE_HEADING_EXIT_REVEAL and DIFFERENCE_CONTENT_ENTER_REVEAL
// below). Hide/reveal is done purely via `x`, sliding elements outside
// the section's clipped (overflow-hidden) container.
export interface DifferenceCrossfadeReveal {
  fadeStart: number;
  fadeEnd: number;
  opacityFrom: number;
  opacityTo: number;
  xFrom: number;
  xTo: number;
}

// How tall the scroll-tracking wrapper is, in vh — this is how much scroll
// distance the pinned heading-exit + content-enter crossfade takes before
// the section releases and resumes normal scrolling. 195vh total wrapper
// height minus the 100vh sticky viewport leaves ~95vh of extra scroll
// runway behind the pinned container, matching the reference site's own
// measured pinned section (confirmed via live scrolling: ~710px of extra
// scroll distance behind a ~748px-tall sticky container, i.e. ~95vh of
// runway) far more closely than the previous 150vh value (which only gave
// ~50vh of runway — roughly half — and made the crossfade feel rushed).
export const DIFFERENCE_PIN_SCROLL_HEIGHT_VH = 195;

// The heading slides left over the first third of the pinned range, exiting
// the clipped view, then holds gone for the rest.
//
// opacityFrom/opacityTo are equal (a no-op) rather than 1→0: live browser
// testing found the heading's rendered (getComputedStyle) opacity diverging
// from its own just-set inline style value under this project's installed
// motion/framer-motion versions, even after aligning motion's version pin
// to match (see the 2026-07-28 crossfade opacity-desync-fix plan and its
// verification note). `x` was proven reliable throughout that
// investigation, so hiding/revealing is now done purely by sliding the
// heading far enough left (-1400) to exit the visible, clipped area. -1400
// is chosen to safely exceed the clipped container's actual max width —
// ComparisonTable's own container is capped at max-w-[1280px] mx-auto, but
// with its lg:px-[80px] padding on each side the clipped element inside it
// is never wider than 1280 − 80 − 80 = 1120px, at any viewport ≥ the lg:
// 1024px breakpoint that gates this whole component. The section's existing
// overflow-hidden makes the heading disappear once it's past the
// container's edge, with no dependency on opacity at all.
export const DIFFERENCE_HEADING_EXIT_REVEAL: DifferenceCrossfadeReveal = {
  fadeStart: 0,
  fadeEnd: 0.35,
  opacityFrom: 1,
  opacityTo: 1,
  xFrom: 0,
  xTo: -1400,
};

// The content block (badge + heading + subcopy + comparison grid, as one
// unit) starts sliding in from the very beginning of the pinned range
// (fadeStart: 0) and reaches the clipped container's edge well before the
// heading has fully exited (fadeEnd: 0.45, vs. the heading's own
// fadeEnd: 0.35 plus its own travel time to actually clear the clip box) —
// so content is already arriving while the heading is still leaving, with
// no stretch of scroll where the section renders fully blank. This retimes
// a prior version of this fix (fadeStart: 0.25, fadeEnd: 0.8) that widened
// xFrom to 1400 for correctness (see below) but left the old, narrower
// timing window in place, which produced exactly that blank-section dead
// gap — see DIFFERENCE_CONTENT_ENTER_REVEAL's test coverage in
// differenceReveal.test.ts. It still reaches full visibility with room for
// a hold before the section releases (matches PROVE_SKILL_CARD_REVEALS's
// own documented hold-before-release pattern).
// opacityFrom/opacityTo are equal (a no-op), for the same reason as
// DIFFERENCE_HEADING_EXIT_REVEAL above — see that constant's comment.
// xFrom is 1400, NOT the reference site's raw measured 400px (see the
// top-of-file "What's measured vs. reproduced" note): the content block is
// a normal-flow, w-full element, so its box is exactly as wide as the
// clipped container itself (up to ~1120px — see the width derivation in
// DIFFERENCE_HEADING_EXIT_REVEAL's comment above). At only 400px of offset
// it would still overlap the visible, clipped area by roughly
// 1120 − 400 = 720px at the widest viewport — i.e. it would NOT actually be
// clipped out of view, and the section would render broken (heading and
// content overlapping) at rest. 1400 mirrors the heading's own -1400
// magnitude and, for the same reason, safely exceeds the ~1120px clip
// width at any viewport, guaranteeing the content starts fully clipped out
// of view to the right. It then slides to xTo: 0 to become visible — no
// opacity involved.
export const DIFFERENCE_CONTENT_ENTER_REVEAL: DifferenceCrossfadeReveal = {
  fadeStart: 0,
  fadeEnd: 0.45,
  opacityFrom: 1,
  opacityTo: 1,
  xFrom: 1400,
  xTo: 0,
};
