// Pure helpers for extracting the fundingyourtrades.com PRODUCTS_CONFIG object
// literal out of raw page HTML and turning it into strict, parseable JSON.
// No network I/O here — see check-pricing-drift.mjs for the fetch + compare.

// Finds the first occurrence of `marker` and returns the substring from the
// next "[" up to (and including) its matching "]", scanning bracket depth.
// String-aware: bracket characters inside quoted string values never affect
// the depth count, and only the FIRST marker match is used (see
// check-pricing-drift.mjs for why the live page's first PRODUCTS_CONFIG
// block is the one that actually executes).
export function extractArrayLiteral(html, marker) {
  const markerIdx = html.indexOf(marker);
  if (markerIdx === -1) throw new Error(`marker not found: ${marker}`);
  const start = html.indexOf("[", markerIdx);
  if (start === -1) throw new Error(`no "[" found after marker: ${marker}`);

  let depth = 0;
  let inString = false;
  let quote = "";
  for (let i = start; i < html.length; i++) {
    const ch = html[i];
    const prev = html[i - 1];
    if (inString) {
      if (ch === quote && prev !== "\\") inString = false;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      quote = ch;
      continue;
    }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return html.slice(start, i + 1);
    }
  }
  throw new Error(`unterminated array literal starting at index ${start}`);
}

// Converts a JS array/object literal (unquoted keys, // comments, optional
// single-quoted strings) into strict JSON text. Single-pass and string-aware
// throughout — comment-stripping and key-quoting only ever apply outside of
// quoted string content, which is what makes this safe against values like
// "https://example.com/path" that contain a literal "//".
//
// Known limitation: the final trailing-comma cleanup is a plain regex over
// the fully-resolved text, not part of the string-aware pass — acceptable
// here because no value in this config contains a literal ", }" or ", ]"
// substring (verified against the live data as of 2026-07-28).
export function sanitizeToJson(text) {
  let out = "";
  let i = 0;
  let inString = false;
  let quote = "";
  while (i < text.length) {
    const ch = text[i];
    if (inString) {
      if (ch === "\\" && i + 1 < text.length) {
        out += ch + text[i + 1];
        i += 2;
        continue;
      }
      if (ch === quote) {
        out += '"';
        inString = false;
        i++;
        continue;
      }
      out += ch === '"' ? '\\"' : ch;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      quote = ch;
      out += '"';
      i++;
      continue;
    }
    if (ch === "/" && text[i + 1] === "/") {
      while (i < text.length && text[i] !== "\n") i++;
      continue;
    }
    const keyMatch = /^([A-Za-z_$][\w$]*|\d+)[ \t]*:/.exec(text.slice(i));
    if (keyMatch) {
      out += `"${keyMatch[1]}":`;
      i += keyMatch[0].length;
      continue;
    }
    out += ch;
    i++;
  }
  return out.replace(/,(\s*[}\]])/g, "$1");
}
