import { describe, it, expect } from "vitest";
import {
  PROOF_REVEAL_STAGGER,
  proofRevealContainer,
  proofRevealItem,
  PROOF_FLOAT_DURATION_S,
  PROOF_AMBIENT_GLOW_DURATION_S,
  PROOF_AMBIENT_GLOW_OPACITY,
  PROOF_SHIMMER_CYCLE_S,
  PROOF_SHIMMER_DELAY_S,
  PROOF_BUTTON_SWEEP_DURATION_S,
  PROOF_BUTTON_SWEEP_CYCLE_S,
  PROOF_BUTTON_SWEEP_REPEAT_DELAY_S,
  PROOF_DATA_LINES,
  PROOF_ICON_MOTION,
} from "./proofInNumbersMotion";

describe("proofInNumbersMotion timing bounds", () => {
  it("reveal stagger is within the requested 0.08-0.12s window", () => {
    expect(PROOF_REVEAL_STAGGER).toBeGreaterThanOrEqual(0.08);
    expect(PROOF_REVEAL_STAGGER).toBeLessThanOrEqual(0.12);
  });

  it("reveal variants declare hidden/show with a fade+rise, and the container only orchestrates", () => {
    expect(proofRevealItem.hidden).toMatchObject({ opacity: 0 });
    expect(proofRevealItem.show).toMatchObject({ opacity: 1, y: 0 });
    // the container itself has no visual state, only stagger orchestration
    expect(proofRevealContainer.hidden).toEqual({});
    const show = proofRevealContainer.show as { transition?: { staggerChildren?: number } };
    expect(show.transition?.staggerChildren).toBe(PROOF_REVEAL_STAGGER);
  });

  it("panel float duration is within the requested 14-18s window", () => {
    expect(PROOF_FLOAT_DURATION_S).toBeGreaterThanOrEqual(14);
    expect(PROOF_FLOAT_DURATION_S).toBeLessThanOrEqual(18);
  });

  it("ambient glow cycles over 12s between the requested opacity bounds", () => {
    expect(PROOF_AMBIENT_GLOW_DURATION_S).toBe(12);
    expect(PROOF_AMBIENT_GLOW_OPACITY).toEqual([0.08, 0.16, 0.08]);
  });

  it("number shimmer repeats within the requested 8-10s window, after the ~1.2s count-up finishes", () => {
    expect(PROOF_SHIMMER_CYCLE_S).toBeGreaterThanOrEqual(8);
    expect(PROOF_SHIMMER_CYCLE_S).toBeLessThanOrEqual(10);
    expect(PROOF_SHIMMER_DELAY_S).toBeGreaterThan(1.2);
  });

  it("button reflection sweep totals ~8s per cycle (sweep + pause)", () => {
    expect(PROOF_BUTTON_SWEEP_DURATION_S + PROOF_BUTTON_SWEEP_REPEAT_DELAY_S).toBe(PROOF_BUTTON_SWEEP_CYCLE_S);
    expect(PROOF_BUTTON_SWEEP_CYCLE_S).toBe(8);
  });

  it("exactly 4 data-connection lines, one per stat card, all converging on the shared center", () => {
    expect(PROOF_DATA_LINES).toHaveLength(4);
    for (const line of PROOF_DATA_LINES) {
      expect(line.x2).toBe(50);
      expect(line.y2).toBe(50);
    }
  });

  it("every icon kind has a motion entry, and 'people' defers to the separate ring animation", () => {
    expect(Object.keys(PROOF_ICON_MOTION).sort()).toEqual(["dollar", "globe", "lightning", "people"]);
    expect(PROOF_ICON_MOTION.people).toEqual({});
    expect(PROOF_ICON_MOTION.dollar.animate).toBeDefined();
    expect(PROOF_ICON_MOTION.globe.animate).toBeDefined();
    expect(PROOF_ICON_MOTION.lightning.animate).toBeDefined();
  });
});
