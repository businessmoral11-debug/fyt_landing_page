import { describe, it, expect } from "vitest";
import { formatCountdown, PROMO_ITEMS, PROMO_DEADLINE } from "./promoBanner";

describe("PROMO_ITEMS", () => {
  it("has exactly 5 items matching the live site's current campaign (verified 2026-08-03)", () => {
    expect(PROMO_ITEMS).toHaveLength(5);
    expect(PROMO_ITEMS[0]).toEqual({ kind: "code", label: "Summer Special", text: "40% Off + 2 Accounts Instantly", code: "Summer40" });
    expect(PROMO_ITEMS[1]).toEqual({ kind: "plain", text: "200% Refund + 1st Reward on Demand" });
    expect(PROMO_ITEMS[2]).toEqual({ kind: "crypto", text: "47.5% Off with Crypto + 2 Accounts Instantly Same Size", sub: "Crypto Payment" });
    expect(PROMO_ITEMS[3]).toEqual({ kind: "live", text: "Limited-Time Deal · Limited Spots" });
    expect(PROMO_ITEMS[4]).toEqual({ kind: "code", text: "40% Off + 2 Accounts Instantly", code: "Summer40" });
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
    const nowMs = deadlineMs - (5 * 3600000 + 5 * 60000 + 5000); // 5h 5m 5s before deadline
    expect(formatCountdown(PROMO_DEADLINE, nowMs)).toEqual({ days: 0, hh: "05", mm: "05", ss: "05" });
  });
});
