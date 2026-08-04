import { describe, it, expect } from "vitest";
import {
  applyLiveRewardsMessage,
  deriveInitials,
  timeAgo,
  MAX_LIVE_REWARDS,
  INITIAL_LIVE_REWARDS_STATE,
} from "./liveRewardsFeed";

describe("deriveInitials", () => {
  it("takes the first letter of the first and last word for multi-word names", () => {
    expect(deriveInitials("James Wilson")).toBe("JW");
    expect(deriveInitials("Mary Jane Watson")).toBe("MW");
  });

  it("takes the first two letters for a single-word name", () => {
    expect(deriveInitials("Cher")).toBe("CH");
  });

  it("returns an empty string for an empty or whitespace-only name", () => {
    expect(deriveInitials("")).toBe("");
    expect(deriveInitials("   ")).toBe("");
  });

  it("uppercases the result", () => {
    expect(deriveInitials("james wilson")).toBe("JW");
  });
});

describe("timeAgo", () => {
  const NOW = new Date("2026-07-28T12:00:00.000Z").getTime();

  it("shows 'just now' for under 5 seconds", () => {
    expect(timeAgo(new Date(NOW - 2000).toISOString(), NOW)).toBe("just now");
  });

  it("shows seconds for under a minute", () => {
    expect(timeAgo(new Date(NOW - 30000).toISOString(), NOW)).toBe("30s ago");
  });

  it("shows minutes for under an hour", () => {
    expect(timeAgo(new Date(NOW - 90000).toISOString(), NOW)).toBe("1m ago");
  });

  it("shows hours for under a day", () => {
    expect(timeAgo(new Date(NOW - 2 * 3600000).toISOString(), NOW)).toBe("2h ago");
  });

  it("shows singular 'day' for exactly one day", () => {
    expect(timeAgo(new Date(NOW - 86400000).toISOString(), NOW)).toBe("1 day ago");
  });

  it("shows plural 'days' for more than one day", () => {
    expect(timeAgo(new Date(NOW - 3 * 86400000).toISOString(), NOW)).toBe("3 days ago");
  });
});

describe("applyLiveRewardsMessage", () => {
  it("reverses a backlog (oldest-first from the server) into newest-first, capped at MAX_LIVE_REWARDS", () => {
    const certs = Array.from({ length: 8 }, (_, i) => ({
      name: `Trader ${i}`,
      amount: `$${i}`,
      timestamp: new Date(2026, 6, 28, 12, 0, i).toISOString(),
    }));
    const result = applyLiveRewardsMessage(INITIAL_LIVE_REWARDS_STATE, { type: "backlog", certs });
    expect(result.records).toHaveLength(MAX_LIVE_REWARDS);
    expect(result.records[0].name).toBe("Trader 7");
    expect(result.records[4].name).toBe("Trader 3");
  });

  it("prepends a new_cert to the front and drops the oldest (last) entry once over MAX_LIVE_REWARDS", () => {
    const full = {
      ...INITIAL_LIVE_REWARDS_STATE,
      records: Array.from({ length: MAX_LIVE_REWARDS }, (_, i) => ({
        name: `Trader ${i}`,
        amount: `$${i}`,
        timestamp: new Date(2026, 6, 28, 12, 0, i).toISOString(),
      })),
    };
    const newCert = { name: "New Trader", amount: "$999", timestamp: new Date(2026, 6, 28, 12, 1, 0).toISOString() };
    const result = applyLiveRewardsMessage(full, { type: "new_cert", cert: newCert });
    expect(result.records).toHaveLength(MAX_LIVE_REWARDS);
    expect(result.records[0]).toEqual(newCert);
    expect(result.records.some((r) => r.name === "Trader 0")).toBe(true);
    expect(result.records.some((r) => r.name === "Trader 4")).toBe(false);
  });

  it("leaves state unchanged for an unrecognized message type", () => {
    const result = applyLiveRewardsMessage(INITIAL_LIVE_REWARDS_STATE, { type: "ping" });
    expect(result).toEqual(INITIAL_LIVE_REWARDS_STATE);
  });

  it("does not alter connectionState", () => {
    const state = { connectionState: "connected" as const, records: [] };
    const result = applyLiveRewardsMessage(state, { type: "ping" });
    expect(result.connectionState).toBe("connected");
  });

  it("filters out malformed entries from a backlog instead of crashing", () => {
    const certs = [
      { name: "Valid Trader", amount: "$100", timestamp: new Date(2026, 6, 28, 12, 0, 0).toISOString() },
      { name: "Bad Amount", amount: 100, timestamp: new Date(2026, 6, 28, 12, 0, 1).toISOString() },
      null,
      { name: "Missing Timestamp", amount: "$50" },
    ];
    const result = applyLiveRewardsMessage(INITIAL_LIVE_REWARDS_STATE, { type: "backlog", certs });
    expect(result.records).toHaveLength(1);
    expect(result.records[0].name).toBe("Valid Trader");
  });

  it("ignores a new_cert message whose cert is malformed", () => {
    const result = applyLiveRewardsMessage(INITIAL_LIVE_REWARDS_STATE, { type: "new_cert", cert: { name: "No Amount" } });
    expect(result.records).toHaveLength(0);
  });
});
