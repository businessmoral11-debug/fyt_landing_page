// Same 22 cities / 6 arcs as the original WorldMapArcs implementation in
// App.tsx, carried over unchanged in identity and arc timing — only the
// coordinate system changed, from hand-picked pixel x/y to real-world
// latitude/longitude (standard, widely-published city coordinates,
// rounded to 4 decimal places). Positions are projected at render time by
// worldMapProjection.ts's projectLonLat, the same function used for the
// continent dots in worldMapDots.ts.
export interface WorldMapCity {
  label: string;
  lat: number;
  lon: number;
}

export const WORLD_MAP_CITIES: WorldMapCity[] = [
  { label: "New York", lat: 40.7128, lon: -74.006 }, // 0
  { label: "Los Angeles", lat: 34.0522, lon: -118.2437 }, // 1
  { label: "Chicago", lat: 41.8781, lon: -87.6298 }, // 2
  { label: "São Paulo", lat: -23.5505, lon: -46.6333 }, // 3
  { label: "Buenos Aires", lat: -34.6037, lon: -58.3816 }, // 4
  { label: "London", lat: 51.5074, lon: -0.1278 }, // 5
  { label: "Paris", lat: 48.8566, lon: 2.3522 }, // 6
  { label: "Berlin", lat: 52.52, lon: 13.405 }, // 7
  { label: "Moscow", lat: 55.7558, lon: 37.6173 }, // 8
  { label: "Cairo", lat: 30.0444, lon: 31.2357 }, // 9
  { label: "Lagos", lat: 6.5244, lon: 3.3792 }, // 10
  { label: "Nairobi", lat: -1.2921, lon: 36.8219 }, // 11
  { label: "Johannesburg", lat: -26.2041, lon: 28.0473 }, // 12
  { label: "Dubai", lat: 25.2048, lon: 55.2708 }, // 13
  { label: "Mumbai", lat: 19.076, lon: 72.8777 }, // 14
  { label: "Delhi", lat: 28.7041, lon: 77.1025 }, // 15
  { label: "Singapore", lat: 1.3521, lon: 103.8198 }, // 16
  { label: "Beijing", lat: 39.9042, lon: 116.4074 }, // 17
  { label: "Tokyo", lat: 35.6762, lon: 139.6503 }, // 18
  { label: "Shanghai", lat: 31.2304, lon: 121.4737 }, // 19
  { label: "Sydney", lat: -33.8688, lon: 151.2093 }, // 20
  { label: "Auckland", lat: -36.8485, lon: 174.7633 }, // 21
];

export interface WorldMapArc {
  from: number;
  to: number;
  dur: string;
  begin: string;
  trailBegin: string;
}

export const WORLD_MAP_ARCS: WorldMapArc[] = [
  { from: 0, to: 5, dur: "3s", begin: "0s", trailBegin: "0.3s" }, // NYC → London
  { from: 5, to: 13, dur: "2.8s", begin: "1s", trailBegin: "1.3s" }, // London → Dubai
  { from: 13, to: 18, dur: "3.2s", begin: "2s", trailBegin: "2.3s" }, // Dubai → Tokyo
  { from: 0, to: 3, dur: "2.5s", begin: "0.5s", trailBegin: "0.8s" }, // NYC → São Paulo
  { from: 18, to: 20, dur: "2.6s", begin: "1.5s", trailBegin: "1.8s" }, // Tokyo → Sydney
  { from: 5, to: 10, dur: "2.4s", begin: "3s", trailBegin: "3.3s" }, // London → Lagos
];
