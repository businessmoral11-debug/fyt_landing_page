import { describe, it, expect } from "vitest";
import { formatCountdown, PROMO_ITEMS, PROMO_DEADLINE } from "./promoBanner";

describe("PROMO_ITEMS", () => {
  it("has exactly 3 items matching the live site's current campaign", () => {
    expect(PROMO_ITEMS).toHaveLength(3);
    expect(PROMO_ITEMS[0]).toEqual({ kind: "code", label: "The NEW FYT Deal", text: "45% off + 2 Bonus Account", code: "NEWFYT" });
    expect(PROMO_ITEMS[1]).toEqual({ kind: "crypto", text: "52.5% Off Everything with Crypto Payment + 3 Accounts", sub: "Crypto Payment" });
    expect(PROMO_ITEMS[2]).toEqual({ kind: "live", text: "250 Spots Only" });
  });
});

describe("formatCountdown", () => {
  it("returns zeroed values at exactly the deadline", () => {
    const deadlineMs = new Date(PROMO_DEADLINE).getTime();
    expect(formatCountdown(PROMO_DEADLINE, deadlineMs)).toEqual({ days: 0, hh: "00", mm: "00", ss: "00" });
  });

  it("clamps to zero after the deadline has passed (never goes negative)", () => {
    const deadlineMs = new Date(PROMO_DEADLINE).getTime();
    expect(formatCountdown(PROMO_DEADLINE, deadlineMs + 999999)).toEqual({ days: 0, hh: "00", mm: "00", ss: "00" });
  });

  it("computes day rollover correctly (25 hours before deadline = 1 day + 1 hour)", () => {
    const deadlineMs = new Date(PROMO_DEADLINE).getTime();
    const nowMs = deadlineMs - 25 * 60 * 60 * 1000;
    expect(formatCountdown(PROMO_DEADLINE, nowMs)).toEqual({ days: 1, hh: "01", mm: "00", ss: "00" });
  });

  it("zero-pads single-digit hours/minutes/seconds", () => {
    const deadlineMs = new Date(PROMO_DEADLINE).getTime();
    const nowMs = deadlineMs - (5 * 3600000 + 5 * 60000 + 5000);
    expect(formatCountdown(PROMO_DEADLINE, nowMs)).toEqual({ days: 0, hh: "05", mm: "05", ss: "05" });
  });
});
