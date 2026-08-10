
export interface GlobeHotspot {
  country: string;
  countryCode: string;
  flag: string;
  lat: number;
  lon: number;
  traderRange: [number, number];
}

export const GLOBE_HOTSPOTS: GlobeHotspot[] = [
  { country: "United States", countryCode: "US", flag: "🇺🇸", lat: 40.7128, lon: -74.006, traderRange: [2800, 3600] },
  { country: "Canada", countryCode: "CA", flag: "🇨🇦", lat: 43.6532, lon: -79.3832, traderRange: [600, 1100] },
  { country: "Brazil", countryCode: "BR", flag: "🇧🇷", lat: -23.5505, lon: -46.6333, traderRange: [900, 1500] },
  { country: "United Kingdom", countryCode: "GB", flag: "🇬🇧", lat: 51.5074, lon: -0.1278, traderRange: [900, 1400] },
  { country: "Germany", countryCode: "DE", flag: "🇩🇪", lat: 52.52, lon: 13.405, traderRange: [700, 1200] },
  { country: "India", countryCode: "IN", flag: "🇮🇳", lat: 19.076, lon: 72.8777, traderRange: [1800, 2600] },
  { country: "UAE", countryCode: "AE", flag: "🇦🇪", lat: 25.2048, lon: 55.2708, traderRange: [400, 800] },
  { country: "Singapore", countryCode: "SG", flag: "🇸🇬", lat: 1.3521, lon: 103.8198, traderRange: [600, 950] },
  { country: "Australia", countryCode: "AU", flag: "🇦🇺", lat: -33.8688, lon: 151.2093, traderRange: [500, 900] },
  { country: "Japan", countryCode: "JP", flag: "🇯🇵", lat: 35.6762, lon: 139.6503, traderRange: [700, 1200] },
];

export interface GlobeRoute {
  from: string;
  to: string;
}

export const GLOBE_ROUTES: GlobeRoute[] = [
  { from: "United States", to: "India" },
  { from: "India", to: "Singapore" },
  { from: "United Kingdom", to: "UAE" },
  { from: "Japan", to: "Australia" },
];

export const GLOBE_OCEAN_COLOR = "#08111F";
export const GLOBE_LAND_COLOR = "#F4F7FF";
export const GLOBE_ROUTE_COLOR = "#4DA3FF";
export const GLOBE_GLOW_COLOR = "rgba(77,163,255,0.25)";
export const GLOBE_MARKER_COLOR = GLOBE_ROUTE_COLOR;
export const GLOBE_ARC_COLOR = GLOBE_ROUTE_COLOR;
export const GLOBE_ATMOSPHERE_COLOR = GLOBE_ROUTE_COLOR;

export const GLOBE_AUTOROTATE_SPEED = 0.8;
export const GLOBE_MARKER_PULSE_PERIOD_S = 3.2;
export const GLOBE_MARKER_UPDATE_INTERVAL_MS = 400;

export const GLOBE_LABEL_COUNT_MIN = 3;
export const GLOBE_LABEL_COUNT_MAX = 5;
export const GLOBE_LABEL_CYCLE_MIN_MS = 4000;
export const GLOBE_LABEL_CYCLE_MAX_MS = 6000;

export const GLOBE_ROUTE_ACTIVE_MIN = 2;
export const GLOBE_ROUTE_ACTIVE_MAX = 4;
export const GLOBE_ROUTE_CYCLE_MS = 7000;
export const GLOBE_ARC_DASH_ANIMATE_MS = 1800;

const fallbackTraderCountCache = new Map<string, number>();

export function randomTraderCount(hotspot: GlobeHotspot): number {
  const cached = fallbackTraderCountCache.get(hotspot.countryCode);
  if (cached !== undefined) return cached;
  const [min, max] = hotspot.traderRange;
  const value = Math.floor(min + Math.random() * (max - min));
  fallbackTraderCountCache.set(hotspot.countryCode, value);
  return value;
}

export function resolveTraderCount(hotspot: GlobeHotspot, liveStats: ReadonlyMap<string, number>): number {
  const live = liveStats.get(hotspot.countryCode);
  return live !== undefined ? live : randomTraderCount(hotspot);
}
