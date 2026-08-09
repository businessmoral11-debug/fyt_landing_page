
export interface CardReveal {
  fadeStart: number; // scrollYProgress (0-1) where this card starts fading/sliding in
  fadeEnd: number;   // scrollYProgress (0-1) where this card reaches full opacity/resting position
  fromX: number;     // px horizontal offset animated FROM (0 = no horizontal slide)
  fromY: number;     // px vertical offset animated FROM (0 = no vertical slide)
}

export const PROVE_SKILL_SCROLL_HEIGHT_VH = 220;

export const PROVE_SKILL_CARD_REVEALS: readonly CardReveal[] = [
  { fadeStart: 0,    fadeEnd: 0.3,  fromX: -24, fromY: -24 }, // top-left     — step 1
  { fadeStart: 0,    fadeEnd: 0.3,  fromX: 24,  fromY: -24 }, // top-right    — step 1
  { fadeStart: 0.38, fadeEnd: 0.6,  fromX: -24, fromY: 24 },  // mid-left     — step 2
  { fadeStart: 0.38, fadeEnd: 0.6,  fromX: 24,  fromY: 24 },  // mid-right    — step 2
  { fadeStart: 0.68, fadeEnd: 0.97, fromX: 0,   fromY: 24 },  // bottom-center — step 3
];

export const PROVE_SKILL_MOBILE_SCROLL_HEIGHT_VH = 200;

export const PROVE_SKILL_MOBILE_CARD_REVEALS: readonly CardReveal[] = [
  { fadeStart: 0,    fadeEnd: 0.3,  fromX: 0, fromY: 24 }, // step 1
  { fadeStart: 0,    fadeEnd: 0.3,  fromX: 0, fromY: 24 }, // step 1
  { fadeStart: 0.38, fadeEnd: 0.6,  fromX: 0, fromY: 24 }, // step 2
  { fadeStart: 0.38, fadeEnd: 0.6,  fromX: 0, fromY: 24 }, // step 2
  { fadeStart: 0.68, fadeEnd: 0.97, fromX: 0, fromY: 24 }, // step 3
];
