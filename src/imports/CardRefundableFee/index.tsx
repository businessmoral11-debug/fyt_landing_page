import svgPaths from "./svg-euvmckegit";

function CardBack() {
  return (
    <div className="absolute flex h-[172.276px] items-center justify-center left-[50px] top-[4.91px] w-[254.155px]">
      <div className="-rotate-6 flex-none">
        <div className="bg-[#161412] border border-[rgba(255,255,255,0.03)] border-solid h-[148px] relative rounded-[16px] w-[240px]" data-name="card-back" />
      </div>
    </div>
  );
}

function CardShine() {
  return (
    <div className="absolute h-[148px] left-[-1px] overflow-clip rounded-[16px] top-[-1px] w-[240px]" data-name="card-shine">
      <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0)] h-[148px] left-0 to-[rgba(255,255,255,0)] top-0 via-1/2 via-[rgba(255,255,255,0.02)] w-[120px]" data-name="shine" />
    </div>
  );
}

function Chip() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#c9a84c] h-[28px] items-start left-[19px] rounded-[6px] to-[#c9a84c] top-[19px] via-1/2 via-[#a07830] w-[36px]" data-name="chip">
      <div className="absolute bg-[rgba(0,0,0,0.19)] h-px left-0 top-[9px] w-[36px]" data-name="chip-line-h1" />
      <div className="absolute bg-[rgba(0,0,0,0.19)] h-px left-0 top-[18px] w-[36px]" data-name="chip-line-h2" />
      <div className="absolute bg-[rgba(0,0,0,0.19)] h-[28px] left-[12px] top-0 w-px" data-name="chip-line-v1" />
      <div className="absolute bg-[rgba(0,0,0,0.19)] h-[28px] left-[24px] top-0 w-px" data-name="chip-line-v2" />
      <div className="absolute bg-[rgba(0,0,0,0.13)] h-[10px] left-[12px] top-[9px] w-[12px]" data-name="chip-center" />
    </div>
  );
}

function Wifi() {
  return (
    <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[20px]">
      <div className="flex-none rotate-90">
        <div className="h-[20px] relative w-[16px]" data-name="wifi">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <g id="wifi">
              <path d={svgPaths.p3ed39500} id="Vector" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeOpacity="0.376471" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Contactless() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-center left-[61px] top-[23px] w-[16px]" data-name="contactless">
      <Wifi />
    </div>
  );
}

function Grp() {
  return (
    <div className="h-[5px] relative shrink-0 w-[29px]" data-name="grp1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 5">
        <g id="grp1">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d" r="2.5" />
          <circle cx="10.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_2" r="2.5" />
          <circle cx="18.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_3" r="2.5" />
          <circle cx="26.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_4" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Grp1() {
  return (
    <div className="h-[5px] relative shrink-0 w-[29px]" data-name="grp2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 5">
        <g id="grp1">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d" r="2.5" />
          <circle cx="10.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_2" r="2.5" />
          <circle cx="18.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_3" r="2.5" />
          <circle cx="26.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_4" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Grp2() {
  return (
    <div className="h-[5px] relative shrink-0 w-[29px]" data-name="grp3">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 5">
        <g id="grp1">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d" r="2.5" />
          <circle cx="10.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_2" r="2.5" />
          <circle cx="18.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_3" r="2.5" />
          <circle cx="26.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.12549" id="d_4" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Grp3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[3px] items-start leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(255,255,255,0.38)] whitespace-nowrap" data-name="grp4">
      <p className="relative shrink-0">4</p>
      <p className="relative shrink-0">2</p>
      <p className="relative shrink-0">8</p>
      <p className="relative shrink-0">1</p>
    </div>
  );
}

function CardNumber() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-start left-[19px] top-[71px]" data-name="card-number">
      <Grp />
      <Grp1 />
      <Grp2 />
      <Grp3 />
    </div>
  );
}

function Network() {
  return (
    <div className="absolute left-[185px] size-[22px] top-[15px]" data-name="network">
      <div className="absolute inset-[0_0_0_-36.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 22">
          <g id="network">
            <circle cx="19" cy="11" fill="var(--fill-0, #C9A84C)" fillOpacity="0.313726" id="circle-left" r="11" />
            <circle cx="11" cy="11" fill="var(--fill-0, #A07830)" id="circle-right" opacity="0.6" r="11" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CardMain() {
  return (
    <div className="absolute bg-[#1c1916] border border-[rgba(212,168,83,0.19)] border-solid h-[148px] left-[44px] rounded-[16px] top-[20px] w-[240px]" data-name="card-main">
      <CardShine />
      <Chip />
      <Contactless />
      <CardNumber />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[19px] not-italic text-[8px] text-[rgba(255,255,255,0.21)] top-[107px] tracking-[0.8px] whitespace-nowrap">FYT TRADER</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[159px] not-italic text-[8px] text-[rgba(255,255,255,0.15)] top-[111px] whitespace-nowrap">VALID</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[159px] not-italic text-[8px] text-[rgba(255,255,255,0.25)] top-[121px] whitespace-nowrap">12/27</p>
      <div className="absolute h-[100px] left-[139px] top-[59px] w-[120px]" data-name="card-glow">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 100">
          <ellipse cx="60" cy="50" fill="url(#paint0_radial_1_1142)" id="card-glow" rx="60" ry="50" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(60 50) scale(60 50)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1142" r="1">
              <stop stopColor="#D4A853" stopOpacity="0.0823529" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Network />
    </div>
  );
}

function CornerUpLeft() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="corner-up-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="corner-up-left">
          <path d={svgPaths.p656f580} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ReturnBadge() {
  return (
    <div className="absolute bg-[#282014] content-stretch drop-shadow-[0px_0px_8px_rgba(212,168,83,0.25)] flex flex-col items-center justify-center left-[242px] rounded-[20px] size-[40px] top-[8px]" data-name="return-badge">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.31)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <CornerUpLeft />
    </div>
  );
}

function StatusPill() {
  return (
    <div className="absolute bg-[rgba(212,168,83,0.07)] content-stretch flex gap-[6px] h-[28px] items-center justify-center left-[82px] rounded-[14px] top-[174px] w-[164px]" data-name="status-pill">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="relative shrink-0 size-[5px]" data-name="dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #D4A853)" id="dot" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[10px] tracking-[1.2px] whitespace-nowrap">FEE RETURNED</p>
    </div>
  );
}

function CardScene() {
  return (
    <div className="h-[200px] relative shrink-0 w-[320px]" data-name="card-scene">
      <CardBack />
      <CardMain />
      <ReturnBadge />
      <StatusPill />
    </div>
  );
}

function GraphicFee() {
  return (
    <div className="content-stretch flex flex-col h-[220px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="graphic-fee">
      <CardScene />
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="headline">
      <p className="[word-break:break-word] font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[1.05] relative shrink-0 text-[#f0f2fa] text-[44px] tracking-[-0.44px] whitespace-nowrap">Refundable fee</p>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[52px] pt-[24px] px-[52px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a07830] text-[12px] tracking-[1.68px] whitespace-nowrap">COST</p>
        <Headline />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.75] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[14px] w-[min-content]">Your fee returns in full after the second reward - a proven trader pays nothing.</p>
      </div>
    </div>
  );
}

export default function CardRefundableFee() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[28px] size-full" data-name="card-refundable-fee">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <GraphicFee />
        <Content />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}