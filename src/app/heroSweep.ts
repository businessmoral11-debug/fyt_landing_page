// Stepped radar-sweep CSS for the v3 hero (Nuvex-style stepping spotlight).
// The beam eases from label to label and DWELLS on each one; each label's
// glow overlay rises through the second half of the incoming move, holds 1
// across the dwell, and falls through the first half of the outgoing move.
// Sweep and glows share one duration and `alternate` direction, generated
// from the same schedule, so they cannot drift. Pure string/number
// generation — HeroBackground injects the result via a <style> tag.

export const DWELL_S = 0.8; // beam parked on a label
export const MOVE_S = 0.6; // travel between adjacent labels
export const GLOW_RAMP_FRAC = 0.5; // rise/fall each span this fraction of a move

// Trim to ≤3 decimals without trailing zeros (keyframe stops, durations).
const fmt = (n: number): string => {
  const r = Math.round(n * 1000) / 1000;
  return String(r);
};

// One direction across `count` labels: count dwells + (count−1) moves.
export function passDuration(count: number): number {
  return count * DWELL_S + (count - 1) * MOVE_S;
}

export interface SweepStop {
  pct: number; // raw (unrounded) percent of one pass
  deg: number;
  ease: boolean; // true → this stop begins a move segment (ease-in-out)
}

// Two stops per label: dwell start and dwell end. The dwell-end stop of
// every label but the last carries the ease flag for the following move.
export function sweepStops(angles: readonly number[]): SweepStop[] {
  const total = passDuration(angles.length);
  const stops: SweepStop[] = [];
  angles.forEach((deg, i) => {
    const dwellStart = (i * (DWELL_S + MOVE_S) * 100) / total;
    const dwellEnd = dwellStart + (DWELL_S * 100) / total;
    stops.push({ pct: dwellStart, deg, ease: false });
    stops.push({ pct: dwellEnd, deg, ease: i < angles.length - 1 });
  });
  return stops;
}

export interface GlowWindow {
  riseStartPct: number | null; // null → starts already held (first label)
  holdStartPct: number;
  holdEndPct: number;
  fallEndPct: number | null; // null → held to the end of the pass (last label)
}

export function glowWindow(index: number, count: number): GlowWindow {
  const total = passDuration(count);
  const dwellStart = (index * (DWELL_S + MOVE_S) * 100) / total;
  const dwellEnd = dwellStart + (DWELL_S * 100) / total;
  const ramp = (GLOW_RAMP_FRAC * MOVE_S * 100) / total;
  return {
    riseStartPct: index === 0 ? null : dwellStart - ramp,
    holdStartPct: dwellStart,
    holdEndPct: dwellEnd,
    fallEndPct: index === count - 1 ? null : dwellEnd + ramp,
  };
}

export function sweepKeyframes(angles: readonly number[], classSuffix: string = ""): string {
  const lines = sweepStops(angles).map(
    (s) =>
      `  ${fmt(s.pct)}% { transform: rotate(${fmt(s.deg)}deg);${s.ease ? " animation-timing-function: ease-in-out;" : ""} }`,
  );
  return `@keyframes hero-sweep${classSuffix} {\n${lines.join("\n")}\n}`;
}

export function glowKeyframes(name: string, w: GlowWindow): string {
  const lines: string[] = [];
  if (w.riseStartPct === null) {
    lines.push(`  0% { opacity: 1; }`);
  } else {
    lines.push(`  0% { opacity: 0; }`);
    lines.push(`  ${fmt(w.riseStartPct)}% { opacity: 0; }`);
    lines.push(`  ${fmt(w.holdStartPct)}% { opacity: 1; }`);
  }
  if (w.fallEndPct === null) {
    lines.push(`  ${fmt(w.holdStartPct)}% { opacity: 1; }`);
    lines.push(`  100% { opacity: 1; }`);
  } else {
    lines.push(`  ${fmt(w.holdEndPct)}% { opacity: 1; }`);
    lines.push(`  ${fmt(w.fallEndPct)}% { opacity: 0; }`);
    lines.push(`  100% { opacity: 0; }`);
  }
  // Collapse identical duplicate stops (the last label pushes holdStart twice);
  // a same-pct stop with a DIFFERENT value means the schedule constants
  // produced a collision — fail loudly rather than silently corrupt the curve.
  const byStop = new Map<string, string>();
  for (const l of lines) {
    const stop = l.trim().split("%")[0];
    const prev = byStop.get(stop);
    if (prev !== undefined && prev !== l) {
      throw new Error(`glowKeyframes(${name}): conflicting values at ${stop}%`);
    }
    byStop.set(stop, l);
  }
  return `@keyframes ${name} {\n${[...byStop.values()].join("\n")}\n}`;
}

export function heroSweepCss(labels: readonly { rotate: number }[], classSuffix: string = ""): string {
  const anim = `${fmt(passDuration(labels.length))}s linear infinite alternate`;
  const parts: string[] = [
    // Beam bearing is the NEGATIVE of a label's stored `rotate` value —
    // rotate(θ) sends the down-pointing beam toward (−sinθ, cosθ), so a label
    // with rotate −58° needs the beam at +58°. Glow windows are index-based
    // and unaffected.
    sweepKeyframes(labels.map((l) => -l.rotate), classSuffix),
    `.hero-sweep-arm${classSuffix} {`,
    `  animation: hero-sweep${classSuffix} ${anim};`,
    `  will-change: transform;`,
    `}`,
  ];
  labels.forEach((_, i) => {
    parts.push(glowKeyframes(`hero-glow${classSuffix}-${i}`, glowWindow(i, labels.length)));
    parts.push(`.hero-glow${classSuffix}-${i} {`, `  animation: hero-glow${classSuffix}-${i} ${anim};`, `}`);
  });
  const allClasses = [`.hero-sweep-arm${classSuffix}`, ...labels.map((_, i) => `.hero-glow${classSuffix}-${i}`)].join(
    ", ",
  );
  parts.push(
    `@media (prefers-reduced-motion: reduce) {`,
    `  ${allClasses} { animation: none; }`,
    `}`,
  );
  return parts.join("\n");
}
