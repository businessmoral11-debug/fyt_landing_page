import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const app = readFileSync(resolve(__dirname, "./App.tsx"), "utf8");

const howItWorksSection = (() => {
  const start = app.indexOf("function HowItWorksIcon(");
  expect(start).toBeGreaterThan(-1);
  const end = app.indexOf("// ─── TESTIMONIALS", start);
  expect(end).toBeGreaterThan(start);
  return app.slice(start, end);
})();

describe("How It Works pinned scroll-reveal wiring", () => {
  it("imports the reveal timing/color data module", () => {
    expect(app).toContain('from "@/app/howItWorksReveal"');
  });

  it("drives the reveal from a pinned scrollYProgress, not a plain scroll listener", () => {
    expect(howItWorksSection).toContain("useScroll({ target: scrollRef");
    expect(howItWorksSection).toContain("useTransform(");
    expect(howItWorksSection).toContain("useMotionTemplate");
  });

  it("gives the desktop reveal a tall pinned wrapper with a sticky, full-viewport inner block", () => {
    expect(howItWorksSection).toContain("style={{ height: `${HOW_IT_WORKS_SCROLL_HEIGHT_VH}vh` }}");
    expect(howItWorksSection).toContain("sticky top-0 h-screen");
  });

  it("has a completely separate, non-animated mobile branch", () => {
    expect(howItWorksSection).toContain('className="flex lg:hidden flex-col');
  });

  it("removes the vertical divider partitions between steps", () => {
    expect(howItWorksSection).not.toContain("rgba(255,255,255,0.08)");
  });

  it("grows the connecting line as a single scaleX bar instead of a pre-rendered gradient", () => {
    expect(howItWorksSection).toContain("origin-left");
    expect(howItWorksSection).toContain("scaleX: reduceMotion ? 1 : lineScale");
    expect(howItWorksSection).not.toContain("buildLineGradient(");
  });

  it("stages the 4 steps via HOW_IT_WORKS_STEP_REVEALS, one HowItWorksStepReveal per step", () => {
    expect(howItWorksSection).toContain("function HowItWorksStepReveal(");
    expect(howItWorksSection).toContain("reveal={HOW_IT_WORKS_STEP_REVEALS[i]}");
  });

  it("falls back to peak (fully bright) styling immediately when reduced motion is on, for every animated property", () => {
    const reduceMotionTernaries = howItWorksSection.match(/reduceMotion\s*\?/g) ?? [];
    // line + ring + dot + number + label + description + icon border + icon
    // glyph = 8 properties, each with its own
    // `reduceMotion ? staticPeak : motionValue` fallback.
    expect(reduceMotionTernaries.length).toBeGreaterThanOrEqual(8);
  });

  it("resolves every reduced-motion fallback to a peak constant, never a dim one", () => {
    // Scoped to `reduceMotion ?` (the ternary itself), not just any
    // occurrence of the word "reduceMotion" — the bare word also appears in
    // the component's `reduceMotion: boolean | null` param type, which sits
    // within 200 chars of the first useTransform's unrelated `_ALPHA.dim`
    // (dim) base value and would otherwise false-positive.
    expect(howItWorksSection).not.toMatch(/reduceMotion\s*\?[\s\S]{0,200}?_ALPHA\.dim/);
    for (const c of ["RING_BORDER", "RING_GLOW", "DOT_BG", "DOT_GLOW", "NUMBER", "ICON_BORDER"]) {
      expect(howItWorksSection).toContain(`HOW_IT_WORKS_${c}_ALPHA.peak`);
    }
    expect(howItWorksSection).toContain("HOW_IT_WORKS_LABEL_PEAK_HEX");
    expect(howItWorksSection).toContain("HOW_IT_WORKS_DESC_PEAK_HEX");
    expect(howItWorksSection).toContain("HOW_IT_WORKS_ICON_GLYPH_OPACITY.peak");
  });

  it("keeps the mobile branch entirely free of scroll-driven code", () => {
    const start = howItWorksSection.indexOf('className="flex lg:hidden flex-col');
    expect(start).toBeGreaterThan(-1);
    const mobile = howItWorksSection.slice(start);
    for (const t of ["useTransform", "useMotionTemplate", "scrollYProgress", "HowItWorksStepReveal", "motion.", "reduceMotion"]) {
      expect(mobile).not.toContain(t);
    }
  });

  it("has no leftover references to the old plain-scroll-listener implementation", () => {
    expect(app).not.toContain("howItWorksProgress");
    expect(howItWorksSection).not.toContain("sectionRef");
    expect(howItWorksSection).not.toContain("showDimTreatment");
    expect(howItWorksSection).not.toContain("staggeredProgress(");
    expect(howItWorksSection).not.toContain("matchMedia(");
  });
});
