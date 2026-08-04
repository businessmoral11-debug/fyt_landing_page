import svgPaths from "./svg-1dt29igh8z";
import imgBullIcon from "./c3e1b41ac1a944e4221b3b1465d4e68b855d759f.png";
import imgWorldMap from "./7baca2145408f3226a92824b3d532ab858836549.png";

function BullIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[28px]" data-name="Bull-Icon">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBullIcon} />
    </div>
  );
}

function Wordmark() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Wordmark">
      <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[12px] mb-0">FUNDING YOUR</p>
        <p className="leading-[12px]">TRADES</p>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Brand">
      <BullIcon />
      <Wordmark />
    </div>
  );
}

function ButtonNav() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button-Nav">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Start evaluation</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="menu">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="menu">
          <path d={svgPaths.p33bc3000} id="Vector" stroke="var(--stroke-0, #EEF0F6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MenuHamburger() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Menu-Hamburger">
      <Menu />
    </div>
  );
}

function NavActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Nav-Actions">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">Log in</p>
      <ButtonNav />
      <MenuHamburger />
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#0a0e1a] h-[64px] relative shrink-0 w-full" data-name="Nav">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.07)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] relative size-full">
          <Brand />
          <NavActions />
        </div>
      </div>
    </div>
  );
}

function TickerPill() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="Ticker-Pill">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">EUR/USD</p>
    </div>
  );
}

function TickerPill1() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="Ticker-Pill">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">BTC/USD</p>
    </div>
  );
}

function TickerPill2() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="Ticker-Pill">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">GBP/USD</p>
    </div>
  );
}

function TickerPill3() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="Ticker-Pill">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">US30</p>
    </div>
  );
}

function TickerPill4() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="Ticker-Pill">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">XAU/USD</p>
    </div>
  );
}

function TickerPill5() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[20px] shrink-0" data-name="Ticker-Pill">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">NAS100</p>
    </div>
  );
}

function TickerContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pl-[20px] relative shrink-0" data-name="Ticker-Container">
      <TickerPill />
      <TickerPill1 />
      <TickerPill2 />
      <TickerPill3 />
      <TickerPill4 />
      <TickerPill5 />
    </div>
  );
}

function HeroTicker() {
  return (
    <div className="bg-[#090b13] content-stretch flex items-start overflow-clip py-[10px] relative shrink-0 w-full" data-name="Hero-Ticker">
      <TickerContainer />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#14161e] content-stretch flex gap-[8px] items-center pl-[12px] pr-[14px] py-[6px] relative rounded-[999px] shrink-0" data-name="Badge">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#c8cddc] text-[11px] whitespace-nowrap">$2.6M+ paid · simulated capital · 105 countries</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View Programs</p>
      <div className="relative shrink-0 size-[14px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function BtnPrimary() {
  return (
    <div className="bg-[#3b82f6] content-stretch drop-shadow-[0px_4px_8px_rgba(59,130,246,0.13)] flex items-center justify-center py-[14px] relative rounded-[8px] shrink-0 w-full" data-name="Btn-Primary">
      <Frame />
    </div>
  );
}

function BtnSecondary() {
  return (
    <div className="content-stretch flex items-center justify-center py-[14px] relative rounded-[8px] shrink-0 w-full" data-name="Btn-Secondary">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">See how it works</p>
    </div>
  );
}

function CtaStack() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="CTA-Stack">
      <BtnPrimary />
      <BtnSecondary />
    </div>
  );
}

function RatingRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="Rating-Row">
      <p className="relative shrink-0 text-[#3b82f6]">★★★★★</p>
      <p className="relative shrink-0 text-[#9da2b4]">Rated Excellent · 3,400+ verified reviews</p>
    </div>
  );
}

function ShieldMobile() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[80px] top-[50px]" data-name="Shield-Mobile">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Shield-Mobile">
          <rect fill="var(--fill-0, #0F1119)" height="80" rx="40" width="80" />
          <rect height="79" rx="39.5" stroke="var(--stroke-0, #3B82F6)" strokeOpacity="0.301961" width="79" x="0.5" y="0.5" />
          <path d={svgPaths.p4669c00} fill="var(--fill-0, #3B82F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OrbitalCanvasMobile() {
  return (
    <div className="bg-[#0c0e18] h-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Orbital-Canvas-Mobile">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute left-1/2 size-[300px] top-[20px]" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 300">
            <circle cx="150" cy="150" id="Ellipse" r="149.5" stroke="var(--stroke-0, white)" strokeOpacity="0.0392157" />
          </svg>
        </div>
        <div className="-translate-x-1/2 absolute left-1/2 size-[200px] top-[40px]" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 200">
            <circle cx="100" cy="100" id="Ellipse" r="99.5" stroke="var(--stroke-0, white)" strokeOpacity="0.0588235" />
          </svg>
        </div>
        <ShieldMobile />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function HeroMain() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Hero-Main">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[48px] pt-[40px] px-[20px] relative size-full">
          <Badge />
          <div className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[42px] text-center text-white tracking-[-1.5px] w-[min-content]">
            <p className="leading-[1.1] mb-0">Capital for traders</p>
            <p className="leading-[1.1]">who can prove it.</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[15px] text-center w-[min-content]">Pass a transparent evaluation and access a simulated account of up to $200K with static drawdown, no time limit, and clearly defined reward conditions.</p>
          <CtaStack />
          <RatingRow />
          <OrbitalCanvasMobile />
        </div>
      </div>
    </div>
  );
}

function SwitchTrack() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]" data-name="Switch-Track">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
        <g id="Switch-Track">
          <rect fill="var(--fill-0, #1F2937)" height="20" rx="10" width="36" />
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Switch-Thumb" r="8" />
        </g>
      </svg>
    </div>
  );
}

function TogglePill() {
  return (
    <button className="bg-[#14151b] content-stretch cursor-pointer flex gap-[12px] h-[38px] items-center px-[20px] py-[8px] relative rounded-[100px] shrink-0" data-name="Toggle-Pill">
      <div aria-hidden className="absolute border border-[#20222b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] text-left uppercase whitespace-nowrap">WITHOUT FYT</p>
      <SwitchTrack />
    </button>
  );
}

function ToggleHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[12px] items-center overflow-clip relative shrink-0 text-center w-full" data-name="Toggle-Header">
      <p className="font-['Newsreader:Regular',sans-serif] leading-[36px] relative shrink-0 text-[28px] text-white w-full">What makes traditional evaluations harder.</p>
      <p className="font-['Inter:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">Common restrictions and unclear conditions can make evaluations harder than they need to be.</p>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="x">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap() {
  return (
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <X />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#73808f] text-[14px]">Trailing drawdown that changes with performance</p>
    </div>
  );
}

function X1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="x">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap1() {
  return (
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <X1 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#73808f] text-[14px]">Long or fixed payout waiting periods</p>
    </div>
  );
}

function X2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="x">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap2() {
  return (
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <X2 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#73808f] text-[14px]">Rules spread across multiple pages</p>
    </div>
  );
}

function X3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="x">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap3() {
  return (
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <X3 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#73808f] text-[14px]">Restrictions that limit trading styles</p>
    </div>
  );
}

function X4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="x">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap4() {
  return (
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <X4 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#73808f] text-[14px]">Conditions that are difficult to compare</p>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="bg-[#14151b] content-stretch flex flex-col gap-[8px] items-start p-[48px] relative rounded-[24px] shrink-0 w-[320px]" data-name="Feature-Card">
      <div aria-hidden className="absolute border border-[#20222b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <ListItem />
      <div className="bg-[#262933] h-px relative shrink-0 w-full" data-name="Separator" />
      <ListItem1 />
      <div className="bg-[#262933] h-px relative shrink-0 w-full" data-name="Separator" />
      <ListItem2 />
      <div className="bg-[#262933] h-px relative shrink-0 w-full" data-name="Separator" />
      <ListItem3 />
      <div className="bg-[#262933] h-px relative shrink-0 w-full" data-name="Separator" />
      <ListItem4 />
    </div>
  );
}

function SwitchTrack1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]" data-name="Switch-Track">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
        <g id="Switch-Track">
          <rect fill="var(--fill-0, #3B82F6)" height="20" rx="10" width="36" />
          <circle cx="26" cy="10" fill="var(--fill-0, white)" id="Switch-Thumb" r="8" />
        </g>
      </svg>
    </div>
  );
}

function TogglePill1() {
  return (
    <button className="bg-[rgba(59,130,246,0.1)] content-stretch cursor-pointer flex gap-[12px] h-[38px] items-center px-[20px] py-[8px] relative rounded-[100px] shrink-0" data-name="Toggle-Pill">
      <div aria-hidden className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-left text-white uppercase whitespace-nowrap">WITH FYT</p>
      <SwitchTrack1 />
    </button>
  );
}

function ToggleHeader1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[12px] items-center overflow-clip relative shrink-0 text-center w-full" data-name="Toggle-Header">
      <p className="font-['Newsreader:Regular',sans-serif] leading-[36px] relative shrink-0 text-[28px] text-white w-full">Capital for traders who take this seriously.</p>
      <p className="font-['Inter:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">Static drawdown, clearly stated conditions, and flexible capital for serious traders.</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path d={svgPaths.p27200700} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap5() {
  return (
    <div className="bg-[rgba(59,130,246,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <Check />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap5 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-white">Static drawdown with a fixed floor</p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path d={svgPaths.p27200700} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap6() {
  return (
    <div className="bg-[rgba(59,130,246,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <Check1 />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-white">Median reward processing time of 105 minutes</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path d={svgPaths.p27200700} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap7() {
  return (
    <div className="bg-[rgba(59,130,246,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <Check2 />
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap7 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-white">Up to 100% reward split</p>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path d={svgPaths.p27200700} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap8() {
  return (
    <div className="bg-[rgba(59,130,246,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <Check3 />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap8 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-white">Rules defined before the evaluation begins</p>
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path d={svgPaths.p27200700} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap9() {
  return (
    <div className="bg-[rgba(59,130,246,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon-Wrap">
      <Check4 />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="List-Item">
      <IconWrap9 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-white">Flexible trading conditions across supported programs</p>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="bg-[#14151b] content-stretch drop-shadow-[0px_20px_20px_rgba(59,130,246,0.15)] flex flex-col gap-[8px] items-start p-[48px] relative rounded-[24px] shrink-0 w-[320px]" data-name="Feature-Card">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.25)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <ListItem5 />
      <div className="bg-[#262933] h-px relative shrink-0 w-full" data-name="Separator" />
      <ListItem6 />
      <div className="bg-[#262933] h-px relative shrink-0 w-full" data-name="Separator" />
      <ListItem7 />
      <div className="bg-[#262933] h-px relative shrink-0 w-full" data-name="Separator" />
      <ListItem8 />
      <div className="bg-[#262933] h-px relative shrink-0 w-full" data-name="Separator" />
      <ListItem9 />
    </div>
  );
}

function HeaderBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header-Block">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[11px] tracking-[2px] whitespace-nowrap">THE NETWORK</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.15] min-w-full relative shrink-0 text-[#eef0f6] text-[32px] w-[min-content]">Rewards moving across a global trading community.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[15px] w-[min-content]">See the global reach of the FYT community and the scale of rewards delivered to traders worldwide.</p>
    </div>
  );
}

function LabelRow() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Label-Row">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[11px] tracking-[1px] whitespace-nowrap">GLOBAL REWARD NETWORK</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f6478] text-[11px] whitespace-nowrap">Funded hub</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #A6BFD9)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f6478] text-[11px] whitespace-nowrap">Settlement</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Legend">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function PanelMeta() {
  return (
    <div className="relative shrink-0 w-full" data-name="Panel-Meta">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[12px] px-[20px] relative size-full">
        <LabelRow />
        <Legend />
      </div>
    </div>
  );
}

function MapFrame() {
  return (
    <div className="bg-[#0b0c11] h-[160px] relative shrink-0 w-full" data-name="Map-Frame">
      <div className="absolute inset-0 opacity-30" data-name="WorldMap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWorldMap} />
        </div>
      </div>
      <div className="absolute left-[120px] size-[4px] top-[60px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[220px] size-[5px] top-[40px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[280px] size-[4px] top-[80px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="2" />
        </svg>
      </div>
    </div>
  );
}

function Stat() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px py-[16px] relative" data-name="Stat">
      <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[28px]">$2.6M+</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#5f6478] text-[10px] tracking-[1px] uppercase">Rewards paid to traders</p>
    </div>
  );
}

function Stat1() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px py-[16px] relative" data-name="Stat">
      <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[28px]">14,000+</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#5f6478] text-[10px] tracking-[1px] uppercase">Funded traders worldwide</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0 w-full" data-name="Frame">
      <Stat />
      <Stat1 />
    </div>
  );
}

function Stat2() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px py-[16px] relative" data-name="Stat">
      <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[28px]">105+</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#5f6478] text-[10px] tracking-[1px] uppercase">Countries represented</p>
    </div>
  );
}

function Stat3() {
  return (
    <div className="bg-[#0c0e18] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px py-[16px] relative" data-name="Stat">
      <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[28px]">105 min</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#5f6478] text-[10px] tracking-[1px] uppercase">Median payout time</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0 w-full" data-name="Frame">
      <Stat2 />
      <Stat3 />
    </div>
  );
}

function MapStats() {
  return (
    <div className="[word-break:break-word] bg-[rgba(255,255,255,0.07)] content-stretch flex flex-col gap-px items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Map-Stats">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function MapPanel() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[12px] shrink-0 w-full" data-name="Map-Panel">
      <div className="content-stretch flex flex-col items-start overflow-clip pt-[16px] relative rounded-[inherit] size-full">
        <PanelMeta />
        <MapFrame />
        <MapStats />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function GlobalNetworkSection() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Global-Network-Section">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[48px] relative size-full">
        <HeaderBlock />
        <MapPanel />
      </div>
    </div>
  );
}

function HeaderBlock1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header-Block">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[11px] tracking-[2px] whitespace-nowrap">PRICING</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.15] min-w-full relative shrink-0 text-[#eef0f6] text-[32px] w-[min-content]">Clear pricing. No surprise conditions.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[15px] w-[min-content]">Compare account size, profit targets, drawdown limits, reward split, and registration fee before you start.</p>
    </div>
  );
}

function TabSelected() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Tab-Selected">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Two-Step</p>
      <div className="bg-[#3b82f6] h-[2px] relative shrink-0 w-[72px]" data-name="Rectangle" />
    </div>
  );
}

function TabUnselected() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Tab-Unselected">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">One-Step</p>
      <div className="bg-[rgba(0,0,0,0)] h-[2px] relative shrink-0 w-[72px]" data-name="Rectangle" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
      <TabSelected />
      <TabUnselected />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">$5K</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">$10K</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">$25K</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">$50K</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function SizeSelected() {
  return (
    <div className="bg-[rgba(59,130,246,0.12)] content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="Size-Selected">
      <div aria-hidden className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[12px] whitespace-nowrap">$100K</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">$200K</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <SizeSelected />
      <Frame11 />
    </div>
  );
}

function SizeSelectorGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Size-Selector-Grid">
      <Frame5 />
      <Frame10 />
    </div>
  );
}

function PriceControls() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Price-Controls">
      <Tabs />
      <SizeSelectorGrid />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Card-Header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[10px] tracking-[1.5px] whitespace-nowrap">RECOMMENDED</p>
      <div className="bg-[rgba(255,255,255,0.07)] flex-[1_0_0] h-px min-w-px relative" data-name="Rectangle" />
    </div>
  );
}

function PriceRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-baseline leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Price-Row">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[36px]">$269</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">one-time fee</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic py-[10px] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#60a5fa]">Profit target</p>
      <p className="relative shrink-0 text-[#eef0f6]">10% / 6%</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame13 />
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic py-[10px] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#60a5fa]">Max daily loss</p>
      <p className="relative shrink-0 text-[#eef0f6]">5%</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic py-[10px] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#60a5fa]">Max overall loss</p>
      <p className="relative shrink-0 text-[#eef0f6]">10%</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame17 />
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic py-[10px] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#60a5fa]">Profit split</p>
      <p className="relative shrink-0 text-[#eef0f6]">Up to 100%</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic py-[10px] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#60a5fa]">Drawdown type</p>
      <p className="relative shrink-0 text-[#eef0f6]">Static</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame21 />
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function SpecsList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Specs-List">
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame12 />
      <Frame14 />
      <Frame16 />
      <Frame18 />
      <Frame20 />
    </div>
  );
}

function CtaStart() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center justify-center py-[14px] relative rounded-[6px] shrink-0 w-full" data-name="CTA-Start">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Start $100K Evaluation — $269</p>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Pricing-Card">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <CardHeader />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">Two-Step · $100K</p>
        <PriceRow />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[13px] w-[min-content]">
          <span className="leading-[1.5]">{`Fee `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] text-[#3b82f6]">100% refundable</span>
          <span className="leading-[1.5]">{` after your second reward.`}</span>
        </p>
        <SpecsList />
        <CtaStart />
      </div>
    </div>
  );
}

function IconWrap10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon-Wrap">
      <div className="absolute inset-[-4.69%_0_0_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7501 16.7501">
          <g id="Icon-Wrap">
            <path d={svgPaths.p9bd1200} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrap10 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-px not-italic relative text-[#d4d6e0] text-[13px]">No consistency rule and no time limit to complete</p>
    </div>
  );
}

function IconWrap11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon-Wrap">
      <div className="absolute inset-[-4.69%_0_0_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7501 16.7501">
          <g id="Icon-Wrap">
            <path d={svgPaths.p9bd1200} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrap11 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-px not-italic relative text-[#d4d6e0] text-[13px]">Weekly rewards, free resets, and first reward on demand</p>
    </div>
  );
}

function IconWrap12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon-Wrap">
      <div className="absolute inset-[-4.69%_0_0_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7501 16.7501">
          <g id="Icon-Wrap">
            <path d={svgPaths.p9bd1200} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrap12 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-px not-italic relative text-[#d4d6e0] text-[13px]">News trading and weekend holding permitted</p>
    </div>
  );
}

function IconWrap13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon-Wrap">
      <div className="absolute inset-[-4.69%_0_0_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7501 16.7501">
          <g id="Icon-Wrap">
            <path d={svgPaths.p9bd1200} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrap13 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-px not-italic relative text-[#d4d6e0] text-[13px]">Platform 5 and Match Trader, on web and mobile</p>
    </div>
  );
}

function IconWrap14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon-Wrap">
      <div className="absolute inset-[-4.69%_0_0_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7501 16.7501">
          <g id="Icon-Wrap">
            <path d={svgPaths.p9bd1200} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrap14 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-px not-italic relative text-[#d4d6e0] text-[13px]">Card and crypto accepted, settlement in 24 hours</p>
    </div>
  );
}

function IncludedList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Included-List">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function IncludedSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Included-Section">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[13px] whitespace-nowrap">Included with every account</p>
      <IncludedList />
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Pricing-Section">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[48px] relative size-full">
        <HeaderBlock1 />
        <PriceControls />
        <PricingCard />
        <IncludedSection />
      </div>
    </div>
  );
}

export default function FytMobile() {
  return (
    <div className="bg-[#070810] content-stretch flex flex-col items-start relative size-full" data-name="FYT - Mobile">
      <Nav />
      <HeroTicker />
      <HeroMain />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="bg-[#0a0e1a] content-stretch flex flex-col gap-[24px] items-center justify-center px-[20px] py-[40px] relative shrink-0 w-[390px]" data-name="Mobile Toggle Comparison">
        <TogglePill />
        <ToggleHeader />
        <FeatureCard />
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="bg-[#0a0e1a] content-stretch flex flex-col gap-[24px] items-center justify-center px-[20px] py-[40px] relative shrink-0 w-[390px]" data-name="Mobile Toggle Comparison">
        <TogglePill1 />
        <ToggleHeader1 />
        <FeatureCard1 />
      </div>
      <GlobalNetworkSection />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <PricingSection />
    </div>
  );
}