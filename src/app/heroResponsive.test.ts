import { describe, it, expect } from "vitest";
import {
  HERO_STAGE_WIDTH,
  HERO_STAGE_HEIGHT,
  heroStageScale,
  HERO_LABEL_BOOST,
  heroLabelScale,
} from "./heroResponsive";
import { MOBILE_ORBIT_LABELS, MOBILE_LABEL_LAYOUT, mobileLabelBoxCss } from "./heroOrbit";

describe("HERO_STAGE_WIDTH / HERO_STAGE_HEIGHT", () => {
  it("matches the desktop hero stage's fixed 1440x1080 size", () => {
    expect(HERO_STAGE_WIDTH).toBe(1440);
    expect(HERO_STAGE_HEIGHT).toBe(1080);
  });
});

describe("heroStageScale", () => {
  it("returns 1 when the viewport exactly matches the stage width", () => {
    expect(heroStageScale(1440)).toBe(1);
  });

  it("scales down proportionally for narrower viewports", () => {
    expect(heroStageScale(375)).toBeCloseTo(375 / 1440, 10);
    expect(heroStageScale(1023)).toBeCloseTo(1023 / 1440, 10);
  });

  it("scales linearly with width", () => {
    expect(heroStageScale(720)).toBeCloseTo(heroStageScale(360) * 2, 10);
  });

  it("returns 0 for a zero-width viewport", () => {
    expect(heroStageScale(0)).toBe(0);
  });
});

describe("heroLabelScale", () => {
  it("equals HERO_LABEL_BOOST when the stage is at 1:1 (desktop)", () => {
    expect(heroLabelScale(1)).toBe(HERO_LABEL_BOOST);
  });

  it("is larger than 1 for any shrunk mobile stage scale", () => {
    expect(heroLabelScale(heroStageScale(375))).toBeGreaterThan(1);
  });

  it("combined with the stage scale, yields a constant net label size regardless of viewport", () => {
    const netAt375 = heroLabelScale(heroStageScale(375)) * heroStageScale(375);
    const netAt1024 = heroLabelScale(heroStageScale(1024)) * heroStageScale(1024);
    expect(netAt375).toBeCloseTo(HERO_LABEL_BOOST, 10);
    expect(netAt375).toBeCloseTo(netAt1024, 10);
  });
});

describe("HERO_LABEL_BOOST (mobile)", () => {
  it("shrinks mobile labels below their true desktop size", () => {
    expect(HERO_LABEL_BOOST).toBeLessThan(1);
    expect(HERO_LABEL_BOOST).toBeGreaterThan(0);
  });
});

// Regression guard for the actual bug the old 3-label system worked around:
// at every integer mobile viewport width from 320 to 1023px, each of the 5
// MOBILE_ORBIT_LABELS' rendered text boxes must neither overlap a
// same-row neighbor nor clip the viewport edge. Unlike the old guard (which
// needed real DM Sans glyph widths from an offline fontTools sweep, because
// labels used intrinsic nowrap width), this one uses MOBILE_LABEL_LAYOUT's
// fixed wrapWidth per label — overlap avoidance is now pure arithmetic on
// shipped constants, not text-content-dependent, so no external measurement
// step is needed. See this plan's derivation notes for why width=320 is
// always the tightest case: docs/superpowers/plans/2026-08-01-mobile-hero-two-row-labels.md
describe("MOBILE_ORBIT_LABELS layout — no overlap, no edge clipping (regression guard)", () => {
  // Matches the real DOM: a 10px dot, a 12px flex gap, then up to 2 lines of
  // text at the labels' local (pre-boost) leading of 34px (App.tsx's mobile
  // label text uses text-[26px] leading-[34px], scaled by HERO_LABEL_BOOST —
  // see Task 4). Using the 2-line height is the conservative (taller) case;
  // it only affects the vertical (y) extent, never the horizontal (x) extent
  // this test's overlap check depends on.
  const UNSCALED_BLOCK_HEIGHT = 10 + 12 + 34 * 2;
  const MIN_SAFE_MARGIN_PX = 12;

  function screenX0FromTranslateX(translateX: string, screenLeft: number, screenWidth: number): number {
    if (translateX === "0%") return screenLeft;
    if (translateX === "-100%") return screenLeft - screenWidth;
    return screenLeft - screenWidth / 2; // "-50%"
  }

  // x0/x1 below are true absolute screen px: valid because HeroStageMobile is
  // horizontally centered via left-1/2 + translateX(-50%), so the local-720
  // stage center lands exactly at screen-center at any scale. y0/y1 are
  // stage-local x scale only — valid for comparing labels' vertical extents
  // against each other, but NOT as an absolute screen Y, since
  // HeroStageMobile's transform-origin is bottom-anchored, not
  // center-anchored.
  function labelBox(index: number, viewportWidth: number) {
    const stageScale = heroStageScale(viewportWidth);
    const netScale = HERO_LABEL_BOOST; // heroLabelScale(stageScale) * stageScale === HERO_LABEL_BOOST, always
    const { left, top } = MOBILE_ORBIT_LABELS[index];
    const { anchor, wrapWidth } = MOBILE_LABEL_LAYOUT[index];
    const { translateX } = mobileLabelBoxCss(anchor);
    const screenLeft = left * stageScale;
    const screenTop = top * stageScale;
    const screenWidth = wrapWidth * netScale;
    const x0 = screenX0FromTranslateX(translateX, screenLeft, screenWidth);
    return {
      x0,
      x1: x0 + screenWidth,
      y0: screenTop,
      y1: screenTop + UNSCALED_BLOCK_HEIGHT * netScale,
    };
  }

  it("never lets two same-row mobile labels' boxes come within 12px of each other, at any width 320-1023px", () => {
    for (let width = 320; width <= 1023; width++) {
      const boxes = MOBILE_ORBIT_LABELS.map((_, i) => labelBox(i, width));
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i];
          const b = boxes[j];
          const yOverlaps = a.y0 < b.y1 && b.y0 < a.y1;
          if (!yOverlaps) continue; // different rows never collide horizontally
          const xGap = Math.max(b.x0 - a.x1, a.x0 - b.x1);
          expect(
            xGap,
            `width=${width} ${MOBILE_ORBIT_LABELS[i].label} vs ${MOBILE_ORBIT_LABELS[j].label}`,
          ).toBeGreaterThanOrEqual(MIN_SAFE_MARGIN_PX);
        }
      }
    }
  });

  it("never lets a mobile label's box clip the viewport's left/right edge, at any width 320-1023px", () => {
    for (let width = 320; width <= 1023; width++) {
      for (let i = 0; i < MOBILE_ORBIT_LABELS.length; i++) {
        const box = labelBox(i, width);
        expect(box.x0, `width=${width} ${MOBILE_ORBIT_LABELS[i].label} left edge`).toBeGreaterThanOrEqual(
          MIN_SAFE_MARGIN_PX,
        );
        expect(box.x1, `width=${width} ${MOBILE_ORBIT_LABELS[i].label} right edge`).toBeLessThanOrEqual(
          width - MIN_SAFE_MARGIN_PX,
        );
      }
    }
  });

  it("confirms the top row never vertically overlaps the bottom row, at the narrowest width (320px)", () => {
    const top = labelBox(0, 320);
    const bottom = labelBox(1, 320);
    expect(top.y1).toBeLessThan(bottom.y0);
  });

  // No automated test previously covered the bottom-row label stack's
  // vertical clearance against the mobile radar's own reserved clearance —
  // only same-row overlap and edge clipping were guarded above. This cheaply
  // confirms the bottom row's boxes stay within the stage's own local y=1080
  // bottom edge PLUS the flat allowance HeroStageMobile adds below it.
  //
  // 40 here must match MOBILE_RADAR_BOTTOM_GAP_PX in App.tsx — HeroStageMobile
  // adds that flat gap below the local-1080 stage bottom before Hero's own
  // (overflow-hidden) edge, so content extending past local y=1080 is still
  // fully visible as long as the overflow stays within this allowance. If
  // either value changes, re-verify this margin.
  const MOBILE_RADAR_BOTTOM_GAP_PX = 40;

  it("keeps the bottom row's label boxes within the mobile radar's reserved vertical clearance at the narrowest width", () => {
    for (const index of [1, 2, 3]) {
      const box = labelBox(index, 320);
      const limit = 1080 * heroStageScale(320) + MOBILE_RADAR_BOTTOM_GAP_PX;
      expect(
        box.y1,
        `width=320 ${MOBILE_ORBIT_LABELS[index].label} bottom edge (margin ${(limit - box.y1).toFixed(1)}px)`,
      ).toBeLessThanOrEqual(limit);
    }
  });
});
