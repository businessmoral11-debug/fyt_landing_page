import { WORLD_MAP_DOTS } from "@/app/worldMapDots";
import { WORLD_MAP_VIEW_WIDTH, WORLD_MAP_VIEW_HEIGHT, projectLonLat, arcPath } from "@/app/worldMapProjection";
import { WORLD_MAP_CITIES, WORLD_MAP_ARCS } from "@/app/worldMapRoutes";

// Single self-contained "world map" card for the Closing CTA section.
// Continent dots, city pins, and arc endpoints all go through the same
// projectLonLat function (worldMapProjection.ts), so they can never drift
// out of alignment with each other — unlike the previous implementation's
// separately-authored PNG background layered under a differently-projected
// SVG overlay.
export function WorldMapWidget() {
  return (
    <div className="relative w-full rounded-[20px] overflow-hidden" style={{ border: "1px solid rgba(59,130,246,0.25)" }}>
      <div className="bg-[#0b0c11] aspect-[2/1] min-h-[220px] sm:min-h-0 relative w-full">
        <WorldMapSvg />
        <div className="absolute top-[16px] left-[20px] flex items-center gap-[8px]">
          <span className="w-[6px] h-[6px] rounded-full bg-[#3b82f6]" />
          <span className="text-[#8a90a3] text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold tracking-[1px] uppercase">
            Live Payout Routes
          </span>
        </div>
      </div>
    </div>
  );
}

function WorldMapSvg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox={`0 0 ${WORLD_MAP_VIEW_WIDTH} ${WORLD_MAP_VIEW_HEIGHT}`}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="world-map-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dot-matrix continents */}
      {WORLD_MAP_DOTS.map(([lon, lat], i) => {
        const { x, y } = projectLonLat(lon, lat);
        return <circle key={`land-${i}`} cx={x} cy={y} r="1.1" fill="#e7ebf5" fillOpacity="0.85" />;
      })}

      {/* Arc base lines — faint */}
      {WORLD_MAP_ARCS.map(({ from, to }, i) => {
        const a = projectLonLat(WORLD_MAP_CITIES[from].lon, WORLD_MAP_CITIES[from].lat);
        const b = projectLonLat(WORLD_MAP_CITIES[to].lon, WORLD_MAP_CITIES[to].lat);
        return <path key={`arc-line-${i}`} d={arcPath(a, b)} stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="1" />;
      })}

      {/* Traveling dots along arcs, staggered ("sequential") per arc */}
      {WORLD_MAP_ARCS.map(({ from, to, dur, begin, trailBegin }, i) => {
        const a = projectLonLat(WORLD_MAP_CITIES[from].lon, WORLD_MAP_CITIES[from].lat);
        const b = projectLonLat(WORLD_MAP_CITIES[to].lon, WORLD_MAP_CITIES[to].lat);
        const d = arcPath(a, b);
        return (
          <g key={`arc-travel-${i}`}>
            <circle r="2.5" fill="#3b82f6" opacity="0.9" filter="url(#world-map-glow)">
              <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={d} />
            </circle>
            <circle r="1.5" fill="#3b82f6" opacity="0.4">
              <animateMotion dur={dur} begin={trailBegin} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        );
      })}

      {/* City pins — "glow" style: pulse ring + soft glow + bright core */}
      {WORLD_MAP_CITIES.map(({ lon, lat }, i) => {
        const { x, y } = projectLonLat(lon, lat);
        const delay = `${i * 0.65}s`;
        return (
          <g key={`city-${i}`}>
            <circle cx={x} cy={y} r="5" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.6">
              <animate attributeName="r" from="5" to="22" dur="2s" begin={delay} repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" from="0.6" to="0" dur="2s" begin={delay} repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r="8" fill="#3b82f6" fillOpacity="0.08" />
            <circle cx={x} cy={y} r="4" fill="#3b82f6" filter="url(#world-map-glow)" />
            <circle cx={x} cy={y} r="2.5" fill="#fff" fillOpacity="0.9" />
          </g>
        );
      })}
    </svg>
  );
}
