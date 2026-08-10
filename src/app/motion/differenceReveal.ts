
import type { Variants } from "motion/react";

export const DIFFERENCE_HEADING_WORDS: readonly string[] = ["The", "difference", "is", "clear."];

export const DIFFERENCE_HEADING_WORD_STAGGER_S = 0.08;
export const DIFFERENCE_HEADING_WORD_DURATION_S = 0.4;

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

export interface DifferenceCrossfadeReveal {
  fadeStart: number;
  fadeEnd: number;
  opacityFrom: number;
  opacityTo: number;
  xFrom: number;
  xTo: number;
}

export const DIFFERENCE_PIN_SCROLL_HEIGHT_VH = 195;

export const DIFFERENCE_HEADING_EXIT_REVEAL: DifferenceCrossfadeReveal = {
  fadeStart: 0,
  fadeEnd: 0.35,
  opacityFrom: 1,
  opacityTo: 1,
  xFrom: 0,
  xTo: -1400,
};

export const DIFFERENCE_CONTENT_ENTER_REVEAL: DifferenceCrossfadeReveal = {
  fadeStart: 0,
  fadeEnd: 0.45,
  opacityFrom: 1,
  opacityTo: 1,
  xFrom: 1400,
  xTo: 0,
};

/**
 * Mobile only. `useScroll`'s 0->1 progress for a `target`-tracked sticky
 * wrapper only spans (wrapperHeight - viewportHeight) -- the final
 * `childHeight` worth of the wrapper is always the natural sticky-release/
 * scroll-away into the next section, which is normal and not the issue.
 * The desktop constants above finish their crossfade at 45% progress, then
 * hold the pin doing nothing until 100% -- on mobile, where the wrapper is
 * much closer in height to one viewport, that dead hold reads as a large
 * blank gap before the next section arrives. The reveals below (unchanged)
 * already push fadeEnd out to use most of the pin duration instead of
 * holding early. This height is the other half of that fix: it sets how
 * much (wrapperHeight - viewportHeight) scroll distance the whole pin gets,
 * so it's tuned down from its earlier, taller value to shrink the dead
 * hold at the tail (now a brief, barely-felt pause) without touching the
 * crossfade's own timing/easing/opacity/x values.
 */
export const DIFFERENCE_MOBILE_PIN_SCROLL_HEIGHT_VH = 125;

/**
 * DifferenceScrollLayer only ever animates `x` (opacity stays 1 throughout
 * -- see DifferenceCrossfadeReveal's opacityFrom/opacityTo, both 1 here and
 * on desktop). The desktop reveals slide +/-1400px, sized for its ~1280px
 * layout. Mobile inherited that same 1400px distance against a ~390px
 * viewport, so each element only needed a fraction of its travel to clear
 * the screen -- the heading was fully off-screen (and the table not yet
 * on-screen) for a wide middle stretch of the crossfade, showing nothing
 * but blank white background mid-scroll. Shrinking the distance to clear a
 * mobile viewport (with margin up to 430px wide) keeps both elements
 * on-screen, actively sliding, for far more of the same fadeStart/fadeEnd
 * timing -- closing that gap without touching the timing curve itself.
 */
export const DIFFERENCE_MOBILE_HEADING_EXIT_REVEAL: DifferenceCrossfadeReveal = {
  fadeStart: 0,
  fadeEnd: 0.65,
  opacityFrom: 1,
  opacityTo: 1,
  xFrom: 0,
  xTo: -480,
};

export const DIFFERENCE_MOBILE_CONTENT_ENTER_REVEAL: DifferenceCrossfadeReveal = {
  fadeStart: 0,
  fadeEnd: 0.8,
  opacityFrom: 1,
  opacityTo: 1,
  xFrom: 480,
  xTo: 0,
};
