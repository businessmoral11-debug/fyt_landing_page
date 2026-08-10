import { useState, useEffect, useRef, useCallback, useMemo, memo, Fragment, lazy, Suspense, Component, type ReactNode } from "react";
import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import * as Accordion from "@radix-ui/react-accordion";
import svgPaths from "@/imports/FytLandingPage/svg-1sqldvgw4z";
import useEmblaCarousel from "embla-carousel-react";
import { buildAutoplayPlugins } from "@/app/motion/emblaAutoplay";
import imgImg10782 from "@/imports/FytLandingPage/c3e1b41ac1a944e4221b3b1465d4e68b855d759f.png";
import imgImg10801 from "@/imports/FytLandingPage/7dca680e1978188fe7adca05839b49894cdf71f2.png";
import imgPressBarchart from "@/assets/live-site/press-logos/barchart.webp";
import imgPressBenzinga from "@/assets/live-site/press-logos/benzinga.webp";
import imgPressDigitalJournal from "@/assets/live-site/press-logos/digitaljournal.webp";
import imgPressYahoo from "@/assets/live-site/press-logos/yahoo.webp";
import imgMatchTraderLogo from "@/assets/live-site/platform-logos/match-trader.png";
import imgPlatform5Logo from "@/assets/live-site/platform-logos/platform-5.png";
import { STEP_PLANS, STEP_SIZES, getEntry, checkoutUrl, fmtSize, planFlag, PLATFORM_OPTIONS, type StepId, type PlanId, type PlatformId } from "@/app/data/pricing";
import { HERO_ORBIT_LABELS, HERO_ORBIT_RINGS, MOBILE_ORBIT_LABELS, MOBILE_LABEL_LAYOUT, mobileLabelBoxCss } from "@/app/motion/heroOrbit";
import { HERO_STAGE_WIDTH, heroStageScale, heroLabelScale } from "@/app/motion/heroResponsive";
import { heroSweepCss } from "@/app/motion/heroSweep";
import { HERO_CONTENT, KEY_METRICS, NAV_LINKS, FOOTER_COLUMNS, FOOTER_LINKS, FAQ_ITEMS } from "@/app/data/liveSiteContent";
import { PROMO_ITEMS, PROMO_DEADLINE, formatCountdown, type PromoItem } from "@/app/data/promoBanner";
import { countryFlagUrl } from "@/app/api/rewardsApi";
const loadGlobe = () => import("@/app/globe");
const loadRecentVerifiedRewards = () => import("@/app/recentVerifiedRewards");
const loadFeaturedCertificates = () => import("@/app/featuredCertificates");
const TradingGlobe = lazy(() => loadGlobe().then((m) => ({ default: m.TradingGlobe })));
const RecentVerifiedRewards = lazy(() => loadRecentVerifiedRewards().then((m) => ({ default: m.RecentVerifiedRewards })));
const FeaturedCertificates = lazy(() => loadFeaturedCertificates().then((m) => ({ default: m.FeaturedCertificates })));

function prefetchBelowFoldChunks() {
  void loadFeaturedCertificates();
  void loadRecentVerifiedRewards();
  if (window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 768) {
    scheduleIdlePreload(preloadGlobeChunkOnce, 150);
  }
}

let globeChunkPreloadStarted = false;
function preloadGlobeChunkOnce() {
  if (globeChunkPreloadStarted) return;
  globeChunkPreloadStarted = true;
  if (import.meta.env.DEV) performance.mark("globe:chunk-load-start");
  void loadGlobe().then(() => {
    if (import.meta.env.DEV) {
      performance.mark("globe:chunk-load-end");
      try {
        performance.measure("Globe: JS chunk download + evaluate", "globe:chunk-load-start", "globe:chunk-load-end");
      } catch {
      }
    }
  });
}

function scheduleIdlePreload(cb: () => void, timeout = 1000) {
  if (typeof window === "undefined") return;
  const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
  if (typeof ric === "function") {
    ric(cb, { timeout });
  } else {
    setTimeout(cb, timeout);
  }
}
import { parseCountUpSegments, renderCountUp } from "@/app/motion/countUp";
import imgDashboardMockup from "@/assets/images/dashboard_floating_3d_v2.webp";
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion, useInView, type MotionValue } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useMotionValue, useSpring, useMotionValueEvent, useAnimation } from "motion/react";
import { useMagnetic } from "@/app/motion/magnetic";
import { useScrollShrink } from "@/app/motion/navScroll";
import { useTilt } from "@/app/motion/tilt";
import { useCursorGlow } from "@/app/motion/cursorGlow";
import { AmbientBlob, StaticGlow, NOISE_BG, AccentLine } from "@/app/ambient";
import {
  proofRevealItem,
  proofLeftReveal,
  proofRightReveal,
  proofHeadlineContainer,
  proofHeadlineLine,
  proofButtonReveal,
  proofCardReveal,
  PROOF_FLOAT_Y,
  PROOF_FLOAT_TRANSITION,
  PROOF_AMBIENT_GLOW_OPACITY,
  PROOF_AMBIENT_GLOW_TRANSITION,
  PROOF_CARD_HOVER_TRANSITION,
  proofCardHover,
  PROOF_CARD_FLOAT_AMPLITUDE_PX,
  PROOF_CARD_FLOAT_DURATION_S,
  PROOF_CARD_FLOAT_STAGGER_S,
  PROOF_CARD_BREATHE_DURATION_S,
  PROOF_CARD_BREATHE_OPACITY,
  PROOF_CARD_BREATHE_STAGGER_S,
  PROOF_ICON_MOTION,
  PROOF_ICON_NETWORK_RING_TRANSITION,
  proofIconNetworkRing,
  PROOF_BUTTON_SWEEP_TRANSITION,
  proofButtonSweep,
  PROOF_DATA_LINES,
  PROOF_DATA_LINE_LIGHT_CYCLE_S,
  PROOF_DATA_LINE_LIGHT_DURATION_S,
  PROOF_DATA_LINE_LIGHT_STAGGER_S,
  PROOF_CONNECTION_LINE_DELAY_S,
  PROOF_CONNECTION_LINE_DURATION_S,
  PROOF_CONNECTION_LINE_OPACITY,
  PROOF_CONNECTION_LINE_TRAVEL_DELAY_S,
  PROOF_CONNECTION_LINE_TRAVEL_DURATION_S,
  PROOF_SPOTLIGHT_OPACITY,
} from "@/app/motion/proofInNumbersMotion";
import {
  productSectionContainer,
  productSectionItem,
  productHeadingContainer,
  productHeadingWord,
  productBadgeContainer,
  productBadgeIcon,
  productBadgeLabel,
  productDashboardContainer,
  productDashboardBack,
  productDashboardFront,
  productDashboardFloatY,
  PRODUCT_DASHBOARD_FLOAT_TRANSITION,
  PRODUCT_DASHBOARD_TILT_MAX_DEG,
  PRODUCT_REFLECTION_SWEEP_TRANSITION,
  productReflectionSweep,
  PRODUCT_AMBIENT_GLOW_OPACITY as PRODUCT_SHOWCASE_AMBIENT_GLOW_OPACITY,
  PRODUCT_AMBIENT_GLOW_TRANSITION,
  PRODUCT_CONNECTION_LINE_DELAY_S,
  PRODUCT_CONNECTION_LINE_DURATION_S,
  PRODUCT_CONNECTION_LINE_OPACITY,
  PRODUCT_DUST_PARTICLES,
  PRODUCT_CARD_HOVER_TRANSITION,
  productPlatformCardHover,
  productPlatformPillHover,
  productIconHoverRotate,
  productSupportCardHover,
  PRODUCT_ONLINE_DOT_TRANSITION,
  productOnlineDotPulse,
  PRODUCT_CHAT_BUTTON_SHEEN_DURATION_S,
  productChatButtonSheen,
} from "@/app/motion/productShowcaseMotion";
import {
  pricingCardFloatY,
  PRICING_CARD_FLOAT_TRANSITION,
  PRICING_SWEEP_TRANSITION,
  pricingSweepOpacity,
  pricingContentDipOpacity,
  PRICING_SPOTLIGHT_OPACITY,
  PRICING_CTA_GRADIENT_DURATION_S,
  pricingCtaGradientPosition,
  PRICING_PRICE_SPRING,
  PRICING_PROGRESS_SEGMENT_TRANSITION,
  PRICING_COMPLETION_LINE_GLOW_DELAY_S,
  PRICING_COMPLETION_LINE_GLOW_DURATION_S,
  PRICING_COMPLETION_CARD_PULSE_DELAY_S,
  PRICING_COMPLETION_CARD_PULSE_DURATION_S,
  pricingCompletionCardPulse,
  PRICING_COMPLETION_CTA_GLOW_DELAY_S,
  PRICING_COMPLETION_CTA_GLOW_DURATION_S,
  pricingCompletionCtaGlow,
} from "@/app/motion/pricingMotion";
import {
  LIVE_PAYOUTS_CTA_GRADIENT_DURATION_S,
  livePayoutsCtaGradientPosition,
  LIVE_PAYOUTS_CTA_FLOAT_TRANSITION,
  livePayoutsCtaFloatY,
  LIVE_PAYOUTS_BG_GLOW_OPACITY,
  LIVE_PAYOUTS_VIGNETTE_OPACITY,
  LIVE_PAYOUTS_NOISE_OPACITY,
} from "@/app/motion/livePayoutsMotion";
import { HeroSceneGate } from "@/app/three/HeroSceneGate";
import { PROVE_SKILL_CARD_REVEALS, PROVE_SKILL_SCROLL_HEIGHT_VH, PROVE_SKILL_MOBILE_CARD_REVEALS, PROVE_SKILL_MOBILE_SCROLL_HEIGHT_VH, type CardReveal } from "@/app/motion/proveSkillReveal";
import { useMonotonicProgress } from "@/app/motion/scrollProgress";
import {
  HOW_IT_WORKS_SCROLL_HEIGHT_VH,
  HOW_IT_WORKS_STEP_REVEALS,
  HOW_IT_WORKS_LINE_REVEAL,
  HOW_IT_WORKS_RING_RGB,
  HOW_IT_WORKS_DOT_RGB,
  HOW_IT_WORKS_NUMBER_RGB,
  HOW_IT_WORKS_RING_BORDER_ALPHA,
  HOW_IT_WORKS_RING_GLOW_ALPHA,
  HOW_IT_WORKS_DOT_BG_ALPHA,
  HOW_IT_WORKS_DOT_GLOW_ALPHA,
  HOW_IT_WORKS_NUMBER_ALPHA,
  HOW_IT_WORKS_ICON_BORDER_ALPHA,
  HOW_IT_WORKS_LABEL_DIM_HEX,
  HOW_IT_WORKS_LABEL_PEAK_HEX,
  HOW_IT_WORKS_DESC_DIM_HEX,
  HOW_IT_WORKS_DESC_PEAK_HEX,
  HOW_IT_WORKS_LINE_GLOW,
  HOW_IT_WORKS_MOBILE_SPOTLIGHT_CARD,
  HOW_IT_WORKS_MOBILE_SPOTLIGHT_ICON,
  HOW_IT_WORKS_MOBILE_SPOTLIGHT_TRANSITION_S,
  type StepReveal,
} from "@/app/motion/howItWorksReveal";
import { TESTIMONIAL_PAGES, TESTIMONIAL_FLAT_ITEMS, TESTIMONIAL_VIDEOS, type TestimonialSlideItem, type TestimonialVideo } from "@/app/data/testimonials";
import {
  TESTIMONIAL_HEADING_REVEAL,
  TESTIMONIAL_GRID_CONTAINER,
  TESTIMONIAL_CARD_REVEAL,
  TESTIMONIAL_CTA_REVEAL,
  TESTIMONIAL_MOBILE_CARD_REVEAL,
  testimonialColumnRole,
} from "@/app/motion/testimonialsReveal";
import { FAQ_TITLE_WORD, FAQ_TITLE_CONTAINER, FAQ_ROWS_CONTAINER, FAQ_ROW_REVEAL, FAQ_TOPLINE_PERIOD_S } from "@/app/motion/faqReveal";
import { FOOTER_LOGO_REVEAL, FOOTER_COLUMNS_CONTAINER, FOOTER_COLUMN_REVEAL, FOOTER_TOPLINE_PERIOD_S } from "@/app/motion/footerReveal";
import { CursorSpotlight } from "@/app/cursorSpotlight";
import { type VideoSource, buildYouTubeEmbedUrl, testimonialVideoSource, pricingExplainerVideoSource } from "@/app/motion/videoLightbox";
import {
  DIFFERENCE_HEADING_WORDS,
  DIFFERENCE_HEADING_PARENT_VARIANTS,
  DIFFERENCE_HEADING_WORD_VARIANTS,
  DIFFERENCE_PIN_SCROLL_HEIGHT_VH,
  DIFFERENCE_HEADING_EXIT_REVEAL,
  DIFFERENCE_CONTENT_ENTER_REVEAL,
  type DifferenceCrossfadeReveal,
} from "@/app/motion/differenceReveal";

const HERO_SWEEP_CSS = heroSweepCss(HERO_ORBIT_LABELS) + "\n" + heroSweepCss(MOBILE_ORBIT_LABELS, "-mobile");

const MOBILE_RADAR_BOTTOM_GAP_PX = 40;

const MOBILE_TRUST_STRIP_HEIGHT_PX = 80;

const MOBILE_TRUST_STRIP_GAP_PX = 40;

const MOBILE_RADAR_STRIP_RESERVE_PX = MOBILE_RADAR_BOTTOM_GAP_PX + MOBILE_TRUST_STRIP_GAP_PX + MOBILE_TRUST_STRIP_HEIGHT_PX;

const MOBILE_TRUST_STRIP_AVATARS = TESTIMONIAL_VIDEOS.slice(0, 4).map((v) => v.posterUrl);

const MOBILE_TRUST_STRIP_FLAG_CODES = ["US", "GB", "IN", "PK", "DE"] as const;

const PILL_CTA_GRADIENT_STYLE = {
  background: "linear-gradient(180deg, #5A9BFF 0%, #2563EB 100%)",
  boxShadow: "0px 8px 28px -6px rgba(37,99,235,0.25), inset 0px 1px 0px rgba(255,255,255,0.38)",
} as const;

const SUPPORT_CARD_ACCENT_BLUE = "#2563EB";
const SUPPORT_CARD_GRADIENT_STYLE = {
  background: `linear-gradient(180deg, ${SUPPORT_CARD_ACCENT_BLUE} 0%, #1D4ED8 100%)`,
  boxShadow: "0px 8px 28px -6px rgba(37,99,235,0.5), inset 0px 1px 0px rgba(255,255,255,0.38)",
} as const;


function useHeroStageScale() {
  const [scale, setScale] = useState(() => heroStageScale(window.innerWidth));
  useEffect(() => {
    const onResize = () => setScale(heroStageScale(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return scale;
}


function Wordmark() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
      <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[14px] mb-0 whitespace-pre">{`FUNDING YOUR `}</p>
        <p className="leading-[14px] whitespace-pre">TRADES</p>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <motion.a
      href="https://fundingyourtrades.com/"
      aria-label="Funding Your Trades home"
      className="group content-stretch flex items-center relative shrink-0 no-underline"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Soft blue glow, hidden until hover. */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)", filter: "blur(12px)" }}
      />
      <div className="h-[40px] relative shrink-0 w-[42px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.43%] max-w-none top-0 w-[100.87%]" src={imgImg10782} />
        </div>
      </div>
      <Wordmark />
    </motion.a>
  );
}

function Links() {
  return (
    <div className="[word-break:break-word] hidden lg:flex content-stretch font-['Inter:Medium',sans-serif] font-medium gap-[36px] items-center leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">
      {NAV_LINKS.items.map((item) =>
        item.type === "dropdown" ? (
          <div key={item.label} className="relative group/affiliate">
            <p tabIndex={0} className="group/link relative shrink-0 cursor-pointer py-[6px] transition-colors duration-300 ease-out group-hover/link:text-[#60a5fa]">
              {item.label}
              <span aria-hidden className="absolute left-1/2 -bottom-px h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-[#60a5fa] transition-transform duration-300 ease-out group-hover/link:scale-x-100 group-focus-within/affiliate:scale-x-100" />
            </p>
            <div className="absolute left-0 top-full pt-[12px] opacity-0 pointer-events-none -translate-y-[4px] group-hover/affiliate:opacity-100 group-hover/affiliate:pointer-events-auto group-hover/affiliate:translate-y-0 group-focus-within/affiliate:opacity-100 group-focus-within/affiliate:pointer-events-auto group-focus-within/affiliate:translate-y-0 transition-all duration-150 z-50">
              <div className="flex flex-col gap-[4px] bg-[#0a0e1a]/95 backdrop-blur-[16px] border border-[rgba(255,255,255,0.12)] rounded-[12px] p-[8px] min-w-[200px] shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                {item.items.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="whitespace-nowrap rounded-[8px] px-[12px] py-[8px] text-[14px] text-[#eef0f6] no-underline hover:bg-[rgba(255,255,255,0.06)] hover:text-[#60a5fa] transition-colors duration-150"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <a key={item.label} href={item.href} className="group/link relative shrink-0 text-[#eef0f6] no-underline hover:text-[#60a5fa] transition-colors duration-300 ease-out py-[6px]">
            {item.label}
            <span aria-hidden className="absolute left-1/2 -bottom-px h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-[#60a5fa] transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
          </a>
        ),
      )}
    </div>
  );
}

function ButtonPrimaryLg() {
  const magnet = useMagnetic<HTMLAnchorElement>(0.25);
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
      <motion.a
        ref={magnet.ref}
        href={NAV_LINKS.buyHere.href}
        onMouseMove={magnet.onMouseMove}
        onMouseLeave={magnet.onMouseLeave}
        style={{ ...magnet.style, ...PILL_CTA_GRADIENT_STYLE }}
        whileHover={{ scale: 1.04, boxShadow: "0px 12px 32px -6px rgba(37,99,235,0.55), inset 0px 1px 0px rgba(255,255,255,0.38)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="cta-shine relative rounded-[14px] shrink-0 no-underline block"
      >
        <div className="content-stretch flex items-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{NAV_LINKS.buyHere.label}</p>
        </div>
      </motion.a>
    </motion.div>
  );
}

function NavRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0">
      <a href={NAV_LINKS.login.href} className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap no-underline hover:text-[#93c5fd] transition-colors duration-300 ease-out">{NAV_LINKS.login.label}</a>
      <ButtonPrimaryLg />
    </div>
  );
}

function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className="flex lg:hidden flex-col justify-center items-center gap-[5px] w-[44px] h-[44px] -my-[6px] -mx-[10px] bg-transparent border-0 p-0 cursor-pointer shrink-0"
    >
      <span className="block h-[2px] w-full bg-white rounded-[1px]" />
      <span className="block h-[2px] w-full bg-white rounded-[1px]" />
      <span className="block h-[2px] w-full bg-white rounded-[1px]" />
    </button>
  );
}

const MOBILE_NAV_ITEM_CLASS =
  "w-full py-[13px] text-[17px] leading-[1.3] tracking-normal text-center text-white font-['Inter:Medium',sans-serif] font-medium no-underline transition-colors duration-200 active:text-[#93c5fd]";

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.3 }}
          className="lg:hidden fixed inset-0 z-50 bg-[rgba(10,14,24,0.9)] flex flex-col justify-between px-[24px]"
          style={{
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            paddingTop: "calc(32px + var(--safe-top))",
            paddingBottom: "calc(40px + var(--safe-bottom))",
          }}
        >
          <motion.div
            initial={reduceMotion ? false : { y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? undefined : { y: -16, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between h-full"
          >
          {/* Header row */}
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex items-center justify-center size-[44px] rounded-full border border-[rgba(255,255,255,0.25)] bg-transparent cursor-pointer transition-colors duration-200 hover:bg-[rgba(255,255,255,0.08)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {/* Centered links */}
          <div className="flex flex-col items-center w-full gap-[2px] overflow-y-auto">
            {NAV_LINKS.items.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.label} className="flex flex-col items-center w-full">
                  {item.items.map((sub) => (
                    <a key={sub.label} href={sub.href} className={MOBILE_NAV_ITEM_CLASS}>
                      {sub.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a key={item.label} href={item.href} className={MOBILE_NAV_ITEM_CLASS}>
                  {item.label}
                </a>
              ),
            )}
          </div>
          {/* Bottom actions */}
          <div className="flex flex-col items-center gap-[20px]">
            <a href={NAV_LINKS.login.href} className="text-[17px] leading-[1.3] tracking-normal text-white font-['Inter:Medium',sans-serif] font-medium no-underline transition-colors duration-200 active:text-[#93c5fd]">{NAV_LINKS.login.label}</a>
            <a href={NAV_LINKS.buyHere.href} onClick={onClose} className="bg-[#3b82f6] w-full rounded-[8px] py-[16px] flex items-center justify-center no-underline transition-transform duration-200 active:scale-[0.98]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white">{NAV_LINKS.buyHere.label}</p>
            </a>
            <div className="h-[4px] w-[134px] rounded-full bg-[rgba(255,255,255,0.3)]" />
          </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollShrink(40);
  return (
    <div className="sticky top-0 z-40 w-full">
      <div>
        <div
          className="border-b rounded-b-[22px] transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out"
          style={{
            background: scrolled ? "rgba(10,14,24,0.85)" : "rgba(10,14,24,0.35)",
            backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "blur(12px) saturate(180%)",
            WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "blur(12px) saturate(180%)",
            borderColor: "rgba(255,255,255,0.08)",
            boxShadow: scrolled ? "0 16px 48px rgba(0,0,0,0.45)" : "0 12px 40px rgba(0,0,0,0.35)",
          }}
        >
          {/* Height is intentionally constant (not scroll-shrunk): the sticky
              nav's own box height participates in normal document flow, so
              animating it reflowed everything below -- including the Hero --
              on every crossing of the shrink threshold. The background/blur/
              shadow "scrolled" polish above is unaffected (paint-only, no
              layout impact) and stays. */}
          <div className="flex flex-row items-center rounded-[inherit] size-full h-[72px] lg:h-[76px]">
            <div className="content-stretch grid grid-cols-3 items-center px-[20px] lg:px-[26px] relative size-full max-w-[1280px] mx-auto">
              <div className="col-start-1 justify-self-start"><Brand /></div>
              <div className="col-start-2 justify-self-center"><Links /></div>
              <div className="col-start-3 justify-self-end flex items-center">
                {/* Desktop right cluster */}
                <div className="hidden lg:flex"><NavRight /></div>
                {/* Mobile: hamburger only — Log in + Start evaluation live in the overlay */}
                <HamburgerButton onClick={() => setMenuOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}


const CRYPTO_DOT_COLORS = ["#F7931A", "#627EEA", "#26A17B", "#345D9D", "#2775CA"];

function PromoItemChip({ item }: { item: PromoItem }) {
  return (
    <span className="flex items-center gap-[8px] px-[16px] shrink-0">
      {item.kind === "live" && (
        <span className="relative flex items-center justify-center size-[8px]" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full size-[8px] bg-[#3b82f6]" />
        </span>
      )}
      {item.label && (
        <span className="font-['DM_Sans',sans-serif] font-medium text-[#eef0f6] text-[12px] uppercase tracking-[0.4px] whitespace-nowrap">{item.label}</span>
      )}
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#eef0f6] text-[12px] uppercase tracking-[0.4px] whitespace-nowrap">{item.text}</span>
      {item.sub && (
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9da2b4] text-[12px] uppercase tracking-[0.4px] whitespace-nowrap">{item.sub}</span>
      )}
      {item.kind === "crypto" && (
        <span className="flex items-center gap-[4px]" aria-hidden="true">
          {CRYPTO_DOT_COLORS.map((color, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill={color} /></svg>
          ))}
        </span>
      )}
      {item.code && (
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigator.clipboard?.writeText(item.code!).catch(() => {}); }}
          className="flex items-center gap-[5px] whitespace-nowrap cursor-pointer px-[12px] py-[3px] rounded-full border-0"
          style={PILL_CTA_GRADIENT_STYLE}
        >
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[10px] uppercase tracking-[0.4px] text-white/70">CODE:</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[10px] uppercase tracking-[0.4px] text-white">{item.code}</span>
        </button>
      )}
    </span>
  );
}

const PROMO_BANNER_ACTIVE_MARGIN_PX = 600;

function PromoBanner() {
  const reduceMotion = useReducedMotion();
  const trackItems = reduceMotion ? PROMO_ITEMS : [...PROMO_ITEMS, ...PROMO_ITEMS];
  const [now, setNow] = useState(() => Date.now());
  const bannerRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(true);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => setNearViewport(!!entries[0]?.isIntersecting),
      { rootMargin: `${PROMO_BANNER_ACTIVE_MARGIN_PX}px 0px ${PROMO_BANNER_ACTIVE_MARGIN_PX}px 0px` },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!nearViewport) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [nearViewport]);

  const countdown = formatCountdown(PROMO_DEADLINE, now);
  const countdownExpired = countdown.days === 0 && countdown.hh === "00" && countdown.mm === "00" && countdown.ss === "00";

  function scrollToPricing() {
    window.location.hash = "challenge";
  }

  return (
    <div
      ref={bannerRef}
      role="link"
      tabIndex={0}
      onClick={scrollToPricing}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); scrollToPricing(); } }}
      aria-label="View current promotions, jump to pricing"
      className={`bg-[#0b0c11] relative shrink-0 w-full cursor-pointer ${reduceMotion ? "min-h-[36px] h-auto py-[6px]" : "h-[36px] overflow-hidden"}`}
      style={{ paddingRight: "100px", contain: "layout" }}
    >
      <div className={`flex items-center h-full ${reduceMotion ? "flex-wrap" : "animate-[fyt-marquee_30s_linear_infinite] w-max"}`} style={nearViewport ? undefined : { animationPlayState: "paused" }}>
        {trackItems.map((item, i) => (
          <Fragment key={i}>
            <PromoItemChip item={item} />
            <span className="text-[#9da2b4] text-[10px]" aria-hidden="true">•</span>
          </Fragment>
        ))}
      </div>
      {!countdownExpired && (
        <div
          className="absolute right-[8px] top-1/2 flex items-center gap-[4px] bg-[#3b82f6] rounded-[6px] px-[8px] h-[24px]"
          style={{ transform: "translateY(-50%)" }}
          aria-label="Offer countdown"
        >
          <span className="font-['Inter:Bold',sans-serif] font-bold text-white text-[9px] uppercase tracking-[0.3px] whitespace-nowrap">Ends in</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold text-white text-[11px] whitespace-nowrap" style={{ fontVariantNumeric: "tabular-nums" }}>
            {countdown.days}d {countdown.hh}:{countdown.mm}:{countdown.ss}
          </span>
        </div>
      )}
    </div>
  );
}


function HeroStage({
  labelScale = 1,
  mobileLabels = false,
  beamSuffix = "",
  beamReachScale = 1,
}: {
  labelScale?: number;
  mobileLabels?: boolean;
  beamSuffix?: string;
  beamReachScale?: number;
}) {
  return (
    <>
      {/* Orbit rings — top halves of concentric ellipses */}
      <svg className="absolute inset-0" width="1440" height="1080" viewBox="0 0 1440 1080" fill="none">
        {HERO_ORBIT_RINGS.map((r, i) => (
          <ellipse key={i} cx={r.cx} cy={r.cy} rx={r.rx} ry={r.ry} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        ))}
        {mobileLabels &&
          MOBILE_ORBIT_LABELS.map(({ label, left, top }) => (
            <line key={label} x1={720} y1={720} x2={left} y2={top + 5} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          ))}
      </svg>

      {/* Core glow behind the node */}
      <div
        className="absolute"
        style={{
          width: 400, height: 340, left: 520, top: 550,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(115,166,255,0.32) 0%, rgba(59,130,245,0.13) 42%, rgba(10,36,92,0) 76%)",
          filter: "blur(30px)",
        }}
      />

      {(mobileLabels ? MOBILE_ORBIT_LABELS : HERO_ORBIT_LABELS).map(({ label, left, top }, i) => {
        const layout = mobileLabels ? MOBILE_LABEL_LAYOUT[i] : null;
        const { items, textAlign, translateX, transformOrigin } = mobileLabelBoxCss(layout?.anchor);
        const textSizeClass = layout ? "text-[26px] leading-[34px]" : "text-[22px] leading-[29px] whitespace-nowrap";
        const glowClass = `hero-glow${beamSuffix}-${i}`;
        return (
          <div
            key={label}
            className={`absolute flex flex-col ${items} gap-[12px]`}
            style={{
              left,
              top,
              width: layout?.wrapWidth,
              transform: `translateX(${translateX}) scale(${labelScale})`,
              transformOrigin,
            }}
          >
            <div className="rounded-full shrink-0" style={{ width: 10, height: 10, background: "#3B82F6", boxShadow: "0px 0px 8px rgba(59,130,246,0.8)" }} />
            <p
              className={`font-['DM_Sans',sans-serif] font-medium ${textSizeClass} tracking-[-0.44px] text-white/90`}
              style={{ textAlign }}
            >
              {label}
            </p>
            <div className={`${glowClass} absolute inset-0 flex flex-col ${items} gap-[12px]`} style={{ opacity: 0 }} aria-hidden>
              <div className="rounded-full shrink-0" style={{ width: 10, height: 10, background: "#3B82F6", boxShadow: "0px 0px 14px 3px #3B82F6" }} />
              <p
                className={`font-['DM_Sans',sans-serif] font-medium ${textSizeClass} tracking-[-0.44px] text-white`}
                style={{ textShadow: "0px 0px 12px rgba(124,176,255,0.55)", textAlign }}
              >
                {label}
              </p>
            </div>
          </div>
        );
      })}

      <div
        className="absolute"
        style={{
          width: 1720, height: 1720, left: -140, top: -140,
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 64%, transparent 70%)",
          maskImage: "linear-gradient(180deg, #000 0%, #000 64%, transparent 70%)",
        }}
      >
        <div
          className={`absolute hero-sweep-arm${beamSuffix}`}
          style={{ width: 1720, height: 1720, left: 0, top: 0, transformOrigin: "50% 50%" }}
        >
          <div
            className="absolute"
            style={{ width: 1720, height: 1720, left: 0, top: 0, transform: `scale(${beamReachScale})`, transformOrigin: "860px 860px" }}
          >
          <div
            className="absolute"
            style={{
              width: 700, height: 1020, left: 510, top: 530,
              background: "radial-gradient(ellipse 260px 480px at 50% 36.27%, rgba(124,176,255,0.14) 0%, rgba(59,130,246,0.06) 45%, rgba(10,36,80,0) 72%)",
              filter: "blur(6px)",
              WebkitMaskImage: "linear-gradient(180deg, transparent 0px, transparent 330px, #000 370px, #000 100%)",
              maskImage: "linear-gradient(180deg, transparent 0px, transparent 330px, #000 370px, #000 100%)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: 520, height: 1020, left: 600, top: 500,
              background: "radial-gradient(ellipse 170px 440px at 50% 39.22%, rgba(207,226,255,0.4) 0%, rgba(124,176,255,0.22) 38%, rgba(59,130,246,0.08) 62%, rgba(10,36,80,0) 85%)",
              filter: "blur(6px)",
              WebkitMaskImage: "linear-gradient(180deg, transparent 0px, transparent 360px, #000 400px, #000 100%)",
              maskImage: "linear-gradient(180deg, transparent 0px, transparent 360px, #000 400px, #000 100%)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: 320, height: 895, left: 700, top: 565,
              background: "radial-gradient(ellipse 90px 380px at 50% 37.43%, rgba(255,255,255,0.72) 0%, rgba(207,226,255,0.38) 32%, rgba(59,130,246,0.12) 58%, rgba(10,36,80,0) 82%)",
              filter: "blur(6px)",
              WebkitMaskImage: "linear-gradient(180deg, transparent 0px, transparent 295px, #000 335px, #000 100%)",
              maskImage: "linear-gradient(180deg, transparent 0px, transparent 295px, #000 335px, #000 100%)",
            }}
          />
          </div>
        </div>
      </div>

      {/* Node ring + core node with FYT logo (spec: 134px ring at 653,653; 96px node at 672,672) */}
      <div className="absolute rounded-full border border-[rgba(255,255,255,0.09)]" style={{ width: 134, height: 134, left: 653, top: 653 }} />
      <div
        className="absolute rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center"
        style={{
          width: 96, height: 96, left: 672, top: 672,
          background: "linear-gradient(180deg, #1A1F2A 0%, #080A10 100%)",
          boxShadow: "0px 0px 30px rgba(59,130,246,0.42), inset 0px 1px 0px rgba(255,255,255,0.13)",
        }}
      >
        <img alt="" src={imgImg10782} className="w-[70px] h-[66px] object-contain" />
      </div>
    </>
  );
}

function HeroStageMobile() {
  const scale = useHeroStageScale();
  return (
    <div
      className="absolute left-1/2 lg:hidden"
      style={{
        width: 1440, height: 1080,
        bottom: MOBILE_RADAR_STRIP_RESERVE_PX,
        transform: `translateX(-50%) scale(${scale})`,
        transformOrigin: "50% 100%",
      }}
    >
      <HeroStage labelScale={heroLabelScale(scale)} mobileLabels beamSuffix="-mobile" beamReachScale={1.8} />
    </div>
  );
}

const TRUST_STRIP_BOX_CLASSES =
  "flex w-[calc(100%-40px)] max-w-[340px] lg:w-fit lg:max-w-none flex-col items-center justify-center gap-[8px] overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.12)] px-[20px] py-[12px] lg:px-[24px] lg:py-[16px] backdrop-blur-[7px]";

function TrustStripContent() {
  return (
    <>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[1.4] text-[#a6acbe] text-center">
        Trusted by{" "}
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#60a5fa]">19,000+</span>{" "}
        traders worldwide
      </p>
      <div className="flex items-center" aria-hidden="true">
        {MOBILE_TRUST_STRIP_AVATARS.map((src, i) => (
          <div
            key={src}
            className="relative size-[28px] shrink-0 overflow-hidden rounded-full border-2 border-black"
            style={{ marginLeft: i === 0 ? 0 : -10 }}
          >
            {/* Poster thumbnails are a wide split composite (face on the left
                half, name/flag/payout text on the right half) — object-position
                + a further zoom keeps just the face inside the circle instead
                of showing any of that overlay text. */}
            <img
              src={src}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
              style={{ objectPosition: "26% 38%", transform: "scale(1.75)", transformOrigin: "26% 38%" }}
            />
          </div>
        ))}
        <div className="ml-[10px] flex items-center gap-[4px]">
          {MOBILE_TRUST_STRIP_FLAG_CODES.map((code) => (
            <img key={code} src={countryFlagUrl(code)!} alt="" loading="lazy" className="h-[11px] w-[15px] object-cover rounded-[2px] shrink-0" />
          ))}
        </div>
        <span className="ml-[8px] shrink-0 whitespace-nowrap rounded-full bg-[rgba(255,255,255,0.08)] px-[10px] py-[3px] font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[#e8ebf2]">
          +115
        </span>
      </div>
    </>
  );
}

function TrustStripMobile() {
  return (
    <div
      className={`lg:hidden absolute left-1/2 z-10 ${TRUST_STRIP_BOX_CLASSES}`}
      style={{
        bottom: MOBILE_RADAR_BOTTOM_GAP_PX,
        minHeight: MOBILE_TRUST_STRIP_HEIGHT_PX,
        transform: "translateX(-50%)",
        background: "rgba(255,255,255,0.05)",
      }}
    >
      <TrustStripContent />
    </div>
  );
}

function TrustStripDesktop() {
  return (
    <div className="hidden lg:flex bg-black relative w-full items-center justify-center px-[80px] py-[32px]">
      <div className={TRUST_STRIP_BOX_CLASSES} style={{ background: "rgba(255,255,255,0.05)" }}>
        <TrustStripContent />
      </div>
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black" aria-hidden>
      <style>{HERO_SWEEP_CSS}</style>

      <HeroSceneGate />

      {/* Fixed 1440×1080 stage centered horizontally; scene coords are spec px */}
      <div className="absolute left-1/2 top-0 hidden lg:block" style={{ width: 1440, height: 1080, transform: "translateX(-50%)" }}>
        <HeroStage />
      </div>

      <HeroStageMobile />

      {/* Vignette (spec: radial at 50% 62%) */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(82% 82% at 50% 62%, rgba(0,0,0,0) 34%, rgba(0,0,0,0.42) 74%, rgba(0,0,0,0.92) 100%)" }}
      />
    </div>
  );
}

function RevealWords({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{text}</>;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em]">
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.1 + i * 0.055, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </>
  );
}

function HeroCta({
  href, magneticStrength, children, style, className, target, rel,
}: {
  href: string; magneticStrength: number; children: ReactNode; style?: React.CSSProperties; className: string; target?: string; rel?: string;
}) {
  const magnet = useMagnetic<HTMLAnchorElement>(magneticStrength);
  return (
    <motion.a
      ref={magnet.ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={magnet.onMouseMove}
      onMouseLeave={magnet.onMouseLeave}
      style={{ ...style, x: magnet.style.x, y: magnet.style.y }}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const HERO_TRUSTINDEX_LOADER_SRC = "https://cdn.trustindex.io/loader.js?e7ec0f57824081211c46a9bf46f";
const HERO_TRUSTINDEX_REVIEW_LABEL = "2.2k+ Reviews";
let heroTrustindexScriptInjected = false;

const HeroTrustindexWidget = memo(function HeroTrustindexWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || heroTrustindexScriptInjected) return;
    heroTrustindexScriptInjected = true;
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.src = HERO_TRUSTINDEX_LOADER_SRC;
    container.appendChild(script);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let cancelled = false;
    let attempts = 0;
    const intervalId = window.setInterval(() => {
      attempts += 1;
      const strongs = container.querySelectorAll(".ti-widget strong");
      for (const el of strongs) {
        if (/reviews/i.test(el.textContent || "")) {
          const node = el as HTMLElement;
          node.textContent = HERO_TRUSTINDEX_REVIEW_LABEL;
          node.style.fontSize = "14px";
          node.style.fontWeight = "600";
          node.style.letterSpacing = "0.01em";
          window.clearInterval(intervalId);
          return;
        }
      }
      if (cancelled || attempts > 40) window.clearInterval(intervalId);
    }, 200);
    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  return <div ref={containerRef} className="max-w-full overflow-x-hidden" />;
});

const HERO_TRUSTINDEX_MOBILE_LOADER_SRC = "https://cdn.trustindex.io/loader.js?789d2d278999828b52568075d8b";
let heroTrustindexMobileScriptInjected = false;

const HeroTrustindexMobileWidget = memo(function HeroTrustindexMobileWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || heroTrustindexMobileScriptInjected) return;
    heroTrustindexMobileScriptInjected = true;
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.src = HERO_TRUSTINDEX_MOBILE_LOADER_SRC;
    container.appendChild(script);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let cancelled = false;
    let attempts = 0;
    const intervalId = window.setInterval(() => {
      attempts += 1;
      const widget = container.querySelector(".ti-widget");
      const strong = widget?.querySelector(".ti-fade-container strong");
      if (widget && strong && !widget.querySelector(".fyt-ti-review-count")) {
        window.clearInterval(intervalId);
        const span = document.createElement("span");
        span.className = "fyt-ti-review-count";
        span.style.fontSize = "13px";
        span.style.fontWeight = "600";
        span.style.color = "#000000";
        span.style.marginLeft = "4px";
        span.style.letterSpacing = "0.01em";
        span.style.whiteSpace = "nowrap";
        span.textContent = `| ${HERO_TRUSTINDEX_REVIEW_LABEL}`;
        strong.after(span);
        const style = document.createElement("style");
        style.textContent = `.ti-widget[data-pid="789d2d278999828b52568075d8b"] .ti-header strong{font-size:13px;font-weight:600}.ti-widget[data-pid="789d2d278999828b52568075d8b"] .ti-header{padding:8px 10px}.ti-widget[data-pid="789d2d278999828b52568075d8b"] .fyt-ti-review-count{font-size:13px;font-weight:600}`;
        widget.prepend(style);
        return;
      }
      if (cancelled || attempts > 40) window.clearInterval(intervalId);
    }, 200);
    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  return <div ref={containerRef} className="max-w-full overflow-x-hidden" />;
});

function HeroTrustindexGate() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia("(min-width: 1024px)").matches);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isDesktop ? <HeroTrustindexWidget /> : <HeroTrustindexMobileWidget />;
}

const HERO_ANIMATIONS_ACTIVE_MARGIN_PX = 600;

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [animationsActive, setAnimationsActive] = useState(true);

  useEffect(() => {
    const el = heroRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => setAnimationsActive(!!entries[0]?.isIntersecting),
      { rootMargin: `${HERO_ANIMATIONS_ACTIVE_MARGIN_PX}px 0px ${HERO_ANIMATIONS_ACTIVE_MARGIN_PX}px 0px` },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className={`bg-black relative flex flex-col items-center overflow-hidden shrink-0 w-full min-h-[620px] lg:h-[1080px] py-[64px] lg:py-0 ${animationsActive ? "" : "hero-anims-paused"}`}
    >
      <HeroBackground />
      {/* Content — centered; on desktop pinned into the upper band per spec (top 130, h 496) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-[20px] lg:px-[88px] w-full lg:absolute lg:top-[90px] lg:h-[496px]">
        <div className="flex justify-center max-w-full shrink-0 min-h-[40px] lg:min-h-0 scale-90 origin-center lg:scale-100">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center max-w-full shrink-0"
          >
            <HeroTrustindexGate />
          </motion.div>
        </div>
        <div className="h-[20px] lg:h-[24px] shrink-0" />
        <h1
          className="font-['DM_Sans',sans-serif] font-medium text-[44px] lg:text-[80px] w-full lg:max-w-[1264px]"
          style={{ lineHeight: "104%", letterSpacing: "-0.025em", textShadow: "0px 2px 36px rgba(0,0,0,0.45)" }}
        >
          {/* Design spec capitalizes "Without" — HERO_CONTENT.headlineMain (live-site manifest, lowercase "without") is correct as a record of the live site but not used for this specific render */}
          <span className="block text-white"><RevealWords text="Trade Without Hidden Rules." /></span>
          <span className="block text-[#60a5fa]" style={{ textShadow: "0 0 28px rgba(96,165,250,0.08)" }}><RevealWords text={HERO_CONTENT.headlineBlue} /></span>
        </h1>
        <div className="h-[16px] lg:h-[32px] shrink-0" />
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#a6acbe] text-[16px] leading-[1.6] w-full lg:w-[760px]"
        >
          Zero rules during the evaluation phases, pass however you want.
        </motion.p>
        <div className="h-[28px] lg:h-[48px] shrink-0" />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-[12px] lg:gap-[16px] items-stretch lg:items-center shrink-0 w-full lg:w-auto"
        >
          {/* Primary — gradient pill, PDF label "View Programs" */}
          <HeroCta
            href={HERO_CONTENT.ctaPrimary.href}
            magneticStrength={0.22}
            className="cta-shine flex justify-center gap-[10px] items-center pl-[32px] pr-[28px] py-[16px] relative rounded-[999px] shrink-0"
            style={{ ...PILL_CTA_GRADIENT_STYLE, boxShadow: `${PILL_CTA_GRADIENT_STYLE.boxShadow}, 0 0 0 rgba(59,130,246,0)` }}
          >
            <div aria-hidden className="absolute border border-[rgba(156,196,255,0.35)] border-solid inset-0 pointer-events-none rounded-[999px]" />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[16px] text-white whitespace-nowrap">View Programs</p>
            <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </HeroCta>
          {/* Secondary — glassy pill, PDF label "See How It Works" */}
          <HeroCta
            href="#how-it-works"
            magneticStrength={0.16}
            className="flex justify-center items-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 backdrop-blur-[7px]"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.18)] border-solid inset-0 pointer-events-none rounded-[999px]" />
            <p className="font-['Inter:Medium',sans-serif] font-medium not-italic text-[16px] text-[#e8ebf2] whitespace-nowrap">See How It Works</p>
          </HeroCta>
        </motion.div>
        <ul className="sr-only">
          {HERO_ORBIT_LABELS.map(({ label }) => <li key={label}>{label}</li>)}
        </ul>
        <div className="h-[24px] lg:h-0 shrink-0" />
        <div className="lg:hidden shrink-0" style={{ height: `calc(100vw * 620 / ${HERO_STAGE_WIDTH} + ${MOBILE_RADAR_STRIP_RESERVE_PX}px)` }} />
      </div>
      <TrustStripMobile />
    </div>
  );
}


const BelowFold = lazy(() => import("@/app/BelowFold").then((m) => ({ default: m.BelowFold })));

class BelowFoldErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default function App() {
  useEffect(prefetchBelowFoldChunks, []);
  return (
    <div className="bg-[#070810] content-stretch flex flex-col items-start relative w-full min-h-screen">
      <CursorSpotlight />
      <PromoBanner />
      <Nav />
      <Hero />
      <TrustStripDesktop />
      <BelowFoldErrorBoundary>
        <Suspense fallback={null}>
          <BelowFold />
        </Suspense>
      </BelowFoldErrorBoundary>
    </div>
  );
}
