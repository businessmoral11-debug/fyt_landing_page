// v4 hero orbit scene data.
// HERO_ORBIT_RINGS (the four concentric ring ellipses below) are unchanged
// from the v3 Figma CSS export (docs/specs/v3/FYT - Landing Page-2.css,
// layer "Orbit rings") — the v4 redesign (docs/specs/v4/IMG_1137.pdf) kept
// the same ring artwork and only changed what rides on it: 6 currency/
// instrument-pair labels became 5 product-feature callouts, and the old
// tilted dot+text row became a dot with its label stacked directly below,
// unrotated (see HeroStage in App.tsx).
//
// There is no vector/CSS export for v4, only a flattened PDF screenshot, so
// these 5 positions are NOT measured off that raster (unreliable on a
// flattened composite image — and the old rings' own geometry doesn't
// produce a plausible on-screen result if reused directly for a
// bottom-apex-centered 5-point arc: their true bottom apexes fall outside
// the visible 1440×1080 stage). Instead they're computed via the same
// parametric-ellipse approach as the 4 rings below, on a new small ellipse
// centered on the node itself: cx=720, cy=720 (the node's own center —
// see the 134px ring at left 653/top 653 in HeroStage, i.e. center
// 653+67=720), rx=372, ry=270. Five angles, evenly spaced 32° apart and
// symmetric around the bottom apex (154°, 122°, 90°, 58°, 26°, using
// x = cx + rx·cosθ, y = cy + ry·sinθ), keep every point inside the visible
// stage and spread left-to-right about as wide as the old 6-label arc did.
//
// rotate = atan2(left − cx, top − cy) in degrees — the NEGATIVE of the CSS
// beam bearing; heroSweepCss negates it to aim the beam at this dot. It is
// NOT applied to the label visually (v4 labels don't tilt); it only aims the
// animated sweep beam at this dot during its dwell window.
//
// Coordinates are px on the 1440×1080 desktop hero.

export interface OrbitLabel {
  label: string;
  left: number;   // px, design coords — the dot's horizontal center (HeroStage centers the wrapper with translateX(-50%))
  top: number;    // px, design coords — the dot's top edge (the label stacks below it, matching the row-based top-edge convention the rest of this file uses)
  rotate: number; // deg — bearing from the node's center to this dot; aims the sweep beam only (see heroSweep.ts), never applied to the label's own CSS transform
}

export interface OrbitRing {
  cx: number; // ellipse center x
  cy: number; // ellipse center y
  rx: number; // horizontal radius
  ry: number; // vertical radius
}

// Design spec (docs/specs/v4/IMG_1137.pdf) shows 5 items. "No Consistency
// Rule" matches HERO_CONTENT.checklist[0] and "Static Drawdown" matches
// HERO_CONTENT.checklist[3] (liveSiteContent.ts) exactly; the other 3 don't
// (the manifest says "Up to 100% Reward Split" and "1st Reward on Demand",
// and has no 5th field for "200% Refundable Fee"), so all 5 are written as
// literals here rather than partially importing HERO_CONTENT for 2 of them.
export const HERO_ORBIT_LABELS: OrbitLabel[] = [
  { label: "No Consistency Rule",     left: 385.6,  top: 838.4, rotate: -70.5 },
  { label: "Up to 100% Reward Splits", left: 522.9,  top: 949.0, rotate: -40.7 },
  { label: "Rewards on Demand",       left: 720.0,  top: 990.0, rotate: 0 },
  { label: "Static Drawdown",         left: 917.1,  top: 949.0, rotate: 40.7 },
  { label: "200% Refundable Fee",     left: 1054.4, top: 838.4, rotate: 70.5 },
];

// Mobile-only 5-label layout (v5 "two-row" redesign — see
// docs/screenshots/hero-mobile-section-idea.jpeg and this plan's derivation
// notes: docs/superpowers/plans/2026-08-01-mobile-hero-two-row-labels.md).
// Unlike HERO_ORBIT_LABELS above, these 5 anchors are NOT points on a single
// shared ellipse — 5 labels only fit on a phone by decoupling them into two
// independent rows (2 near the top corners, above the rings; 3 spread along
// the bottom, below the node), each free to use the full stage width instead
// of competing for room along one continuous arc. See MOBILE_LABEL_LAYOUT
// below for each entry's text-anchor side and wrap width; see
// heroResponsive.ts's HERO_LABEL_BOOST for how these render at a legible
// constant size regardless of viewport. Coordinates are px in the same
// 1440x1080 local stage space as HERO_ORBIT_RINGS/HERO_ORBIT_LABELS (node
// center 720,720). `rotate` follows the exact same convention as
// HERO_ORBIT_LABELS (bearing from the node center, degrees) and is used only
// to aim the mobile sweep beam — see heroSweepCss's classSuffix param in
// heroSweep.ts, which gives the mobile beam its own keyframes so it can be
// retimed to these bearings without touching desktop's.
export const MOBILE_ORBIT_LABELS: OrbitLabel[] = [
  { label: "No Consistency Rule",     left: 120,  top: 500, rotate: -110.1 },
  { label: "Up to 100% Reward Splits", left: 280,  top: 940, rotate: -63.43 },
  { label: "Rewards on Demand",       left: 720,  top: 980, rotate: 0 },
  { label: "Static Drawdown",         left: 1160, top: 940, rotate: 63.43 },
  { label: "200% Refundable Fee",     left: 1320, top: 500, rotate: 110.1 },
];

export type MobileLabelAnchor = "start" | "center" | "end";

export interface MobileLabelLayout {
  anchor: MobileLabelAnchor; // which edge of the text box sits at `left`
  wrapWidth: number;         // px, local stage space — fixed so text wraps instead of relying on glyph-measured nowrap width
}

// Index-aligned with MOBILE_ORBIT_LABELS. The 2 top-row items sit close to
// the viewport's own left/right edges (see left: 120 / 1320 above), so they
// anchor OUTWARD-growing (start/end) instead of center, keeping their fixed
// edge flush with the anchor point instead of splitting width on both sides
// of it — a center anchor there would clip the viewport edge on narrow
// phones (see heroResponsive.test.ts's regression guard). The 3 bottom-row
// items have room on both sides and keep a center anchor.
export const MOBILE_LABEL_LAYOUT: MobileLabelLayout[] = [
  { anchor: "start",  wrapWidth: 220 },
  { anchor: "center", wrapWidth: 168 },
  { anchor: "center", wrapWidth: 168 },
  { anchor: "center", wrapWidth: 168 },
  { anchor: "end",    wrapWidth: 220 },
];

export interface MobileLabelBoxCss {
  items: "items-start" | "items-center" | "items-end";
  textAlign: "left" | "center" | "right";
  translateX: string;
  transformOrigin: string;
}

// Single source of truth for how a MobileLabelAnchor maps to CSS box
// alignment. App.tsx's label-rendering block consumes this directly for the
// real rendering path; heroResponsive.test.ts's no-overlap/no-edge-clip
// regression test derives its geometry from the same `translateX` value —
// so the two can never silently diverge the way they could when each
// re-implemented this mapping independently (see this plan's final-review
// fix notes: docs/superpowers/plans/2026-08-01-mobile-hero-two-row-labels.md).
// Desktop always calls this with no argument (its implicit "center"
// default), so the "center" branch below is also what desktop's labels
// render with.
export function mobileLabelBoxCss(anchor: MobileLabelAnchor = "center"): MobileLabelBoxCss {
  if (anchor === "start") {
    return { items: "items-start", textAlign: "left", translateX: "0%", transformOrigin: "top left" };
  }
  if (anchor === "end") {
    return { items: "items-end", textAlign: "right", translateX: "-100%", transformOrigin: "top right" };
  }
  return { items: "items-center", textAlign: "center", translateX: "-50%", transformOrigin: "top center" };
}

// Ring vectors: spec gives left/right insets and top 53.7% / varying bottoms on the
// 1440×1080 frame. Each renders as the top half of an ellipse.
// rx = (1440 − left − right) / 2 ; ry = (bottom − top) / 2 ; center between them.
export const HERO_ORBIT_RINGS: OrbitRing[] = [
  { cx: 720, cy: 800.3,  rx: 300, ry: 220.3 }, // 29.17% insets, bottom 5.56%
  { cx: 720, cy: 934.9,  rx: 430, ry: 354.9 }, // 20.14% insets, bottom −6.48%
  { cx: 720, cy: 1000.1, rx: 560, ry: 420.1 }, // 11.11% insets, bottom −18.52%
  { cx: 720, cy: 1140.1, rx: 840, ry: 560.1 }, // −8.33% insets, bottom −44.44%
];
