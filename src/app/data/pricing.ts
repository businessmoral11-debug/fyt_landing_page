
export type StepId = "1-Step" | "2-Step" | "Instant";
export type PlanId = "classic" | "prime" | "plus";
export type PlatformId = "match-trader" | "platform-5";

export interface PricingEntry {
  productId: number;
  priceOld: number;
  priceNew: number;
  share?: string;
  p1?: string;
  p2?: string;
  profit?: string;
  maxDaily: string;
  maxOverall: string;
  split: string;
  time: string;
  minDays: string;
  payout?: string;
}

export interface PlanOption {
  id: PlanId;
  label: string;
}

type Rules = Omit<PricingEntry, "productId" | "priceOld" | "priceNew">;

interface Row {
  size: number;
  mt: [number, number, number];
  p5: [number, number, number];
  split?: string;
}

type PlatformTable = Record<PlatformId, Record<number, PricingEntry>>;

/** Display sale price: 45% off the list price (NEWFYT). */
export const SALE_DISCOUNT_FRACTION = 0.45;

export function salePrice(priceOld: number): number {
  return Math.round(priceOld * (1 - SALE_DISCOUNT_FRACTION) * 100) / 100;
}

function build(rules: Rules, rows: Row[]): PlatformTable {
  const out: PlatformTable = { "match-trader": {}, "platform-5": {} };
  for (const r of rows) {
    const split = r.split ?? rules.split;
    // Row tuples keep a legacy mid-slot for readability; sale price is always 45% off list.
    out["match-trader"][r.size] = { ...rules, split, priceOld: r.mt[0], priceNew: salePrice(r.mt[0]), productId: r.mt[2] };
    out["platform-5"][r.size] = { ...rules, split, priceOld: r.p5[0], priceNew: salePrice(r.p5[0]), productId: r.p5[2] };
  }
  return out;
}

const RULES_1STEP: Rules = { share: "18%", p1: "10%", p2: "N/A", maxDaily: "4%", maxOverall: "6%", split: "Up to 100%", time: "None", minDays: "None" };
const RULES_2STEP: Rules = { share: "18%", p1: "10%", p2: "6%", maxDaily: "6%", maxOverall: "10%", split: "Up to 100%", time: "None", minDays: "None" };
const RULES_INSTANT_PLUS: Rules = { profit: "N/A", maxDaily: "N/A", maxOverall: "4%", split: "Up to 90%", time: "None", minDays: "10", payout: "Bi-weekly" };
const RULES_INSTANT_PRIME: Rules = { profit: "4%", maxDaily: "3%", maxOverall: "6%", split: "Up to 90%", time: "None", minDays: "5", payout: "Bi-weekly" };

export const PRICING_DATA: Record<StepId, Partial<Record<PlanId, PlatformTable>>> = {
  "1-Step": {
    classic: build(RULES_1STEP, [
      { size: 10000, mt: [114, 68.4, 1217], p5: [124, 74.4, 12379] },
      { size: 25000, mt: [219, 131.4, 1218], p5: [229, 137.4, 12381] },
      { size: 50000, mt: [309, 185.4, 1219], p5: [319, 191.4, 12382] },
      { size: 100000, mt: [505, 303, 1220], p5: [515, 309, 12378] },
      { size: 200000, mt: [909, 545.4, 1221], p5: [919, 551.4, 12380] },
    ]),
    prime: build(RULES_1STEP, [
      { size: 10000, mt: [114, 68.4, 21264], p5: [124, 74.4, 21265] },
      { size: 25000, mt: [219, 131.4, 21268], p5: [229, 137.4, 21269] },
      { size: 50000, mt: [309, 185.4, 21270], p5: [319, 191.4, 21271] },
      { size: 100000, mt: [505, 303, 21262], p5: [515, 309, 21263] },
      { size: 200000, mt: [909, 545.4, 21266], p5: [919, 551.4, 21267] },
    ]),
  },
  "2-Step": {
    classic: build(RULES_2STEP, [
      { size: 10000, mt: [95, 57, 1234], p5: [105, 63, 12367], split: "95/5" },
      { size: 25000, mt: [199, 119.4, 1233], p5: [209, 125.4, 12369] },
      { size: 50000, mt: [279, 167.4, 1232], p5: [289, 173.4, 12370] },
      { size: 100000, mt: [459, 275.4, 1231], p5: [469, 281.4, 12366] },
      { size: 200000, mt: [809, 485.4, 1230], p5: [819, 491.4, 12368] },
    ]),
    prime: build(RULES_2STEP, [
      { size: 10000, mt: [95, 57, 20980], p5: [105, 63, 20974], split: "95/5" },
      { size: 25000, mt: [199, 119.4, 20979], p5: [209, 125.4, 20973] },
      { size: 50000, mt: [279, 167.4, 20978], p5: [289, 173.4, 20972] },
      { size: 100000, mt: [459, 275.4, 20977], p5: [469, 281.4, 20971] },
      { size: 200000, mt: [809, 485.4, 20976], p5: [819, 491.4, 20970] },
    ]),
  },
  "Instant": {
    plus: build(RULES_INSTANT_PLUS, [
      { size: 5000, mt: [109, 65.4, 20619], p5: [119, 71.4, 20620] },
      { size: 10000, mt: [209, 125.4, 20613], p5: [219, 131.4, 20614] },
      { size: 25000, mt: [239, 143.4, 20615], p5: [249, 149.4, 20616] },
      { size: 50000, mt: [469, 281.4, 20617], p5: [479, 287.4, 20618] },
      { size: 100000, mt: [939, 563.4, 20621], p5: [949, 569.4, 20622] },
    ]),
    prime: build(RULES_INSTANT_PRIME, [
      { size: 5000, mt: [129, 77.4, 22214], p5: [129, 77.4, 22209] },
      { size: 10000, mt: [239, 143.4, 22213], p5: [239, 143.4, 22206] },
      { size: 25000, mt: [309, 185.4, 22212], p5: [309, 185.4, 22207] },
      { size: 50000, mt: [599, 359.4, 22211], p5: [599, 359.4, 22208] },
      { size: 100000, mt: [1009, 605.4, 22210], p5: [1009, 605.4, 22205] },
    ]),
  },
};

export const STEP_PLANS: Record<StepId, PlanOption[]> = {
  "1-Step": [{ id: "classic", label: "Classic" }, { id: "prime", label: "Prime" }],
  "2-Step": [{ id: "classic", label: "Classic" }, { id: "prime", label: "Prime" }],
  "Instant": [{ id: "plus", label: "Plus" }, { id: "prime", label: "Prime" }],
};

export interface PlatformOption {
  id: PlatformId;
  label: string;
}

export const PLATFORM_OPTIONS: PlatformOption[] = [
  { id: "match-trader", label: "MatchTrader" },
  { id: "platform-5", label: "Platform 5" },
];

export const STEP_SIZES: Record<StepId, number[]> = {
  "1-Step": [10000, 25000, 50000, 100000, 200000],
  "2-Step": [10000, 25000, 50000, 100000, 200000],
  "Instant": [5000, 10000, 25000, 50000, 100000],
};

export const STEP_LABELS: Record<StepId, string> = {
  "1-Step": "One-Step",
  "2-Step": "Two-Step",
  "Instant": "Instant",
};

export function refundLine(plan: PlanId): string {
  return plan === "classic"
    ? "Fee 100% refundable after your second reward."
    : "Fee 100% refundable after your first reward.";
}

export function planFlag(plan: PlanId): string | undefined {
  return plan === "prime" ? "No Consistency" : undefined;
}

export function getEntry(step: StepId, plan: PlanId, platform: PlatformId, size: number): PricingEntry | undefined {
  return PRICING_DATA[step]?.[plan]?.[platform]?.[size];
}

// WooCommerce shareable checkout-link applies the coupon reliably.
// Plain /checkout/?add-to-cart=…&coupon=… is ignored and the site's
// auto-applied summer40 (40%) coupon wins instead.
const CHECKOUT_LINK_BASE = "https://fundingyourtrades.com/checkout-link/?products=";
export const CHECKOUT_COUPON_CODE = "NEWFYT";

export function checkoutUrl(productId: number): string {
  return `${CHECKOUT_LINK_BASE}${productId}:1&coupon=${CHECKOUT_COUPON_CODE}`;
}

export function fmtSize(n: number): string {
  return `$${n / 1000}K`;
}
