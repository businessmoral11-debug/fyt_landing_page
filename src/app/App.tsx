import { useState, useEffect, useRef, useCallback, useMemo, Fragment, type ReactNode } from "react";
import { createPortal } from "react-dom";
import * as Accordion from "@radix-ui/react-accordion";
import svgPaths from "@/imports/FytLandingPage/svg-1sqldvgw4z";
import useEmblaCarousel from "embla-carousel-react";
import { buildAutoplayPlugins } from "@/app/emblaAutoplay";
import imgCert471 from "@/assets/live-site/payout-certificates/471.png";
import imgCert472 from "@/assets/live-site/payout-certificates/472.png";
import imgCert473 from "@/assets/live-site/payout-certificates/473.png";
import imgCert474 from "@/assets/live-site/payout-certificates/474.png";
import imgCert475 from "@/assets/live-site/payout-certificates/475.png";
import imgCert476 from "@/assets/live-site/payout-certificates/476.png";
import imgCert477 from "@/assets/live-site/payout-certificates/477.png";
import imgCert478 from "@/assets/live-site/payout-certificates/478.png";
import imgCert479 from "@/assets/live-site/payout-certificates/479.png";
import imgCert480 from "@/assets/live-site/payout-certificates/480.png";
import imgCert481 from "@/assets/live-site/payout-certificates/481.png";
import imgCert482 from "@/assets/live-site/payout-certificates/482.png";
import imgCert483 from "@/assets/live-site/payout-certificates/483.png";
import imgCert484 from "@/assets/live-site/payout-certificates/484.png";
import imgCert485 from "@/assets/live-site/payout-certificates/485.png";
import imgCert486 from "@/assets/live-site/payout-certificates/486.png";
import imgCert487 from "@/assets/live-site/payout-certificates/487.png";
import imgCert488 from "@/assets/live-site/payout-certificates/488.png";
import imgCert489 from "@/assets/live-site/payout-certificates/489.png";
import imgCert490 from "@/assets/live-site/payout-certificates/490.png";
import imgCert491 from "@/assets/live-site/payout-certificates/491.png";
import imgImg10782 from "@/imports/FytLandingPage/c3e1b41ac1a944e4221b3b1465d4e68b855d759f.png";
import imgImg10801 from "@/imports/FytLandingPage/7dca680e1978188fe7adca05839b49894cdf71f2.png";
import imgPressBarchart from "@/assets/live-site/press-logos/barchart.webp";
import imgPressBenzinga from "@/assets/live-site/press-logos/benzinga.webp";
import imgPressDigitalJournal from "@/assets/live-site/press-logos/digitaljournal.webp";
import imgPressYahoo from "@/assets/live-site/press-logos/yahoo.webp";
import imgMatchTraderLogo from "@/assets/live-site/platform-logos/match-trader.png";
import imgPlatform5Logo from "@/assets/live-site/platform-logos/platform-5.png";
import { STEP_PLANS, STEP_SIZES, getEntry, checkoutUrl, fmtSize, planFlag, PLATFORM_OPTIONS, type StepId, type PlanId, type PlatformId } from "@/app/pricing";
import { HERO_ORBIT_LABELS, HERO_ORBIT_RINGS, MOBILE_ORBIT_LABELS, MOBILE_LABEL_LAYOUT, mobileLabelBoxCss } from "@/app/heroOrbit";
import { HERO_STAGE_WIDTH, heroStageScale, heroLabelScale } from "@/app/heroResponsive";
import { heroSweepCss } from "@/app/heroSweep";
import { HERO_CONTENT, KEY_METRICS, NAV_LINKS, FOOTER_COLUMNS, FOOTER_LINKS, FAQ_ITEMS } from "@/app/liveSiteContent";
import { PROMO_ITEMS, PROMO_DEADLINE, formatCountdown, type PromoItem } from "@/app/promoBanner";
import { WorldMapWidget } from "@/app/worldMap";
import { parseCountUpSegments, renderCountUp } from "@/app/countUp";
import { useLiveRewardsFeed, deriveInitials, timeAgo } from "@/app/liveRewardsFeed";
import imgDashboardMockup from "@/assets/images/dashboard_floating_3d_v2.png";
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion, useInView, type MotionValue } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useMagnetic } from "@/app/magnetic";
import { useScrollShrink } from "@/app/navScroll";
import { useTilt } from "@/app/tilt";
import { AmbientBlob } from "@/app/ambient";
import { HeroSceneGate } from "@/app/three/HeroSceneGate";
import { PROVE_SKILL_CARD_REVEALS, PROVE_SKILL_SCROLL_HEIGHT_VH, PROVE_SKILL_MOBILE_CARD_REVEALS, PROVE_SKILL_MOBILE_SCROLL_HEIGHT_VH, type CardReveal } from "@/app/proveSkillReveal";
import { useMonotonicProgress } from "@/app/scrollProgress";
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
  HOW_IT_WORKS_ICON_GLYPH_OPACITY,
  HOW_IT_WORKS_LABEL_DIM_HEX,
  HOW_IT_WORKS_LABEL_PEAK_HEX,
  HOW_IT_WORKS_DESC_DIM_HEX,
  HOW_IT_WORKS_DESC_PEAK_HEX,
  HOW_IT_WORKS_LINE_GLOW,
  type StepReveal,
} from "@/app/howItWorksReveal";
import { TESTIMONIAL_PAGES, TESTIMONIAL_FLAT_ITEMS, TESTIMONIAL_VIDEOS, type TestimonialSlideItem, type TestimonialVideo } from "@/app/testimonials";
import { CursorSpotlight } from "@/app/cursorSpotlight";
import { type VideoSource, buildYouTubeEmbedUrl, testimonialVideoSource, pricingExplainerVideoSource } from "@/app/videoLightbox";
import {
  DIFFERENCE_HEADING_WORDS,
  DIFFERENCE_HEADING_PARENT_VARIANTS,
  DIFFERENCE_HEADING_WORD_VARIANTS,
  DIFFERENCE_PIN_SCROLL_HEIGHT_VH,
  DIFFERENCE_HEADING_EXIT_REVEAL,
  DIFFERENCE_CONTENT_ENTER_REVEAL,
  type DifferenceCrossfadeReveal,
} from "@/app/differenceReveal";

const HERO_SWEEP_CSS = heroSweepCss(HERO_ORBIT_LABELS) + "\n" + heroSweepCss(MOBILE_ORBIT_LABELS, "-mobile");

// Extra flat clearance (on top of the proportional 620/1440 clearance band)
// between the mobile radar's bottom edge and the hero's bottom edge, so the
// radar doesn't sit flush against the section boundary. Used by both the
// clearance spacer and HeroStageMobile's bottom-anchor offset below — they
// must move together, hence the shared constant.
const MOBILE_RADAR_BOTTOM_GAP_PX = 40;

// Reserved height of the mobile-only trust strip below the radar
// (TrustStripMobile) — drives both the clearance math below AND the
// component's own `minHeight` (see TrustStripMobile), so the two can't
// drift apart the way they did before: an earlier hand-estimate of 120px
// here left the actual rendered content at 92px, turning the intended
// 24px radar-to-strip gap into ~52px in practice. Sized to the card's
// current, tighter py-[12px]/gap-[8px] padding (docs/screenshots/hero-mobile-section-idea.jpeg
// uses noticeably slimmer padding than an earlier, taller draft did).
const MOBILE_TRUST_STRIP_HEIGHT_PX = 80;

// Gap between the radar's bottom edge and the trust strip's top edge —
// kept visibly larger than the strip's own internal padding so the strip
// doesn't read as glued to the radar.
const MOBILE_TRUST_STRIP_GAP_PX = 40;

// Combined flat clearance reserved below the radar on mobile: the
// original breathing room (MOBILE_RADAR_BOTTOM_GAP_PX, preserved as the
// gap below the strip itself), plus the strip's own height, plus the gap
// above the strip. Used by both HeroStageMobile's bottom-anchor offset
// and the mobile radar-clearance spacer in Hero() — they must move
// together, same as MOBILE_RADAR_BOTTOM_GAP_PX did before this constant
// existed. Growing this value only grows the blank margin below the
// radar; it does not move the radar itself (see Task 1 Step 1).
const MOBILE_RADAR_STRIP_RESERVE_PX = MOBILE_RADAR_BOTTOM_GAP_PX + MOBILE_TRUST_STRIP_GAP_PX + MOBILE_TRUST_STRIP_HEIGHT_PX;

// Real trader photos already used by the video-testimonial carousel
// (TESTIMONIAL_VIDEOS[].posterUrl, hosted on fundingyourtrades.com) —
// reused here as the mobile hero trust strip's 4 avatar circles so no
// new image assets are introduced.
const MOBILE_TRUST_STRIP_AVATARS = TESTIMONIAL_VIDEOS.slice(0, 4).map((v) => v.posterUrl);

// Matches docs/screenshots/hero-mobile-section-idea.jpeg's flag order.
const MOBILE_TRUST_STRIP_FLAGS = ["🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺", "🇩🇪"] as const;

// Trust Index badge figures — named so a future update only requires
// changing one place, not hunting for the inline string.
const HERO_RATING = { score: "4.6", reviews: "1,101" } as const;

// Shared by every gradient pill CTA in this file (Hero primary,
// ProofInNumbers, Live Payouts, How It Works, Closing CTA) — previously
// duplicated across each call site.
const PILL_CTA_GRADIENT_STYLE = {
  background: "linear-gradient(180deg, #5A9BFF 0%, #2563EB 100%)",
  boxShadow: "0px 8px 28px -6px rgba(37,99,235,0.5), inset 0px 1px 0px rgba(255,255,255,0.38)",
} as const;

const SUPPORT_CARD_ACCENT_BLUE = "#2563EB";
// PILL_CTA_GRADIENT_STYLE's light top stop drops white heading/subtext
// text below WCAG AA contrast on this larger card surface — this darker
// variant keeps the same bottom stop but starts and ends darker.
const SUPPORT_CARD_GRADIENT_STYLE = {
  background: `linear-gradient(180deg, ${SUPPORT_CARD_ACCENT_BLUE} 0%, #1D4ED8 100%)`,
  boxShadow: "0px 8px 28px -6px rgba(37,99,235,0.5), inset 0px 1px 0px rgba(255,255,255,0.38)",
} as const;

// ─── HOOKS ──────────────────────────────────────────────────────────────────

// Uniform scale to fit the fixed 1440×1080 hero stage to the current
// viewport width; recomputed on resize so it tracks device rotation/resize.
function useHeroStageScale() {
  const [scale, setScale] = useState(() => heroStageScale(window.innerWidth));
  useEffect(() => {
    const onResize = () => setScale(heroStageScale(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return scale;
}

// ─── NAV ────────────────────────────────────────────────────────────────────

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
    <div className="content-stretch flex items-center overflow-clip relative shrink-0">
      <div className="h-[40px] relative shrink-0 w-[42px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.43%] max-w-none top-0 w-[100.87%]" src={imgImg10782} />
        </div>
      </div>
      <Wordmark />
    </div>
  );
}

function Links() {
  return (
    <div className="[word-break:break-word] hidden lg:flex content-stretch font-['Inter:Regular',sans-serif] font-normal gap-[30px] items-center leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">
      {NAV_LINKS.items.map((item) =>
        item.type === "dropdown" ? (
          <div key={item.label} className="relative group/affiliate">
            <p tabIndex={0} className="group/link relative shrink-0 cursor-pointer py-[6px]">
              {item.label}
              <span aria-hidden className="absolute left-0 -bottom-px h-px w-full origin-left scale-x-0 bg-[#60a5fa] transition-transform duration-300 ease-out group-hover/link:scale-x-100 group-focus-within/affiliate:scale-x-100" />
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
          <a key={item.label} href={item.href} className="group/link relative shrink-0 text-[#eef0f6] no-underline hover:text-[#60a5fa] transition-colors duration-200 py-[6px]">
            {item.label}
            <span aria-hidden className="absolute left-0 -bottom-px h-px w-full origin-left scale-x-0 bg-[#60a5fa] transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
          </a>
        ),
      )}
    </div>
  );
}

function ButtonPrimaryLg() {
  const magnet = useMagnetic<HTMLAnchorElement>(0.25);
  return (
    <motion.a
      ref={magnet.ref}
      href={NAV_LINKS.buyHere.href}
      onMouseMove={magnet.onMouseMove}
      onMouseLeave={magnet.onMouseLeave}
      style={magnet.style}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="bg-[#3b82f6] relative rounded-[8px] shrink-0 no-underline block"
    >
      <div className="content-stretch flex items-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{NAV_LINKS.buyHere.label}</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.32)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </motion.a>
  );
}

function NavRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0">
      <a href={NAV_LINKS.login.href} className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap no-underline hover:text-[#93c5fd] transition-colors duration-200">{NAV_LINKS.login.label}</a>
      <ButtonPrimaryLg />
    </div>
  );
}

function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className="flex lg:hidden flex-col justify-center gap-[5px] w-[20px] h-[16px] bg-transparent border-0 p-0 cursor-pointer shrink-0"
    >
      <span className="block h-[2px] w-full bg-white rounded-[1px]" />
      <span className="block h-[2px] w-full bg-white rounded-[1px]" />
      <span className="block h-[2px] w-full bg-white rounded-[1px]" />
    </button>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="lg:hidden fixed inset-0 z-50 bg-[#0a0e1a]/95 flex flex-col justify-between px-[24px] pt-[32px] pb-[40px]"
          style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
        >
          <motion.div
            initial={reduceMotion ? false : { y: -16, opacity: 0 }}
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
              className="flex items-center justify-center size-[40px] rounded-full border border-[rgba(255,255,255,0.25)] bg-transparent cursor-pointer transition-colors duration-200 hover:bg-[rgba(255,255,255,0.08)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {/* Centered links */}
          <div className="flex flex-col items-center gap-[8px] overflow-y-auto">
            {NAV_LINKS.items.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.label} className="flex flex-col items-center gap-[4px] py-[8px]">
                  <p className="text-[13px] tracking-[1.44px] text-[#3b82f6] font-['Inter:Regular',sans-serif]">{item.label.toUpperCase()}</p>
                  {item.items.map((sub) => (
                    <a key={sub.label} href={sub.href} className="py-[8px] text-[16px] text-center text-white font-['Inter:Regular',sans-serif] no-underline">
                      {sub.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a key={item.label} href={item.href} className="py-[12px] text-[18px] text-center text-white font-['Inter:Regular',sans-serif] no-underline">
                  {item.label}
                </a>
              ),
            )}
          </div>
          {/* Bottom actions */}
          <div className="flex flex-col items-center gap-[20px]">
            <a href={NAV_LINKS.login.href} className="text-[16px] text-[#3b82f6] font-['Inter:Regular',sans-serif] no-underline">{NAV_LINKS.login.label}</a>
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
  const scrolled = useScrollShrink(24);
  return (
    <div className="sticky top-0 z-40 w-full">
      <div className={`px-[12px] lg:px-[24px] transition-[padding] duration-300 ease-out ${scrolled ? "pt-[8px]" : "pt-[16px]"}`}>
        <div
          className={`mx-auto max-w-[1280px] rounded-[20px] border transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
            scrolled
              ? "bg-[rgba(9,11,17,0.72)] border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.07)] shadow-none"
          }`}
          style={{ backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
        >
          <div
            className={`flex flex-row items-center rounded-[inherit] size-full transition-[height] duration-300 ease-out ${
              scrolled ? "h-[56px] lg:h-[60px]" : "h-[64px] lg:h-[72px]"
            }`}
          >
            <div className="content-stretch flex items-center justify-between px-[20px] lg:pl-[28px] lg:pr-[24px] relative size-full">
              <Brand />
              <Links />
              {/* Desktop right cluster */}
              <div className="hidden lg:flex"><NavRight /></div>
              {/* Mobile: hamburger only — Log in + Start evaluation live in the overlay */}
              <HamburgerButton onClick={() => setMenuOpen(true)} />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

// ─── PROMO BANNER ───────────────────────────────────────────────────────────

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
          className="font-['Inter:Bold',sans-serif] font-bold text-[10px] uppercase tracking-[0.4px] text-[#3b82f6] whitespace-nowrap cursor-pointer bg-transparent px-[10px] py-[2px] rounded-full"
          style={{ border: "1px solid #3b82f6" }}
        >
          {item.code}
        </button>
      )}
    </span>
  );
}

function PromoBanner() {
  const reduceMotion = useReducedMotion();
  const trackItems = reduceMotion ? PROMO_ITEMS : [...PROMO_ITEMS, ...PROMO_ITEMS];
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const countdown = formatCountdown(PROMO_DEADLINE, now);
  const countdownExpired = countdown.days === 0 && countdown.hh === "00" && countdown.mm === "00" && countdown.ss === "00";

  function scrollToPricing() {
    window.location.hash = "challenge";
  }

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={scrollToPricing}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); scrollToPricing(); } }}
      aria-label="View current promotions — jump to pricing"
      className={`bg-[#0b0c11] relative shrink-0 w-full cursor-pointer ${reduceMotion ? "min-h-[36px] h-auto py-[6px]" : "h-[36px] overflow-hidden"}`}
      style={{ paddingRight: "100px" }}
    >
      <div className={`flex items-center h-full ${reduceMotion ? "flex-wrap" : "animate-[fyt-marquee_30s_linear_infinite] w-max"}`}>
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

// ─── HERO ────────────────────────────────────────────────────────────────────

// Stage content only — orbit rings, core glow, feature-callout labels, the
// radar sweep beam, and the center node. Rendered once at 1:1 for desktop
// and once inside a uniformly-scaled wrapper for mobile (see
// HeroStageMobile below); both instances share this exact markup so the
// mobile radar is a faithful miniature of the desktop composition.
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
        {/* Static spoke lines from the node center to each mobile label's dot —
            mobile-only (see docs/screenshots/hero-mobile-section-idea.jpeg);
            desktop has no equivalent (its 5 dots already sit directly on the
            ring arcs, so a line to them would be visually redundant). */}
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

      {/* Orbit labels — v4 design: a dot centered on the ring point with its
          label stacked directly below, unrotated (unlike the old v3 tilted
          dot+text row). `rotate` from heroOrbit.ts is deliberately NOT used
          here — it only aims the sweep beam (see heroSweepCss in
          heroSweep.ts) at this dot's position; the text itself never tilts
          in the v4 design. All 5 dots/labels share one uniform blue/white
          treatment (the PDF shows no per-dot color or opacity variation,
          unlike the old currency labels' depth-fade). Each carries a white
          glow overlay keyed to the dwell window when the beam parks on its
          angle: rise on approach, hold through the dwell, fall on departure
          (see heroSweep.ts).

          On mobile (mobileLabels=true), all 5 labels render from
          MOBILE_ORBIT_LABELS in a fixed 2-row layout (2 near the top
          corners, 3 along the bottom) — see heroOrbit.ts. Each label's
          per-position anchor (start/center/end) and wrap width come from
          MOBILE_LABEL_LAYOUT, so labels near the edges wrap and align
          inward instead of overflowing the viewport. The sweep beam and
          glow keyframes are untouched and still index by each label's
          position in the array (the `i` below), matching the mobile sweep
          CSS generated from MOBILE_ORBIT_LABELS with the "-mobile" suffix
          (see heroSweep.ts). */}
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
            {/* Passing-glow overlay — identical layout, full-white text + hotter dot; opacity driven by hero-glow-<i> keyframes.
                The inline opacity:0 is NOT redundant: it is the resting/reduced-motion state — under
                prefers-reduced-motion the animation is `none` and this inline value is what keeps the
                overlay hidden. While the animation runs, keyframes override the inline style. */}
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

      {/* Radar sweep — the spec's 1720×1720 "Radar beam" square centered on the
          node (720,720). Painted ABOVE the labels so the light visually washes
          over the text as it dwells (the node still paints above the beam).
          Three concentric radial-gradient blobs (halo/mid/core), anchored at
          the same origin, NO clip-path anywhere — each gradient's last stop is
          fully transparent, so there is no hard geometric edge for blur to mask;
          softness comes from the gradient math itself. */}
      {/* Non-rotating fade wrapper — its mask is evaluated in PAGE space (it never
          rotates), so it fades the beam out before the stage's real bottom edge
          (page y=1080) regardless of the beam's current angle, without shortening
          the beam uniformly (which would cut its reach to the outer labels). */}
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
          {/* Reach wrapper — scales the three gradient blobs below outward
              from the node's own rotation center (860,860 in this arm's
              local space, i.e. the node at stage 720,720 — see the 134px
              ring at left 653/top 653 in HeroStage). transform-origin is
              pinned to that exact point so magnifying reach doesn't shift
              the beam sideways. Any element with a non-none `transform`
              becomes the containing block for its `position:absolute`
              descendants, so this wrapper (same size/position as the arm
              above) transparently becomes what the three blobs' existing
              left/top values are relative to — nothing on the blobs
              themselves needs to change. Default 1 (desktop, byte-identical
              to before this fix — scale(1) is a no-op); HeroStageMobile
              passes 1.8, because desktop's reach (~414 local px, tuned to
              its outermost label at radius 354.7) falls well short of
              mobile's new label radii (up to 639.1 — see MOBILE_ORBIT_LABELS
              in heroOrbit.ts), and 414 * 1.8 ≈ 745 clears that with the same
              ~17% margin desktop's own reach has over its own outermost
              label radius (414 / 354.7 ≈ 1.17). See this plan's final-review
              fix notes: docs/superpowers/plans/2026-08-01-mobile-hero-two-row-labels.md */}
          <div
            className="absolute"
            style={{ width: 1720, height: 1720, left: 0, top: 0, transform: `scale(${beamReachScale})`, transformOrigin: "860px 860px" }}
          >
          {/* Halo — outer soft wash. No clip-path: this is a pure radial-gradient
              whose last stop is fully transparent well inside its own box, so
              there is no geometric edge anywhere for blur to "hide" — the gradient
              math IS the falloff. Anchored at the same (860,900) origin as the
              other two layers. Each box extends ABOVE the origin by a computed
              headroom (this layer: 370px) so the gradient's own upward falloff
              reaches transparent BEFORE the box's real top edge — otherwise the
              box's flat edge would slice through the gradient's brightest point,
              producing a hard "flat cap" right next to the node. A radial gradient
              is symmetric, though, so that same headroom also let backward
              brightness render — the mask below reaches full visibility exactly
              AT the origin (zero backward allowance) and fades out within the
              next 70px going backward, so the node reads as an opaque source with
              light only visible on its forward side, matching the Nuvex reference. */}
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

// Mobile radar — same HeroStage markup as desktop, uniformly scaled down to
// fit the viewport width via useHeroStageScale(), and anchored to the
// BOTTOM of the hero (not centered) so the node/rings land in the mobile
// clearance band reserved below the buttons (see the spacer at the end of
// Hero()'s content column) — the same relationship desktop already has
// between its node and the empty space below its content column, just
// scaled to viewport width instead of fixed at 1440px.
// transformOrigin is bottom-center so scaling shrinks the stage toward its
// own bottom edge, keeping that edge pinned at a fixed MOBILE_RADAR_STRIP_RESERVE_PX
// above the hero's bottom edge at every scale value, instead of retreating
// further upward as the box shrinks (which is what happens under the
// default center transform-origin).
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

// Mobile-only trust strip below the radar (docs/screenshots/hero-mobile-section-idea.jpeg).
// Bottom-anchored the same way HeroStageMobile is, inside the blank margin
// that MOBILE_RADAR_STRIP_RESERVE_PX reserves below the radar — see the
// derivation in Task 1 Step 1 of
// docs/superpowers/plans/2026-08-02-mobile-hero-trust-strip.md.
function TrustStripMobile() {
  return (
    <div
      className="lg:hidden absolute left-1/2 z-10 flex w-[calc(100%-40px)] max-w-[340px] flex-col items-center justify-center gap-[8px] overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.12)] px-[20px] py-[12px] backdrop-blur-[7px]"
      style={{
        bottom: MOBILE_RADAR_BOTTOM_GAP_PX,
        minHeight: MOBILE_TRUST_STRIP_HEIGHT_PX,
        transform: "translateX(-50%)",
        background: "rgba(255,255,255,0.05)",
      }}
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[1.4] text-[#a6acbe] text-center">
        Trusted by{" "}
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#60a5fa]">19,000+</span>{" "}
        traders worldwide
      </p>
      <div className="flex items-center" aria-hidden="true">
        {MOBILE_TRUST_STRIP_AVATARS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            className="size-[28px] shrink-0 rounded-full border-2 border-black object-cover"
            style={{ marginLeft: i === 0 ? 0 : -10 }}
          />
        ))}
        <div className="ml-[10px] flex items-center gap-[4px]">
          {MOBILE_TRUST_STRIP_FLAGS.map((flag, i) => (
            <span key={i} className="text-[15px] leading-none">{flag}</span>
          ))}
        </div>
        <span className="ml-[8px] shrink-0 whitespace-nowrap rounded-full bg-[rgba(255,255,255,0.08)] px-[10px] py-[3px] font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[#e8ebf2]">
          +185
        </span>
      </div>
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black" aria-hidden>
      <style>{HERO_SWEEP_CSS}</style>

      {/* Ambient 3D particle/glow layer — desktop + motion-allowed only (see
          HeroSceneGate); renders nothing on mobile or under reduced-motion, in
          which case the orbital stage below is the whole scene, same as
          before this layer existed. */}
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

// Splits `text` into words, each rising up from behind its own clipped mask
// on mount — a restrained "premium" reveal (no per-letter chaos) that still
// reads as considered rather than a plain fade. Renders the plain text
// statically under reduced motion. Purely a presentation wrapper around
// whatever string it's given — callers still control the actual copy (e.g.
// Hero still reads HERO_CONTENT.headlineBlue, not a hardcoded value).
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

// Shared by both Hero CTAs — magnetic pointer-follow, a soft glow that ramps
// in on hover, and a spring-based press scale. `magnetic` strength is lower
// on the secondary (glassy) button so it reads as clearly less dominant than
// the primary gradient pill.
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

function Hero() {
  return (
    <div className="bg-black relative flex flex-col items-center overflow-hidden shrink-0 w-full min-h-[620px] lg:h-[1080px] py-[64px] lg:py-0">
      <HeroBackground />
      {/* Content — centered; on desktop pinned into the upper band per spec (top 130, h 496) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-[20px] lg:px-[88px] w-full lg:absolute lg:top-[130px] lg:h-[496px]">
        {/* Trust Index rating badge — PDF section 1, above the headline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center max-w-full gap-[10px] items-center bg-white rounded-[999px] pl-[16px] pr-[20px] py-[8px] shrink-0"
        >
          <motion.svg
            width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden="true"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.7l-4.2 2.3.8-4.7L1.2 6l4.7-.7L8 1Z" fill="#16A34A" />
          </motion.svg>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[#0b0c11] whitespace-nowrap">Trust Index</p>
          <div className="flex gap-[2px] items-center shrink-0">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.svg
                key={i} width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden="true"
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.12 * i }}
              >
                <rect width="16" height="16" rx="3" fill="#16A34A" />
                <path d="M8 3.2l1.4 2.9 3.2.5-2.3 2.2.5 3.2L8 10.5l-2.8 1.5.5-3.2-2.3-2.2 3.2-.5L8 3.2Z" fill="#fff" />
              </motion.svg>
            ))}
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#6b7280]">{HERO_RATING.score} rating • {HERO_RATING.reviews} reviews</p>
        </motion.div>
        <div className="h-[20px] lg:h-[24px] shrink-0" />
        <h1
          className="font-['DM_Sans',sans-serif] font-medium text-[44px] lg:text-[80px] w-full lg:max-w-[1264px]"
          style={{ lineHeight: "104%", letterSpacing: "-0.025em", textShadow: "0px 2px 36px rgba(0,0,0,0.45)" }}
        >
          {/* Design spec capitalizes "Without" — HERO_CONTENT.headlineMain (live-site manifest, lowercase "without") is correct as a record of the live site but not used for this specific render */}
          <span className="block text-white"><RevealWords text="Trade Without Hidden Rules." /></span>
          <span className="block text-[#60a5fa]" style={{ textShadow: "0 0 42px rgba(96,165,250,0.5)" }}><RevealWords text={HERO_CONTENT.headlineBlue} /></span>
        </h1>
        <div className="h-[16px] lg:h-[32px] shrink-0" />
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#a6acbe] text-[16px] leading-[1.6] w-full lg:w-[760px]"
        >
          Zero rule during the evaluation phases, pass however you want.
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
            className="flex justify-center gap-[10px] items-center pl-[32px] pr-[28px] py-[16px] relative rounded-[999px] shrink-0"
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
        {/* Screen-reader-only mirror of the 5 radar labels — HeroStage (which
            renders them visually) lives inside HeroBackground's aria-hidden
            root, so without this list these product-feature claims would be
            invisible to assistive tech. Kept out of HeroStage/HeroBackground
            itself to avoid double-announcing (both the desktop stage and
            HeroStageMobile render HeroStage). */}
        <ul className="sr-only">
          {HERO_ORBIT_LABELS.map(({ label }) => <li key={label}>{label}</li>)}
        </ul>
        <div className="h-[24px] lg:h-0 shrink-0" />
        {/* Mobile-only clearance below the buttons for the radar's node/rings
            AND, as of the 2-row 5-label layout, the top-row labels — which
            sit above the rings' own top edge (local y=500 vs the rings'
            y≈580, see MOBILE_ORBIT_LABELS in heroOrbit.ts). Sized as the
            same fraction of viewport width (620/1440) that keeps that
            topmost local-y=500 point inside the reserved band at every
            width (1080 − 500 = 580 local units required, rounded up to 620
            for breathing room — see docs/superpowers/plans/2026-08-01-mobile-hero-two-row-labels.md).
            The flat +MOBILE_RADAR_STRIP_RESERVE_PX on top matches the same
            constant HeroStageMobile is lifted by, so growing the hero by
            that amount and lifting the stage by that amount cancel out for
            the node's position, leaving a clean gap below the radar instead
            of shifting the fix's already-verified button clearance. */}
        <div className="lg:hidden shrink-0" style={{ height: `calc(100vw * 620 / ${HERO_STAGE_WIDTH} + ${MOBILE_RADAR_STRIP_RESERVE_PX}px)` }} />
      </div>
      <TrustStripMobile />
    </div>
  );
}

// ─── FEATURED IN ─────────────────────────────────────────────────────────────

// FirmFinder and Trusted Prop have no correct logo image asset anywhere in
// this repo — the previously-imported raster files are outdated/
// wrong-branded and don't match docs/specs/v4/IMG_1137.pdf. Both the v4 PDF
// and the older v3 Figma export (FYT - Landing Page-2.css:1270-1410) build
// these two as a colored icon square + separate text, not a logo image, so
// they're built the same way here instead of resizing a wrong image.
// badgeColor values (#2563EB blue, #059669 green) are approximated from the
// PDF — compression makes exact hex unreliable. #2563EB reuses the primary
// CTA gradient's blue (PILL_CTA_GRADIENT_STYLE) already established in this
// design system; #059669 is a new color, chosen to read as a similar
// "brand accent" green, confirmed acceptable rather than assumed.
type PressLogo =
  | { kind: "image"; src: string; alt: string; w: number }
  | { kind: "badge"; alt: string; badgeText: string; badgeColor: string; label: string | readonly string[] };

const PRESS_LOGOS: PressLogo[] = [
  { kind: "image", src: imgPressDigitalJournal, alt: "Digital Journal", w: 80 },
  { kind: "image", src: imgPressYahoo, alt: "Yahoo Finance", w: 120 },
  { kind: "image", src: imgPressBarchart, alt: "Barchart", w: 110 },
  { kind: "image", src: imgPressBenzinga, alt: "Benzinga", w: 120 },
  { kind: "badge", alt: "FirmFinder", badgeText: "F", badgeColor: "#2563EB", label: "FirmFinder" },
  { kind: "badge", alt: "The Trusted Prop Firm", badgeText: "TPF", badgeColor: "#059669", label: ["THE TRUSTED", "PROP FIRM"] },
];

// Diagonal light sweep drifting across a dark panel — GPU-friendly (a plain
// `x` transform, no backgroundPosition paint work), looping with a pause
// between passes so it reads as an occasional glint rather than a strobe.
// Renders nothing under reduced motion (not just a paused version of itself).
function LightSweep() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-y-0 w-1/3 pointer-events-none"
      style={{
        background: "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.05) 45%, rgba(96,165,250,0.12) 50%, rgba(255,255,255,0.05) 55%, transparent 100%)",
        willChange: "transform",
      }}
      initial={{ x: "-140%" }}
      animate={{ x: "340%" }}
      transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
    />
  );
}

function renderPressLogo(logo: PressLogo) {
  if (logo.kind === "badge") {
    return (
      <motion.div
        key={logo.alt}
        className="flex items-center gap-[10px] shrink-0 transition-transform duration-300 ease-out hover:-translate-y-[3px]"
        whileHover={{ scale: 1.04 }}
      >
        <div
          className="flex items-center justify-center rounded-[8px] shrink-0 px-[6px]"
          style={{ minWidth: 28, height: 28, background: logo.badgeColor }}
        >
          <span aria-hidden="true" className="font-['Inter:Bold',sans-serif] font-bold text-white text-[13px] leading-none whitespace-nowrap">{logo.badgeText}</span>
        </div>
        {Array.isArray(logo.label) ? (
          <div className="flex flex-col justify-center">
            {logo.label.map((line) => (
              <span key={line} className="font-['Inter:Bold',sans-serif] font-bold text-[#bfc4d1] text-[10px] leading-[12px] whitespace-nowrap">{line}</span>
            ))}
          </div>
        ) : (
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[#bfc4d1] text-[18px] leading-[22px] whitespace-nowrap">{logo.label}</span>
        )}
      </motion.div>
    );
  }
  return (
    <motion.img
      key={logo.alt}
      src={logo.src}
      alt={logo.alt}
      className="shrink-0 object-contain brightness-0 invert opacity-75 transition-[filter,opacity] duration-500 ease-out hover:brightness-100 hover:invert-0 hover:opacity-100"
      style={{ width: logo.w }}
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}

function FeaturedInDesktopRow() {
  const items: ReactNode[] = [];
  PRESS_LOGOS.forEach((logo, i) => {
    items.push(renderPressLogo(logo));
    if (i < PRESS_LOGOS.length - 1) {
      items.push(<div key={`${logo.alt}-sep`} className="bg-[rgba(255,255,255,0.08)] h-[32px] w-px shrink-0" />);
    }
  });
  return (
    <div className="hidden lg:flex gap-[28px] items-center justify-between px-[40px] h-[80px]">
      {items}
    </div>
  );
}

function FeaturedInMobileCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, buildAutoplayPlugins(prefersReducedMotion));
  return (
    <div
      className="lg:hidden overflow-hidden w-full"
      ref={emblaRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="As featured in"
    >
      <div className="flex">
        {PRESS_LOGOS.map((logo) => (
          <div key={logo.alt} role="group" aria-roledescription="slide" className="flex-shrink-0 basis-full flex items-center justify-center py-[6px]">
            {renderPressLogo(logo)}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedIn() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="bg-black relative shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <AmbientBlob className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" color="rgba(59,130,246,0.14)" size={560} duration={22} />
      </div>
      <div className="relative flex flex-col gap-[20px] items-center justify-center px-[20px] py-[40px] lg:px-[80px] lg:pb-[48px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium not-italic text-[#60a5fa] text-[11px] leading-[13px] tracking-[3px]">AS FEATURED IN</p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1280px] rounded-[20px] px-[24px] py-[20px] lg:px-0 lg:py-0 overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #14171F 0%, #0F1117 100%)",
            boxShadow: "inset 0px 1px 8px rgba(59,130,246,0.05)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <div aria-hidden className="absolute border border-[rgba(59,130,246,0.15)] border-solid inset-0 pointer-events-none rounded-[20px]" />
          {!reduceMotion && <LightSweep />}
          <FeaturedInDesktopRow />
          <FeaturedInMobileCarousel />
        </motion.div>
      </div>
    </div>
  );
}

// ─── PROVE YOUR SKILL SECTION ─────────────────────────────────────────────────

const PROVE_SKILL_CARDS = [
  { id: "consistency", text: "Consistency rules limit natural trading." },
  { id: "time-limits", text: "Time limits create pressure." },
  { id: "hidden-rules", text: "Hidden rules cause breaches." },
  { id: "drawdown", text: "Relative drawdown punishes progress." },
  { id: "delayed-rewards", text: "Delayed rewards damage trust." },
] as const;

// The "problems → solution" payoff: once the pinned scroll reaches the
// existing post-reveal hold (scrollYProgress 0.85-1, already reserved as a
// pause at full visibility — see PROVE_SKILL_CARD_REVEALS's last entry in
// proveSkillReveal.ts), the core panel morphs from the problem statement
// into this list instead of introducing new scroll distance/timing data.
const PROVE_SKILL_SOLUTIONS = ["Transparent Rules", "No Consistency Rule", "Static Drawdown", "Fast Rewards", "Up To 100% Reward Split"] as const;

// Replaces the old orange warning-triangle glyph — a small rotating arc plus
// a pulsing core, read as a "system status" light rather than an alert icon.
// Purely decorative (aria-hidden); GPU-only (rotate/opacity/scale).
function StatusIndicator() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative shrink-0 flex items-center justify-center" style={{ width: 20, height: 20 }} aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute inset-0">
        <circle cx="10" cy="10" r="8" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      </svg>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="prove-skill-status-ring" x1="0" y1="0" x2="20" y2="20">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <circle cx="10" cy="10" r="8" stroke="url(#prove-skill-status-ring)" strokeWidth="1.3" strokeDasharray="13 37" strokeLinecap="round" />
      </motion.svg>
      <motion.div
        className="rounded-full"
        style={{ width: 6, height: 6, background: "#3b82f6", boxShadow: "0 0 6px rgba(59,130,246,0.7)" }}
        animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// A soft light sweep that crosses a card every few seconds — a restrained
// "alive" cue rather than a constant shimmer. Skipped entirely under
// reduced motion.
function CardSweep() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-y-0 w-1/2 pointer-events-none"
      style={{ background: "linear-gradient(100deg, transparent 0%, rgba(59,130,246,0.1) 50%, transparent 100%)" }}
      initial={{ x: "-160%" }}
      animate={{ x: "260%" }}
      transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 4.2, ease: "easeInOut" }}
    />
  );
}

// Pointer-tracked 3D tilt on top of the card's own scroll-driven reveal
// (ProveSkillRevealCard, unchanged) — a separate motion layer so the two
// transforms never fight: the reveal wrapper owns opacity/x/y for the
// scroll entrance, this wrapper owns rotateX/rotateY for hover, and Framer
// Motion composes nested transforms correctly since they're on different
// elements. `floatDelay` staggers each card's slow idle float so all 5
// don't bob in lockstep — a network of independently-alive nodes, not one
// synchronized group.
function ProveSkillCard({ text, floatDelay = 0 }: { text: string; floatDelay?: number }) {
  const tilt = useTilt<HTMLDivElement>(6);
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
      whileHover={{ scale: 1.045, y: -6, transition: { type: "spring", stiffness: 320, damping: 20 } }}
      className="group"
    >
      <div
        className="relative overflow-hidden flex gap-[14px] lg:gap-[12px] items-center rounded-[14px] px-[18px] lg:px-[16px] py-[16px] lg:py-[14px] w-[260px] lg:w-[240px] transition-[border-color,box-shadow] duration-300 group-hover:border-[rgba(59,130,246,0.4)]"
        style={{
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(59,130,246,0.14)",
          boxShadow: "0 14px 34px -16px rgba(15,23,42,0.22), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        {/* Soft blue edge light along the top border, plus the periodic sweep. */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.55), transparent)" }} />
        <CardSweep />
        <StatusIndicator />
        <p className="relative font-['Inter:Regular',sans-serif] font-normal text-[#1f2430] text-[14px] leading-[1.4]">{text}</p>
      </div>
    </motion.div>
  );
}

// Wraps a single ProveSkillCard so its opacity/position track scroll
// progress through one of ProveYourSkill()'s two pinned wrappers (desktop
// or mobile) — see src/app/proveSkillReveal.ts for what `reveal` and the
// overall pacing mean, and src/app/scrollProgress.ts for what `progress`
// (post-ratchet) means.
// When the user prefers reduced motion, the card is rendered at its resting
// opacity/position immediately (no scroll-driven animation).
function ProveSkillRevealCard({
  progress,
  reveal,
  reduceMotion,
  className,
  children,
}: {
  progress: MotionValue<number>;
  reveal: CardReveal;
  reduceMotion: boolean | null;
  className: string;
  children: ReactNode;
}) {
  const opacity = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [0, 1]);
  const x = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [reveal.fromX, 0]);
  const y = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [reveal.fromY, 0]);
  return (
    <motion.div className={className} style={reduceMotion ? undefined : { opacity, x, y }}>
      {children}
    </motion.div>
  );
}

function LightStreak({ className, width = 140, duration = 14, delay = 0 }: { className: string; width?: number; duration?: number; delay?: number }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute h-px pointer-events-none ${className}`}
      style={{ width, background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.55), transparent)", filter: "blur(1px)" }}
      animate={{ opacity: [0, 0.8, 0], x: [0, 36, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

// Word-by-word reveal that also un-blurs as it rises — "split text reveal,
// blur -> sharp" from the section brief. Triggers once as the pinned panel
// scrolls into view (whileInView), independent of the cards' own
// scroll-progress-driven reveal lower in this file. Static under reduced
// motion (renders the plain string, no animation scheduled at all).
function BlurRevealWords({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{text}</>;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </>
  );
}

// The "Core" — replaces the old plain centered heading with a glowing glass
// panel: a radar-style center node, the split-reveal headline/subheadline,
// and a short description. Shared verbatim between the desktop pinned stage
// and the mobile pinned stack (each passes its own `size` for responsive
// type scale, same contract as before this redesign).
// The "Core" — a compact glowing glass panel (icon + headline + subheadline)
// sized to fit the same gap between the card rows the plain-text heading
// used to occupy, since the 5 cards' own positions are fixed/tested and
// can't move to make room. The longer description lives outside this panel
// (see ProveYourSkill below) rather than inside it, precisely so this stays
// small enough to never risk overlapping the top/mid card rows.
function ProveSkillHeading({ size }: { size: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <div
      className="relative flex flex-col items-center gap-[12px] rounded-[20px] px-[22px] py-[20px] lg:px-[32px] lg:py-[24px] overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.62)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(59,130,246,0.16)",
        boxShadow: "0 24px 60px -24px rgba(15,23,42,0.28)",
      }}
    >
      {/* Glass reflection sheen, matching the pricing panels' treatment. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[50px] pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)" }} />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)" }} />

      {/* Central node — the same status-light language as the cards, scaled
          up, marking this panel as the network's "core". */}
      <div className="relative flex items-center justify-center" style={{ width: 30, height: 30 }} aria-hidden="true">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="absolute inset-0">
          <circle cx="15" cy="15" r="12.5" stroke="rgba(59,130,246,0.18)" strokeWidth="1.1" />
        </svg>
        <motion.svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="15" cy="15" r="12.5" stroke="#3b82f6" strokeWidth="1.3" strokeDasharray="13 65" strokeLinecap="round" />
        </motion.svg>
        <motion.div
          className="rounded-full"
          style={{ width: 8, height: 8, background: "#3b82f6", boxShadow: "0 0 12px rgba(59,130,246,0.75)" }}
          animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6], scale: [0.92, 1.1, 0.92] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className={`font-['DM_Sans',sans-serif] font-medium text-[#0b0c11] ${size} leading-[1.15] tracking-[-0.02em]`}>
          <BlurRevealWords text="Prove Your Trading Skill." />
        </h2>
        <p className={`font-['DM_Sans',sans-serif] font-medium ${size} leading-[1.15] tracking-[-0.02em]`}>
          <span className="text-[#0b0c11]"><BlurRevealWords text="Not Your Ability To Survive" /></span>
          <br />
          <span className="text-[#3b82f6]" style={{ textShadow: "0 0 30px rgba(59,130,246,0.3)" }}><BlurRevealWords text="Unfair Rules." /></span>
        </p>
      </div>
    </div>
  );
}

// One line per desktop card, converging on the core panel — drawn in sync
// with that card's own reveal window (same PROVE_SKILL_CARD_REVEALS timing
// the card itself uses), so the "network" cabling animates in lockstep with
// the node it connects to rather than on separate, uncoordinated timing.
const PROVE_SKILL_LINE_ANCHORS: readonly [number, number][] = [
  [13, 15], // card 0 — top-left
  [87, 15], // card 1 — top-right
  [23, 60], // card 2 — mid-left
  [77, 60], // card 3 — mid-right
  [50, 84], // card 4 — bottom-center
];
const PROVE_SKILL_CORE_ANCHOR: [number, number] = [50, 32];

function ProveSkillConnectorLine({
  anchor, progress, reveal, reduceMotion,
}: {
  anchor: [number, number]; progress: MotionValue<number>; reveal: CardReveal; reduceMotion: boolean | null;
}) {
  const drawn = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [0, 1]);
  const dotOpacity = useTransform(progress, [reveal.fadeEnd, Math.min(1, reveal.fadeEnd + 0.08)], [0, 1]);
  const [x1, y1] = anchor;
  const [x2, y2] = PROVE_SKILL_CORE_ANCHOR;
  return (
    <>
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="url(#prove-skill-line-gradient)"
        strokeWidth={0.22}
        strokeLinecap="round"
        style={reduceMotion ? undefined : { pathLength: drawn }}
        opacity={reduceMotion ? 0.5 : undefined}
      />
      {/* Marks each line's arrival at the core once it finishes drawing — the
          "tiny particles travel through the lines toward the center" cue,
          simplified to a soft pulse-on-arrival rather than continuous
          per-frame position interpolation along the path. */}
      {!reduceMotion && (
        <motion.circle cx={x2} cy={y2} r={0.9} fill="#60a5fa" style={{ opacity: dotOpacity }} />
      )}
    </>
  );
}

function ProveSkillNetworkLines({ progress, reduceMotion }: { progress: MotionValue<number>; reduceMotion: boolean | null }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="prove-skill-line-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <ProveSkillConnectorLine anchor={PROVE_SKILL_LINE_ANCHORS[0]} progress={progress} reveal={PROVE_SKILL_CARD_REVEALS[0]} reduceMotion={reduceMotion} />
      <ProveSkillConnectorLine anchor={PROVE_SKILL_LINE_ANCHORS[1]} progress={progress} reveal={PROVE_SKILL_CARD_REVEALS[1]} reduceMotion={reduceMotion} />
      <ProveSkillConnectorLine anchor={PROVE_SKILL_LINE_ANCHORS[2]} progress={progress} reveal={PROVE_SKILL_CARD_REVEALS[2]} reduceMotion={reduceMotion} />
      <ProveSkillConnectorLine anchor={PROVE_SKILL_LINE_ANCHORS[3]} progress={progress} reveal={PROVE_SKILL_CARD_REVEALS[3]} reduceMotion={reduceMotion} />
      <ProveSkillConnectorLine anchor={PROVE_SKILL_LINE_ANCHORS[4]} progress={progress} reveal={PROVE_SKILL_CARD_REVEALS[4]} reduceMotion={reduceMotion} />
    </svg>
  );
}

function ProveYourSkill() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });
  const revealProgress = useMonotonicProgress(scrollYProgress);
  const reduceMotion = useReducedMotion();

  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileScrollYProgress } = useScroll({ target: mobileScrollRef, offset: ["start start", "end end"] });
  const mobileRevealProgress = useMonotonicProgress(mobileScrollYProgress);

  // "Premium transition": scrollYProgress 0.85-1 was already reserved as a
  // hold at full visibility after the last card's own fadeEnd (see
  // proveSkillReveal.ts) — reused here, rather than adding new scroll
  // distance, as the window where the cards recede and the core panel
  // morphs from the problem statement into the solution list.
  const cardsRecede = useTransform(revealProgress, [0.85, 1], [1, 0.3]);
  const coreOpacity = useTransform(revealProgress, [0.85, 0.96], [1, 0]);
  const solutionOpacity = useTransform(revealProgress, [0.86, 1], [0, 1]);

  return (
    <div className="bg-white relative shrink-0 w-full">
      {/* Decorative only — a separate absolutely-positioned sibling, not an
          ancestor, of the pinned scroll wrappers below. An `overflow-hidden`
          ancestor of a `position: sticky` element is a classic way to
          silently break the stickiness, so this layer stays out of that
          tree entirely rather than wrapping the section root. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <AmbientBlob className="left-[8%] top-[20%]" color="rgba(59,130,246,0.08)" size={520} duration={24} />
        <AmbientBlob className="right-[6%] bottom-[10%]" color="rgba(96,165,250,0.06)" size={420} duration={19} />
        {/* Faint dot grid — reads as "engineered/technical" rather than a
            flat white void, without competing with the cards or core. */}
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.06) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
        <LightStreak className="left-[20%] top-[22%] w-[160px]" duration={13} />
        <LightStreak className="right-[18%] top-[68%] w-[130px]" duration={17} delay={4} />
        <LightStreak className="left-[48%] top-[10%] w-[90px]" duration={15} delay={7} />
      </div>
      <div className="relative flex flex-col gap-[40px] lg:gap-[0px] items-center px-[20px] py-[64px] lg:px-[80px] lg:py-[120px] w-full max-w-[1280px] mx-auto">
        {/* Desktop: pinned scroll-reveal, modeled on sadewa.framer.website's
            "Eliminate the bottlenecks" section — see proveSkillReveal.ts for
            the timing/derivation notes. The wrapper below is tall
            (PROVE_SKILL_SCROLL_HEIGHT_VH) purely to give scroll distance for
            the reveal to play out against; its sticky inner child (h-screen +
            justify-center, so the content sits vertically centered in the
            viewport rather than flush at the top — reduces the empty scroll
            space below it that a plain `sticky top-0` left) pins in place
            while that distance scrolls past, then releases into normal flow
            once the wrapper ends. The heading and every card's final
            position/styling are unchanged relative to each other — only how
            they arrive (and where the pinned block sits within the viewport
            during the scroll) is different from the static version. */}
        <div ref={scrollRef} className="hidden lg:block relative w-full" style={{ height: `${PROVE_SKILL_SCROLL_HEIGHT_VH}vh` }}>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-0">
            <div className="relative w-full" style={{ height: "640px" }}>
              <ProveSkillNetworkLines progress={revealProgress} reduceMotion={reduceMotion} />
              <div className="absolute left-1/2 -translate-x-1/2 top-[17%] text-center w-[480px]">
                <motion.div style={reduceMotion ? undefined : { opacity: coreOpacity }}>
                  <ProveSkillHeading size="text-[32px] xl:text-[40px]" />
                </motion.div>
                {/* Solution panel — same position/size as the core above,
                    stacked via absolute positioning so the two crossfade in
                    place instead of one displacing the other. */}
                <motion.div
                  className="absolute inset-0"
                  style={reduceMotion ? { opacity: 0 } : { opacity: solutionOpacity }}
                  aria-hidden={reduceMotion ? true : undefined}
                >
                  <div
                    className="relative flex flex-col items-center gap-[14px] rounded-[20px] px-[22px] py-[24px] lg:px-[32px] lg:py-[28px] overflow-hidden h-full justify-center"
                    style={{
                      background: "rgba(255,255,255,0.62)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      boxShadow: "0 24px 60px -24px rgba(15,23,42,0.28)",
                    }}
                  >
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)" }} />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#3b82f6] text-[12px] tracking-[1.5px] uppercase">The FYT Standard</p>
                    <ul className="flex flex-col gap-[8px] items-center">
                      {PROVE_SKILL_SOLUTIONS.map((label) => (
                        <li key={label} className="flex items-center gap-[8px]">
                          <span className="rounded-full shrink-0" style={{ width: 5, height: 5, background: "#3b82f6", boxShadow: "0 0 8px rgba(59,130,246,0.7)" }} aria-hidden="true" />
                          <span className="font-['DM_Sans',sans-serif] font-medium text-[#0b0c11] text-[16px] xl:text-[18px]">{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
              {/* The fade-out-on-recede wrapper below is deliberately
                  un-positioned (no className/position of its own) — the
                  child ProveSkillRevealCard keeps its own required
                  `absolute left-[…] top-[…]` positioning exactly as before,
                  which resolves against this stage (the nearest positioned
                  ancestor) straight through the non-positioned wrapper. */}
              <motion.div style={reduceMotion ? undefined : { opacity: cardsRecede }}>
                <ProveSkillRevealCard className="absolute left-[2%] top-[8%]" progress={revealProgress} reveal={PROVE_SKILL_CARD_REVEALS[0]} reduceMotion={reduceMotion}>
                  <ProveSkillCard text={PROVE_SKILL_CARDS[0].text} floatDelay={0} />
                </ProveSkillRevealCard>
              </motion.div>
              <motion.div style={reduceMotion ? undefined : { opacity: cardsRecede }}>
                <ProveSkillRevealCard className="absolute right-[2%] top-[8%]" progress={revealProgress} reveal={PROVE_SKILL_CARD_REVEALS[1]} reduceMotion={reduceMotion}>
                  <ProveSkillCard text={PROVE_SKILL_CARDS[1].text} floatDelay={0.3} />
                </ProveSkillRevealCard>
              </motion.div>
              <motion.div style={reduceMotion ? undefined : { opacity: cardsRecede }}>
                <ProveSkillRevealCard className="absolute left-[10%] top-[56%]" progress={revealProgress} reveal={PROVE_SKILL_CARD_REVEALS[2]} reduceMotion={reduceMotion}>
                  <ProveSkillCard text={PROVE_SKILL_CARDS[2].text} floatDelay={0.6} />
                </ProveSkillRevealCard>
              </motion.div>
              <motion.div style={reduceMotion ? undefined : { opacity: cardsRecede }}>
                <ProveSkillRevealCard className="absolute right-[10%] top-[56%]" progress={revealProgress} reveal={PROVE_SKILL_CARD_REVEALS[3]} reduceMotion={reduceMotion}>
                  <ProveSkillCard text={PROVE_SKILL_CARDS[3].text} floatDelay={0.9} />
                </ProveSkillRevealCard>
              </motion.div>
              <motion.div style={reduceMotion ? undefined : { opacity: cardsRecede }}>
                <ProveSkillRevealCard className="absolute left-1/2 -translate-x-1/2 top-[78%]" progress={revealProgress} reveal={PROVE_SKILL_CARD_REVEALS[4]} reduceMotion={reduceMotion}>
                  <ProveSkillCard text={PROVE_SKILL_CARDS[4].text} floatDelay={1.2} />
                </ProveSkillRevealCard>
              </motion.div>
            </div>
            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Inter:Regular',sans-serif] font-normal text-[#5b6072] text-[15px] leading-[1.6] text-center max-w-[480px] mt-[24px]"
            >
              Traditional prop firms evaluate traders through hidden restrictions and unnecessary limitations.
              <br /> FYT evaluates what actually matters: your trading performance.
            </motion.p>
          </div>
        </div>

        {/* Mobile: pinned scroll-reveal, same tall-wrapper-plus-sticky-child
            technique as the desktop block above (see proveSkillReveal.ts /
            scrollProgress.ts) but with its own scroll target/progress, since
            this wrapper occupies normal document flow only below the `lg`
            breakpoint. Cards stay in the same vertical stack as the
            section's original static mobile layout — no carousel, no
            drag/swipe gesture, no horizontal component of any kind — and
            cascade in one after another purely as a function of the user's
            vertical scroll through this wrapper. Uses `100dvh` (not
            `100vh`/`h-screen`) for the sticky panel so it always exactly
            fills the currently-visible viewport as the mobile browser's
            address bar shows/hides — a static `vh` unit uses the larger
            (chrome-collapsed) size unconditionally, which can leave this
            centered content pushed below the fold before the chrome
            actually collapses. */}
        <div ref={mobileScrollRef} className="lg:hidden relative w-full" style={{ height: `${PROVE_SKILL_MOBILE_SCROLL_HEIGHT_VH}vh` }}>
          <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center gap-[32px]">
            <div className="text-center px-[8px]">
              <ProveSkillHeading size="text-[28px]" />
              <motion.p
                initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Inter:Regular',sans-serif] font-normal text-[#5b6072] text-[13px] leading-[1.6] text-center mt-[14px]"
              >
                Traditional prop firms evaluate traders through hidden restrictions and unnecessary limitations. FYT evaluates what actually matters: your trading performance.
              </motion.p>
            </div>
            <div className="flex flex-col gap-[12px] w-full items-center">
              {PROVE_SKILL_CARDS.map((c, i) => (
                <ProveSkillRevealCard
                  key={c.id}
                  className="shrink-0"
                  progress={mobileRevealProgress}
                  reveal={PROVE_SKILL_MOBILE_CARD_REVEALS[i]}
                  reduceMotion={reduceMotion}
                >
                  <ProveSkillCard text={c.text} floatDelay={i * 0.25} />
                </ProveSkillRevealCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PROOF IN NUMBERS ─────────────────────────────────────────────────────────

const PROOF_STATS = [
  { value: KEY_METRICS[0].value, label: "Rewards Paid", icon: "dollar" },      // $2.6M+
  { value: KEY_METRICS[1].value, label: "Funded Traders", icon: "people" },    // 14,000+
  { value: KEY_METRICS[2].value, label: "Countries", icon: "globe" },          // 105+
  { value: "24-48H", label: "Processing", icon: "lightning" },                 // PDF-only stat, no KEY_METRICS equivalent
] as const;

function ProofStatIcon({ kind }: { kind: "dollar" | "people" | "globe" | "lightning" }) {
  const common = { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true" } as const;
  if (kind === "dollar") {
    return (
      <svg {...common}>
        <circle cx="10" cy="10" r="8" stroke="#60a5fa" strokeWidth="1.4" />
        <path d="M10 5.5v9M12.5 7.8c0-1-1-1.6-2.5-1.6s-2.5.6-2.5 1.6c0 2.1 5 .9 5 3 0 1-1 1.6-2.5 1.6s-2.5-.6-2.5-1.6" stroke="#60a5fa" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "people") {
    return (
      <svg {...common}>
        <circle cx="7.5" cy="7.5" r="2.5" stroke="#60a5fa" strokeWidth="1.4" />
        <circle cx="13.5" cy="8.5" r="2" stroke="#60a5fa" strokeWidth="1.3" />
        <path d="M3 16c0-2.5 2-4.2 4.5-4.2S12 13.5 12 16" stroke="#60a5fa" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12.5 12.2c1.8.2 3.5 1.6 3.5 3.8" stroke="#60a5fa" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "globe") {
    return (
      <svg {...common}>
        <circle cx="10" cy="10" r="8" stroke="#60a5fa" strokeWidth="1.4" />
        <path d="M2 10h16M10 2c2.2 2.2 3.2 5.1 3.2 8s-1 5.8-3.2 8c-2.2-2.2-3.2-5.1-3.2-8S7.8 4.2 10 2Z" stroke="#60a5fa" strokeWidth="1.2" />
      </svg>
    );
  }
  if (kind === "lightning") {
    return (
      <svg {...common}>
        <circle cx="10" cy="10" r="8" stroke="#60a5fa" strokeWidth="1.4" />
        <path d="M10.5 5L7 11h2.5L9 15l4-6.5H10L10.5 5Z" fill="#60a5fa" />
      </svg>
    );
  }
  const _exhaustive: never = kind;
  return _exhaustive;
}

function CountUpStat({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const segments = useMemo(() => parseCountUpSegments(value), [value]);
  const [display, setDisplay] = useState(() => (prefersReducedMotion ? value : renderCountUp(segments, 0)));

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(renderCountUp(segments, eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, prefersReducedMotion, segments, value]);

  return (
    <p ref={ref} className="font-['DM_Sans',sans-serif] font-medium text-[#eef0f6] text-[24px] lg:text-[28px] tracking-[-0.02em]">
      {display}
    </p>
  );
}

function ProofInNumbers() {
  return (
    <div className="bg-[#0b0c11] relative shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <AmbientBlob className="left-[10%] top-[15%]" color="rgba(59,130,246,0.16)" size={500} duration={21} />
        <AmbientBlob className="right-[8%] bottom-[5%]" color="rgba(96,165,250,0.1)" size={420} duration={17} />
      </div>
      <div className="relative flex flex-col items-center px-[20px] py-[56px] lg:px-[80px] lg:py-[96px] w-full max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[20px] p-[24px] lg:p-[48px]"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
        >
          <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[56px] items-center lg:items-stretch">
            {/* Left: kicker, heading, description, CTA */}
            <div className="flex-1 flex flex-col gap-[16px] items-start justify-center text-left w-full">
              <span
                className="px-[16px] py-[6px] rounded-full text-[#60a5fa] text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold tracking-[1.5px] uppercase"
                style={{ border: "1px solid rgba(59,130,246,0.35)" }}
              >
                Proof in Numbers
              </span>
              <h2 className="font-['DM_Sans',sans-serif] font-medium text-[28px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
                <span className="block text-[#eef0f6]">Thousands traded.</span>
                <span className="block text-[#3b82f6]">Millions rewarded.</span>
              </h2>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#9da2b4] text-[15px] lg:text-[16px] leading-[1.6] max-w-[420px]">
                A global community built on transparent conditions, real progress, and rewards delivered to traders.
              </p>
              <HeroCta
                href="#live-payouts"
                magneticStrength={0.18}
                className="mt-[8px] flex items-center gap-[10px] px-[24px] py-[12px] relative rounded-[999px] shrink-0 no-underline"
                style={PILL_CTA_GRADIENT_STYLE}
              >
                <div aria-hidden className="absolute border border-[rgba(156,196,255,0.35)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white whitespace-nowrap">View Live Rewards</p>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </HeroCta>
            </div>
            {/* Right: 2x2 stat grid */}
            <div className="flex-1 grid grid-cols-2 gap-[12px] lg:gap-[16px] w-full">
              {PROOF_STATS.map(({ value, label, icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, borderColor: "rgba(96,165,250,0.4)" }}
                  className="flex flex-col gap-[10px] items-center justify-center rounded-[14px] px-[16px] py-[24px] lg:py-[28px] text-center"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-center justify-center rounded-full size-[36px]" style={{ border: "1px solid rgba(96,165,250,0.35)" }}>
                    <ProofStatIcon kind={icon} />
                  </div>
                  <CountUpStat value={value} />
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8a90a3] text-[12px] tracking-[0.5px] uppercase">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── LIVE PAYOUTS ─────────────────────────────────────────────────────────────

function TableColIcon({ kind }: { kind: "person" | "dollar" | "shield" | "clock" }) {
  const common = { width: 12, height: 12, viewBox: "0 0 16 16", fill: "none" } as const;
  const stroke = "#8a90a3";
  if (kind === "person") return <svg {...common}><circle cx="8" cy="5.5" r="2.5" stroke={stroke} strokeWidth="1.3" /><path d="M3 13c0-2 2-3.5 5-3.5s5 1.5 5 3.5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" /></svg>;
  if (kind === "dollar") return <svg {...common}><circle cx="8" cy="8" r="6.2" stroke={stroke} strokeWidth="1.2" /><path d="M8 4.5v7M9.8 6.2c0-.8-.8-1.3-1.9-1.3s-1.9.5-1.9 1.3c0 1.7 3.9.7 3.9 2.4 0 .8-.8 1.3-1.9 1.3s-1.9-.5-1.9-1.3" stroke={stroke} strokeWidth="1" strokeLinecap="round" /></svg>;
  if (kind === "shield") return <svg {...common}><path d="M8 1.5l5.5 2v4c0 3.5-2.3 6.2-5.5 7-3.2-.8-5.5-3.5-5.5-7v-4l5.5-2Z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" /></svg>;
  return <svg {...common}><circle cx="8" cy="8" r="6.2" stroke={stroke} strokeWidth="1.2" /><path d="M8 4.5V8l2.8 1.6" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" /></svg>;
}

const PAYOUT_CARDS = [
  { id: 471, image: imgCert471, amount: "$3,644.70", name: "Emma B.", country: "United Kingdom", countryFlag: "🇬🇧" },
  { id: 472, image: imgCert472, amount: "$3,907.00", name: "Damien H.", country: "France", countryFlag: "🇫🇷" },
  { id: 473, image: imgCert473, amount: "$4,290.45", name: "Chinedu O.", country: "Nigeria", countryFlag: "🇳🇬" },
  { id: 474, image: imgCert474, amount: "$4,536.19", name: "Guenter Pieper", country: "Germany", countryFlag: "🇩🇪" },
  { id: 475, image: imgCert475, amount: "$4,882.01", name: "Alessandro Rizzi", country: "Italy", countryFlag: "🇮🇹" },
  { id: 476, image: imgCert476, amount: "$5,102.45", name: "Tyler McKinnon", country: "United States", countryFlag: "🇺🇸" },
  { id: 477, image: imgCert477, amount: "$5,830.76", name: "Sammy Ray", country: "United States", countryFlag: "🇺🇸" },
  { id: 478, image: imgCert478, amount: "$5,286.00", name: "Aaron C.", country: "Australia", countryFlag: "🇦🇺" },
  { id: 479, image: imgCert479, amount: "$7,170.00", name: "Tarmo K.", country: "Estonia", countryFlag: "🇪🇪" },
  { id: 480, image: imgCert480, amount: "$7,927.17", name: "Mihai P.", country: "Romania", countryFlag: "🇷🇴" },
  { id: 481, image: imgCert481, amount: "$8,730.51", name: "Marko Pavic", country: "Croatia", countryFlag: "🇭🇷" },
  { id: 482, image: imgCert482, amount: "$8,061.09", name: "Dainius P.", country: "Lithuania", countryFlag: "🇱🇹" },
  { id: 483, image: imgCert483, amount: "$9,139.16", name: "Iken T.", country: "Nigeria", countryFlag: "🇳🇬" },
  { id: 484, image: imgCert484, amount: "$1,255.00", name: "Yandere Cordova", country: "International", countryFlag: "🌐" },
  { id: 485, image: imgCert485, amount: "$516.00", name: "Patrick Sengdara", country: "Laos", countryFlag: "🇱🇦" },
  { id: 486, image: imgCert486, amount: "$662.00", name: "Dennis Muthini", country: "Kenya", countryFlag: "🇰🇪" },
  { id: 487, image: imgCert487, amount: "$921.87", name: "Elizabeth Roy", country: "United Kingdom", countryFlag: "🇬🇧" },
  { id: 488, image: imgCert488, amount: "$1,300.00", name: "Zhaofee Hwang", country: "China", countryFlag: "🇨🇳" },
  { id: 489, image: imgCert489, amount: "$1,948.33", name: "Oran Charles", country: "Haiti", countryFlag: "🇭🇹" },
  { id: 490, image: imgCert490, amount: "$2,047.82", name: "Christopher Pascal", country: "France", countryFlag: "🇫🇷" },
  { id: 491, image: imgCert491, amount: "$2,649.27", name: "Karthik G.", country: "India", countryFlag: "🇮🇳" },
] as const;

function PayoutCertificateCard({ card }: { card: (typeof PAYOUT_CARDS)[number] }) {
  const tilt = useTilt<HTMLDivElement>(5);
  return (
    <motion.div
      role="group"
      aria-roledescription="slide"
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="flex-shrink-0 basis-full lg:basis-[calc((100%-32px)/3)] flex flex-col gap-[16px]"
    >
      <div className="rounded-[16px] overflow-hidden transition-shadow duration-300" style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.05)" }}>
        <img src={card.image} alt={`FYT reward certificate — ${card.amount} awarded to ${card.name}`} className="w-full h-auto object-contain" loading="lazy" decoding="async" />
      </div>
      <div className="flex flex-col gap-[2px] px-[4px]">
        <div className="flex items-baseline gap-[10px]">
          <p className="font-['DM_Sans',sans-serif] font-medium text-[#3b82f6] text-[22px] tracking-[-0.02em]">{card.amount}</p>
          <span className="font-['Inter:Regular',sans-serif] font-normal text-[#1f2430] text-[14px]"><span aria-hidden="true">{card.countryFlag}</span> {card.country}</span>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0b0c11] text-[15px]">{card.name}</p>
      </div>
    </motion.div>
  );
}

function LivePayouts() {
  const prefersReducedMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, buildAutoplayPlugins(prefersReducedMotion));
  const { connectionState, records } = useLiveRewardsFeed();
  return (
    <div id="live-payouts" className="bg-white relative shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <AmbientBlob className="left-[6%] top-[8%]" color="rgba(59,130,246,0.07)" size={480} duration={23} />
        <AmbientBlob className="right-[10%] bottom-[12%]" color="rgba(34,197,94,0.05)" size={380} duration={18} />
      </div>
      <div className="relative flex flex-col gap-[36px] lg:gap-[48px] items-center px-[20px] py-[56px] lg:px-[80px] lg:py-[96px] w-full max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="font-['DM_Sans',sans-serif] font-medium text-[#0b0c11] text-[28px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] text-center"
        >
          Live Rewards. <span className="text-[#3b82f6]">Verified</span> Rewards.
        </motion.h2>
        {/* Reward certificate cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-[12px] w-full"
        >
          <motion.button
            type="button"
            aria-label="Previous reward certificate"
            onClick={() => emblaApi?.scrollPrev()}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="hidden lg:flex items-center justify-center rounded-full size-[40px] shrink-0 cursor-pointer bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(59,130,246,0.18)]"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </motion.button>
          <div className="flex-1 overflow-hidden" ref={emblaRef} role="region" aria-roledescription="carousel" aria-label="Reward certificates">
            <div className="flex gap-[16px]">
              {PAYOUT_CARDS.map((card) => (
                <PayoutCertificateCard key={card.id} card={card} />
              ))}
            </div>
          </div>
          <motion.button
            type="button"
            aria-label="Next reward certificate"
            onClick={() => emblaApi?.scrollNext()}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="hidden lg:flex items-center justify-center rounded-full size-[40px] shrink-0 cursor-pointer bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(59,130,246,0.18)]"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </motion.button>
        </motion.div>
        {/* Recent rewards table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white rounded-[16px] overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
          <div className="flex items-center gap-[12px] px-[20px] py-[16px] flex-wrap" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <span className="flex items-center gap-[6px] px-[10px] py-[4px] rounded-full" style={{ background: connectionState === "connected" ? "rgba(34,197,94,0.1)" : "rgba(100,116,139,0.1)" }}>
              <span className="relative flex size-[8px]">
                {connectionState === "connected" && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75 animate-ping" />
                )}
                <span className={`relative inline-flex rounded-full size-[8px] ${connectionState === "connected" ? "bg-[#22c55e]" : "bg-[#64748b]"}`} />
              </span>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] tracking-[1px] uppercase" style={{ color: connectionState === "connected" ? "#15803d" : "#64748b" }}>
                {connectionState === "connected" ? "Live" : "Connecting"}
              </span>
            </span>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0b0c11] text-[15px]">Recent Rewards</p>
            <span className="hidden sm:block w-px h-[16px]" style={{ background: "rgba(0,0,0,0.1)" }} />
            <span className="flex items-center gap-[6px] text-[#8a90a3] text-[12px]">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1.5l5.5 2v4c0 3.5-2.3 6.2-5.5 7-3.2-.8-5.5-3.5-5.5-7v-4l5.5-2Z" stroke="#8a90a3" strokeWidth="1.2" strokeLinejoin="round" /></svg>
              Verified reward activity
            </span>
          </div>
          <div className="hidden lg:flex items-center px-[20px] py-[10px] gap-[16px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            {[
              { kind: "person" as const, label: "Trader", w: "flex-1 min-w-[200px]" },
              { kind: "dollar" as const, label: "Reward Amount", w: "flex-1 min-w-[140px]" },
              { kind: "shield" as const, label: "Status", w: "flex-1 min-w-[140px]" },
              { kind: "clock" as const, label: "Time", w: "w-[80px]" },
            ].map((col) => (
              <div key={col.label} className={`${col.w} flex items-center gap-[6px]`}>
                <TableColIcon kind={col.kind} />
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#8a90a3] text-[11px] tracking-[1px] uppercase">{col.label}</span>
              </div>
            ))}
          </div>
          {records.length === 0 ? (
            <div className="flex flex-col items-center gap-[10px] px-[20px] py-[56px] text-center">
              <span className="text-[32px]" aria-hidden="true">📭</span>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8a90a3] text-[14px]">Waiting for certificates…</p>
            </div>
          ) : (
            <AnimatePresence initial={false}>
            {records.map((record) => (
              <motion.div
                key={record.name + record.timestamp}
                layout
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center flex-wrap lg:flex-nowrap gap-[12px] lg:gap-[16px] px-[20px] py-[14px] transition-colors duration-200 hover:bg-[rgba(59,130,246,0.03)]"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
              >
                <div className="flex-1 flex items-center gap-[10px] min-w-[200px]">
                  <span className="inline-flex rounded-full size-[8px] bg-[#22c55e] shrink-0" />
                  <div className="flex items-center justify-center rounded-full size-[28px] shrink-0" style={{ background: "#eef0f6" }}>
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1f2430] text-[11px]">{deriveInitials(record.name)}</span>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[#1f2430] text-[14px]">{record.name}</p>
                </div>
                <div className="flex-1 min-w-[140px]">
                  <p className="font-['DM_Sans',sans-serif] font-medium text-[#3b82f6] text-[15px]">{record.amount}</p>
                </div>
                <div className="flex-1 flex items-center min-w-[140px]">
                  <span className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-full" style={{ background: "rgba(59,130,246,0.1)" }}>
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[#3b82f6] text-[11px]">Verified</span>
                  </span>
                </div>
                <div className="w-full lg:w-[80px]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8a90a3] text-[12px]">{timeAgo(record.timestamp)}</p>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          )}
        </motion.div>
        <HeroCta
          href="https://provesrc.com/verified/?src=fundingyourtrades"
          target="_blank"
          rel="noopener noreferrer"
          magneticStrength={0.16}
          className="flex items-center gap-[10px] px-[32px] py-[16px] rounded-[999px] shrink-0 no-underline"
          style={PILL_CTA_GRADIENT_STYLE}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M3 8h14v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /><path d="M2 5.5a1.5 1.5 0 0 1 1.5-1.5H10v4H3.5A1.5 1.5 0 0 1 2 6.5v-1Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /><path d="M18 5.5A1.5 1.5 0 0 0 16.5 4H10v4h6.5A1.5 1.5 0 0 0 18 6.5v-1Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 4v14" stroke="#fff" strokeWidth="1.5" /></svg>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white whitespace-nowrap">Check More Rewards</p>
        </HeroCta>
      </div>
    </div>
  );
}

// ─── CLOSING CTA ──────────────────────────────────────────────────────────────

function ClosingCta() {
  return (
    <div className="bg-[#070810] relative shrink-0 w-full">
      <div className="flex flex-col gap-[32px] lg:gap-[40px] items-center px-[20px] py-[64px] lg:px-[80px] lg:py-[120px] w-full max-w-[1280px] mx-auto">
        <h2 className="font-['DM_Sans',sans-serif] text-[#eef0f6] text-[28px] lg:text-[44px] leading-[1.15] tracking-[-0.02em] text-center">
          <span className="font-semibold">Join a Growing Global Community Trading </span>
          <span className="font-normal text-[0.85em]">with FYT.</span>
        </h2>
        <WorldMapWidget />
        <a
          href={HERO_CONTENT.ctaPrimary.href}
          className="flex justify-center gap-[10px] items-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 no-underline"
          style={PILL_CTA_GRADIENT_STYLE}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[16px] text-white whitespace-nowrap">Start Your Trading Journey With Us</p>
        </a>
      </div>
    </div>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────────

// Barely-there fractal-noise grain, tiled behind the whole configurator —
// keeps its large glass panels from reading as flat/sterile without being
// visible as "texture" on its own. Pure CSS background-image, no runtime
// cost.
const PRICING_NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const STEP_DISPLAY_LABELS: Record<StepId, string> = {
  "1-Step": "1 Step",
  "2-Step": "2 Step",
  "Instant": "Instant",
};

function SelectorIcon({ kind }: { kind: "lightning" | "bars" | "shield-star" | "diamond" }) {
  const common = { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none" } as const;
  if (kind === "lightning") return <svg {...common}><path d="M9 1.5 3 9.5h4L6.5 14.5 13 6.5H9L9 1.5Z" fill="currentColor" /></svg>;
  if (kind === "bars") return <svg {...common}><path d="M2.5 13.5v-4M7 13.5v-8M11.5 13.5v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
  if (kind === "shield-star") return <svg {...common}><path d="M8 1.5l5.5 2v4c0 3.5-2.3 6.2-5.5 7-3.2-.8-5.5-3.5-5.5-7v-4l5.5-2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><path d="M8 5.8l.9 1.8 2 .3-1.4 1.4.3 2L8 10.4l-1.8.9.3-2-1.4-1.4 2-.3L8 5.8Z" fill="currentColor" /></svg>;
  return <svg {...common}><path d="M8 1.5 13.5 7 8 14.5 2.5 7 8 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
}

type PanelIconKind = "person" | "shield-check" | "star" | "info" | "target" | "clock" | "calendar" | "people" | "trending" | "shield" | "lightning-box" | "bars" | "grid";

function PanelIcon({ kind }: { kind: PanelIconKind }) {
  const common = { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none" } as const;
  const s = "currentColor";
  switch (kind) {
    case "person": return <svg {...common}><circle cx="8" cy="5.5" r="2.7" stroke={s} strokeWidth="1.3" /><path d="M2.8 13.5c0-2.4 2.3-4.2 5.2-4.2s5.2 1.8 5.2 4.2" stroke={s} strokeWidth="1.3" strokeLinecap="round" /></svg>;
    case "bars": return <svg {...common}><path d="M3 13.5v-4M8 13.5v-8M13 13.5v-6" stroke={s} strokeWidth="1.4" strokeLinecap="round" /></svg>;
    case "shield-check": case "shield": return <svg {...common}><path d="M8 1.5l5.5 2v4c0 3.5-2.3 6.2-5.5 7-3.2-.8-5.5-3.5-5.5-7v-4l5.5-2Z" stroke={s} strokeWidth="1.3" strokeLinejoin="round" />{kind === "shield-check" && <path d="M5.5 8l1.8 1.8L10.8 6" stroke={s} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />}</svg>;
    case "star": return <svg {...common}><path d="M8 1.8l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 6.1l4-.6L8 1.8Z" stroke={s} strokeWidth="1.2" strokeLinejoin="round" /></svg>;
    case "info": return <svg {...common}><circle cx="8" cy="8" r="6.2" stroke={s} strokeWidth="1.2" /><path d="M8 7.2v4M8 5.2v.1" stroke={s} strokeWidth="1.3" strokeLinecap="round" /></svg>;
    case "target": return <svg {...common}><circle cx="8" cy="8" r="6" stroke={s} strokeWidth="1.2" /><circle cx="8" cy="8" r="2.6" stroke={s} strokeWidth="1.2" /></svg>;
    case "clock": return <svg {...common}><circle cx="8" cy="8" r="6.2" stroke={s} strokeWidth="1.2" /><path d="M8 4.5V8l2.8 1.6" stroke={s} strokeWidth="1.2" strokeLinecap="round" /></svg>;
    case "calendar": return <svg {...common}><rect x="2" y="3.5" width="12" height="10.5" rx="1.5" stroke={s} strokeWidth="1.2" /><path d="M2 6.5h12M5.5 2v3M10.5 2v3" stroke={s} strokeWidth="1.2" strokeLinecap="round" /></svg>;
    case "people": return <svg {...common}><circle cx="6" cy="6" r="2.2" stroke={s} strokeWidth="1.2" /><circle cx="11" cy="7" r="1.7" stroke={s} strokeWidth="1.1" /><path d="M2.3 13.2c0-2 1.6-3.5 3.7-3.5s3.7 1.5 3.7 3.5" stroke={s} strokeWidth="1.2" strokeLinecap="round" /><path d="M10.3 9.9c1.4.2 2.7 1.3 2.7 3" stroke={s} strokeWidth="1.1" strokeLinecap="round" /></svg>;
    case "trending": return <svg {...common}><path d="M2 12.5l4-4.5 3 2.5 5-6" stroke={s} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 4h3v3" stroke={s} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "grid": return <svg {...common}><rect x="2" y="2" width="5" height="5" rx="1" stroke={s} strokeWidth="1.2" /><rect x="9" y="2" width="5" height="5" rx="1" stroke={s} strokeWidth="1.2" /><rect x="2" y="9" width="5" height="5" rx="1" stroke={s} strokeWidth="1.2" /><rect x="9" y="9" width="5" height="5" rx="1" stroke={s} strokeWidth="1.2" /></svg>;
    default: return <svg {...common}><path d="M9 1.5 3 9.5h4L6.5 14.5 13 6.5H9L9 1.5Z" fill={s} /></svg>;
  }
}

const STEP_ICONS: Record<StepId, "lightning" | "bars"> = { "1-Step": "lightning", "2-Step": "bars", "Instant": "lightning" };
const PLAN_ICONS: Record<PlanId, "shield-star" | "diamond"> = { classic: "shield-star", plus: "shield-star", prime: "diamond" };

type MobilePanelTab = "rules" | "why";
const MOBILE_PANEL_TABS: { id: MobilePanelTab; label: string }[] = [
  { id: "rules", label: "Key Rules" },
  { id: "why", label: "Why traders choose this" },
];

// Glass card with hover elevation and a soft directional glow that fades in
// on hover — the shared shell behind all 4 results-panel cards. `className`
// stays exactly the layout-visibility class each call site already passes
// ("flex" / "hidden sm:flex" / "flex sm:hidden"); only the presentation
// layer inside changed.
function PanelCard({ children, className }: { children: ReactNode; className: string }) {
  return (
    <motion.div
      className={`${className} group flex-col rounded-[16px] relative`}
      style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 44px -20px rgba(0,0,0,0.5)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.35)", boxShadow: "0 28px 56px -20px rgba(0,0,0,0.55)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {/* Everything decorative lives in its own overflow-hidden layer,
          separate from the card's own box — clipping the outer motion.div
          directly would also clip ITS OWN box-shadow (the hover-elevation
          shadow above), a classic overflow-hidden gotcha. */}
      <div className="absolute inset-0 rounded-[16px] overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        />
        {/* Glass reflection — a static diagonal sheen near the top edge, the
            same trick real glass/acrylic panels use, plus a hairline of soft
            blue edge light along the top border. */}
        <div className="absolute inset-x-0 top-0 h-[80px]" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.5) 50%, transparent 100%)" }} />
        {/* Hover glow — driven by the card's own `group` hover state via CSS,
            not a nested whileHover (a nested pointer-events-none element can
            never receive its own hover events — the pointer just passes
            through it to whatever's underneath). */}
        <div
          className="absolute -inset-px opacity-0 transition-opacity duration-400 group-hover:opacity-100"
          style={{ background: "radial-gradient(160px circle at 50% 0%, rgba(59,130,246,0.28), transparent 70%)" }}
        />
      </div>
      <div className="relative flex flex-col gap-[16px] p-[24px]">{children}</div>
    </motion.div>
  );
}

function KeyRulesRows({ stats }: { stats: [string, string][] }) {
  const icons = ["target", "shield", "shield", "calendar", "clock"] as const;
  return (
    <div className="flex flex-col">
      {stats.map(([k, v], i) => (
        <div key={k} className="flex items-center justify-between py-[10px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="flex items-center gap-[8px] text-[#60a5fa]">
            <PanelIcon kind={icons[i]} />
            <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px]">{k}</span>
          </span>
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[#eef0f6] text-[14px]">{v}</span>
        </div>
      ))}
    </div>
  );
}

function WhyChoiceBullets({ bullets }: { bullets: [PanelIconKind, string][] }) {
  return (
    <div className="flex flex-col gap-[16px]">
      {bullets.map(([icon, label]) => (
        <div key={label} className="flex items-center gap-[12px]">
          <div className="flex items-center justify-center rounded-[8px] size-[32px] shrink-0" style={{ background: "rgba(59,130,246,0.1)", color: "#60a5fa" }}>
            <PanelIcon kind={icon} />
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#d4d6e0] text-[14px]">{label}</p>
        </div>
      ))}
    </div>
  );
}

function Pricing() {
  const [step, setStep] = useState<StepId>("1-Step");
  const [plan, setPlan] = useState<PlanId>("classic");
  const [platform, setPlatform] = useState<PlatformId>("match-trader");
  const [size, setSize] = useState<number>(50000);
  const [showExplainerVideo, setShowExplainerVideo] = useState(false);
  const closeExplainerVideo = useCallback(() => setShowExplainerVideo(false), []);
  const [mobilePanelTab, setMobilePanelTab] = useState<MobilePanelTab>("rules");
  const checkoutMagnet = useMagnetic<HTMLDivElement>(0.2);
  const reduceMotion = useReducedMotion();

  const entry = getEntry(step, plan, platform, size)!;
  const planLabel = STEP_PLANS[step].find((p) => p.id === plan)?.label ?? "";
  const platformLabel = PLATFORM_OPTIONS.find((p) => p.id === platform)?.label ?? "";
  const sizeLabel = fmtSize(size);

  function handleStepChange(next: StepId) {
    setStep(next);
    if (!STEP_PLANS[next].some((p) => p.id === plan)) setPlan(STEP_PLANS[next][0].id);
    if (!STEP_SIZES[next].includes(size)) setSize(100000);
  }

  // Key Rules column always shows exactly these 5 rows. Target and
  // Max Overall Loss labels vary by step/plan (see profitTargetLabel and
  // maxOverallLossLabel above); the other 3 rows are fixed labels.
  const profitTargetLabel = step === "Instant" && plan === "prime" ? "Withdrawal Threshold" : "Target";
  const maxOverallLossLabel =
    step === "Instant"
      ? plan === "prime"
        ? "Max Overall Loss (Trailing Cap)"
        : "Max Overall Loss (Trailing)"
      : "Max Overall Loss (Static)";

  const stats: [string, string][] = [
    [profitTargetLabel, step === "Instant" ? (entry.profit ?? "N/A") : step === "2-Step" ? `${entry.p1} / ${entry.p2}` : entry.p1 ?? ""],
    ["Max Daily Loss", entry.maxDaily],
    [maxOverallLossLabel, entry.maxOverall],
    ["Min Trading Days", entry.minDays],
    ["Time Limit", entry.time],
  ];

  const traderChoiceBullets: [PanelIconKind, string][] =
    step === "Instant"
      ? [
          ["trending", "Up to 90% reward splits"],
          ["calendar", "Weekend/Overnight holdings"],
          ["clock", "Bi-weekly reward"],
        ]
      : plan === "prime"
      ? [
          ["trending", "Up to 100% reward splits"],
          ["star", "News trading (challenge only)"],
          ["shield", "Hedging (challenge only)"],
          ["people", "EA/Copy trading (challenge only)"],
          ["target", "No SL requirement"],
          ["calendar", "Weekend/Overnight holdings"],
        ]
      : [
          ["trending", "Up to 100% reward splits"],
          ["star", "News trading"],
          ["shield", "Hedging"],
          ["people", "EA/Copy trading (challenge only)"],
          ["target", "No SL requirement"],
          ["calendar", "Weekend/Overnight holdings"],
        ];

  return (
    <div id="challenge" className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full relative">
        {/* Ambient backdrop — two slow-drifting glows plus a barely-visible
            grain layer, purely decorative (aria-hidden, pointer-events-none)
            and sitting behind every interactive element below. */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <AmbientBlob className="left-[4%] top-[6%]" color="rgba(59,130,246,0.1)" size={580} duration={27} />
          <AmbientBlob className="right-[6%] bottom-[10%]" color="rgba(96,165,250,0.07)" size={460} duration={22} />
          <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay" style={{ backgroundImage: PRICING_NOISE_BG }} />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] lg:gap-[48px] items-start px-[20px] py-[48px] lg:px-[88px] lg:py-[140px] relative size-full">
          <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-start lg:items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex flex-col gap-[12px] items-start"
            >
              <p className="font-['DM_Sans',sans-serif] font-medium leading-[1.1] text-[#eef0f6] text-[32px] lg:text-[44px] tracking-[-0.792px]">
                Find the right challenge
                <br />
                <span className="text-[#eef0f6]">in </span>
                <span className="text-[#3b82f6]" style={{ textShadow: "0 0 30px rgba(59,130,246,0.35)" }}>under a minute.</span>
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] text-[#9da2b4] text-[16px] lg:text-[18px]">Pick a model, compare essentials, and start with clarity.</p>
            </motion.div>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setShowExplainerVideo(true); }}
              className="flex items-center gap-[14px] px-[16px] py-[14px] rounded-[12px] shrink-0 no-underline w-full lg:w-[300px] relative overflow-hidden transition-[border-color,transform] duration-300 hover:border-[rgba(59,130,246,0.4)] hover:-translate-y-[2px]"
              style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}
            >
              <motion.div
                className="flex items-center justify-center rounded-full size-[44px] shrink-0"
                style={{ border: "1.5px solid #3b82f6", background: "rgba(59,130,246,0.08)" }}
                animate={reduceMotion ? undefined : { boxShadow: ["0 0 12px rgba(59,130,246,0.5)", "0 0 20px rgba(59,130,246,0.85)", "0 0 12px rgba(59,130,246,0.5)"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="ml-[2px]"><path d="M1 1L13 8L1 15V1Z" fill="white" /></svg>
              </motion.div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[14px]">See how it works</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8a90a3] text-[12px]">2 min video</p>
              </div>
              <div className="hidden lg:flex items-end gap-[3px] absolute right-[16px] bottom-[14px] h-[28px]" aria-hidden="true">
                {[6, 12, 18, 24, 14, 20, 10].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] rounded-full"
                    style={{ height: `${h}px`, background: "rgba(59,130,246,0.35)" }}
                    animate={reduceMotion ? undefined : { height: [`${h}px`, `${Math.max(4, h - 10)}px`, `${h}px`] }}
                    transition={{ duration: 1 + (i % 3) * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
                  />
                ))}
              </div>
            </button>
          </div>

          {/* Controls — row 1: three segmented controls (model | type | platform); row 2: full-width size */}
          <div className="flex flex-col gap-[24px] w-full">
            <div className="flex flex-col lg:flex-row gap-[24px] w-full">
              <div className="flex-1 flex flex-col gap-[12px]">
                <p className="sr-only lg:not-sr-only lg:static font-['Inter:Regular',sans-serif] font-normal text-[#9da2b4] text-[13px]" id="model-group-label">1. Pick your model</p>
                <div className="flex flex-1 rounded-[10px]" role="group" aria-labelledby="model-group-label" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  {(["1-Step", "2-Step", "Instant"] as StepId[]).map((id, i, arr) => {
                    const active = id === step;
                    const prevActive = i > 0 && arr[i - 1] === step;
                    return (
                      <button
                        key={id}
                        onClick={() => handleStepChange(id)}
                        aria-pressed={active}
                        className="relative flex-1 flex items-center justify-center gap-[8px] py-[12px] cursor-pointer rounded-[10px] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.96]"
                        style={{
                          ...(i > 0 && !active && !prevActive ? { borderLeft: "1px solid rgba(255,255,255,0.1)" } : {}),
                        }}
                      >
                        {/* Shared layoutId — Framer Motion animates this pill sliding
                            from the previously-active button to this one instead of
                            popping, the "Apple configurator" morph effect. */}
                        {active && (
                          <motion.div
                            layoutId="pricing-model-pill"
                            className="absolute inset-0 rounded-[10px]"
                            style={{ background: "rgba(59,130,246,0.1)", border: "1px solid #3b82f6" }}
                            animate={reduceMotion ? undefined : { boxShadow: ["0 0 10px rgba(59,130,246,0.45)", "0 0 16px rgba(59,130,246,0.75)", "0 0 10px rgba(59,130,246,0.45)"] }}
                            transition={{ layout: { type: "spring", stiffness: 500, damping: 35 }, boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }}
                          />
                        )}
                        <span className="relative z-[1]" style={{ color: active ? "#3b82f6" : "#9da2b4" }}><SelectorIcon kind={STEP_ICONS[id]} /></span>
                        <span className="relative z-[1] font-['Inter:Medium',sans-serif] font-medium text-[14px]" style={{ color: active ? "#eef0f6" : "#9da2b4" }}>{STEP_DISPLAY_LABELS[id]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <motion.div
                className="hidden lg:block w-px"
                style={{ background: "linear-gradient(180deg, transparent 0%, rgba(96,165,250,0.35) 50%, transparent 100%)" }}
                animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />

              <div className="flex-1 flex flex-col gap-[12px]">
                <p className="sr-only lg:not-sr-only lg:static font-['Inter:Regular',sans-serif] font-normal text-[#9da2b4] text-[13px]" id="type-group-label">2. Choose your type</p>
                <div className="flex flex-1 rounded-[10px]" role="group" aria-labelledby="type-group-label" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  {STEP_PLANS[step].map((opt, i, arr) => {
                    const active = opt.id === plan;
                    const prevActive = i > 0 && arr[i - 1].id === plan;
                    const flag = planFlag(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setPlan(opt.id)}
                        aria-pressed={active}
                        className="relative flex-1 flex flex-col items-center justify-center gap-[2px] py-[10px] cursor-pointer rounded-[10px] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.96]"
                        style={{
                          color: active ? "#3b82f6" : "#9da2b4",
                          ...(i > 0 && !active && !prevActive ? { borderLeft: "1px solid rgba(255,255,255,0.1)" } : {}),
                        }}
                      >
                        {active && (
                          <motion.div
                            layoutId="pricing-type-pill"
                            className="absolute inset-0 rounded-[10px]"
                            style={{ background: "rgba(59,130,246,0.1)", border: "1px solid #3b82f6" }}
                            animate={reduceMotion ? undefined : { boxShadow: ["0 0 10px rgba(59,130,246,0.45)", "0 0 16px rgba(59,130,246,0.75)", "0 0 10px rgba(59,130,246,0.45)"] }}
                            transition={{ layout: { type: "spring", stiffness: 500, damping: 35 }, boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }}
                          />
                        )}
                        <span className="relative z-[1] flex items-center gap-[8px]">
                          <SelectorIcon kind={PLAN_ICONS[opt.id]} />
                          <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">{opt.label}</span>
                        </span>
                        {flag && (
                          // Amber accent + pill, deliberately distinct from the blue active/selection state so the badge doesn't blend into it.
                          <span
                            className="relative z-[1] font-['Inter:Bold',sans-serif] font-bold text-[10px] leading-[12px] tracking-[0.4px] uppercase whitespace-nowrap px-[6px] py-[2px] rounded-full"
                            style={{ color: "#f59e0b", background: "rgba(245,158,11,0.12)" }}
                          >
                            {flag}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <motion.div
                className="hidden lg:block w-px"
                style={{ background: "linear-gradient(180deg, transparent 0%, rgba(96,165,250,0.35) 50%, transparent 100%)" }}
                animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />

              <div className="flex-1 flex flex-col gap-[12px]">
                <p className="sr-only lg:not-sr-only lg:static font-['Inter:Regular',sans-serif] font-normal text-[#9da2b4] text-[13px]" id="platform-group-label">3. Choose your platform</p>
                <div className="flex flex-1 rounded-[10px]" role="group" aria-labelledby="platform-group-label" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  {PLATFORM_OPTIONS.map((opt, i, arr) => {
                    const active = opt.id === platform;
                    const prevActive = i > 0 && arr[i - 1].id === platform;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setPlatform(opt.id)}
                        aria-pressed={active}
                        className="relative flex-1 flex items-center justify-center py-[12px] cursor-pointer rounded-[10px] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.96]"
                        style={{
                          ...(i > 0 && !active && !prevActive ? { borderLeft: "1px solid rgba(255,255,255,0.1)" } : {}),
                        }}
                      >
                        {active && (
                          <motion.div
                            layoutId="pricing-platform-pill"
                            className="absolute inset-0 rounded-[10px]"
                            style={{ background: "rgba(59,130,246,0.1)", border: "1px solid #3b82f6" }}
                            animate={reduceMotion ? undefined : { boxShadow: ["0 0 10px rgba(59,130,246,0.45)", "0 0 16px rgba(59,130,246,0.75)", "0 0 10px rgba(59,130,246,0.45)"] }}
                            transition={{ layout: { type: "spring", stiffness: 500, damping: 35 }, boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }}
                          />
                        )}
                        <span className="relative z-[1] font-['Inter:Medium',sans-serif] font-medium text-[14px]" style={{ color: active ? "#eef0f6" : "#9da2b4" }}>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[12px] w-full">
              <p className="sr-only lg:not-sr-only lg:static font-['Inter:Regular',sans-serif] font-normal text-[#9da2b4] text-[13px]" id="size-group-label">4. Pick your account size</p>
              <div className="flex gap-[10px] w-full" role="group" aria-labelledby="size-group-label">
                {STEP_SIZES[step].map((value) => {
                  const active = value === size;
                  return (
                    <button
                      key={value}
                      onClick={() => setSize(value)}
                      aria-pressed={active}
                      className="relative flex-1 flex items-center justify-center py-[12px] rounded-[10px] cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.96]"
                    >
                      {active ? (
                        <motion.div
                          layoutId="pricing-size-pill"
                          className="absolute inset-0 rounded-[10px]"
                          style={{ background: "rgba(59,130,246,0.12)", border: "1px solid #3b82f6" }}
                          animate={reduceMotion ? undefined : { boxShadow: ["0 0 10px rgba(59,130,246,0.45)", "0 0 16px rgba(59,130,246,0.75)", "0 0 10px rgba(59,130,246,0.45)"] }}
                          transition={{ layout: { type: "spring", stiffness: 500, damping: 35 }, boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }}
                        />
                      ) : (
                        <div aria-hidden className="absolute inset-0 rounded-[10px] pointer-events-none" style={{ border: "1px solid rgba(255,255,255,0.1)" }} />
                      )}
                      <p
                        className={`relative z-[1] font-['Inter:${active ? "Medium" : "Regular"}',sans-serif] font-${active ? "medium" : "normal"} text-[14px] whitespace-nowrap`}
                        style={{ color: active ? "#3b82f6" : "#9da2b4" }}
                      >
                        {fmtSize(value)}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results panel — 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] w-full">
            {/* Your Selection */}
            <PanelCard className="flex">
              <div className="flex items-center gap-[8px]">
                <PanelIcon kind="person" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#eef0f6] text-[14px]">Your Selection</p>
              </div>
              <div className="flex flex-col">
                {[
                  ["lightning-box" as const, "Model", STEP_DISPLAY_LABELS[step]],
                  ["shield" as const, "Type", planLabel],
                  ["grid" as const, "Platform", platformLabel],
                  ["bars" as const, "Size", sizeLabel],
                ].map(([icon, k, v]) => (
                  <div key={k} className="flex items-center justify-between py-[10px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="flex items-center gap-[8px] text-[#60a5fa]"><PanelIcon kind={icon} /><span className="font-['Inter:Regular',sans-serif] font-normal text-[14px]">{k}</span></span>
                    <span className="relative inline-grid overflow-hidden">
                      <motion.span
                        key={v}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="font-['Inter:Medium',sans-serif] font-medium text-[#eef0f6] text-[14px] [grid-area:1/1]"
                      >
                        {v}
                      </motion.span>
                    </span>
                  </div>
                ))}
              </div>
              {/* Price — each digit change pops in fresh (key={value} remounts the
                  motion.p) instead of snapping, the "smooth number morphing" the
                  redesign calls for. The literal `${entry.priceOld.toFixed(2)}` /
                  `entry.priceNew.toFixed(2)` expressions are untouched — same
                  values, same formatting, only the transition wrapping them is new. */}
              <div className="flex flex-col items-center text-center gap-[4px] mt-[4px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5f6478] text-[12px]">One-time fee</p>
                {entry.priceOld > entry.priceNew && (
                  <motion.p
                    key={entry.priceOld}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="font-['Inter:Regular',sans-serif] font-normal text-[#5f6478] text-[14px] line-through"
                  >${entry.priceOld.toFixed(2)}</motion.p>
                )}
                <motion.p
                  key={entry.priceNew}
                  initial={{ opacity: 0, y: -10, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className="font-['DM_Sans',sans-serif] font-medium text-[#3b82f6] text-[36px] tracking-[-0.8px]"
                  style={{ textShadow: "0 0 24px rgba(59,130,246,0.35)" }}
                >${entry.priceNew.toFixed(2)}</motion.p>
              </div>
              {/* Magnetic wrapper — the <a> itself keeps its plain href/className
                  so checkout behavior and the product-id link are exactly what
                  they were; the pointer-follow + glow live on this parent only. */}
              <motion.div
                ref={checkoutMagnet.ref}
                onMouseMove={checkoutMagnet.onMouseMove}
                onMouseLeave={checkoutMagnet.onMouseLeave}
                style={checkoutMagnet.style}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
                className="group relative w-full rounded-[6px]"
              >
                {/* CSS group-hover, not whileHover — this glow sits under the
                    anchor and is pointer-events-none, so it can never receive
                    its own hover events; it has to react to the wrapper's
                    hover state instead. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[6px] pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(140px circle at 50% 0%, rgba(255,255,255,0.4), transparent 70%)" }}
                />
                <a href={checkoutUrl(entry.productId)} className="bg-[#3b82f6] rounded-[6px] shrink-0 w-full block no-underline relative">
                  <div className="flex items-center justify-center gap-[8px] py-[13px]">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Start Challenge</p>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </a>
              </motion.div>
              <p className="flex items-center justify-center gap-[6px] font-['Inter:Regular',sans-serif] font-normal text-[#5f6478] text-[12px]">
                <PanelIcon kind="shield" /> Secure checkout · Instant access
              </p>
            </PanelCard>

            {/* Key Rules — tablet/desktop only (>=640px); merged into the mobile chip switcher below */}
            <PanelCard className="hidden sm:flex">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-[8px]"><PanelIcon kind="shield-check" /><p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#eef0f6] text-[14px]">Key Rules</p></span>
                <span className="text-[#5f6478]"><PanelIcon kind="info" /></span>
              </div>
              <KeyRulesRows stats={stats} />
              <p className="flex items-center gap-[6px] font-['Inter:Regular',sans-serif] font-normal text-[#5f6478] text-[12px] mt-[4px]">
                <PanelIcon kind="shield-check" /> Designed for consistency. Built for growth.
              </p>
            </PanelCard>

            {/* Why traders choose this — tablet/desktop only (>=640px); merged into the mobile chip switcher below */}
            <PanelCard className="hidden sm:flex">
              <div className="flex items-center gap-[8px]">
                <PanelIcon kind="star" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#eef0f6] text-[14px]">Why traders choose this</p>
              </div>
              <WhyChoiceBullets bullets={traderChoiceBullets} />
            </PanelCard>

            {/* Key Rules / Why traders choose this — mobile only (<640px), merged behind a chip switcher */}
            <PanelCard className="flex sm:hidden">
              <div className="flex rounded-[10px]" role="group" aria-label="Show Key Rules or Why traders choose this" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                {MOBILE_PANEL_TABS.map((opt, i, arr) => {
                  const active = opt.id === mobilePanelTab;
                  const prevActive = i > 0 && arr[i - 1].id === mobilePanelTab;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setMobilePanelTab(opt.id)}
                      aria-pressed={active}
                      className="relative flex-1 flex items-center justify-center py-[12px] px-[8px] cursor-pointer rounded-[10px] text-center transition-transform duration-200 active:scale-[0.97]"
                      style={{
                        ...(i > 0 && !active && !prevActive ? { borderLeft: "1px solid rgba(255,255,255,0.1)" } : {}),
                      }}
                    >
                      {active && (
                        <motion.div
                          layoutId="pricing-mobile-tab-pill"
                          className="absolute inset-0 rounded-[10px]"
                          style={{ background: "rgba(59,130,246,0.1)", border: "1px solid #3b82f6", boxShadow: "0 0 10px rgba(59,130,246,0.55)" }}
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative z-[1] font-['Inter:Medium',sans-serif] font-medium text-[14px]" style={{ color: active ? "#eef0f6" : "#9da2b4" }}>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
              <AnimatePresence mode="wait">
                {mobilePanelTab === "rules" ? (
                  <motion.div
                    key="rules"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-[16px]"
                  >
                    <KeyRulesRows stats={stats} />
                    <p className="flex items-center gap-[6px] font-['Inter:Regular',sans-serif] font-normal text-[#5f6478] text-[12px] mt-[4px]">
                      <PanelIcon kind="shield-check" /> Designed for consistency. Built for growth.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="why"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <WhyChoiceBullets bullets={traderChoiceBullets} />
                  </motion.div>
                )}
              </AnimatePresence>
            </PanelCard>
          </div>
        </div>
      </div>
      <VideoLightbox source={showExplainerVideo ? pricingExplainerVideoSource() : null} onClose={closeExplainerVideo} />
    </div>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

const HOW_IT_WORKS_STEPS = [
  { n: 1, label: "Choose", desc: "Select the evaluation and account size that fits your trading style.", icon: "person" },
  { n: 2, label: "Trade", desc: "Reach the target while respecting clear, transparent account rules.", icon: "candles" },
  { n: 3, label: "Get Funded", desc: "Complete verification and receive your funded trading account.", icon: "shield-check" },
  { n: 4, label: "Reward", desc: "Request your reward from the dashboard and track its status.", icon: "gift" },
] as const;

function HowItWorksIcon({ kind }: { kind: (typeof HOW_IT_WORKS_STEPS)[number]["icon"] }) {
  const common = { width: 22, height: 22, viewBox: "0 0 22 22", fill: "none" } as const;
  const s = "#60a5fa";
  if (kind === "person") return <svg {...common}><circle cx="11" cy="7.5" r="3.2" stroke={s} strokeWidth="1.4" /><path d="M4 18c0-3 3-5.2 7-5.2s7 2.2 7 5.2" stroke={s} strokeWidth="1.4" strokeLinecap="round" /></svg>;
  if (kind === "candles") return <svg {...common}><path d="M7 4v3M7 11v7M15 4v9M15 17v1" stroke={s} strokeWidth="1.4" strokeLinecap="round" /><rect x="5" y="7" width="4" height="4" rx="0.5" stroke={s} strokeWidth="1.4" /><rect x="13" y="9" width="4" height="8" rx="0.5" stroke={s} strokeWidth="1.4" /></svg>;
  if (kind === "shield-check") return <svg {...common}><path d="M11 3l7 2.5v5.5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5.5L11 3Z" stroke={s} strokeWidth="1.4" strokeLinejoin="round" /><path d="M7.5 11l2.3 2.3L14.5 8.5" stroke={s} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg {...common}><rect x="4" y="9" width="14" height="9" rx="1" stroke={s} strokeWidth="1.4" /><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H10v4H4.5A1.5 1.5 0 0 1 3 7.5v-1Z" stroke={s} strokeWidth="1.4" strokeLinejoin="round" /><path d="M19 6.5A1.5 1.5 0 0 0 17.5 5H12v4h5.5A1.5 1.5 0 0 0 19 7.5v-1Z" stroke={s} strokeWidth="1.4" strokeLinejoin="round" /><path d="M11 5v13" stroke={s} strokeWidth="1.4" /></svg>;
}

function HowItWorksHeading({ size, subtextSize }: { size: string; subtextSize: string }) {
  return (
    <div className="flex flex-col gap-[12px] items-center text-center">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#60a5fa] text-[12px] tracking-[2.64px]">[ PROCESS ]</p>
      <h2 className={`font-['DM_Sans',sans-serif] font-medium text-[#eef0f6] ${size} leading-[1.1] tracking-[-0.02em]`}>How It Works</h2>
      <p className={`font-['Inter:Regular',sans-serif] font-normal text-[#9da2b4] ${subtextSize} max-w-[520px]`}>From choosing your account to receiving your reward, every step is clear.</p>
    </div>
  );
}

function HowItWorksCta() {
  return (
    <a
      href="#challenge"
      className="flex items-center gap-[10px] px-[32px] py-[16px] rounded-[999px] shrink-0 no-underline"
      style={PILL_CTA_GRADIENT_STYLE}
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white whitespace-nowrap">Explore the FYT process</p>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </a>
  );
}

// Small format-string helpers shared between each animated useMotionTemplate
// call below and its reduceMotion static-fallback counterpart, so the two
// don't hand-retype the same CSS format in two places.
const ringBorderCss = (alpha: number) => `1px solid rgba(${HOW_IT_WORKS_RING_RGB},${alpha})`;
const ringGlowCss = (alpha: number) => `0 0 10px rgba(${HOW_IT_WORKS_RING_RGB},${alpha})`;
const dotBgCss = (alpha: number) => `rgba(${HOW_IT_WORKS_DOT_RGB},${alpha})`;
const dotGlowCss = (alpha: number) => `0 0 6px rgba(255,255,255,${alpha})`;
const numberColorCss = (alpha: number) => `rgba(${HOW_IT_WORKS_NUMBER_RGB},${alpha})`;

// Wraps one step's ring/dot/number/label/description/icon so their
// color/glow/opacity track scroll progress through the pinned wrapper in
// HowItWorks() — see src/app/howItWorksReveal.ts for what `reveal` and the
// dim/peak targets mean. When the user prefers reduced motion, every
// property renders at its peak (fully bright) styling immediately — no
// scroll-driven animation.
function HowItWorksStepReveal({
  step,
  reveal,
  progress,
  reduceMotion,
}: {
  step: (typeof HOW_IT_WORKS_STEPS)[number];
  reveal: StepReveal;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const ringBorderAlpha = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_RING_BORDER_ALPHA.dim, HOW_IT_WORKS_RING_BORDER_ALPHA.peak]);
  const ringGlowAlpha = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_RING_GLOW_ALPHA.dim, HOW_IT_WORKS_RING_GLOW_ALPHA.peak]);
  const dotBgAlpha = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_DOT_BG_ALPHA.dim, HOW_IT_WORKS_DOT_BG_ALPHA.peak]);
  const dotGlowAlpha = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_DOT_GLOW_ALPHA.dim, HOW_IT_WORKS_DOT_GLOW_ALPHA.peak]);
  const numberAlpha = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_NUMBER_ALPHA.dim, HOW_IT_WORKS_NUMBER_ALPHA.peak]);
  const iconBorderAlpha = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_ICON_BORDER_ALPHA.dim, HOW_IT_WORKS_ICON_BORDER_ALPHA.peak]);
  const iconGlyphOpacity = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_ICON_GLYPH_OPACITY.dim, HOW_IT_WORKS_ICON_GLYPH_OPACITY.peak]);
  const labelColor = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_LABEL_DIM_HEX, HOW_IT_WORKS_LABEL_PEAK_HEX]);
  const descColor = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [HOW_IT_WORKS_DESC_DIM_HEX, HOW_IT_WORKS_DESC_PEAK_HEX]);

  const ringBorder = useMotionTemplate`1px solid rgba(${HOW_IT_WORKS_RING_RGB},${ringBorderAlpha})`;
  const ringGlow = useMotionTemplate`0 0 10px rgba(${HOW_IT_WORKS_RING_RGB},${ringGlowAlpha})`;
  const dotBackground = useMotionTemplate`rgba(${HOW_IT_WORKS_DOT_RGB},${dotBgAlpha})`;
  const dotGlow = useMotionTemplate`0 0 6px rgba(255,255,255,${dotGlowAlpha})`;
  const numberColor = useMotionTemplate`rgba(${HOW_IT_WORKS_NUMBER_RGB},${numberAlpha})`;
  const iconBorder = useMotionTemplate`1px solid rgba(${HOW_IT_WORKS_RING_RGB},${iconBorderAlpha})`;

  const ringStyle = reduceMotion
    ? { border: ringBorderCss(HOW_IT_WORKS_RING_BORDER_ALPHA.peak), boxShadow: ringGlowCss(HOW_IT_WORKS_RING_GLOW_ALPHA.peak) }
    : { border: ringBorder, boxShadow: ringGlow };
  const dotStyle = reduceMotion
    ? { background: dotBgCss(HOW_IT_WORKS_DOT_BG_ALPHA.peak), boxShadow: dotGlowCss(HOW_IT_WORKS_DOT_GLOW_ALPHA.peak) }
    : { background: dotBackground, boxShadow: dotGlow };
  const numberStyle = reduceMotion ? { color: numberColorCss(HOW_IT_WORKS_NUMBER_ALPHA.peak) } : { color: numberColor };
  const iconCircleStyle = reduceMotion
    ? { border: ringBorderCss(HOW_IT_WORKS_ICON_BORDER_ALPHA.peak) }
    : { border: iconBorder };
  const labelStyle = reduceMotion ? { color: HOW_IT_WORKS_LABEL_PEAK_HEX } : { color: labelColor };
  const descStyle = reduceMotion ? { color: HOW_IT_WORKS_DESC_PEAK_HEX } : { color: descColor };

  return (
    <div className="flex flex-col items-center gap-[10px] text-center">
      <motion.div className="flex items-center justify-center rounded-full size-[36px] shrink-0" style={ringStyle}>
        <motion.div className="rounded-full size-[10px]" style={dotStyle} />
      </motion.div>
      <motion.p className="font-['DM_Sans',sans-serif] font-medium text-[13px]" style={numberStyle}>
        {String(step.n).padStart(2, "0")}
      </motion.p>
      <motion.p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[22px]" style={labelStyle}>
        {step.label}
      </motion.p>
      <motion.div className="flex items-center justify-center rounded-full size-[56px] shrink-0 mt-[6px]" style={iconCircleStyle}>
        <motion.div style={reduceMotion ? { opacity: HOW_IT_WORKS_ICON_GLYPH_OPACITY.peak } : { opacity: iconGlyphOpacity }}>
          <HowItWorksIcon kind={step.icon} />
        </motion.div>
      </motion.div>
      <motion.p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[1.5] mt-[6px]" style={descStyle}>
        {step.desc}
      </motion.p>
    </div>
  );
}

function HowItWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });
  const reduceMotion = useReducedMotion();
  const lineScale = useTransform(scrollYProgress, [HOW_IT_WORKS_LINE_REVEAL.fadeStart, HOW_IT_WORKS_LINE_REVEAL.fadeEnd], [0, 1]);

  return (
    <div id="how-it-works" className="bg-[#070810] relative shrink-0 w-full">
      <div className="flex flex-col gap-[40px] lg:gap-[56px] items-center px-[20px] py-[56px] lg:px-[80px] lg:py-[96px] w-full max-w-[1280px] mx-auto">
        {/* Desktop: pinned scroll-reveal, same technique as ProveYourSkill
            (see proveSkillReveal.ts / howItWorksReveal.ts) — the wrapper
            below is tall (HOW_IT_WORKS_SCROLL_HEIGHT_VH) purely to give
            scroll distance for the reveal to play out against; its sticky
            inner child pins in place while that distance scrolls past, then
            releases into normal flow once the wrapper ends. */}
        <div ref={scrollRef} className="hidden lg:block relative w-full" style={{ height: `${HOW_IT_WORKS_SCROLL_HEIGHT_VH}vh` }}>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-[56px]">
            <HowItWorksHeading size="text-[44px]" subtextSize="text-[16px]" />
            <div className="relative w-full">
              <div className="absolute top-[18px] left-[6%] right-[6%] h-px" aria-hidden>
                <motion.div
                  className="h-full w-full origin-left"
                  style={{
                    scaleX: reduceMotion ? 1 : lineScale,
                    background: `rgba(${HOW_IT_WORKS_RING_RGB},1)`,
                    boxShadow: HOW_IT_WORKS_LINE_GLOW,
                  }}
                />
              </div>
              <div className="grid grid-cols-4 gap-[24px] w-full relative">
                {HOW_IT_WORKS_STEPS.map((s, i) => (
                  <HowItWorksStepReveal key={s.label} step={s} reveal={HOW_IT_WORKS_STEP_REVEALS[i]} progress={scrollYProgress} reduceMotion={reduceMotion} />
                ))}
              </div>
            </div>
            <HowItWorksCta />
          </div>
        </div>

        {/* Mobile stacked layout — unchanged, static, no scroll-reveal */}
        <div className="flex lg:hidden flex-col gap-[40px] items-center w-full">
          <HowItWorksHeading size="text-[28px]" subtextSize="text-[14px]" />
          <div className="grid grid-cols-2 gap-[32px] w-full">
            {HOW_IT_WORKS_STEPS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-[10px] text-center">
                <p className="font-['DM_Sans',sans-serif] font-medium text-[#60a5fa] text-[13px]">{String(s.n).padStart(2, "0")}</p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#eef0f6] text-[20px]">{s.label}</p>
                <div className="flex items-center justify-center rounded-full size-[56px] shrink-0 mt-[6px]" style={{ border: "1px solid rgba(59,130,246,0.4)" }}>
                  <HowItWorksIcon kind={s.icon} />
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8a90a3] text-[13px] leading-[1.5] mt-[6px]">{s.desc}</p>
              </div>
            ))}
          </div>
          <HowItWorksCta />
        </div>
      </div>
    </div>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function TrustIndexBadge({ rating }: { rating: number }) {
  return (
    <div className="flex flex-wrap gap-[6px] items-center">
      <span className="flex items-center justify-center shrink-0" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1.5l5.5 2v4c0 3.5-2.3 6.2-5.5 7-3.2-.8-5.5-3.5-5.5-7v-4l5.5-2Z" stroke="#1e3a8a" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M5.5 8l1.8 1.8L10.8 6" stroke="#1e3a8a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1f2430] text-[12px] whitespace-nowrap">Trust Index</span>
      <span className="flex gap-[2px] items-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} width="11" height="11" viewBox="0 0 16 16" fill="none">
            <rect width="16" height="16" rx="3" fill={i < rating ? "#16A34A" : "#D1D5DB"} />
            {i < rating && <path d="M8 3.2l1.4 2.9 3.2.5-2.3 2.2.5 3.2L8 10.5l-2.8 1.5.5-3.2-2.3-2.2 3.2-.5L8 3.2Z" fill="#fff" />}
          </svg>
        ))}
      </span>
      <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5f6478] text-[12px]">{rating}/5</span>
    </div>
  );
}

function ReviewCard({ initials, name, color, rating, title, quote }: { initials: string; name: string; color: string; rating: number; title: string; quote: string }) {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[16px]" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="content-stretch flex flex-col items-start justify-between gap-[16px] pb-[28px] pt-[28px] px-[28px] relative size-full">
        <TrustIndexBadge rating={rating} />
        <div className="flex flex-col gap-[8px]">
          <p className="font-['DM_Sans',sans-serif] font-medium text-[#0b0c11] text-[17px] leading-[1.3]">{title}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] text-[#5f6478] text-[14px]">{quote}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="bg-[rgba(0,0,0,0.06)] h-px relative shrink-0 w-full" />
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[20px] shrink-0 size-[40px]" style={{ background: color }}>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">{initials}</p>
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0b0c11] text-[14px]">{name}</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#8a90a3] text-[12px]">Funded Trader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ src, name, onPlay }: { src: string; name: string; onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play video testimonial from ${name}`}
      className="content-stretch flex flex-none lg:flex-[1_0_0] flex-col w-full h-[220px] lg:h-auto items-center justify-center min-w-px overflow-clip relative rounded-[16px] border-0 p-0 bg-transparent cursor-pointer text-left"
    >
      <img alt={`${name} — FYT trader video testimonial`} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={src} loading="lazy" />
      <div className="bg-[rgba(59,130,246,0.85)] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px] pointer-events-none">
        <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.27)] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="relative ml-[3px]">
          <path d="M1 1.5L17 10L1 18.5V1.5Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[4px] items-start px-[12px] py-[8px] rounded-[8px] pointer-events-none" style={{ background: "rgba(0,0,0,0.55)" }}>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white whitespace-nowrap">{name}</p>
      </div>
    </button>
  );
}

// Near-fullscreen (80vw x 80vh) video overlay shared by the testimonial video
// cards and the Pricing "See how it works" trigger. Portals to document.body
// so it always paints above every section regardless of ancestor stacking
// contexts, and unmounts its <video>/<iframe> entirely on close so playback
// actually stops rather than just being hidden.
function VideoLightbox({ source, onClose }: { source: VideoSource | null; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Tracks whether the mousedown that started the current click interaction
  // landed directly on the backdrop (not inside the panel). A browser `click`
  // event resolves its target to the nearest common ancestor of the mousedown
  // and mouseup targets, so a drag that starts inside the panel (e.g. on the
  // video seek bar) and releases outside the panel over the backdrop would
  // otherwise look identical to a genuine backdrop click by the time onClick
  // fires — checking e.target === e.currentTarget alone can't tell them apart.
  const mouseDownOnBackdropRef = useRef(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setVideoError(false);
  }, [source]);

  useEffect(() => {
    if (!source) return;
    const previouslyFocusedElement = document.activeElement;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      (previouslyFocusedElement as HTMLElement | null)?.focus?.();
    };
  }, [source, onClose]);

  if (!source) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={source.title}
      onMouseDown={(e) => {
        mouseDownOnBackdropRef.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (mouseDownOnBackdropRef.current && e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.85)" }}
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-[80vw] h-[80vh] rounded-[16px] overflow-hidden bg-black">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-[12px] right-[12px] z-10 flex items-center justify-center rounded-full size-[40px] cursor-pointer border-0"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1l14 14M15 1L1 15" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        {source.kind === "mp4" ? (
          <>
            <video
              key={source.src}
              src={source.src}
              poster={source.poster}
              controls
              autoPlay
              onError={() => setVideoError(true)}
              className="size-full object-contain"
            />
            {videoError && (
              <div
                className="absolute inset-0 flex items-center justify-center text-white text-[14px]"
                style={{ background: "rgba(0,0,0,0.6)" }}
              >
                Video unavailable
              </div>
            )}
          </>
        ) : (
          <iframe
            key={source.videoId}
            src={buildYouTubeEmbedUrl(source.videoId)}
            title={source.title}
            className="size-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>,
    document.body,
  );
}

function TestimonialSlide({ item, onPlayVideo }: { item: TestimonialSlideItem; onPlayVideo: (video: TestimonialVideo) => void }) {
  if (item.kind === "review") {
    const r = item.review;
    return <ReviewCard initials={r.initials} name={r.name} color={r.color} rating={r.rating} title={r.title} quote={r.quote} />;
  }
  return <VideoCard src={item.video.posterUrl} name={item.video.name} onPlay={() => onPlayVideo(item.video)} />;
}

function TestimonialsDesktopCarousel({ onPlayVideo }: { onPlayVideo: (video: TestimonialVideo) => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="hidden lg:flex items-center gap-[12px] w-full">
        <button
          type="button"
          aria-label="Previous testimonials"
          onClick={() => emblaApi?.scrollPrev()}
          className="flex items-center justify-center rounded-full size-[40px] shrink-0 cursor-pointer bg-white"
          style={{ border: "1px solid rgba(0,0,0,0.1)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="flex-1 overflow-hidden" ref={emblaRef} role="region" aria-roledescription="carousel" aria-label="Trader testimonials">
          <div className="flex">
            {TESTIMONIAL_PAGES.map((page, i) => (
              <div key={i} role="group" aria-roledescription="slide" className="flex-shrink-0 basis-full flex flex-col gap-[16px] pr-[16px]">
                <div className="content-stretch flex flex-row gap-[16px] min-h-[300px] items-stretch relative w-full">
                  {page.topRow.map((item, j) => (
                    <TestimonialSlide key={j} item={item} onPlayVideo={onPlayVideo} />
                  ))}
                </div>
                <div className="content-stretch flex flex-row gap-[16px] min-h-[300px] items-stretch relative w-full">
                  {page.bottomRow.map((item, j) => (
                    <TestimonialSlide key={j} item={item} onPlayVideo={onPlayVideo} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label="Next testimonials"
          onClick={() => emblaApi?.scrollNext()}
          className="flex items-center justify-center rounded-full size-[40px] shrink-0 cursor-pointer bg-white"
          style={{ border: "1px solid rgba(0,0,0,0.1)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <div className="hidden lg:flex gap-[8px] items-center">
        {TESTIMONIAL_PAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonials page ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className="rounded-full size-[8px] cursor-pointer"
            style={{ background: i === selectedIndex ? "#3b82f6" : "rgba(0,0,0,0.16)" }}
          />
        ))}
      </div>
    </>
  );
}

function TestimonialsMobileCarousel({ onPlayVideo }: { onPlayVideo: (video: TestimonialVideo) => void }) {
  const prefersReducedMotion = useReducedMotion();
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, buildAutoplayPlugins(prefersReducedMotion));
  return (
    <div className="lg:hidden w-full overflow-hidden" ref={emblaRef} role="region" aria-roledescription="carousel" aria-label="Trader testimonials">
      <div className="flex">
        {TESTIMONIAL_FLAT_ITEMS.map((item, i) => (
          <div key={i} role="group" aria-roledescription="slide" className="flex-shrink-0 basis-full px-[2px]">
            <TestimonialSlide item={item} onPlayVideo={onPlayVideo} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<TestimonialVideo | null>(null);
  const closeVideoLightbox = useCallback(() => setActiveVideo(null), []);
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] lg:gap-[64px] items-center px-[20px] py-[48px] lg:px-[88px] lg:py-[140px] relative size-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
            <h2 className="font-['DM_Sans',sans-serif] font-medium leading-[1.1] text-[#0b0c11] text-[32px] lg:text-[52px] text-center tracking-[-0.936px] w-full lg:w-[700px]">Trusted by 19,000+ funded traders worldwide.</h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] text-[#6b7280] text-[15px] lg:text-[18px] text-center w-full lg:w-[560px]">Real experiences, verified rewards and transparent feedback from our traders.</p>
          </div>
          <TestimonialsDesktopCarousel onPlayVideo={setActiveVideo} />
          <TestimonialsMobileCarousel onPlayVideo={setActiveVideo} />
          {/* Spec CTA */}
          <a href="#challenge" className="bg-[#3b82f6] flex items-center justify-center px-[32px] py-[14px] rounded-[8px] shrink-0 no-underline">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] leading-[19px] text-white whitespace-nowrap">Join 14,000+ Traders</p>
          </a>
        </div>
      </div>
      <VideoLightbox source={activeVideo ? testimonialVideoSource(activeVideo) : null} onClose={closeVideoLightbox} />
    </div>
  );
}

// ─── COMPARISON TABLE ─────────────────────────────────────────────────────────

const COMPARISON_ROWS = [
  { criteria: "Rewards", fyt: "Weekly Rewards", others: "Bi-Weekly Rewards" },
  { criteria: "Drawdown Type", fyt: "Static drawdown", others: "Relative drawdown" },
  { criteria: "Daily Drawdown", fyt: "Balance based daily drawdown", others: "Equity based daily drawdown" },
  { criteria: "Conditions", fyt: "Transparent conditions", others: "Hidden conditions" },
  { criteria: "Time Limit", fyt: "No Time Limits", others: "Time Limits" },
  { criteria: "Reward Split", fyt: "100% Split", others: "80% Split" },
  { criteria: "Refund", fyt: "200% Refund", others: "100% Refund" },
  { criteria: "Bonus", fyt: "18% Bonus", others: "10% Bonus" },
  { criteria: "Consistency Rule", fyt: "No consistency rule", others: "consistency rule" },
  { criteria: "Weekend Holding", fyt: "Weekend/Overnight holdings", others: "No Weekend holdings" },
  { criteria: "News Trading", fyt: "News Trading", others: "News trading restrictions" },
] as const;

function DifferenceHeadingText({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.p
      className="font-['DM_Sans',sans-serif] font-normal text-[#0b0c11] text-[36px] lg:text-[64px] text-center tracking-[-0.02em] lg:mb-[16px]"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true }}
      variants={reduceMotion ? undefined : DIFFERENCE_HEADING_PARENT_VARIANTS}
    >
      {DIFFERENCE_HEADING_WORDS.map((word, i) => (
        <Fragment key={i}>
          <motion.span
            style={{ display: "inline-block" }}
            variants={reduceMotion ? undefined : DIFFERENCE_HEADING_WORD_VARIANTS}
          >
            {word}
          </motion.span>
          {i < DIFFERENCE_HEADING_WORDS.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </motion.p>
  );
}

function DifferenceAdvantageBlock() {
  return (
    <div className="flex flex-col gap-[12px] items-center text-center">
      <span className="px-[16px] py-[6px] rounded-full text-[#3b82f6] text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold tracking-[1.5px] uppercase" style={{ background: "rgba(59,130,246,0.08)" }}>
        The FYT Advantage
      </span>
      <h2 className="font-['DM_Sans',sans-serif] font-medium text-[#0b0c11] text-[28px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
        Built for Traders. Backed by Transparency.
      </h2>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#6b7280] text-[14px] lg:text-[16px] max-w-[560px]">
        See how Funding Your Trades provides more value, more freedom, and more opportunities to grow.
      </p>
    </div>
  );
}

function DifferenceComparisonGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full">
      <div className="rounded-[20px] p-[24px] lg:p-[32px] relative overflow-hidden" style={{ border: "2px solid #3b82f6", background: "linear-gradient(180deg, rgba(59,130,246,0.04) 0%, rgba(255,255,255,1) 100%)" }}>
        <div className="absolute top-0 right-[20px] w-[28px] h-[36px] flex items-start justify-center pt-[6px]" style={{ background: "#3b82f6", clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1.8l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 6.1l4-.6L8 1.8Z" fill="white" /></svg>
        </div>
        <div className="flex items-center gap-[10px] mb-[16px]">
          <div className="flex items-center justify-center rounded-[8px] shrink-0" style={{ width: 32, height: 28, background: "#0b0c11" }}>
            <img src={imgImg10782} alt="" className="h-[20px] w-auto" />
          </div>
          <p className="font-['DM_Sans',sans-serif] font-medium text-[#0b0c11] text-[20px]">Funding Your Trades</p>
        </div>
        {COMPARISON_ROWS.map((row) => (
          <div key={row.fyt} className="flex items-center gap-[10px] py-[10px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <span className="flex items-center justify-center rounded-full size-[20px] shrink-0" style={{ background: "#3b82f6" }}>
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#1f2430] text-[14px] lg:text-[15px]">{row.fyt}</p>
          </div>
        ))}
      </div>
      <div className="rounded-[20px] p-[24px] lg:p-[32px]" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="flex items-center gap-[10px] mb-[16px]">
          <span className="flex items-center justify-center rounded-full size-[28px]" style={{ background: "rgba(0,0,0,0.06)" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="6" r="2" stroke="#6b7280" strokeWidth="1.2" /><circle cx="10.5" cy="7" r="1.6" stroke="#6b7280" strokeWidth="1.1" /><path d="M2.5 12.5c0-1.8 1.5-3 3.5-3s3.5 1.2 3.5 3" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" /><path d="M9.8 9.6c1.2.2 2.2 1.1 2.2 2.4" stroke="#6b7280" strokeWidth="1.1" strokeLinecap="round" /></svg>
          </span>
          <p className="font-['DM_Sans',sans-serif] font-medium text-[#6b7280] text-[20px]">Others</p>
        </div>
        {COMPARISON_ROWS.map((row) => (
          <div key={row.others} className="flex items-center gap-[10px] py-[10px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <span className="flex items-center justify-center rounded-full size-[20px] shrink-0" style={{ background: "rgba(0,0,0,0.25)" }}>
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#6b7280] text-[14px] lg:text-[15px]">{row.others}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Mobile-only 3-column comparison table (Criteria | FYT | Others), replacing
// the old stacked-cards layout below lg: on narrow screens a user had to
// scroll past all 11 FYT rows before reaching the Others card below it, with
// no shared row alignment to compare against. This renders every criterion
// on one row across three columns instead. Self-scoped via its own root
// `lg:hidden` (rather than being wrapped by the caller) so it's safe to
// mount unconditionally — it simply renders nothing visible at lg+, where
// DifferenceComparisonGrid's existing two-card layout takes over instead.
// table-fixed + <colgroup> percentage widths keep every column a fixed
// width regardless of content length, so long values (e.g. "Balance based
// daily drawdown") wrap onto multiple lines within their cell instead of
// forcing the table wider than the viewport.
function DifferenceComparisonTableMobile() {
  return (
    <div className="lg:hidden w-full rounded-[16px] overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
      <table className="w-full border-collapse table-fixed" aria-label="FYT compared with other prop firms">
        <colgroup>
          <col className="w-[26%]" />
          <col className="w-[37%]" />
          <col className="w-[37%]" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className="text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#6b7280] text-[10px] tracking-[0.5px] uppercase px-[8px] py-[7px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Criteria</th>
            <th scope="col" className="text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#3b82f6] text-[11px] px-[8px] py-[7px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", background: "rgba(59,130,246,0.05)" }}>FYT</th>
            <th scope="col" className="text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#6b7280] text-[11px] px-[8px] py-[7px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>Others</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row) => (
            <tr key={row.criteria}>
              <th
                scope="row"
                className="text-left align-top break-words font-['Inter:Medium',sans-serif] font-medium text-[#1f2430] text-[11px] leading-[1.4] px-[8px] py-[7px]"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
              >
                {row.criteria}
              </th>
              <td
                className="align-top break-words font-['Inter:Medium',sans-serif] font-medium text-[#0b0c11] text-[11px] leading-[1.4] px-[8px] py-[7px]"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(59,130,246,0.05)" }}
              >
                {row.fyt}
              </td>
              <td
                className="align-top break-words font-['Inter:Regular',sans-serif] font-normal text-[#6b7280] text-[11px] leading-[1.4] px-[8px] py-[7px]"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
              >
                {row.others}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DifferenceTrustBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-[16px] items-center">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#4b5563] text-[13px] flex items-center gap-[8px]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1.5l5.5 2v4c0 3.5-2.3 6.2-5.5 7-3.2-.8-5.5-3.5-5.5-7v-4l5.5-2Z" stroke="#3b82f6" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        </svg>
        Trusted by thousands of traders worldwide
      </p>
      <span className="hidden sm:block w-px h-[16px]" style={{ background: "rgba(0,0,0,0.12)" }} />
      <div className="flex items-center gap-[8px]">
        <span className="flex gap-[2px]">
          {[0, 1, 2, 3].map((i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#3b82f6"><path d="M8 1.8l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 6.1l4-.6L8 1.8Z" /></svg>
          ))}
          <svg width="14" height="14" viewBox="0 0 16 16"><defs><linearGradient id="comparison-trustpilot-halfstar"><stop offset="50%" stopColor="#3b82f6" /><stop offset="50%" stopColor="#d1d5db" /></linearGradient></defs><path fill="url(#comparison-trustpilot-halfstar)" d="M8 1.8l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 6.1l4-.6L8 1.8Z" /></svg>
        </span>
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#4b5563] text-[13px]">4.9/5 Trustpilot Rating</p>
      </div>
    </div>
  );
}

// Wraps a piece of the pinned "difference" crossfade so its x (position)
// tracks scroll progress through the pinned wrapper in
// DifferencePinnedCrossfade and DifferenceMobilePinnedCrossfade, its two
// current owners.
// Opacity is not touched here at all (see the comment on
// DifferenceCrossfadeReveal in differenceReveal.ts for why); hide/reveal is
// done purely by sliding elements outside the section's clipped
// (overflow-hidden) bounding box — see src/app/differenceReveal.ts for what
// `reveal` means. When the user prefers reduced motion, ComparisonTable
// never renders this component at all (see the reduceMotion branch below) —
// reduced-motion users get a plain static stacked layout instead, since this
// component's whole job is animating two elements that share the same
// screen position, which would otherwise show both at once with no
// crossfade.
function DifferenceScrollLayer({
  progress,
  reveal,
  className,
  children,
}: {
  progress: MotionValue<number>;
  reveal: DifferenceCrossfadeReveal;
  className: string;
  children: ReactNode;
}) {
  const x = useTransform(progress, [reveal.fadeStart, reveal.fadeEnd], [reveal.xFrom, reveal.xTo]);
  return (
    <motion.div className={className} style={{ x }}>
      {children}
    </motion.div>
  );
}

// Owns the pinned heading-exit/content-enter crossfade for ComparisonTable's
// desktop "difference is clear" section. Pulled out into its own component
// (rather than living inline in ComparisonTable) so that useScroll()'s
// target ref is only ever created — and only ever used — inside a component
// that ComparisonTable mounts exclusively when the pinned JSX is actually
// rendered (see the `{!reduceMotion && <DifferencePinnedCrossfade .../>}`
// call below). Previously, scrollRef/useScroll lived directly in
// ComparisonTable and ran on every render regardless of reduceMotion, while
// the ref was only ever attached to a DOM node inside a `!reduceMotion`
// branch — so whenever reduceMotion was true, scrollRef.current stayed null
// forever and useScroll threw a dev-mode-only invariant error.
function DifferencePinnedCrossfade({ reduceMotion }: { reduceMotion: boolean | null }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });

  return (
    // Pinned heading-exit / content-enter crossfade, modeled on
    // sadewa.framer.website's "The difference is clear" section — see
    // differenceReveal.ts for the timing/derivation notes. The wrapper
    // below is tall (DIFFERENCE_PIN_SCROLL_HEIGHT_VH) purely to give scroll
    // distance for the crossfade to play out against; its sticky inner
    // child pins in place while that distance scrolls past, then releases
    // into normal flow once the wrapper ends. The heading sits absolutely
    // positioned over the content block (badge + heading + subcopy + grid +
    // trust bar), which sizes the shared container via normal document
    // flow — the heading slides away to reveal the content beneath as
    // scroll progresses, rather than the two being stacked in a separately-
    // sized box.
    //
    // Gated on width only (`lg:`) — DifferenceMobilePinnedCrossfade below is
    // its mobile counterpart, using the same technique via its own scroll
    // target. An earlier attempt also gated on viewport
    // HEIGHT (min-height: 900px) to avoid clipping the ~857px-tall content
    // block against the sticky container's available height (~804px at
    // 1440x900) — but that threshold is essentially unreachable in real
    // browsers (browser chrome alone typically eats 80-150px of a device's
    // physical screen height, so very few real windows ever expose 900px of
    // actual page viewport), which meant the pinned/animated version almost
    // never rendered at all — every real user saw only the static fallback,
    // with no animation whatsoever. Reverted to width-only gating so the
    // animation actually plays for real users; the ~53px bottom-of-content
    // clipping this reintroduces on shorter viewports is a separate,
    // smaller problem than "no animation ever runs."
    <div ref={scrollRef} className="hidden lg:block relative w-full" style={{ height: `${DIFFERENCE_PIN_SCROLL_HEIGHT_VH}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <div className="relative w-full overflow-hidden">
          <DifferenceScrollLayer
            className="absolute inset-0 flex items-center justify-center"
            progress={scrollYProgress}
            reveal={DIFFERENCE_HEADING_EXIT_REVEAL}
          >
            <DifferenceHeadingText reduceMotion={reduceMotion} />
          </DifferenceScrollLayer>
          <DifferenceScrollLayer
            className="flex flex-col gap-[36px] lg:gap-[48px] items-center w-full"
            progress={scrollYProgress}
            reveal={DIFFERENCE_CONTENT_ENTER_REVEAL}
          >
            <DifferenceAdvantageBlock />
            <DifferenceComparisonGrid />
            <DifferenceTrustBar />
          </DifferenceScrollLayer>
        </div>
      </div>
    </div>
  );
}

// Mobile counterpart of DifferencePinnedCrossfade above — same
// tall-wrapper-plus-sticky-child, scrollYProgress-driven technique, but with
// its own scroll target/progress since this wrapper occupies normal
// document flow only below the `lg` breakpoint (mirroring how
// ProveYourSkill gives its own mobile pinned reveal an independent scroll
// target rather than sharing the desktop one). Reuses
// DIFFERENCE_PIN_SCROLL_HEIGHT_VH / DIFFERENCE_HEADING_EXIT_REVEAL /
// DIFFERENCE_CONTENT_ENTER_REVEAL as-is: the fadeStart/fadeEnd fractions are
// resolution-independent scroll-progress values, and the ±1400px xFrom/xTo
// slide distances already safely exceed any mobile viewport's clip width
// (they were sized to exceed 1120px, the *desktop* clip width — see
// DIFFERENCE_HEADING_EXIT_REVEAL's comment in differenceReveal.ts — so they
// clear mobile's much narrower clip width with even more room to spare).
// The content-enter layer renders DifferenceComparisonTableMobile (the
// 3-column table) instead of DifferenceComparisonGrid, matching what the
// reduced-motion static fallback already shows below `lg`. Uses `100dvh`
// (not `100vh`/`h-screen`) for the sticky panel for the same mobile-chrome
// reason documented on ProveYourSkill's own mobile pinned block.
function DifferenceMobilePinnedCrossfade({ reduceMotion }: { reduceMotion: boolean | null }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });

  return (
    <div ref={scrollRef} className="lg:hidden relative w-full" style={{ height: `${DIFFERENCE_PIN_SCROLL_HEIGHT_VH}vh` }}>
      <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center">
        <div className="relative w-full overflow-hidden">
          <DifferenceScrollLayer
            className="absolute inset-0 flex items-center justify-center"
            progress={scrollYProgress}
            reveal={DIFFERENCE_HEADING_EXIT_REVEAL}
          >
            <DifferenceHeadingText reduceMotion={reduceMotion} />
          </DifferenceScrollLayer>
          <DifferenceScrollLayer
            className="flex flex-col gap-[20px] items-center w-full"
            progress={scrollYProgress}
            reveal={DIFFERENCE_CONTENT_ENTER_REVEAL}
          >
            <DifferenceAdvantageBlock />
            <DifferenceComparisonTableMobile />
            <DifferenceTrustBar />
          </DifferenceScrollLayer>
        </div>
      </div>
    </div>
  );
}

function ComparisonTable() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col gap-[36px] lg:gap-[48px] items-center px-[20px] py-[64px] lg:px-[80px] lg:py-[120px] w-full max-w-[1280px] mx-auto">
        {/* Desktop: pinned heading-exit / content-enter crossfade — see
            DifferencePinnedCrossfade above. Skipped entirely under
            prefers-reduced-motion (this component, and its useScroll()
            call, is never mounted in that case — see the static fallback
            below) since its whole job is animating two elements that share
            the same screen position, which would otherwise show both at
            once with no crossfade. */}
        {!reduceMotion && <DifferencePinnedCrossfade reduceMotion={reduceMotion} />}

        {/* Mobile: the same pinned heading-exit / content-enter crossfade as
            desktop, via its own scroll target/timing — see
            DifferenceMobilePinnedCrossfade above. Also skipped entirely
            under prefers-reduced-motion, for the same reason as desktop. */}
        {!reduceMotion && <DifferenceMobilePinnedCrossfade reduceMotion={reduceMotion} />}

        {/* prefers-reduced-motion, any breakpoint: plain static stacked
            layout, no pin, no crossfade — neither pinned component above
            mounts in this case. The heading still plays its (cheap,
            non-pinned) word-stagger entrance here; it just never exits. */}
        {reduceMotion && (
          <div className="flex flex-col gap-[36px] lg:gap-[48px] items-center w-full">
            <DifferenceHeadingText reduceMotion={reduceMotion} />
            <DifferenceAdvantageBlock />
            {/* This wrapper matters because DifferenceComparisonGrid has no
                lg:-only gate of its own — without it, the grid would render
                at all widths here, alongside DifferenceComparisonTableMobile
                (which self-hides via its own lg:hidden root). Do not remove
                this wrapper as "redundant". */}
            <div className="hidden lg:block w-full">
              <DifferenceComparisonGrid />
            </div>
            <DifferenceComparisonTableMobile />
            <DifferenceTrustBar />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PRODUCT SHOWCASE ─────────────────────────────────────────────────────────

const OVERVIEW_BADGES = [
  { label: "Secure by design", icon: "shield" as const },
  { label: "Real-time updates", icon: "bolt" as const },
  { label: "Built for traders", icon: "trend" as const },
] as const;

function OverviewBadgeIcon({ kind }: { kind: (typeof OVERVIEW_BADGES)[number]["icon"] }) {
  const common = { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", stroke: "#3b82f6" } as const;
  if (kind === "shield") return <svg {...common}><path d="M8 1.5l5.5 2v4c0 3.5-2.3 6.2-5.5 7-3.2-.8-5.5-3.5-5.5-7v-4l5.5-2Z" strokeWidth="1.3" strokeLinejoin="round" /><path d="M5.5 8l1.8 1.8L10.8 6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (kind === "bolt") return <svg {...common}><path d="M9 1.5 3.5 9h4l-1 5.5L12.5 7h-4L9 1.5Z" strokeWidth="1.2" strokeLinejoin="round" /></svg>;
  return <svg {...common}><path d="M2 12.5l4-4.5 3 2.5 5-6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 4h3v3" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const SUPPORT_FEATURES = [
  { label: "Live Chat", icon: "chat" as const },
  { label: "Email Support", icon: "email" as const },
  { label: "Always On", icon: "clock" as const },
  { label: "Expert Help", icon: "star" as const },
] as const;

function SupportFeatureIcon({ kind }: { kind: (typeof SUPPORT_FEATURES)[number]["icon"] }) {
  const common = { width: 15, height: 15, viewBox: "0 0 16 16", fill: "none", stroke: "#ffffff" } as const;
  if (kind === "chat") return <svg {...common}><path d="M2 3.5h12v7H6l-3 2.5v-2.5H2v-7Z" strokeWidth="1.3" strokeLinejoin="round" /></svg>;
  if (kind === "email") return <svg {...common}><rect x="2" y="3.5" width="12" height="9" rx="1.5" strokeWidth="1.3" /><path d="M2.5 4.5L8 9l5.5-4.5" strokeWidth="1.3" strokeLinejoin="round" /></svg>;
  if (kind === "clock") return <svg {...common}><circle cx="8" cy="8" r="6.2" strokeWidth="1.2" /><path d="M8 4.5V8l2.8 1.6" strokeWidth="1.2" strokeLinecap="round" /></svg>;
  return <svg {...common}><path d="M8 1.8l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 6.1l4-.6L8 1.8Z" strokeWidth="1.2" strokeLinejoin="round" /></svg>;
}

function ProductShowcase() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col gap-[48px] lg:gap-[64px] px-[20px] py-[56px] lg:px-[80px] lg:py-[96px] w-full max-w-[1280px] mx-auto">
        {/* Dashboard overview */}
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[56px] items-center">
          <div className="flex-1 flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <span className="text-[#3b82f6] text-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold tracking-[1.5px] uppercase">Overview of FYT</span>
              <span className="w-[32px] h-[2px] rounded-full" style={{ background: "#3b82f6" }} aria-hidden />
            </div>
            <h2 className="font-['DM_Sans',sans-serif] font-medium text-[#0b0c11] text-[26px] lg:text-[36px] leading-[1.2] tracking-[-0.02em]">
              Designed around the way traders actually trade.
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#6b7280] text-[15px] leading-[1.6]">
              A clear dashboard gives you everything needed to monitor accounts, request rewards, and manage your journey.
            </p>
            <div className="flex flex-wrap items-center gap-[16px] mt-[8px]">
              {OVERVIEW_BADGES.flatMap(({ label, icon }, i) => [
                i > 0 ? (
                  <span key={`div-${label}`} className="hidden sm:block w-px h-[16px]" style={{ background: "rgba(0,0,0,0.12)" }} aria-hidden />
                ) : null,
                <span key={label} className="flex items-center gap-[6px] text-[#374151] text-[13px] font-['Inter:Medium',sans-serif] font-medium">
                  <OverviewBadgeIcon kind={icon} />
                  {label}
                </span>,
              ])}
            </div>
          </div>
          <div className="flex-1 w-full">
            <img src={imgDashboardMockup} alt="FYT trader dashboard overview" className="w-full h-auto object-contain" />
          </div>
        </div>
        {/* Trusted Platform + Trusted Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <div className="rounded-[16px] p-[28px] lg:p-[36px]" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
            <p className="font-['DM_Sans',sans-serif] font-medium text-[#0b0c11] text-[22px] mb-[8px]">Trusted Platform</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#6b7280] text-[14px] mb-[76px]">Access your account with the platforms you already know.</p>
            <div className="relative">
              <div className="hidden sm:block absolute left-0 right-0 top-[-76px] h-[76px] pointer-events-none" aria-hidden>
                <svg width="100%" height="100%" viewBox="0 0 100 76" preserveAspectRatio="none" fill="none">
                  <path d="M50 44 V52 H25 V76" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
                  <path d="M50 44 V52 H75 V76" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="absolute left-1/2 -translate-x-1/2 top-[8px] flex items-center justify-center rounded-full bg-white size-[36px]" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M7 3v4M13 3v4M5 7h10v3a5 5 0 0 1-10 0V7Z" stroke="#3b82f6" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M10 16v3" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-[16px] pt-0">
                {[
                  { name: "MatchTrader", logo: imgMatchTraderLogo, logoClassName: "h-[24px] w-auto object-contain" },
                  { name: "Platform 5", logo: imgPlatform5Logo, logoClassName: "h-[36px] w-auto object-contain" },
                ].map(({ name, logo, logoClassName }) => (
                  <div
                    key={name}
                    className="flex-1 flex items-center justify-center gap-[10px] rounded-[12px] py-[14px]"
                    style={SUPPORT_CARD_GRADIENT_STYLE}
                  >
                    <img src={logo} alt="" className={logoClassName} />
                    <p className="font-['DM_Sans',sans-serif] font-medium text-white text-[16px]">{name}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#3b82f6] text-[13px] mt-[8px] flex items-center gap-[6px]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5l5.5 2v4c0 3.5-2.3 6.2-5.5 7-3.2-.8-5.5-3.5-5.5-7v-4l5.5-2Z" stroke="#3b82f6" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
              </svg>
              Secure. Fast. Seamless.
            </p>
          </div>
          <div className="rounded-[16px] p-[28px] lg:p-[36px]" style={SUPPORT_CARD_GRADIENT_STYLE}>
            <div className="flex flex-col xl:flex-row xl:items-center justify-between h-full gap-[12px] xl:gap-[24px]">
              <div className="flex-1 min-w-0">
                <p className="font-['DM_Sans',sans-serif] font-medium text-white text-[22px] mb-[8px]">Trusted Support Team</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[rgba(255,255,255,0.8)] text-[14px] mb-[20px]">Fast, friendly support whenever traders need help.</p>
                <div className="flex flex-wrap gap-[20px]">
                  {SUPPORT_FEATURES.map(({ label, icon }) => (
                    <div key={label} className="flex flex-col items-center gap-[6px] text-center">
                      <span className="flex items-center justify-center rounded-full size-[36px]" style={{ background: "rgba(255,255,255,0.16)" }}>
                        <SupportFeatureIcon kind={icon} />
                      </span>
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[11px]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={HERO_CONTENT.ctaSecondary.href} className="inline-flex items-center gap-[8px] bg-white rounded-full px-[20px] py-[12px] no-underline whitespace-nowrap shrink-0 self-start xl:self-center">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]" style={{ color: SUPPORT_CARD_ACCENT_BLUE }}>Chat with us</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke={SUPPORT_CARD_ACCENT_BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function Faq() {
  return (
    <div className="bg-[#070810] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] lg:gap-[58px] items-start px-[20px] py-[48px] lg:px-[88px] lg:py-[140px] relative size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start leading-[normal] overflow-clip relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#3b82f6] text-[12px] tracking-[2.64px]">GOOD TO KNOW</p>
            <p className="font-['DM_Sans',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[32px] lg:text-[44px] tracking-[-0.792px]">Questions, answered plainly.</p>
          </div>
          <Accordion.Root type="single" collapsible className="w-full border-t border-[rgba(255,255,255,0.08)]">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="w-full border-b border-[rgba(255,255,255,0.08)]">
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full flex items-center justify-between gap-[16px] py-[24px] bg-transparent border-0 cursor-pointer text-left">
                    <p className="[word-break:break-word] font-['DM_Sans',sans-serif] font-medium leading-[1.3] text-[#eef0f6] text-[16px] lg:text-[18px]">{q}</p>
                    <div className="relative shrink-0 size-[22px] transition-transform duration-200 group-data-[state=open]:rotate-45">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                        <path d={svgPaths.p15c41080} stroke="#3b82f6" strokeLinecap="round" strokeWidth="1.46667" />
                      </svg>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.65] text-[#9da2b4] text-[14px] lg:text-[15px] pb-[24px] pr-[40px]">{a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function SocialIcon({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a href={href} aria-label={label} className="inline-flex">
      {children}
    </a>
  );
}

function Footer() {
  const socialHref = (label: string) => FOOTER_LINKS.social.find((s) => s.label === label)!.href;
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start pb-[36px] pt-[64px] px-[20px] lg:px-[88px] relative size-full">
          <div className="content-stretch flex flex-col lg:flex-row gap-[32px] lg:gap-[40px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative">
              <div className="h-[100px] relative shrink-0 w-[218px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg10801} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-[280px]">A simulated-capital prop firm rewarding disciplined traders across 105+ countries.</p>
            </div>
            {FOOTER_COLUMNS.map(({ heading, items }) => (
              <div key={heading} className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[12px] tracking-[1.44px] whitespace-nowrap">{heading}</p>
                <div className="h-[18px]" />
                {items.map((item) => (
                  <div key={item.label}>
                    <a href={item.href} className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap no-underline hover:text-[#60a5fa]">{item.label}</a>
                    <div className="h-[10px]" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" />
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start not-italic overflow-clip pt-[26px] relative shrink-0 text-[#5f6478] text-[12px] w-full">
            <p className="leading-[1.7] relative shrink-0 w-full">Funding Your Trades provides a simulated trading environment for the purpose of evaluating trading skill. Clients are assigned demo accounts with simulated funds; all trading activity is carried out in a simulated environment and no real capital is deposited or traded. FYT is not a broker and does not provide investment services. Trading in financial markets involves significant risk and is not suitable for everyone. Performance in a simulated environment does not guarantee future results.</p>
            <div className="content-stretch flex flex-col lg:flex-row gap-[8px] lg:gap-0 items-start lg:justify-between leading-[normal] relative shrink-0 w-full lg:whitespace-nowrap">
              <p className="relative shrink-0">© 2026 Funding Your Trades. All rights reserved.</p>
              <div className="flex gap-[20px] items-center shrink-0">
                <SocialIcon label="X" href={socialHref("X")}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M2 2l6.7 8.6L2.4 18h2.3l5-5.7 4.4 5.7H18l-7-9.1L17.4 2h-2.3l-4.6 5.3L6.4 2H2z" fill="#3b82f6" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Discord" href={socialHref("Discord")}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M15.5 4.5A13 13 0 0 0 12.6 3.6l-.3.7a10.7 10.7 0 0 0-4.6 0l-.3-.7c-1 .2-2 .5-2.9.9C2.7 7.2 2.2 9.9 2.4 12.5A13 13 0 0 0 6 14.4l.7-1.1c-.6-.2-1.1-.5-1.6-.8l.4-.3c2.9 1.4 6.1 1.4 9 0l.4.3c-.5.3-1 .6-1.6.8l.7 1.1a13 13 0 0 0 3.6-1.9c.3-3-.5-5.6-2.1-8zM7.6 11.2c-.6 0-1.1-.6-1.1-1.3s.5-1.3 1.1-1.3 1.1.6 1.1 1.3-.5 1.3-1.1 1.3zm4.8 0c-.6 0-1.1-.6-1.1-1.3s.5-1.3 1.1-1.3 1.1.6 1.1 1.3-.5 1.3-1.1 1.3z" fill="#3b82f6" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Instagram" href={socialHref("Instagram")}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="2.5" y="2.5" width="15" height="15" rx="4.5" stroke="#3b82f6" strokeWidth="1.7" />
                    <circle cx="10" cy="10" r="3.4" stroke="#3b82f6" strokeWidth="1.7" />
                    <circle cx="14.6" cy="5.4" r="1.1" fill="#3b82f6" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="YouTube" href={socialHref("YouTube")}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="1.5" y="4.5" width="17" height="11" rx="3" fill="#3b82f6" />
                    <path d="M8.3 7.5v5l4.4-2.5-4.4-2.5z" fill="#070810" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Telegram" href={socialHref("Telegram")}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M17.6 3.1 1.9 9.2c-.7.3-.7 1 0 1.2l3.9 1.2 1.5 4.7c.2.6.9.7 1.3.3l2.1-2 4 2.9c.5.4 1.2.1 1.3-.5l2.3-12.7c.1-.8-.5-1.4-1.3-1.1l.6-.1zM6.6 11.4l8.5-5.2-6.6 6.1-.3 2.7-1.6-3.6z" fill="#3b82f6" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#070810] content-stretch flex flex-col items-start relative w-full min-h-screen">
      <CursorSpotlight />
      <PromoBanner />
      <Nav />
      <Hero />
      <div className="bg-[rgba(255,255,255,0.06)] h-px relative shrink-0 w-full" />
      <FeaturedIn />
      <ProveYourSkill />
      <ProofInNumbers />
      <LivePayouts />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" />
      <Pricing />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" />
      <Testimonials />
      <HowItWorks />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" />
      <ComparisonTable />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" />
      <ProductShowcase />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" />
      <Faq />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" />
      <ClosingCta />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" />
      <Footer />
    </div>
  );
}
