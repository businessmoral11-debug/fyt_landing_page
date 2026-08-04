import { describe, it, expect } from "vitest";
import { PROVE_SKILL_CARD_REVEALS, PROVE_SKILL_SCROLL_HEIGHT_VH, PROVE_SKILL_MOBILE_SCROLL_HEIGHT_VH, PROVE_SKILL_MOBILE_CARD_REVEALS } from "./proveSkillReveal";

describe("PROVE_SKILL_CARD_REVEALS", () => {
  it("has one entry per PROVE_SKILL_CARDS card (5)", () => {
    expect(PROVE_SKILL_CARD_REVEALS).toHaveLength(5);
  });

  it("keeps every fade window inside 0-1 with a positive duration", () => {
    for (const r of PROVE_SKILL_CARD_REVEALS) {
      expect(r.fadeStart).toBeGreaterThanOrEqual(0);
      expect(r.fadeEnd).toBeLessThanOrEqual(1);
      expect(r.fadeEnd).toBeGreaterThan(r.fadeStart);
    }
  });

  it("stages the cards in increasing order, each starting before the previous one finishes (overlapping stagger)", () => {
    for (let i = 1; i < PROVE_SKILL_CARD_REVEALS.length; i++) {
      const prev = PROVE_SKILL_CARD_REVEALS[i - 1];
      const cur = PROVE_SKILL_CARD_REVEALS[i];
      expect(cur.fadeStart).toBeGreaterThan(prev.fadeStart);
      expect(cur.fadeStart).toBeLessThan(prev.fadeEnd);
    }
  });

  it("leaves a hold at full visibility before the section releases (last card finishes by scrollYProgress 0.85)", () => {
    const last = PROVE_SKILL_CARD_REVEALS[PROVE_SKILL_CARD_REVEALS.length - 1];
    expect(last.fadeEnd).toBeLessThanOrEqual(0.85);
  });

  it("converges each card toward its resting spot from the direction matching its on-screen quadrant", () => {
    // top row (indices 0,1) drops down from above
    expect(PROVE_SKILL_CARD_REVEALS[0].fromY).toBeLessThan(0);
    expect(PROVE_SKILL_CARD_REVEALS[1].fromY).toBeLessThan(0);
    // mid row (indices 2,3) rises from slightly below, same as bottom-center
    expect(PROVE_SKILL_CARD_REVEALS[2].fromY).toBeGreaterThan(0);
    expect(PROVE_SKILL_CARD_REVEALS[3].fromY).toBeGreaterThan(0);
    // bottom-center (index 4) rises from below, no horizontal slide
    expect(PROVE_SKILL_CARD_REVEALS[4].fromY).toBeGreaterThan(0);
    expect(PROVE_SKILL_CARD_REVEALS[4].fromX).toBe(0);
    // left-side cards (0,2) slide in from the left; right-side (1,3) from the right
    expect(PROVE_SKILL_CARD_REVEALS[0].fromX).toBeLessThan(0);
    expect(PROVE_SKILL_CARD_REVEALS[2].fromX).toBeLessThan(0);
    expect(PROVE_SKILL_CARD_REVEALS[1].fromX).toBeGreaterThan(0);
    expect(PROVE_SKILL_CARD_REVEALS[3].fromX).toBeGreaterThan(0);
  });
});

describe("PROVE_SKILL_SCROLL_HEIGHT_VH", () => {
  it("is long enough (in viewport-heights) to host 5 staggered reveals comfortably", () => {
    expect(PROVE_SKILL_SCROLL_HEIGHT_VH).toBeGreaterThan(100);
  });
});

describe("PROVE_SKILL_MOBILE_SCROLL_HEIGHT_VH", () => {
  it("is long enough (in viewport-heights) to host 5 staggered reveals comfortably", () => {
    expect(PROVE_SKILL_MOBILE_SCROLL_HEIGHT_VH).toBeGreaterThan(100);
  });
});

describe("PROVE_SKILL_MOBILE_CARD_REVEALS", () => {
  it("has one entry per PROVE_SKILL_CARDS card (5)", () => {
    expect(PROVE_SKILL_MOBILE_CARD_REVEALS).toHaveLength(5);
  });

  it("keeps every fade window inside 0-1 with a positive duration", () => {
    for (const r of PROVE_SKILL_MOBILE_CARD_REVEALS) {
      expect(r.fadeStart).toBeGreaterThanOrEqual(0);
      expect(r.fadeEnd).toBeLessThanOrEqual(1);
      expect(r.fadeEnd).toBeGreaterThan(r.fadeStart);
    }
  });

  it("stages the cards in increasing order, each starting before the previous one finishes (overlapping stagger)", () => {
    for (let i = 1; i < PROVE_SKILL_MOBILE_CARD_REVEALS.length; i++) {
      const prev = PROVE_SKILL_MOBILE_CARD_REVEALS[i - 1];
      const cur = PROVE_SKILL_MOBILE_CARD_REVEALS[i];
      expect(cur.fadeStart).toBeGreaterThan(prev.fadeStart);
      expect(cur.fadeStart).toBeLessThan(prev.fadeEnd);
    }
  });

  it("leaves a hold at full visibility before the section releases (last card finishes by scrollYProgress 0.85)", () => {
    const last = PROVE_SKILL_MOBILE_CARD_REVEALS[PROVE_SKILL_MOBILE_CARD_REVEALS.length - 1];
    expect(last.fadeEnd).toBeLessThanOrEqual(0.85);
  });

  it("rises straight up with no horizontal slide (cards sit in a vertical stack, not scattered quadrants)", () => {
    for (const r of PROVE_SKILL_MOBILE_CARD_REVEALS) {
      expect(r.fromX).toBe(0);
      expect(r.fromY).toBeGreaterThan(0);
    }
  });
});
