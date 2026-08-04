// Single shared equirectangular projection for the world-map widget
// (src/app/worldMap.tsx). Continent dots (worldMapDots.ts), city pins, and
// arc endpoints (worldMapRoutes.ts) all go through projectLonLat — this is
// what guarantees they stay aligned with each other, unlike the old
// implementation's separately-authored PNG background and pixel-coordinate
// SVG overlay.
//
// True 2:1 equirectangular: width spans the full 360° of longitude, height
// spans the full 180° of latitude, so x/y scale identically in both axes
// (no stretching).
export const WORLD_MAP_VIEW_WIDTH = 1264;
export const WORLD_MAP_VIEW_HEIGHT = 632;

export interface ProjectedPoint {
  x: number;
  y: number;
}

export function projectLonLat(lon: number, lat: number): ProjectedPoint {
  const x = ((lon + 180) / 360) * WORLD_MAP_VIEW_WIDTH;
  const y = ((90 - lat) / 180) * WORLD_MAP_VIEW_HEIGHT;
  return { x, y };
}

// Quadratic-bezier control point lift above the chord's higher endpoint.
// 158px = 25% of WORLD_MAP_VIEW_HEIGHT (632), preserving the same visual
// proportion as the original 360-tall viewBox's 90px bulge (90 / 360 = 25%).
const ARC_BULGE_PX = 158;

export function arcPath(a: ProjectedPoint, b: ProjectedPoint): string {
  const cx = (a.x + b.x) / 2;
  const cy = Math.min(a.y, b.y) - ARC_BULGE_PX;
  return `M ${a.x},${a.y} Q ${cx},${cy} ${b.x},${b.y}`;
}
