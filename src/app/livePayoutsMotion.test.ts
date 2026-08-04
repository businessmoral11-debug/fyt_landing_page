import { describe, it, expect } from "vitest";
import {
  LIVE_PAYOUTS_CARD_STAGGER_S,
  livePayoutsCardHover,
  LIVE_PAYOUTS_CARD_TILT_MAX_DEG,
  LIVE_PAYOUTS_CARD_SPOTLIGHT_OPACITY,
  LIVE_PAYOUTS_DOT_BREATHE_DURATION_S,
  LIVE_PAYOUTS_CTA_SHIMMER_CYCLE_S,
  LIVE_PAYOUTS_CTA_SHIMMER_DURATION_S,
  LIVE_PAYOUTS_CTA_SHIMMER_REPEAT_DELAY_S,
  LIVE_PAYOUTS_BG_GLOW_OPACITY,
  LIVE_PAYOUTS_AMOUNT_DELAY_S,
  LIVE_PAYOUTS_CHECK_DELAY_S,
  LIVE_PAYOUTS_DOT_DELAY_S,
  LIVE_PAYOUTS_DEV_ROTATION_INTERVAL_MS,
} from "./livePayoutsMotion";

describe("livePayoutsMotion timing bounds", () => {
  it("cards stagger 80ms apart", () => {
    expect(LIVE_PAYOUTS_CARD_STAGGER_S).toBe(0.08);
  });

  it("card hover lifts 8px", () => {
    expect(livePayoutsCardHover.y).toBe(-8);
  });

  it("card tilt caps at 3 degrees", () => {
    expect(LIVE_PAYOUTS_CARD_TILT_MAX_DEG).toBe(3);
  });

  it("card spotlight and background glow stay subtle", () => {
    expect(LIVE_PAYOUTS_CARD_SPOTLIGHT_OPACITY).toBeLessThan(0.2);
    expect(LIVE_PAYOUTS_BG_GLOW_OPACITY).toBeGreaterThanOrEqual(0.05);
    expect(LIVE_PAYOUTS_BG_GLOW_OPACITY).toBeLessThanOrEqual(0.08);
  });

  it("live dot breathes on a multi-second gentle loop", () => {
    expect(LIVE_PAYOUTS_DOT_BREATHE_DURATION_S).toBeGreaterThan(2);
  });

  it("button shimmer cycles every 5s", () => {
    expect(LIVE_PAYOUTS_CTA_SHIMMER_CYCLE_S).toBe(5);
    expect(LIVE_PAYOUTS_CTA_SHIMMER_DURATION_S + LIVE_PAYOUTS_CTA_SHIMMER_REPEAT_DELAY_S).toBe(LIVE_PAYOUTS_CTA_SHIMMER_CYCLE_S);
  });

  it("cascading reveal offsets are ordered: amount -> checkmark -> dot", () => {
    expect(LIVE_PAYOUTS_AMOUNT_DELAY_S).toBeLessThan(LIVE_PAYOUTS_CHECK_DELAY_S);
    expect(LIVE_PAYOUTS_CHECK_DELAY_S).toBeLessThan(LIVE_PAYOUTS_DOT_DELAY_S);
  });

  it("dev-only rotation cadence is within the requested 8-10s window", () => {
    expect(LIVE_PAYOUTS_DEV_ROTATION_INTERVAL_MS).toBeGreaterThanOrEqual(8000);
    expect(LIVE_PAYOUTS_DEV_ROTATION_INTERVAL_MS).toBeLessThanOrEqual(10000);
  });
});
