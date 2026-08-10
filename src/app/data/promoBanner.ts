
export type PromoItemKind = "code" | "plain" | "crypto" | "live";

export interface PromoItem {
  kind: PromoItemKind;
  label?: string;
  text: string;
  sub?: string;
  code?: string;
}

export const PROMO_ITEMS: PromoItem[] = [
  { kind: "code", label: "The NEW FYT Deal", text: "45% off + Buy 1 Get 3", code: "NEWFYT" },
  { kind: "crypto", text: "52.5% Off Everything with Crypto Payment + 3 Accounts", sub: "Crypto Payment" },
  { kind: "live", text: "250 Spots Only" },
];

export const PROMO_DEADLINE = "2026-08-03T09:59:59+06:00";

export interface Countdown {
  days: number;
  hh: string;
  mm: string;
  ss: string;
}

const pad = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export function formatCountdown(deadlineISO: string, nowMs: number): Countdown {
  const deadlineMs = new Date(deadlineISO).getTime();
  const diff = Math.max(0, deadlineMs - nowMs);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hh: pad(hours), mm: pad(minutes), ss: pad(seconds) };
}
