// Pure geometry helpers for sampling a lat/lon grid against a GeoJSON
// MultiPolygon landmass and keeping only the points that fall on land.
// Extracted from scripts/generate-world-map-dots.mjs so the point-in-
// polygon logic can be unit-tested against small synthetic polygons
// without depending on the real (multi-megabyte) world-atlas dataset.

// Standard ray-casting even-odd test. `ring` is a GeoJSON linear ring:
// an array of [lon, lat] pairs, first and last equal (per the spec, though
// this test doesn't require it).
export function pointInRing(lon, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const intersect = yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

// `multiPolygonCoordinates` matches GeoJSON MultiPolygon.coordinates:
// Polygon[][], where each Polygon is [exteriorRing, ...holeRings].
export function pointInMultiPolygon(lon, lat, multiPolygonCoordinates) {
  for (const polygon of multiPolygonCoordinates) {
    let inPolygon = pointInRing(lon, lat, polygon[0]);
    if (inPolygon) {
      for (let h = 1; h < polygon.length; h++) {
        if (pointInRing(lon, lat, polygon[h])) {
          inPolygon = false;
          break;
        }
      }
    }
    if (inPolygon) return true;
  }
  return false;
}

// Samples every [lon, lat] on a `stepDeg`-degree grid (lat -90..90 inclusive,
// lon -180..<180) and keeps only the points that fall on land.
export function sampleLandGrid(multiPolygonCoordinates, stepDeg) {
  const points = [];
  for (let lat = -90; lat <= 90; lat += stepDeg) {
    for (let lon = -180; lon < 180; lon += stepDeg) {
      if (pointInMultiPolygon(lon, lat, multiPolygonCoordinates)) {
        points.push([lon, lat]);
      }
    }
  }
  return points;
}
