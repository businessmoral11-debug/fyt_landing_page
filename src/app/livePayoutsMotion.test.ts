import { describe, it, expect } from "vitest";
import {
  LIVE_PAYOUTS_ROW_STAGGER_S,
  livePayoutsRowHover,
  LIVE_PAYOUTS_ROW_HOVER_TRANSITION,
  LIVE_PAYOUTS_BADGE_PULSE_DURATION_S,
  LIVE_PAYOUTS_DOT_BREATHE_DURATION_S,
  LIVE_PAYOUTS_REFLECTION_SWEEP_CYCLE_S,
  LIVE_PAYOUTS_REFLECTION_SWEEP_DURATION_S,
  LIVE_PAYOUTS_REFLECTION_SWEEP_REPEAT_DELAY_S,
  LIVE_PAYOUTS_BG_GLOW_OPACITY,
  LIVE_PAYOUTS_SPOTLIGHT_OPACITY,
  LIVE_PAYOUTS_AMOUNT_DELAY_S,
  LIVE_PAYOUTS_BADGE_DELAY_S,
  LIVE_PAYOUTS_DOT_DELAY_S,
} from "./livePayoutsMotion";

describe("livePayoutsMotion timing bounds", () => {
  it("rows stagger 70ms apart", () => {
    expect(LIVE_PAYOUTS_ROW_STAGGER_S).toBe(0.07);
  });

  it("row hover lifts 2px with a 250ms transition", () => {
    expect(livePayoutsRowHover.y).toBe(-2);
    expect(LIVE_PAYOUTS_ROW_HOVER_TRANSITION.duration).toBe(0.25);
  });

  it("badge pulse and dot breathe are gentle (multi-second) loops", () => {
    expect(LIVE_PAYOUTS_BADGE_PULSE_DURATION_S).toBeGreaterThan(2);
    expect(LIVE_PAYOUTS_DOT_BREATHE_DURATION_S).toBeGreaterThan(2);
  });

  it("reflection sweep cycles within the requested 15-20s window", () => {
    expect(LIVE_PAYOUTS_REFLECTION_SWEEP_CYCLE_S).toBeGreaterThanOrEqual(15);
    expect(LIVE_PAYOUTS_REFLECTION_SWEEP_CYCLE_S).toBeLessThanOrEqual(20);
    expect(LIVE_PAYOUTS_REFLECTION_SWEEP_DURATION_S + LIVE_PAYOUTS_REFLECTION_SWEEP_REPEAT_DELAY_S).toBe(LIVE_PAYOUTS_REFLECTION_SWEEP_CYCLE_S);
  });

  it("background glow and spotlight stay within the requested 5-8% / subtle range", () => {
    expect(LIVE_PAYOUTS_BG_GLOW_OPACITY).toBeGreaterThanOrEqual(0.05);
    expect(LIVE_PAYOUTS_BG_GLOW_OPACITY).toBeLessThanOrEqual(0.08);
    expect(LIVE_PAYOUTS_SPOTLIGHT_OPACITY).toBeLessThan(0.1);
  });

  it("cascading reveal offsets are ordered: amount -> badge -> dot", () => {
    expect(LIVE_PAYOUTS_AMOUNT_DELAY_S).toBeLessThan(LIVE_PAYOUTS_BADGE_DELAY_S);
    expect(LIVE_PAYOUTS_BADGE_DELAY_S).toBeLessThan(LIVE_PAYOUTS_DOT_DELAY_S);
  });
});
