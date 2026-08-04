import { describe, it, expect } from "vitest";
import { trackMonotonicMax } from "./scrollProgress";

describe("trackMonotonicMax", () => {
  it("returns the latest value when it's higher than the previous max", () => {
    expect(trackMonotonicMax(0.2, 0.5)).toBe(0.5);
  });

  it("keeps the previous max when latest is lower (backward jitter)", () => {
    expect(trackMonotonicMax(0.5, 0.3)).toBe(0.5);
  });

  it("keeps the previous max when latest equals it", () => {
    expect(trackMonotonicMax(0.4, 0.4)).toBe(0.4);
  });

  it("resumes tracking upward after a dip", () => {
    let max = 0.2;
    max = trackMonotonicMax(max, 0.5); // 0.5 — new high
    max = trackMonotonicMax(max, 0.3); // still 0.5 — dip ignored
    max = trackMonotonicMax(max, 0.6); // 0.6 — new high again
    expect(max).toBe(0.6);
  });

  it("ignores NaN samples instead of poisoning the tracked max", () => {
    expect(trackMonotonicMax(0.6, NaN)).toBe(0.6);
  });
});
