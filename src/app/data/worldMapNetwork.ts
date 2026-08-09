export interface WorldMapHub {
  label: string;
  lat: number;
  lon: number;
}

export const WORLD_MAP_HUBS: WorldMapHub[] = [
  { label: "New York", lat: 40.7128, lon: -74.006 }, // 0
  { label: "London", lat: 51.5074, lon: -0.1278 }, // 1
  { label: "Dubai", lat: 25.2048, lon: 55.2708 }, // 2
  { label: "Singapore", lat: 1.3521, lon: 103.8198 }, // 3
  { label: "Tokyo", lat: 35.6762, lon: 139.6503 }, // 4
  { label: "Sydney", lat: -33.8688, lon: 151.2093 }, // 5
];

export interface WorldMapRoute {
  from: number;
  to: number;
  duration: number;
  /** SMIL animateMotion begin offset, so packets don't all launch at once. */
  delay: number;
  pauses?: boolean;
}

export const WORLD_MAP_ROUTES: WorldMapRoute[] = [
  { from: 0, to: 1, duration: 5.5, delay: 0, pauses: true }, // New York - London
  { from: 1, to: 2, duration: 6.5, delay: 0.8 }, // London - Dubai
  { from: 2, to: 3, duration: 5, delay: 1.6, pauses: true }, // Dubai - Singapore
  { from: 3, to: 4, duration: 4.5, delay: 2.4 }, // Singapore - Tokyo
  { from: 4, to: 5, duration: 6, delay: 3.2 }, // Tokyo - Sydney
  { from: 0, to: 2, duration: 7, delay: 1.1 }, // New York - Dubai
  { from: 1, to: 3, duration: 7.5, delay: 2.0, pauses: true }, // London - Singapore
  { from: 2, to: 4, duration: 5.8, delay: 0.5 }, // Dubai - Tokyo
  { from: 5, to: 3, duration: 5.2, delay: 2.9 }, // Sydney - Singapore
  { from: 0, to: 4, duration: 8, delay: 1.7 }, // New York - Tokyo
];
