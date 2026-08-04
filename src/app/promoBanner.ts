// Top-of-page promo marquee data + countdown math.
// Content verified against fundingyourtrades.com's live promo bar on 2026-08-03
// (raw HTML/CSS/JS inspection — #fyt4wrap / #fyt4runner). This is a live
// marketing campaign and WILL go stale as FYT's offers change; unlike
// pricing.ts there is no automated drift check here — refreshing PROMO_ITEMS
// and PROMO_DEADLINE below is a manual, future task.

export type PromoItemKind = "code" | "plain" | "crypto" | "live";

export interface PromoItem {
  kind: PromoItemKind;
  label?: string; // optional lead-in label, e.g. "Summer Special"
  text: string;
  sub?: string; // secondary line, e.g. "Crypto Payment"
  code?: string; // promo code, present only on "code" kind items
}

export const PROMO_ITEMS: PromoItem[] = [
  { kind: "code", label: "Summer Special", text: "40% Off + 2 Accounts Instantly", code: "Summer40" },
  { kind: "plain", text: "200% Refund + 1st Reward on Demand" },
  { kind: "crypto", text: "47.5% Off with Crypto + 2 Accounts Instantly Same Size", sub: "Crypto Payment" },
  { kind: "live", text: "Limited-Time Deal · Limited Spots" },
  { kind: "code", text: "40% Off + 2 Accounts Instantly", code: "Summer40" },
];

export const PROMO_DEADLINE = "2026-08-03T09:59:59+06:00";

export interface Countdown {
  days: number;
  hh: string;
  mm: string;
  ss: string;
}

const pad = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

// Pure — takes `now` explicitly instead of reading the clock itself, so it's
// trivially unit-testable (same pattern as heroSweep.ts's pure CSS generators).
export function formatCountdown(deadlineISO: string, nowMs: number): Countdown {
  const deadlineMs = new Date(deadlineISO).getTime();
  const diff = Math.max(0, deadlineMs - nowMs);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hh: pad(hours), mm: pad(minutes), ss: pad(seconds) };
}
