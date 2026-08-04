import svgPaths from "./svg-jvfwdu20yw";

function IosSignal() {
  return (
    <div className="h-[11px] relative shrink-0 w-[17px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
        <g id="ios-signal">
          <path clipRule="evenodd" d={svgPaths.p2d6ad970} fill="var(--fill-0, #EEF0F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="h-[11px] relative shrink-0 w-[15px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
        <g id="ios-wifi-signal">
          <path clipRule="evenodd" d={svgPaths.p190a1500} fill="var(--fill-0, #EEF0F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[12px] relative shrink-0 w-[25px]" data-name="ios-battery-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
        <g id="ios-battery-full">
          <path d={svgPaths.pde03700} fill="var(--fill-0, #EEF0F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <IosSignal />
      <IosWifiSignal />
      <IosBatteryFull />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="status-bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">9:41</p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function BrandGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="brand-group">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[16px] whitespace-nowrap">FUNDING YOUR TRADES</p>
    </div>
  );
}

function XCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x-circle">
          <path d={svgPaths.p1a5d0500} id="Vector" stroke="var(--stroke-0, #EEF0F6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CloseTrigger() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="close-trigger">
      <XCircle />
    </button>
  );
}

function Header() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <BrandGroup />
          <CloseTrigger />
        </div>
      </div>
    </div>
  );
}

function TopSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="top-section">
      <StatusBar />
      <Header />
    </div>
  );
}

function NavItemPrograms() {
  return (
    <div className="content-stretch flex items-start justify-center py-[12px] relative shrink-0 w-full" data-name="nav-item-Programs">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#eef0f6] text-[18px] text-center">Programs</p>
    </div>
  );
}

function NavItemPricing() {
  return (
    <div className="content-stretch flex items-start justify-center py-[12px] relative shrink-0 w-full" data-name="nav-item-Pricing">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#eef0f6] text-[18px] text-center">Pricing</p>
    </div>
  );
}

function NavItemTradingRules() {
  return (
    <div className="content-stretch flex items-start justify-center py-[12px] relative shrink-0 w-full" data-name="nav-item-Trading Rules">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#eef0f6] text-[18px] text-center">Trading Rules</p>
    </div>
  );
}

function NavItemPlatforms() {
  return (
    <div className="content-stretch flex items-start justify-center py-[12px] relative shrink-0 w-full" data-name="nav-item-Platforms">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#eef0f6] text-[18px] text-center">Platforms</p>
    </div>
  );
}

function NavItemFaq() {
  return (
    <div className="content-stretch flex items-start justify-center py-[12px] relative shrink-0 w-full" data-name="nav-item-FAQ">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#eef0f6] text-[18px] text-center">FAQ</p>
    </div>
  );
}

function NavLinksList() {
  return (
    <div className="relative shrink-0 w-full" data-name="nav-links-list">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[40px] py-[32px] relative size-full">
          <NavItemPrograms />
          <NavItemPricing />
          <NavItemTradingRules />
          <NavItemPlatforms />
          <NavItemFaq />
        </div>
      </div>
    </div>
  );
}

function LoginLinkContainer() {
  return (
    <div className="content-stretch flex items-start justify-center py-[12px] relative shrink-0 w-full" data-name="login-link-container">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[16px] whitespace-nowrap">Log in</p>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex h-[54px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-name="cta-button">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Start evaluation</p>
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-end relative shrink-0 w-full" data-name="home-indicator-container">
      <div className="bg-[#eef0f6] h-[5px] opacity-30 relative rounded-[10px] shrink-0 w-[134px]" data-name="home-indicator" />
    </div>
  );
}

function BottomSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="bottom-section">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[12px] px-[24px] relative size-full">
        <LoginLinkContainer />
        <CtaButton />
        <HomeIndicatorContainer />
      </div>
    </div>
  );
}

export default function MobileMenuOverlay() {
  return (
    <div className="bg-[#0a0e1a] content-stretch flex flex-col items-start justify-between relative size-full" data-name="Mobile Menu Overlay">
      <TopSection />
      <NavLinksList />
      <BottomSection />
    </div>
  );
}