// Splits a stat string like "$2.6M+", "14,000+", or "24-48H" into literal
// text segments and numeric segments (each carrying its target value and
// original formatting), so ProofInNumbers can animate just the numeric
// parts from 0 up to their target while reassembling the exact original
// string at progress=1 — including comma thousands-separators, decimal
// places, and multi-number strings like the "24-48H" range (which gets two
// independently-animating numeric segments).

export interface CountUpSegment {
  kind: "literal" | "number";
  text: string;        // literal text; for "number" segments, the ORIGINAL matched text
  target?: number;      // parsed numeric value, only set for "number" segments
  decimals?: number;     // decimal places to preserve, only set for "number" segments
  hasCommas?: boolean;   // whether to re-insert thousands separators, only set for "number" segments
}

const NUMBER_PATTERN = /\d[\d,]*(?:\.\d+)?/g;

export function parseCountUpSegments(raw: string): CountUpSegment[] {
  const segments: CountUpSegment[] = [];
  let lastIndex = 0;
  for (const match of raw.matchAll(NUMBER_PATTERN)) {
    const numStr = match[0];
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ kind: "literal", text: raw.slice(lastIndex, index) });
    }
    const decimalMatch = numStr.match(/\.(\d+)$/);
    segments.push({
      kind: "number",
      text: numStr,
      target: Number(numStr.replace(/,/g, "")),
      decimals: decimalMatch ? decimalMatch[1].length : 0,
      hasCommas: numStr.includes(","),
    });
    lastIndex = index + numStr.length;
  }
  if (lastIndex < raw.length) {
    segments.push({ kind: "literal", text: raw.slice(lastIndex) });
  }
  return segments;
}

function formatNumber(value: number, decimals: number, hasCommas: boolean): string {
  const fixed = value.toFixed(decimals);
  if (!hasCommas) return fixed;
  const [whole, frac] = fixed.split(".");
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return frac ? `${withCommas}.${frac}` : withCommas;
}

// Renders `segments` at animation progress `t` (0..1): literal segments pass
// through unchanged; number segments interpolate from 0 to their target and
// are reformatted with the original's decimal places / thousands separators.
export function renderCountUp(segments: CountUpSegment[], t: number): string {
  const clamped = Math.min(1, Math.max(0, t));
  return segments
    .map((seg) => {
      if (seg.kind === "literal") return seg.text;
      const value = (seg.target ?? 0) * clamped;
      return formatNumber(value, seg.decimals ?? 0, seg.hasCommas ?? false);
    })
    .join("");
}
