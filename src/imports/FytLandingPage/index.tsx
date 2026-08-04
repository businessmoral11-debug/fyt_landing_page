import svgPaths from "./svg-1sqldvgw4z";
import imgImg10782 from "./c3e1b41ac1a944e4221b3b1465d4e68b855d759f.png";
import imgWorldMapBackground from "./7baca2145408f3226a92824b3d532ab858836549.png";
import imgFrame from "./8295e491b324fadeeea490ba571a520a23952bb1.png";
import imgFrame1 from "./54d19c95719cd1f9a5f51b4b4043efab325948a0.png";
import imgImg10801 from "./7dca680e1978188fe7adca05839b49894cdf71f2.png";

function Wordmark() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="wordmark">
      <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[14px] mb-0 whitespace-pre">{`FUNDING YOUR `}</p>
        <p className="leading-[14px] whitespace-pre">TRADES</p>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Brand">
      <div className="h-[40px] relative shrink-0 w-[42px]" data-name="IMG_1078 2">
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
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[30px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap" data-name="Links">
      <p className="relative shrink-0">Programs</p>
      <p className="relative shrink-0">Pricing</p>
      <p className="relative shrink-0">Trading Rules</p>
      <p className="relative shrink-0">Platforms</p>
      <p className="relative shrink-0">FAQ</p>
    </div>
  );
}

function ButtonPrimaryLg() {
  return (
    <div className="bg-[#d4a853] relative rounded-[8px] shrink-0" data-name="Button / primary lg">
      <div className="content-stretch flex items-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Start evaluation</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.32)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NavRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-name="Nav right">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">Log in</p>
      <ButtonPrimaryLg />
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[83px] pr-[88px] relative size-full">
          <Brand />
          <Links />
          <NavRight />
        </div>
      </div>
    </div>
  );
}

function Shield() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="shield">
          <path d={svgPaths.p1dda6000} fill="var(--fill-0, #D4A853)" id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ShieldCenter() {
  return (
    <div className="absolute bg-[#0f1119] content-stretch drop-shadow-[0px_0px_24px_rgba(212,168,83,0.09),0px_0px_12px_rgba(212,168,83,0.25)] flex flex-col items-center justify-center left-[321px] rounded-[59px] size-[118px] top-[121px]" data-name="Shield Center">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.3)] border-solid inset-0 pointer-events-none rounded-[59px]" />
      <Shield />
    </div>
  );
}

function BadgeEurUsd() {
  return (
    <div className="absolute bg-[#0f1119] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.4)] flex gap-[8px] items-center left-[20px] pl-[12px] pr-[14px] py-[7px] rounded-[20px] top-[95px]" data-name="Badge EUR/USD">
      <div aria-hidden className="absolute border border-[rgba(40,42,55,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D4A853)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">EUR/USD</p>
    </div>
  );
}

function BadgeBtcUsd() {
  return (
    <div className="absolute bg-[#0f1119] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.4)] flex gap-[8px] items-center left-[29.5px] pl-[12px] pr-[14px] py-[7px] rounded-[20px] top-[245px]" data-name="Badge BTC/USD">
      <div aria-hidden className="absolute border border-[rgba(40,42,55,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D4A853)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">BTC/USD</p>
    </div>
  );
}

function BadgeGbpUsd() {
  return (
    <div className="absolute bg-[#0f1119] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.4)] flex gap-[8px] items-center left-[329.5px] pl-[12px] pr-[14px] py-[7px] rounded-[20px] top-[315px]" data-name="Badge GBP/USD">
      <div aria-hidden className="absolute border border-[rgba(40,42,55,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D4A853)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">GBP/USD</p>
    </div>
  );
}

function BadgeUs() {
  return (
    <div className="absolute bg-[#0f1119] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.4)] flex gap-[8px] items-center left-[341.5px] pl-[12px] pr-[14px] py-[7px] rounded-[20px] top-[5px]" data-name="Badge US30">
      <div aria-hidden className="absolute border border-[rgba(40,42,55,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D4A853)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">US30</p>
    </div>
  );
}

function BadgeXauUsd() {
  return (
    <div className="absolute bg-[#0f1119] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.4)] flex gap-[8px] items-center left-[639.5px] pl-[12px] pr-[14px] py-[7px] rounded-[20px] top-[95px]" data-name="Badge XAU/USD">
      <div aria-hidden className="absolute border border-[rgba(40,42,55,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D4A853)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">XAU/USD</p>
    </div>
  );
}

function BadgeNas() {
  return (
    <div className="absolute bg-[#0f1119] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.4)] flex gap-[8px] items-center left-[633.5px] pl-[12px] pr-[14px] py-[7px] rounded-[20px] top-[245px]" data-name="Badge NAS100">
      <div aria-hidden className="absolute border border-[rgba(40,42,55,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D4A853)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">NAS100</p>
    </div>
  );
}

function OrbitalCanvas() {
  return (
    <div className="absolute h-[360px] left-[340px] overflow-clip top-[580px] w-[760px]" data-name="Orbital Canvas">
      <div className="absolute left-[200px] size-[360px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 360">
          <circle cx="180" cy="180" id="Ellipse" r="179.5" stroke="var(--stroke-0, white)" strokeOpacity="0.04" />
        </svg>
      </div>
      <div className="absolute left-[60px] size-[640px] top-[-140px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 640 640">
          <circle cx="320" cy="320" id="Ellipse" r="319.5" stroke="var(--stroke-0, white)" strokeOpacity="0.04" />
        </svg>
      </div>
      <div className="absolute left-[180px] size-[400px] top-[-20px]" data-name="Ellipse">
        <div className="absolute inset-[-0.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 401 401">
            <circle cx="200.5" cy="200.5" id="Ellipse" r="200" stroke="var(--stroke-0, white)" strokeOpacity="0.04" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[260px] size-[240px] top-[60px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
          <circle cx="120" cy="120" fill="url(#paint0_radial_1_1027)" id="Ellipse" r="120" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(120 120) scale(120)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1027" r="1">
              <stop stopColor="#D4A853" stopOpacity="0.15" />
              <stop offset="1" stopColor="#D4A853" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[115.534px] items-center justify-center left-[380px] top-[65.28px] w-[164.404px]">
        <div className="-rotate-35 flex-none">
          <div className="bg-[rgba(255,255,255,0.06)] h-px relative w-[200px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute flex h-[62.503px] items-center justify-center left-[199.66px] top-[180px] w-[169.487px]">
        <div className="flex-none rotate-20">
          <div className="bg-[rgba(255,255,255,0.06)] h-px relative w-[180px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.06)] h-[12px] left-[380px] top-[120px] w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.06)] h-[12px] left-[380px] top-[230px] w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.06)] h-px left-[50px] top-[180px] w-[12px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.06)] h-px left-[700px] top-[180px] w-[12px]" data-name="Rectangle" />
      <div className="absolute left-[650px] size-[7px] top-[60px]" data-name="Ellipse">
        <div className="absolute inset-[-142.86%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
            <g filter="url(#filter0_d_1_1129)" id="Ellipse">
              <circle cx="13.5" cy="13.5" fill="var(--fill-0, #D4A853)" fillOpacity="0.4" r="3.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27" id="filter0_d_1_1129" width="27" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect1_dropShadow_1_1129" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.6 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1129" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1129" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[140px] size-[6px] top-[300px]" data-name="Ellipse">
        <div className="absolute inset-[-116.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g filter="url(#filter0_d_1_1096)" id="Ellipse">
              <circle cx="10" cy="10" fill="var(--fill-0, #D4A853)" fillOpacity="0.4" r="3" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_1_1096" width="20" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_1_1096" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.6 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1096" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1096" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[380px] size-[5px] top-[30px]" data-name="Ellipse">
        <div className="absolute inset-[-140%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <g filter="url(#filter0_d_1_1106)" id="Ellipse">
              <circle cx="9.5" cy="9.5" fill="var(--fill-0, #D4A853)" fillOpacity="0.4" r="2.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19" id="filter0_d_1_1106" width="19" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_1_1106" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.6 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1106" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1106" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[520px] size-[5px] top-[320px]" data-name="Ellipse">
        <div className="absolute inset-[-140%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <g filter="url(#filter0_d_1_1106)" id="Ellipse">
              <circle cx="9.5" cy="9.5" fill="var(--fill-0, #D4A853)" fillOpacity="0.4" r="2.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19" id="filter0_d_1_1106" width="19" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_1_1106" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.6 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1106" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1106" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[110px] size-[4px] top-[100px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D4A853)" fillOpacity="0.4" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[630px] size-[4px] top-[240px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D4A853)" fillOpacity="0.4" id="Ellipse" r="2" />
        </svg>
      </div>
      <ShieldCenter />
      <BadgeEurUsd />
      <BadgeBtcUsd />
      <BadgeGbpUsd />
      <BadgeUs />
      <BadgeXauUsd />
      <BadgeNas />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#14161e] content-stretch flex gap-[8px] items-center pl-[12px] pr-[14px] py-[6px] relative rounded-[999px] shrink-0" data-name="Badge">
      <div aria-hidden className="absolute border border-[rgba(60,62,75,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #D4A853)" id="Ellipse" r="3.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8cddc] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[normal]">$2.6M+ paid</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">{` · simulated capital · 105 countries`}</span>
      </p>
    </div>
  );
}

function Frame() {
  return <div className="h-[40px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame1() {
  return <div className="h-[24px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame2() {
  return <div className="h-[40px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p29e11780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#d4a853] content-stretch drop-shadow-[0px_8px_12px_rgba(212,168,83,0.27)] flex gap-[10px] items-center px-[32px] py-[15px] relative rounded-[8px] shrink-0" data-name="Button Primary">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">View Programs</p>
      <Frame3 />
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="content-stretch flex items-center px-[32px] py-[15px] relative rounded-[8px] shrink-0" data-name="Button Secondary">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">See how it works</p>
    </div>
  );
}

function CtaRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="CTA Row">
      <ButtonPrimary />
      <ButtonSecondary />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[960px] items-center justify-center left-0 pb-[400px] pt-[80px] px-[88px] top-0 w-[1440px]" data-name="Hero Content">
      <Badge />
      <Frame />
      <div className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[80px] text-center text-white tracking-[-2px] w-[860px]">
        <p className="leading-[1.05] mb-0">Capital for traders</p>
        <p className="leading-[1.05]">who can prove it.</p>
      </div>
      <Frame1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] not-italic relative shrink-0 text-[#9da2b4] text-[18px] text-center w-[520px]">Pass a transparent evaluation and access a simulated account of up to $200K with static drawdown, no time limit, and clearly defined reward conditions.</p>
      <Frame2 />
      <CtaRow />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d={svgPaths.p7f4ec00} fill="var(--fill-0, #D4A853)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d={svgPaths.p7f4ec00} fill="var(--fill-0, #D4A853)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d={svgPaths.p7f4ec00} fill="var(--fill-0, #D4A853)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d={svgPaths.p7f4ec00} fill="var(--fill-0, #D4A853)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d={svgPaths.p7f4ec00} fill="var(--fill-0, #D4A853)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Frame">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Rating() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[560px] top-[970px]" data-name="Rating">
      <Frame4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9da2b4] text-[12px] whitespace-nowrap">
        <span className="leading-[normal]">Rated Excellent</span>
        <span className="leading-[normal]">{` · 3,400+ verified reviews`}</span>
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#080a12] content-stretch flex flex-col h-[1020px] items-center overflow-clip pb-[120px] pt-[100px] px-[88px] relative shrink-0 w-[1440px]" data-name="Hero">
      <OrbitalCanvas />
      <HeroContent />
      <Rating />
    </div>
  );
}

function SwitchTrack() {
  return (
    <div className="h-[22px] relative shrink-0 w-[40px]" data-name="switch-track">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 22">
        <g id="switch-track">
          <rect fill="var(--fill-0, #1F2937)" height="22" rx="11" width="40" />
          <circle cx="11" cy="11" fill="var(--fill-0, white)" id="switch-thumb" r="9" />
        </g>
      </svg>
    </div>
  );
}

function TogglePill() {
  return (
    <button className="bg-[#14151b] content-stretch cursor-pointer flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="toggle-pill">
      <div aria-hidden className="absolute border border-[#20222b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] text-left uppercase whitespace-nowrap">WITHOUT FYT</p>
      <SwitchTrack />
    </button>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[24px] items-center relative shrink-0 text-center w-full" data-name="Frame">
      <p className="font-['Newsreader:Regular',sans-serif] leading-[1.1] relative shrink-0 text-[64px] text-white w-[840px]">What makes traditional evaluations harder.</p>
      <p className="font-['Inter:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#9ca3af] text-[20px] w-[640px]">Common restrictions and unclear conditions can make evaluations harder than they need to be.</p>
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
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="icon-wrap">
      <X />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="list-item">
      <IconWrap />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#73808f] text-[18px]">Trailing drawdown that changes with performance</p>
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
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="icon-wrap">
      <X1 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="list-item">
      <IconWrap1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#73808f] text-[18px]">Long or fixed payout waiting periods</p>
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
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="icon-wrap">
      <X2 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="list-item">
      <IconWrap2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#73808f] text-[18px]">Rules spread across multiple pages</p>
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
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="icon-wrap">
      <X3 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="list-item">
      <IconWrap3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#73808f] text-[18px]">Restrictions that limit trading styles</p>
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
    <div className="bg-[rgba(75,85,99,0.15)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="icon-wrap">
      <X4 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="list-item">
      <IconWrap4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#73808f] text-[18px]">Conditions that are difficult to compare</p>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="bg-[#14151b] content-stretch flex flex-col gap-[8px] items-start p-[48px] relative rounded-[24px] shrink-0 w-[720px]" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#20222b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] tracking-[2.64px] whitespace-nowrap">THE NETWORK</p>
      <div className="font-['Newsreader:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#eef0f6] text-[44px] text-center tracking-[-0.792px] whitespace-nowrap">
        <p className="leading-[1.06] mb-0 whitespace-pre">{`Rewards moving across a global `}</p>
        <p className="leading-[1.06] whitespace-pre">trading community.</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[18px] text-center w-[560px]">See the global reach of the FYT community and the scale of rewards delivered to traders worldwide.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #D4A853)" id="Ellipse" r="3.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[1.68px] whitespace-nowrap">GLOBAL REWARD NETWORK</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D4A853)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f6478] text-[12px] whitespace-nowrap">Funded hub</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #A6BFD9)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f6478] text-[12px] whitespace-nowrap">Settlement</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pb-[18px] px-[22px] relative size-full">
          <Frame13 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function RoutesMap() {
  return (
    <div className="bg-[#0b0c11] h-[360px] overflow-clip relative shrink-0 w-full" data-name="Routes map">
      <div className="absolute inset-[0_0_-1.36%_0] opacity-30" data-name="World map background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.77%] left-[-1.35%] max-w-none top-[-12.89%] w-[101.35%]" src={imgWorldMapBackground} />
        </div>
      </div>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1264 360">
        <path d={svgPaths.p243d4500} id="Vector" opacity="0.6" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
      </svg>
      <div className="absolute bottom-[72.6%] left-[29.4%] right-1/2 top-[16.98%]" data-name="Vector">
        <div className="absolute inset-[-0.67%_0_-0.6%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260.565 37.9766">
            <path d={svgPaths.p3d51e500} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[64%] left-1/2 right-[34.6%] top-[20.63%]" data-name="Vector">
        <div className="absolute inset-[-0.45%_0_-0.37%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 194.837 55.7763">
            <path d={svgPaths.p1022da80} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[50.8%] left-1/2 right-[21.2%] top-[20%]" data-name="Vector">
        <div className="absolute inset-[-0.24%_0_-0.19%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 364.214 105.581">
            <path d={svgPaths.p2cb23a80} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.4%_62.9%_37%_29.4%]" data-name="Vector">
        <div className="absolute inset-[-0.18%_-0.24%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.6373 128.496">
            <path d={svgPaths.p1f975f00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.54%_29.8%_60.6%_65.4%]" data-name="Vector">
        <div className="absolute inset-[-1.8%_-0.22%_-1.53%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.8555 14.3691">
            <path d={svgPaths.p3ceba6e0} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.2%_11.2%_50.8%_78.8%]" data-name="Vector">
        <div className="absolute inset-[-0.37%_0_-0.25%_-0.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.586 68.8206">
            <path d={svgPaths.pbdf2380} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.11%_8%_31.2%_78.8%]" data-name="Vector">
        <div className="absolute inset-[-0.35%_-0.1%_-0.26%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 167.031 71.3103">
            <path d={svgPaths.p3740cf80} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[53.6%] left-1/2 right-[49.1%] top-[21.4%]" data-name="Vector">
        <div className="absolute inset-[-0.11%_-2.19%_0_-2.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8544 90.1172">
            <path d={svgPaths.p13d4e600} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.73%_70.6%_72.6%_27.9%]" data-name="Vector">
        <div className="absolute inset-[-4.17%_-0.83%_-3.23%_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.153 6.44393">
            <path d={svgPaths.p2f221a00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[36%_34.6%_35.4%_57.8%]" data-name="Vector">
        <div className="absolute inset-[-0.24%_0_-0.11%_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.3436 103.319">
            <path d={svgPaths.p1c684880} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.4%_70.6%_60.8%_22.5%]" data-name="Vector">
        <div className="absolute inset-[-0.59%_0_-0.42%_-0.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.3949 42.9207">
            <path d={svgPaths.pc4db400} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.2%_8%_31.2%_88.8%]" data-name="Vector">
        <div className="absolute inset-[-0.12%_-0.61%_0_-0.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8769 139.173">
            <path d={svgPaths.p1a726800} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.54%_29.8%_60.6%_65.4%]" data-name="Vector">
        <div className="absolute inset-[-1.8%_-0.22%_-1.53%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.8555 14.3691">
            <path d={svgPaths.p33cff200} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[19.6%_49.1%_76.8%_49.1%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.76%_49.68%_77.96%_49.68%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.608">
          <path d={svgPaths.p3f475930} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[25.6%_69.7%_70.8%_28.5%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[26.76%_70.28%_71.96%_29.08%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.608">
          <path d={svgPaths.p3f475930} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[34.2%_33.7%_62.2%_64.5%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.36%_34.28%_63.36%_65.08%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.608">
          <path d={svgPaths.p3f475930} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[37.6%_28.9%_58.8%_69.3%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[38.76%_29.48%_59.96%_69.88%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.608">
          <path d={svgPaths.p3f475930} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[47.4%_20.3%_49%_77.9%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[48.56%_20.88%_50.16%_78.48%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.608">
          <path d={svgPaths.p3f475930} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[28.4%_10.3%_68%_87.9%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.56%_10.88%_69.16%_88.48%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.608">
          <path d={svgPaths.p3f475930} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[61.2%_62%_35.2%_36.2%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.36%_62.58%_36.36%_36.78%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.60802">
          <path d={svgPaths.pbea3a00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[67%_7.1%_29.4%_91.1%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[68.16%_7.68%_30.56%_91.68%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.60802">
          <path d={svgPaths.pbea3a00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-[51.8%] left-1/2 right-[48.2%] top-[44.6%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.76%_48.78%_52.96%_50.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.608">
          <path d={svgPaths.p3f475930} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[24%_71.2%_72.4%_27%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.16%_71.78%_73.56%_27.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.608">
          <path d={svgPaths.p3f475930} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[62.8%_41.3%_33.6%_56.9%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.96%_41.88%_34.76%_57.48%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08963 4.60802">
          <path d={svgPaths.pbea3a00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[37.4%_76.6%_59%_21.6%]" data-name="Vector">
        <div className="absolute inset-[-1.93%_-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.252 13.46">
            <path d={svgPaths.p2afb6700} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[38.56%_77.18%_60.16%_22.18%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08959 4.608">
          <path d={svgPaths.p2f45fb00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.08" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute left-[277px] size-[6px] top-[137px]" data-name="Connection Node">
        <div className="absolute inset-[-333.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
            <g filter="url(#filter0_d_1_1140)" id="Connection Node">
              <circle cx="23" cy="23" fill="var(--fill-0, #D4A853)" r="3" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46" id="filter0_d_1_1140" width="46" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1140" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1140" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1140" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[178px] size-[4px] top-[158px]" data-name="Connection Node">
        <div className="absolute inset-[-500%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_d_1_1088)" id="Connection Node">
              <circle cx="22" cy="22" fill="var(--fill-0, #D4A853)" r="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_1_1088" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1088" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1088" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1088" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[597px] size-[6px] top-[117px]" data-name="Connection Node">
        <div className="absolute inset-[-333.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
            <g filter="url(#filter0_d_1_1140)" id="Connection Node">
              <circle cx="23" cy="23" fill="var(--fill-0, #D4A853)" r="3" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46" id="filter0_d_1_1140" width="46" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1140" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1140" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1140" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[648px] size-[4px] top-[138px]" data-name="Connection Node">
        <div className="absolute inset-[-500%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_d_1_1088)" id="Connection Node">
              <circle cx="22" cy="22" fill="var(--fill-0, #D4A853)" r="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_1_1088" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1088" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1088" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1088" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[698px] size-[4px] top-[178px]" data-name="Connection Node">
        <div className="absolute inset-[-500%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_d_1_1088)" id="Connection Node">
              <circle cx="22" cy="22" fill="var(--fill-0, #D4A853)" r="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_1_1088" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1088" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1088" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1088" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[897px] size-[6px] top-[157px]" data-name="Connection Node">
        <div className="absolute inset-[-333.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
            <g filter="url(#filter0_d_1_1140)" id="Connection Node">
              <circle cx="23" cy="23" fill="var(--fill-0, #D4A853)" r="3" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46" id="filter0_d_1_1140" width="46" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1140" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1140" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1140" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[948px] size-[4px] top-[198px]" data-name="Connection Node">
        <div className="absolute inset-[-500%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_d_1_1088)" id="Connection Node">
              <circle cx="22" cy="22" fill="var(--fill-0, #D4A853)" r="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_1_1088" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1088" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1088" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1088" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[798px] size-[4px] top-[278px]" data-name="Connection Node">
        <div className="absolute inset-[-500%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_d_1_1088)" id="Connection Node">
              <circle cx="22" cy="22" fill="var(--fill-0, #D4A853)" r="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_1_1088" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1088" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1088" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1088" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[578px] size-[4px] top-[298px]" data-name="Connection Node">
        <div className="absolute inset-[-500%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_d_1_1088)" id="Connection Node">
              <circle cx="22" cy="22" fill="var(--fill-0, #D4A853)" r="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_1_1088" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1088" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1088" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1088" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1048px] size-[4px] top-[258px]" data-name="Connection Node">
        <div className="absolute inset-[-500%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_d_1_1088)" id="Connection Node">
              <circle cx="22" cy="22" fill="var(--fill-0, #D4A853)" r="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_1_1088" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_1088" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.658824 0 0 0 0 0.32549 0 0 0 0.7 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1088" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1088" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] px-[26px] py-[20px] relative size-full whitespace-nowrap">
          <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[36px] tracking-[-0.72px]">$2.6M+</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#646978] text-[12px] tracking-[2px] uppercase">Rewards paid to traders</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] px-[26px] py-[20px] relative size-full whitespace-nowrap">
          <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[36px] tracking-[-0.72px]">14,000+</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#646978] text-[12px] tracking-[2px] uppercase">Funded traders worldwide</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] px-[26px] py-[20px] relative size-full whitespace-nowrap">
          <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[36px] tracking-[-0.72px]">105+</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#646978] text-[12px] tracking-[2px] uppercase">Countries represented</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] px-[26px] py-[20px] relative size-full whitespace-nowrap">
          <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[36px] tracking-[-0.72px]">105 min</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#646978] text-[12px] tracking-[2px] uppercase">Median payout time</p>
        </div>
      </div>
    </div>
  );
}

function MapStats() {
  return (
    <div className="content-stretch flex gap-px items-start overflow-clip relative shrink-0 w-full" data-name="Map stats">
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function MapPanel() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0e111b] items-start overflow-clip pt-[22px] relative rounded-[16px] shrink-0 to-[#0a0c15] w-full" data-name="Map panel">
      <Frame12 />
      <RoutesMap />
      <MapStats />
    </div>
  );
}

function GlobalNetwork() {
  return (
    <div className="relative shrink-0 w-full" data-name="Global network">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[52px] items-center px-[88px] py-[104px] relative size-full">
          <Frame11 />
          <MapPanel />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] tracking-[2.64px] whitespace-nowrap">PRICING</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[44px] tracking-[-0.792px] whitespace-nowrap">Clear pricing. No surprise conditions.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[18px] w-[min-content]">Compare account size, profit targets, drawdown limits, reward split, and registration fee before you begin.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] tracking-[0.56px] whitespace-nowrap">Two-Step</p>
      <div className="bg-[#d4a853] h-[2px] relative shrink-0 w-[72px]" data-name="Rectangle" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] tracking-[0.56px] whitespace-nowrap">One-Step</p>
      <div className="bg-[rgba(212,168,83,0)] h-[2px] relative shrink-0 w-[72px]" data-name="Rectangle" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Frame">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[36px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">$5K</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[36px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">$10K</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[36px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">$25K</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[36px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">$50K</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(212,168,83,0.12)] h-[36px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">$100K</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.34)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[36px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">$200K</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Frame">
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function PriceControls() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Price controls">
      <Frame22 />
      <Frame25 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[10px] tracking-[1.6px] whitespace-nowrap">RECOMMENDED</p>
      <div className="bg-[rgba(255,255,255,0.08)] flex-[1_0_0] h-px min-w-px relative" data-name="Rectangle" />
    </div>
  );
}

function Frame33() {
  return <div className="h-[12px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame34() {
  return <div className="h-[8px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-baseline leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[40px] tracking-[-0.8px]">$269</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">one-time fee</p>
    </div>
  );
}

function Frame36() {
  return <div className="h-[4px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame37() {
  return <div className="h-[16px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame39() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic overflow-clip py-[12px] relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#e4c382]">Profit target</p>
      <p className="relative shrink-0 text-[#eef0f6]">10% / 6%</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic overflow-clip py-[12px] relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#e4c382]">Max daily loss</p>
      <p className="relative shrink-0 text-[#eef0f6]">5%</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic overflow-clip py-[12px] relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#e4c382]">Max overall loss</p>
      <p className="relative shrink-0 text-[#eef0f6]">10%</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic overflow-clip py-[12px] relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#e4c382]">Profit split</p>
      <p className="relative shrink-0 text-[#eef0f6]">Up to 100%</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic overflow-clip py-[12px] relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#e4c382]">Drawdown type</p>
      <p className="relative shrink-0 text-[#eef0f6]">Static</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame39 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame40 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame41 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame42 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame43 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame44() {
  return <div className="h-[16px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame45() {
  return (
    <div className="bg-[#d4a853] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-center justify-center overflow-clip py-[13px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Start $100K Evaluation — $269</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.32)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function CardRecommended() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#0e111b] min-w-px relative rounded-[16px] to-[#0a0c15]" data-name="Card / Recommended">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[30px] relative size-full">
          <Frame32 />
          <Frame33 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">Two-Step · $100K</p>
          <Frame34 />
          <Frame35 />
          <Frame36 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[0px] w-[min-content]">
            <span className="leading-[normal] text-[14px]">{`Fee `}</span>
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] text-[#d4a853] text-[14px]">100% refundable</span>
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] text-[14px]">{` `}</span>
            <span className="leading-[normal] text-[14px]">after your second reward.</span>
          </p>
          <Frame37 />
          <Frame38 />
          <Frame44 />
          <Frame45 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.34)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame46() {
  return <div className="h-[4px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame48 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#d4d6e0] text-[14px]">No consistency rule and no time limit to complete</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame50 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#d4d6e0] text-[14px]">Weekly rewards, free resets, and first reward on demand</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame52 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#d4d6e0] text-[14px]">News trading and weekend holding permitted</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame54 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#d4d6e0] text-[14px]">Platform 5 and Match Trader, on web and mobile</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame56 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#d4d6e0] text-[14px]">Card and crypto accepted, settlement in 24 hours</p>
    </div>
  );
}

function CardIncluded() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#0e111b] min-w-px relative rounded-[16px] self-stretch to-[#0a0c15]" data-name="Card / Included">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[30px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">Included with every account</p>
          <Frame46 />
          <Frame47 />
          <Frame49 />
          <Frame51 />
          <Frame53 />
          <Frame55 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PriceCards() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Price cards">
      <CardRecommended />
      <CardIncluded />
    </div>
  );
}

function Pricing() {
  return (
    <div className="relative shrink-0 w-full" data-name="Pricing">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start px-[88px] py-[104px] relative size-full">
          <Frame21 />
          <PriceControls />
          <PriceCards />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.06] min-w-full relative shrink-0 text-[#eef0f6] text-[52px] tracking-[-0.936px] w-[min-content]">A transparent path to simulated funding.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[18px] w-[560px]">Select a program, meet clearly defined objectives, and progress to a simulated funded account without an unnecessary time limit.</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start pb-[64px] pt-[104px] px-[88px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[2.64px] whitespace-nowrap">[ THE PATH TO CAPITAL ]</p>
        <Frame58 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] tracking-[1.92px]">Select Account</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#e4c382]">Choose your challenge size</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative text-center" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] tracking-[1.92px]">Trade Evaluation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#e4c382]">Hit the profit target</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-end min-w-px relative text-right" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] tracking-[1.92px]">Keep Rewards</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#e4c382]">Get paid, keep profits</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Frame">
      <Frame61 />
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute left-0 size-[20px] top-[6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <rect fill="var(--fill-0, #D4A854)" height="20" rx="10" width="20" />
          <circle cx="10" cy="10" fill="var(--fill-0, #0A0A0F)" id="Ellipse" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[24px] top-[4px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <rect fill="var(--fill-0, #D4A853)" height="22" rx="11" width="22" x="1" y="1" />
          <rect height="22" rx="11" stroke="var(--stroke-0, #D4A853)" strokeWidth="2" width="22" x="1" y="1" />
          <circle cx="12" cy="12" fill="var(--fill-0, #EEF0F6)" id="Ellipse" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute right-0 size-[20px] top-[6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <rect fill="var(--fill-0, #262933)" height="20" rx="10" width="20" />
          <rect height="19" rx="9.5" stroke="var(--stroke-0, white)" strokeOpacity="0.1" width="19" x="0.5" y="0.5" />
          <circle cx="10" cy="10" fill="var(--fill-0, #666B7A)" id="Ellipse" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame66 />
      <div className="flex-[1_0_0] h-[2px] min-w-px relative" style={{ backgroundImage: "linear-gradient(90deg, rgba(212, 168, 84, 0.8) 0%, rgba(212, 168, 84, 0.9) 47.051%, rgba(64, 69, 82, 0.4) 51.051%, rgba(51, 56, 69, 0.3) 100%)" }} data-name="Rectangle" />
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="Frame">
      <Frame65 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start px-[88px] relative size-full">
        <Frame60 />
        <Frame64 />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex font-['Newsreader:Medium',sans-serif] font-medium gap-[20px] items-baseline relative shrink-0" data-name="Frame">
      <p className="leading-none relative shrink-0 text-[96px] text-[rgba(255,255,255,0.03)]">02</p>
      <p className="leading-[normal] relative shrink-0 text-[#eef0f6] text-[36px]">Trade the Evaluation</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[1.92px]">PROVE</p>
      <Frame72 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-right">
          <path d={svgPaths.p2b607f80} id="Vector" stroke="var(--stroke-0, #E4C382)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">View all steps</p>
      <ArrowRight />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame71 />
      <Frame73 />
    </div>
  );
}

function Target() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="target">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1057)" id="target">
          <path d={svgPaths.p34884c00} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1057">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeIcon() {
  return (
    <div className="bg-[rgba(212,168,83,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[28px]" data-name="badge-icon">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Target />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[rgba(212,168,83,0.08)] content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <BadgeIcon />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Profit Target</p>
    </div>
  );
}

function Content() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="content">
      <p className="font-['Newsreader:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#eef0f6] text-[22px] w-full">Clear profit goal to hit</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-full">Reach the profit target within a fair, static-drawdown ruleset. One objective, no hidden traps.</p>
    </div>
  );
}

function CardProfitTarget() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#0e111b] min-w-px relative rounded-[16px] to-[#0a0c15]" data-name="card-profit-target">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[28px] relative size-full">
          <div className="absolute bottom-[-70px] right-[-70px] size-[220px]" data-name="glow">
            <div className="absolute inset-[-40.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
                <g filter="url(#filter0_f_1_1068)" id="glow">
                  <circle cx="200" cy="200" fill="var(--fill-0, #D4A853)" fillOpacity="0.0705882" r="110" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="400" id="filter0_f_1_1068" width="400" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_1068" stdDeviation="45" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Badge1 />
          <Content />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_28px_-12px_rgba(212,168,83,0.07),0px_18px_44px_-14px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1016)" id="clock">
          <path d={svgPaths.p8765900} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1016">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeIcon1() {
  return (
    <div className="bg-[rgba(212,168,83,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[28px]" data-name="badge-icon">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Clock />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[rgba(212,168,83,0.08)] content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <BadgeIcon1 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">No Time Limit</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="content">
      <p className="font-['Newsreader:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#eef0f6] text-[22px] w-full">Trade at your own pace</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-full">No deadline pressure. Take the time you need. News trading and weekends are fully permitted.</p>
    </div>
  );
}

function CardNoTimeLimit() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#0e111b] min-w-px relative rounded-[16px] to-[#0a0c15]" data-name="card-no-time-limit">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[28px] relative size-full">
          <div className="absolute bottom-[-70px] right-[-70px] size-[220px]" data-name="glow">
            <div className="absolute inset-[-40.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
                <g filter="url(#filter0_f_1_1068)" id="glow">
                  <circle cx="200" cy="200" fill="var(--fill-0, #D4A853)" fillOpacity="0.0705882" r="110" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="400" id="filter0_f_1_1068" width="400" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_1068" stdDeviation="45" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Badge2 />
          <Content1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_28px_-12px_rgba(212,168,83,0.07),0px_18px_44px_-14px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-1">
      <CardProfitTarget />
      <CardNoTimeLimit />
    </div>
  );
}

function Shield1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="shield">
          <path d={svgPaths.pae18800} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon2() {
  return (
    <div className="bg-[rgba(212,168,83,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[28px]" data-name="badge-icon">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Shield1 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[rgba(212,168,83,0.08)] content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <BadgeIcon2 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Static Drawdown</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="content">
      <p className="font-['Newsreader:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#eef0f6] text-[22px] w-full">Fixed, transparent rules</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-full">Drawdown limits are set from your starting balance and never move. Know your risk boundaries upfront.</p>
    </div>
  );
}

function CardStaticDrawdown() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#0e111b] min-w-px relative rounded-[16px] to-[#0a0c15]" data-name="card-static-drawdown">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[28px] relative size-full">
          <div className="absolute bottom-[-70px] right-[-70px] size-[220px]" data-name="glow">
            <div className="absolute inset-[-40.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
                <g filter="url(#filter0_f_1_1068)" id="glow">
                  <circle cx="200" cy="200" fill="var(--fill-0, #D4A853)" fillOpacity="0.0705882" r="110" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="400" id="filter0_f_1_1068" width="400" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_1068" stdDeviation="45" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Badge3 />
          <Content2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_28px_-12px_rgba(212,168,83,0.07),0px_18px_44px_-14px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1010)" id="check-circle">
          <path d={svgPaths.p39f7ce80} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1010">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeIcon3() {
  return (
    <div className="bg-[rgba(212,168,83,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[28px]" data-name="badge-icon">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <CheckCircle />
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[rgba(212,168,83,0.08)] content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <BadgeIcon3 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">No Consistency Rule</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="content">
      <p className="font-['Newsreader:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#eef0f6] text-[22px] w-full">Trade your strategy freely</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-full">No day-profit caps or forced trading patterns. Just reach the target however your edge dictates.</p>
    </div>
  );
}

function CardNoConsistencyRule() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#0e111b] min-w-px relative rounded-[16px] to-[#0a0c15]" data-name="card-no-consistency-rule">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[28px] relative size-full">
          <div className="absolute bottom-[-70px] right-[-70px] size-[220px]" data-name="glow">
            <div className="absolute inset-[-40.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
                <g filter="url(#filter0_f_1_1068)" id="glow">
                  <circle cx="200" cy="200" fill="var(--fill-0, #D4A853)" fillOpacity="0.0705882" r="110" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="400" id="filter0_f_1_1068" width="400" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_1068" stdDeviation="45" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Badge4 />
          <Content3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_28px_-12px_rgba(212,168,83,0.07),0px_18px_44px_-14px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-2">
      <CardStaticDrawdown />
      <CardNoConsistencyRule />
    </div>
  );
}

function EvaluationFeatureCards() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Evaluation - Feature Cards">
      <Row />
      <Row1 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[104px] pt-[48px] px-[88px] relative size-full">
        <Frame70 />
        <EvaluationFeatureCards />
      </div>
    </div>
  );
}

function Evaluation() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Evaluation">
      <Frame57 />
      <Frame59 />
      <Frame69 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[640px]" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] tracking-[2.64px] whitespace-nowrap">WHY TRADERS CHOOSE FYT</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.06] min-w-full relative shrink-0 text-[#eef0f6] text-[44px] tracking-[-0.792px] w-[min-content]">Built for people who take this seriously.</p>
    </div>
  );
}

function Markers() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[normal] not-italic relative shrink-0 text-[10px] w-full whitespace-nowrap" data-name="markers">
      <p className="relative shrink-0 text-[rgba(255,255,255,0.13)]">0%</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.13)]">25%</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.13)]">50%</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.13)]">75%</p>
      <p className="relative shrink-0 text-[#d4a853]">100%</p>
    </div>
  );
}

function ProgressFill() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[#a07830] h-full min-w-px relative rounded-[4px] to-[#e4c382] via-[#d4a853] via-[60%]" data-name="progress-fill">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pr-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">100%</p>
        </div>
      </div>
    </div>
  );
}

function ProgressTrack() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] h-[8px] relative rounded-[4px] shrink-0 w-full" data-name="progress-track">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <ProgressFill />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Ticks() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="ticks">
      <div className="bg-[rgba(255,255,255,0.08)] h-[8px] relative rounded-[1px] shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.08)] h-[8px] relative rounded-[1px] shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.08)] h-[8px] relative rounded-[1px] shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.08)] h-[8px] relative rounded-[1px] shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[#d4a853] h-[8px] relative rounded-[1px] shrink-0 w-px" data-name="Rectangle" />
    </div>
  );
}

function SubFill() {
  return <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(160,120,48,0.25)] h-full min-w-px relative rounded-[4px] to-[rgba(212,168,83,0.25)]" data-name="sub-fill-1" />;
}

function SubTrack() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex h-[6px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="sub-track-1">
      <SubFill />
    </div>
  );
}

function SubFill1() {
  return <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(160,120,48,0.19)] h-full min-w-px relative rounded-[4px] to-[rgba(212,168,83,0.19)]" data-name="sub-fill-2" />;
}

function SubTrack1() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex h-[6px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="sub-track-2">
      <SubFill1 />
    </div>
  );
}

function SubBars() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="sub-bars">
      <SubTrack />
      <SubTrack1 />
    </div>
  );
}

function GraphicProfit() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="graphic-profit">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-end pb-[32px] pt-[40px] px-[52px] relative size-full">
          <Markers />
          <ProgressTrack />
          <Ticks />
          <SubBars />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 top-[calc(50%+40px)] w-[380px]" data-name="glow">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 180">
              <ellipse cx="190" cy="90" fill="url(#paint0_radial_1_1119)" id="glow" rx="190" ry="90" />
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(190 90) scale(190 90)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1119" r="1">
                  <stop stopColor="#D4A853" stopOpacity="0.12549" />
                  <stop offset="0.5" stopColor="#D4A853" stopOpacity="0.0313726" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="headline">
      <p className="font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#f0f2fa] text-[88px] tracking-[-2.64px]">100%</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#c8ccde] text-[22px]">Keep what you earn.</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start pb-[52px] px-[52px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a07830] text-[12px] tracking-[1.68px] whitespace-nowrap">PROFIT SPLIT</p>
        <Headline />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.75] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[14px] w-[min-content]">Scale your split as you grow - every dollar stays with you.</p>
      </div>
    </div>
  );
}

function CardProfitSplit() {
  return (
    <div className="bg-[#0c0e18] flex-[1_0_0] h-[500px] min-w-px relative rounded-[28px]" data-name="card-profit-split">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <GraphicProfit />
        <Content4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function ClockFace() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#0f1120] content-stretch flex flex-col gap-[6px] items-center justify-center left-1/2 rounded-[60px] size-[120px] top-1/2" data-name="clock-face">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[10px] tracking-[0.8px] whitespace-nowrap">PAYOUT</p>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f0f2fa] text-[28px] whitespace-nowrap">105</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5a5f7a] text-[10px] whitespace-nowrap">MIN</p>
    </div>
  );
}

function GraphicPayout() {
  return (
    <div className="bg-[#0c0e18] h-[240px] relative shrink-0 w-full" data-name="graphic-payout">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[20px] pt-[36px] px-[52px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[220px] top-1/2" data-name="ambient-glow">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 220">
              <circle cx="110" cy="110" fill="url(#paint0_radial_1_1008)" id="ambient-glow" r="110" />
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(110 110) scale(110)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1008" r="1">
                  <stop stopColor="#D4A853" stopOpacity="0.101961" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[180px] top-1/2" data-name="ring-outer">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
              <circle cx="90" cy="90" id="ring-outer" r="89.5" stroke="var(--stroke-0, white)" strokeOpacity="0.0705882" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[180px] top-1/2" data-name="ring-progress">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
              <g id="ring-progress">
                <mask fill="white" id="path-1-inside-1_1_1006">
                  <path d={svgPaths.p2ffd0d60} />
                </mask>
                <path d={svgPaths.p2ffd0d60} mask="url(#path-1-inside-1_1_1006)" stroke="var(--stroke-0, #D4A853)" strokeWidth="5" />
              </g>
            </svg>
          </div>
          <ClockFace />
        </div>
      </div>
    </div>
  );
}

function Headline1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="headline">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0.9] not-italic relative shrink-0 text-[#d4a853] text-[72px] tracking-[-1.44px]">105 min</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#c8ccde] text-[22px]">Median payout</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start pb-[52px] px-[52px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a07830] text-[12px] tracking-[1.68px] whitespace-nowrap">SPEED</p>
        <Headline1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.75] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[14px] w-[min-content]">From request to funded - faster than any firm in the space.</p>
      </div>
    </div>
  );
}

function CardMedianPayout() {
  return (
    <div className="bg-[#0c0e18] flex-[1_0_0] h-[500px] min-w-px relative rounded-[28px]" data-name="card-median-payout">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <GraphicPayout />
        <Content5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="row-1">
      <CardProfitSplit />
      <CardMedianPayout />
    </div>
  );
}

function GridH() {
  return (
    <div className="absolute content-stretch flex flex-col h-[180px] items-start justify-between left-0 pt-[16px] right-0 top-0" data-name="grid-h">
      <div className="bg-[rgba(255,255,255,0.02)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.02)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <div className="bg-[rgba(212,168,83,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.02)] h-px relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function GridV() {
  return (
    <div className="absolute content-stretch flex h-[180px] items-start justify-between left-[48px] top-0 w-[320px]" data-name="grid-v">
      <div className="bg-[rgba(255,255,255,0.02)] h-full relative shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.02)] h-full relative shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.02)] h-full relative shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.02)] h-full relative shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.02)] h-full relative shrink-0 w-px" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.02)] h-full relative shrink-0 w-px" data-name="Rectangle" />
    </div>
  );
}

function FloorLabel() {
  return (
    <div className="absolute bg-[rgba(212,168,83,0.09)] content-stretch flex gap-[4px] items-center left-[52px] px-[7px] py-[3px] rounded-[4px] top-[148px]" data-name="floor-label">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.21)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-[#d4a853] relative rounded-[2px] shrink-0 size-[4px]" data-name="floor-dot" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[8px] tracking-[0.96px] whitespace-nowrap">FIXED FLOOR</p>
    </div>
  );
}

function GraphicDrawdown() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start overflow-clip relative shrink-0 w-full" data-name="graphic-drawdown">
      <GridH />
      <GridV />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[6px] not-italic text-[8px] text-[rgba(255,255,255,0.19)] top-[18px] whitespace-nowrap">105%</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[6px] not-italic text-[8px] text-[rgba(255,255,255,0.13)] top-[54px] whitespace-nowrap">102%</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[6px] not-italic text-[8px] text-[rgba(255,255,255,0.13)] top-[90px] whitespace-nowrap">100%</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[6px] not-italic text-[8px] text-[rgba(212,168,83,0.56)] top-[126px] whitespace-nowrap">90%</p>
      <div className="absolute bg-gradient-to-b from-[rgba(212,168,83,0.13)] h-[110px] left-[48px] to-[rgba(0,0,0,0)] top-[20px] via-[60%] via-[rgba(212,168,83,0.03)] w-[340px]" data-name="equity-fill" />
      <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0.38)] h-[1.5px] left-[48px] rounded-[1px] to-[rgba(255,255,255,0.56)] top-[58px] w-[44px]" data-name="curve-seg-1" />
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-[18px] left-[88px] rounded-[1px] top-[42px] w-[2px]" data-name="curve-seg-1b" />
      <div className="absolute bg-[rgba(255,255,255,0.5)] h-[1.5px] left-[90px] rounded-[1px] top-[40px] w-[50px]" data-name="curve-seg-2" />
      <div className="absolute bg-[rgba(255,255,255,0.07)] h-[22px] left-[138px] rounded-[1px] top-[40px] w-[2px]" data-name="curve-seg-3" />
      <div className="absolute bg-[rgba(255,255,255,0.44)] h-[1.5px] left-[140px] rounded-[1px] top-[60px] w-[42px]" data-name="curve-seg-3b" />
      <div className="absolute bg-[rgba(255,255,255,0.07)] h-[14px] left-[180px] rounded-[1px] top-[48px] w-[2px]" data-name="curve-seg-4" />
      <div className="absolute bg-[rgba(255,255,255,0.46)] h-[1.5px] left-[182px] rounded-[1px] top-[46px] w-[38px]" data-name="curve-seg-4b" />
      <div className="absolute bg-[rgba(255,255,255,0.07)] h-[18px] left-[218px] rounded-[1px] top-[30px] w-[2px]" data-name="curve-seg-5" />
      <div className="absolute bg-[rgba(255,255,255,0.52)] h-[1.5px] left-[220px] rounded-[1px] top-[28px] w-[46px]" data-name="curve-seg-5b" />
      <div className="absolute bg-[rgba(255,255,255,0.06)] h-[38px] left-[264px] rounded-[1px] top-[28px] w-[2px]" data-name="curve-seg-6" />
      <div className="absolute bg-[rgba(255,255,255,0.4)] h-[1.5px] left-[266px] rounded-[1px] top-[64px] w-[40px]" data-name="curve-seg-6b" />
      <div className="absolute bg-[rgba(255,255,255,0.06)] h-[16px] left-[304px] rounded-[1px] top-[50px] w-[2px]" data-name="curve-seg-7" />
      <div className="absolute bg-[rgba(255,255,255,0.33)] h-[1.5px] left-[306px] rounded-[1px] top-[48px] w-[82px]" data-name="curve-seg-7b" />
      <div className="absolute left-[380px] size-[10px] top-[42px]" data-name="current-dot-outer">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #D4A853)" fillOpacity="0.188235" id="current-dot-outer" r="5" />
        </svg>
      </div>
      <div className="absolute left-[383px] size-[4px] top-[45px]" data-name="current-dot-inner">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #DCBE82)" id="current-dot-inner" r="2" />
        </svg>
      </div>
      <div className="absolute bg-gradient-to-r from-[#d4a853] h-[1.5px] left-[48px] rounded-[1px] to-[rgba(212,168,83,0.38)] top-[140px] via-1/2 via-[#d4a853] w-[340px]" data-name="floor-line-main" />
      <div className="absolute bg-gradient-to-r from-[rgba(212,168,83,0.15)] h-[10px] left-[48px] to-[rgba(0,0,0,0)] top-[136px] via-[60%] via-[rgba(212,168,83,0.03)] w-[240px]" data-name="floor-glow" />
      <div className="absolute bg-[#d4a853] h-[1.5px] left-[48px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-1" />
      <div className="absolute bg-[rgba(212,168,83,0.56)] h-[1.5px] left-[76px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-2" />
      <div className="absolute bg-[rgba(212,168,83,0.5)] h-[1.5px] left-[104px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-3" />
      <div className="absolute bg-[rgba(212,168,83,0.44)] h-[1.5px] left-[132px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-4" />
      <div className="absolute bg-[rgba(212,168,83,0.38)] h-[1.5px] left-[160px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-5" />
      <div className="absolute bg-[rgba(212,168,83,0.31)] h-[1.5px] left-[188px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-6" />
      <div className="absolute bg-[rgba(212,168,83,0.25)] h-[1.5px] left-[216px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-7" />
      <div className="absolute bg-[rgba(212,168,83,0.19)] h-[1.5px] left-[244px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-8" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-[1.5px] left-[272px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-9" />
      <div className="absolute bg-[rgba(212,168,83,0.08)] h-[1.5px] left-[300px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-10" />
      <div className="absolute bg-[rgba(212,168,83,0.06)] h-[1.5px] left-[328px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-11" />
      <div className="absolute bg-[rgba(212,168,83,0.03)] h-[1.5px] left-[356px] rounded-[1px] top-[140px] w-[20px]" data-name="floor-dash-12" />
      <div className="absolute bg-gradient-to-b from-[rgba(212,168,83,0.08)] h-[90px] left-[48px] to-[rgba(212,168,83,0.02)] top-[50px] w-[340px]" data-name="zone-fill" />
      <FloorLabel />
      <div className="absolute bg-gradient-to-b from-[#0c0e18] h-[20px] left-0 right-0 to-[rgba(0,0,0,0)] top-0" data-name="top-fade" />
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[40px] left-0 right-0 to-[#0c0e18] top-[160px]" data-name="bottom-fade" />
      <div className="-translate-x-1/2 absolute bottom-[-30px] h-[100px] left-1/2 w-[280px]" data-name="ambient-glow">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 100">
          <ellipse cx="140" cy="50" fill="url(#paint0_radial_1_1000)" id="ambient-glow" rx="140" ry="50" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(140 50) scale(140 50)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1000" r="1">
              <stop stopColor="#D4A853" stopOpacity="0.0705882" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Headline2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="headline">
      <p className="[word-break:break-word] font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[1.05] relative shrink-0 text-[#f0f2fa] text-[44px] tracking-[-0.44px] whitespace-nowrap">Static drawdown</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[52px] pt-[24px] px-[52px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a07830] text-[12px] tracking-[1.68px] whitespace-nowrap">DRAWDOWN</p>
        <Headline2 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.75] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[14px] w-[min-content]">A fixed floor that gives you room to breathe and trade freely.</p>
      </div>
    </div>
  );
}

function CardStaticDrawdown1() {
  return (
    <div className="bg-[#0c0e18] flex-[1_0_0] h-[400px] min-w-px relative rounded-[28px]" data-name="card-static-drawdown">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <GraphicDrawdown />
        <Content6 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

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

function Headline3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="headline">
      <p className="[word-break:break-word] font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[1.05] relative shrink-0 text-[#f0f2fa] text-[44px] tracking-[-0.44px] whitespace-nowrap">Refundable fee</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[52px] pt-[24px] px-[52px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a07830] text-[12px] tracking-[1.68px] whitespace-nowrap">COST</p>
        <Headline3 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.75] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[14px] w-[min-content]">Your fee returns in full after the second reward - a proven trader pays nothing.</p>
      </div>
    </div>
  );
}

function CardRefundableFee() {
  return (
    <div className="bg-[#0c0e18] flex-[1_0_0] h-[400px] min-w-px relative rounded-[28px]" data-name="card-refundable-fee">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <GraphicFee />
        <Content7 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="row-2">
      <CardStaticDrawdown1 />
      <CardRefundableFee />
    </div>
  );
}

function DayLabels() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-between leading-[normal] not-italic relative shrink-0 text-[10px] w-full whitespace-nowrap" data-name="day-labels">
      <p className="relative shrink-0 text-[rgba(255,255,255,0.15)]">MON</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.15)]">TUE</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.15)]">WED</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.15)]">THU</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.15)]">FRI</p>
      <p className="relative shrink-0 text-[#d4a853]">SAT</p>
      <p className="relative shrink-0 text-[#d4a853]">SUN</p>
    </div>
  );
}

function DayMon() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[50px]" data-name="day-mon">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.25)] whitespace-nowrap">12</p>
    </div>
  );
}

function DayTue() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[50px]" data-name="day-tue">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.25)] whitespace-nowrap">13</p>
    </div>
  );
}

function DayWedNews() {
  return (
    <div className="bg-[rgba(212,168,83,0.13)] content-stretch flex flex-col h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[50px]" data-name="day-wed-news">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">14</p>
    </div>
  );
}

function DayThu() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[50px]" data-name="day-thu">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.25)] whitespace-nowrap">15</p>
    </div>
  );
}

function DayFri() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[50px]" data-name="day-fri">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.25)] whitespace-nowrap">16</p>
    </div>
  );
}

function DaySat() {
  return (
    <div className="bg-[rgba(212,168,83,0.16)] content-stretch flex flex-col h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[50px]" data-name="day-sat">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.31)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] whitespace-nowrap">17</p>
    </div>
  );
}

function DaySun() {
  return (
    <div className="bg-[rgba(212,168,83,0.16)] content-stretch flex flex-col h-[34px] items-center justify-center relative rounded-[8px] shrink-0 w-[50px]" data-name="day-sun">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.31)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] whitespace-nowrap">18</p>
    </div>
  );
}

function Week() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="week-1">
      <DayMon />
      <DayTue />
      <DayWedNews />
      <DayThu />
      <DayFri />
      <DaySat />
      <DaySun />
    </div>
  );
}

function Radio() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="radio">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_1_993)" id="radio">
          <path d={svgPaths.p2fb10d80} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_993">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EventPill() {
  return (
    <div className="bg-[rgba(212,168,83,0.09)] content-stretch flex gap-[4px] items-center px-[8px] py-[3px] relative rounded-[20px] shrink-0" data-name="event-pill">
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.19)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Radio />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[8px] whitespace-nowrap">LIVE NEWS</p>
    </div>
  );
}

function NewsBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="news-bar">
      <div className="bg-[#d4a853] relative rounded-[2px] shrink-0 size-[4px]" data-name="Rectangle" />
      <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(212,168,83,0.38)] h-px min-w-px relative to-[rgba(0,0,0,0)] via-1/2 via-[rgba(212,168,83,0.06)]" data-name="Rectangle" />
      <EventPill />
    </div>
  );
}

function GraphicNews() {
  return (
    <div className="h-[170px] relative shrink-0 w-full" data-name="graphic-news">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[32px] px-[52px] relative size-full">
          <DayLabels />
          <Week />
          <NewsBar />
          <div className="-translate-y-1/2 absolute h-[200px] right-[-40px] top-1/2 w-[320px]" data-name="glow">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 200">
              <ellipse cx="160" cy="100" fill="url(#paint0_radial_1_991)" id="glow" rx="160" ry="100" />
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(160 100) scale(160 100)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_991" r="1">
                  <stop stopColor="#D4A853" stopOpacity="0.101961" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Headline4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="headline">
      <p className="[word-break:break-word] font-['Newsreader:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#f0f2fa] text-[52px] tracking-[-0.78px] whitespace-nowrap">Trade the news</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="max-w-[600px] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[inherit] pb-[52px] pt-[8px] px-[52px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a07830] text-[12px] tracking-[1.68px] whitespace-nowrap">TRADING</p>
        <Headline4 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.75] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[16px] w-[min-content]">Hold through releases and weekends with no penalty. No restrictions on when or how you trade.</p>
      </div>
    </div>
  );
}

function CardTradeTheNews() {
  return (
    <div className="bg-[#0c0e18] flex-[1_0_0] h-[380px] min-w-px relative rounded-[28px]" data-name="card-trade-the-news">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <GraphicNews />
        <Content8 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row-3">
      <CardTradeTheNews />
    </div>
  );
}

function Frame77() {
  return <div className="bg-[rgba(255,255,255,0.04)] h-[2px] relative rounded-[2px] shrink-0 w-[56px]" data-name="Frame" />;
}

function Frame78() {
  return <div className="bg-[rgba(212,168,83,0.19)] h-[2px] relative rounded-[2px] shrink-0 w-[40px]" data-name="Frame" />;
}

function Frame79() {
  return <div className="bg-[rgba(255,255,255,0.04)] h-[2px] relative rounded-[2px] shrink-0 w-[48px]" data-name="Frame" />;
}

function Frame80() {
  return <div className="bg-[rgba(255,255,255,0.04)] h-[2px] relative rounded-[2px] shrink-0 w-[32px]" data-name="Frame" />;
}

function Frame76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-[8px] w-[56px]" data-name="Frame">
      <Frame77 />
      <Frame78 />
      <Frame79 />
      <Frame80 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute bg-[#131726] content-stretch flex flex-col items-center justify-center left-0 rounded-[14px] size-[28px] top-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-[#d4a853] h-[2px] relative rounded-[1px] shrink-0 w-[10px]" data-name="Rectangle" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[56px]" data-name="Frame">
      <Frame76 />
      <Frame81 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#a07830] text-[12px] tracking-[1.2px]">NO HIDDEN MECHANICS</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[26px]">{`Rules that don't move.`}</p>
    </div>
  );
}

function WideRules() {
  return (
    <div className="bg-[#0a0c15] relative rounded-[20px] shrink-0 w-full" data-name="Wide - rules">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[48px] items-center p-[40px] relative size-full">
          <Frame75 />
          <Frame82 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.75] not-italic relative shrink-0 text-[#5a5f7a] text-[14px] w-[560px]">No consistency rule, no time limit, no minimum trading days, no surprise restrictions. What you read on this page is exactly what you trade - that is the whole point.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Bento grid">
      <Row2 />
      <Row3 />
      <Row4 />
      <WideRules />
    </div>
  );
}

function BentoWhyFyt() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bento - Why FYT">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[58px] items-start px-[88px] py-[104px] relative size-full">
          <Frame74 />
          <BentoGrid />
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start leading-[normal] overflow-clip relative shrink-0 w-[640px]" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#e4c382] text-[12px] tracking-[2.64px] whitespace-nowrap">EXECUTION</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#eef0f6] text-[44px] tracking-[-0.792px] w-[min-content]">Choose the platform that fits your trading workflow.</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="absolute bg-[rgba(212,168,83,0.08)] left-[316px] rounded-[4px] top-[80px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[6px] py-[3px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[10px] whitespace-nowrap">DOM</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] left-[86px] rounded-[4px] top-[140px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[6px] py-[3px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[10px] whitespace-nowrap">ALGO</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] left-[188px] rounded-[4px] top-[193px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[6px] py-[3px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[10px] whitespace-nowrap">L2</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function IllustrationP() {
  return (
    <div className="h-[280px] overflow-clip relative shrink-0 w-full" data-name="illustration-p5">
      <div className="absolute bg-gradient-to-b from-[#0d1020] h-[280px] left-0 right-0 to-[#080a12] top-0" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.03)] h-px left-0 right-0 top-[56px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.03)] h-px left-0 right-0 top-[112px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.03)] h-px left-0 right-0 top-[168px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.03)] h-px left-0 right-0 top-[224px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.02)] h-[280px] left-[80px] top-0 w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.02)] h-[280px] left-[200px] top-0 w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.02)] h-[280px] left-[320px] top-0 w-px" data-name="Rectangle" />
      <div className="absolute left-[190px] size-[100px] top-[70px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" id="Ellipse" r="49.5" stroke="var(--stroke-0, #D4A853)" strokeOpacity="0.133333" />
        </svg>
      </div>
      <div className="absolute bg-gradient-to-r from-[#d4a853] h-px left-[128px] to-[rgba(212,168,83,0.38)] top-[119px] w-[84px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-r from-[rgba(212,168,83,0.38)] h-px left-[240px] to-[#d4a853] top-[119px] w-[68px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-b from-[#d4a853] h-[80px] left-[239px] to-[rgba(212,168,83,0.38)] top-[40px] w-px" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-b from-[rgba(212,168,83,0.38)] h-[78px] left-[239px] to-[#d4a853] top-[120px] w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.25)] h-[18px] left-[340px] rounded-[1px] top-[30px] w-[4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.38)] h-[26px] left-[348px] rounded-[1px] top-[22px] w-[4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.25)] h-[20px] left-[356px] rounded-[1px] top-[28px] w-[4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.44)] h-[32px] left-[364px] rounded-[1px] top-[16px] w-[4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.33)] h-[28px] left-[372px] rounded-[1px] top-[20px] w-[4px]" data-name="Rectangle" />
      <div className="absolute left-[148px] size-[10px] top-[60px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #EEF0F6)" id="Ellipse" r="5" />
        </svg>
      </div>
      <div className="absolute left-[146px] size-[14px] top-[58px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, white)" fillOpacity="0.133333" id="Ellipse" r="7" />
        </svg>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(8,10,18,0)] h-[80px] left-0 right-0 to-[#080a12] top-[200px]" data-name="Rectangle" />
      <Frame84 />
      <Frame85 />
      <Frame86 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[26px] w-full">Platform 5</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.55] not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-full">Advanced charting, depth-of-market, and algo-ready execution for traders who want full control.</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">Depth of market</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame91() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">50+ indicators</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">Algo-ready</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame90 />
      <Frame91 />
      <Frame92 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start pb-[32px] pt-[28px] px-[30px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[1.68px] whitespace-nowrap">PRECISION</p>
          <Frame88 />
          <Frame89 />
        </div>
      </div>
    </div>
  );
}

function CardPlatform() {
  return (
    <div className="bg-[#0a0c14] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Card / Platform 5">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IllustrationP />
        <div className="bg-[rgba(255,255,255,0.05)] h-px relative shrink-0 w-full" data-name="Rectangle" />
        <Frame87 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.34)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PlatformWeb() {
  return (
    <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="platform-web">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
        <g id="platform-web">
          <rect fill="var(--fill-0, #D4A853)" fillOpacity="0.133333" height="1" id="Rectangle" width="136" y="68" />
          <rect fill="var(--fill-0, #D4A853)" fillOpacity="0.133333" height="136" id="Rectangle_2" width="1" x="68" />
          <circle cx="2" cy="2" fill="var(--fill-0, #D4A853)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function PlatformIos() {
  return (
    <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="platform-ios">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
        <g id="platform-web">
          <rect fill="var(--fill-0, #D4A853)" fillOpacity="0.133333" height="1" id="Rectangle" width="136" y="68" />
          <rect fill="var(--fill-0, #D4A853)" fillOpacity="0.133333" height="136" id="Rectangle_2" width="1" x="68" />
          <circle cx="2" cy="2" fill="var(--fill-0, #D4A853)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function PlatformAndroid() {
  return (
    <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="platform-android">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
        <g id="platform-android">
          <rect fill="var(--fill-0, #D4A853)" fillOpacity="0.133333" height="1" id="Rectangle" width="136" />
          <rect fill="var(--fill-0, #D4A853)" fillOpacity="0.133333" height="136" id="Rectangle_2" width="1" x="68" />
          <circle cx="2" cy="3" fill="var(--fill-0, #D4A853)" id="Ellipse" r="2" />
        </g>
      </svg>
    </div>
  );
}

function IllustrationMt() {
  return (
    <div className="bg-[#0a0c14] h-[280px] overflow-clip relative shrink-0 w-full" data-name="illustration-mt">
      <div className="absolute bg-gradient-to-b from-[#0d1020] h-[280px] left-0 right-0 to-[#080a12] top-0" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.03)] h-px left-0 right-0 top-[56px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.03)] h-px left-0 right-0 top-[112px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.03)] h-px left-0 right-0 top-[168px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.03)] h-px left-0 right-0 top-[224px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.02)] h-[280px] left-[80px] top-0 w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.02)] h-[280px] left-[200px] top-0 w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.02)] h-[280px] left-[320px] top-0 w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-[136px] left-[96px] top-[72px] w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-px left-[96px] top-[72px] w-[136px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-px left-[96px] top-[72px] w-[136px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-[136px] left-[96px] top-[72px] w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-px left-[96px] top-[72px] w-[136px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-[136px] left-[96px] top-[72px] w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-px left-[96px] top-[72px] w-[136px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-[136px] left-[96px] top-[72px] w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-px left-[96px] top-[72px] w-[136px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-[136px] left-[96px] top-[72px] w-px" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-px left-[96px] top-[72px] w-[136px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-[136px] left-[96px] top-[72px] w-px" data-name="Rectangle" />
      <PlatformWeb />
      <PlatformIos />
      <PlatformAndroid />
      <div className="absolute bg-[rgba(212,168,83,0.13)] h-px left-[96px] top-[72px] w-[136px]" data-name="Rectangle" />
      <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
          <circle cx="68" cy="68" id="Ellipse" r="67.5" stroke="var(--stroke-0, #D4A853)" strokeOpacity="0.133333" />
        </svg>
      </div>
      <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
          <circle cx="68" cy="68" id="Ellipse" r="67.5" stroke="var(--stroke-0, #D4A853)" strokeOpacity="0.133333" />
        </svg>
      </div>
      <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
          <circle cx="68" cy="68" id="Ellipse" r="67.5" stroke="var(--stroke-0, #D4A853)" strokeOpacity="0.133333" />
        </svg>
      </div>
      <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
          <circle cx="68" cy="68" id="Ellipse" r="67.5" stroke="var(--stroke-0, #D4A853)" strokeOpacity="0.133333" />
        </svg>
      </div>
      <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
          <circle cx="68" cy="68" id="Ellipse" r="67.5" stroke="var(--stroke-0, #D4A853)" strokeOpacity="0.133333" />
        </svg>
      </div>
      <div className="absolute left-[96px] size-[136px] top-[72px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
          <circle cx="68" cy="68" id="Ellipse" r="67.5" stroke="var(--stroke-0, #D4A853)" strokeOpacity="0.133333" />
        </svg>
      </div>
      <div className="absolute left-[164px] size-[4px] top-[140px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D4A853)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(8,10,18,0)] h-[80px] left-0 right-0 to-[#080a12] top-[200px]" data-name="Rectangle" />
    </div>
  );
}

function Frame94() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[26px] w-full">Match Trader</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.55] not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-full">A clean, intuitive web and mobile interface that stays out of your way for fast, focused trading.</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">{`Web & mobile`}</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame97() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">1-click trading</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame98() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] whitespace-nowrap">One-tap orders</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame96 />
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start pb-[32px] pt-[28px] px-[30px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[1.68px] whitespace-nowrap">CLARITY</p>
          <Frame94 />
          <Frame95 />
        </div>
      </div>
    </div>
  );
}

function CardMatchTrader() {
  return (
    <div className="bg-[#0a0c14] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Card / Match Trader">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IllustrationMt />
        <div className="bg-[rgba(255,255,255,0.05)] h-px relative shrink-0 w-full" data-name="Rectangle" />
        <Frame93 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.34)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PlatformRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Platform row">
      <CardPlatform />
      <CardMatchTrader />
    </div>
  );
}

function Platform() {
  return (
    <div className="relative shrink-0 w-full" data-name="Platform">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start px-[88px] py-[104px] relative size-full">
          <Frame83 />
          <PlatformRow />
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[12px] tracking-[2.64px] whitespace-nowrap">TRUSTED BY TRADERS</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[52px] text-center tracking-[-0.936px] w-[700px]">Trusted by traders around the world.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[18px] text-center w-[520px]">14,000+ funded traders across 105 countries rely on our platform to trade with confidence and grow their accounts.</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#f5c518] text-[14px]">★★★★★</p>
      <p className="relative shrink-0 text-[#5f6478] text-[12px] tracking-[0.72px]">5/5</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[20px] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(119.888933deg, rgb(228, 195, 130) 0%, rgb(212, 168, 83) 72.997%)" }} data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">NP</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[14px]">Nicholas P.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">Funded Trader · United Kingdom</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame105 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-[#0e111b] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-[28px] pt-[32px] px-[32px] relative size-full">
          <Frame103 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] min-w-full not-italic relative shrink-0 text-[#e3e5f0] text-[16px] w-[min-content]">{`"Requested Friday, paid before Sunday. Fastest payouts I have seen anywhere."`}</p>
          <Frame104 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame109() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#f5c518] text-[14px]">★★★★★</p>
      <p className="relative shrink-0 text-[#5f6478] text-[12px] tracking-[0.72px]">5/5</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-[#d4a853] content-stretch flex items-center justify-center overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">ER</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[14px]">Elena R.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">Funded Trader · Spain</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame112 />
      <Frame113 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame111 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-[#0e111b] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-[28px] pt-[32px] px-[32px] relative size-full">
          <Frame109 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] min-w-full not-italic relative shrink-0 text-[#e3e5f0] text-[16px] w-[min-content]">{`"Traded the news with zero restrictions and kept 90% of my split. Rules are actually fair."`}</p>
          <Frame110 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path d={svgPaths.p19931f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-[rgba(228,195,130,0.8)] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.27)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Play />
    </div>
  );
}

function Frame116() {
  return (
    <div className="[word-break:break-word] absolute bottom-[20px] content-stretch flex flex-col gap-[2px] items-start leading-[normal] left-[20px] not-italic whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">Elena R.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[10px] text-[rgba(255,255,255,0.67)]">Funded Trader · Spain</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative rounded-[16px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame} />
      <Frame115 />
      <Frame116 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[16px] h-[300px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame102 />
      <Frame108 />
      <Frame114 />
    </div>
  );
}

function Play1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path d={svgPaths.p19931f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame119() {
  return (
    <div className="bg-[rgba(228,195,130,0.8)] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.27)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Play1 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="[word-break:break-word] absolute bottom-[20px] content-stretch flex flex-col gap-[2px] items-start leading-[normal] left-[20px] not-italic whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">Marcus T.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[10px] text-[rgba(255,255,255,0.67)]">Funded Trader · United States</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative rounded-[16px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame1} />
      <Frame119 />
      <Frame120 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#f5c518] text-[14px]">★★★★★</p>
      <p className="relative shrink-0 text-[#5f6478] text-[12px] tracking-[0.72px]">5/5</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-[#d4a853] content-stretch flex items-center justify-center overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">MT</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[14px]">Marcus T.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">Funded Trader · United States</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame125 />
      <Frame126 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame124 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="bg-[#0e111b] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-[28px] pt-[32px] px-[32px] relative size-full">
          <Frame122 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] min-w-full not-italic relative shrink-0 text-[#e3e5f0] text-[16px] w-[min-content]">{`"Scaled from a 25K to a 200K account in four months. The path is genuinely clear."`}</p>
          <Frame123 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame128() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#f5c518] text-[14px]">★★★★★</p>
      <p className="relative shrink-0 text-[#5f6478] text-[12px] tracking-[0.72px]">5/5</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[20px] shrink-0 size-[40px]" style={{ backgroundImage: "linear-gradient(119.888933deg, rgb(220, 190, 130) 0%, rgb(160, 120, 48) 72.997%)" }} data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">JK</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[14px]">James K.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">Funded Trader · Australia</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame131 />
      <Frame132 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[rgba(255,255,255,0.07)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame130 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="bg-[#0e111b] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-[28px] pt-[32px] px-[32px] relative size-full">
          <Frame128 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] min-w-full not-italic relative shrink-0 text-[#e3e5f0] text-[16px] w-[min-content]">{`"Hit my first withdrawal within 3 weeks. The support team actually responds and the dashboard is intuitive."`}</p>
          <Frame129 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[16px] h-[300px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame118 />
      <Frame121 />
      <Frame127 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame101 />
      <Frame117 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="relative shrink-0 w-full" data-name="Testimonials">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[88px] py-[104px] relative size-full">
          <Frame99 />
          <Frame100 />
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[2.64px]">FAST IN, FAST OUT</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[30px]">Pay and get paid your way.</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="bg-[rgba(212,168,83,0.04)] relative rounded-[9px] shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[16px] py-[11px] relative rounded-[inherit] size-full">
        <div className="bg-[#d4a853] relative rounded-[2px] shrink-0 size-[8px]" data-name="Rectangle" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[14px] whitespace-nowrap">Visa</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame136() {
  return (
    <div className="relative rounded-[9px] shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[16px] py-[11px] relative rounded-[inherit] size-full">
        <div className="bg-[#e08029] relative rounded-[2px] shrink-0 size-[8px]" data-name="Rectangle" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">Mastercard</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame137() {
  return (
    <div className="relative rounded-[9px] shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[16px] py-[11px] relative rounded-[inherit] size-full">
        <div className="bg-[#e0932f] relative rounded-[2px] shrink-0 size-[8px]" data-name="Rectangle" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">Bitcoin</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame138() {
  return (
    <div className="bg-[rgba(212,168,83,0.04)] relative rounded-[9px] shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[16px] py-[11px] relative rounded-[inherit] size-full">
        <div className="bg-[#d4a853] relative rounded-[2px] shrink-0 size-[8px]" data-name="Rectangle" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[14px] whitespace-nowrap">Ethereum</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame139() {
  return (
    <div className="relative rounded-[9px] shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[16px] py-[11px] relative rounded-[inherit] size-full">
        <div className="bg-[#3a9b7f] relative rounded-[2px] shrink-0 size-[8px]" data-name="Rectangle" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4c382] text-[14px] whitespace-nowrap">USDT</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-[rgba(212,168,83,0.04)] relative rounded-[9px] shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[16px] py-[11px] relative rounded-[inherit] size-full">
        <div className="bg-[#d4a853] relative rounded-[2px] shrink-0 size-[8px]" data-name="Rectangle" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[14px] whitespace-nowrap">USDC</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start overflow-clip relative shrink-0" data-name="Frame">
      <Frame135 />
      <Frame136 />
      <Frame137 />
      <Frame138 />
      <Frame139 />
      <Frame140 />
    </div>
  );
}

function Payments() {
  return (
    <div className="relative shrink-0 w-full" data-name="Payments">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[88px] py-[78px] relative size-full">
          <Frame133 />
          <Frame134 />
        </div>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[2.64px]">GOOD TO KNOW</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium relative shrink-0 text-[#eef0f6] text-[44px] tracking-[-0.792px]">Questions, answered plainly.</p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p15c41080} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[18px] whitespace-nowrap">When does my evaluation start?</p>
      <Frame144 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p15c41080} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[18px] whitespace-nowrap">Do I keep the 18% challenge reward?</p>
      <Frame146 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p15c41080} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[18px] whitespace-nowrap">What happens if the account loses money?</p>
      <Frame148 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p15c41080} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[18px] whitespace-nowrap">Is the evaluation fee really refundable?</p>
      <Frame150 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p15c41080} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[18px] whitespace-nowrap">How does static drawdown work?</p>
      <Frame152 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p15c41080} id="Vector" stroke="var(--stroke-0, #D4A853)" strokeLinecap="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[18px] whitespace-nowrap">When is the registration fee refundable?</p>
      <Frame154 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame143 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame145 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame147 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame149 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame151 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame153 />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Faq() {
  return (
    <div className="relative shrink-0 w-full" data-name="FAQ">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[58px] items-start px-[88px] py-[104px] relative size-full">
          <Frame141 />
          <Frame142 />
        </div>
      </div>
    </div>
  );
}

function Frame155() {
  return <div className="h-[22px] relative shrink-0 w-[10px]" data-name="Frame" />;
}

function Frame156() {
  return <div className="h-[20px] relative shrink-0 w-[10px]" data-name="Frame" />;
}

function Frame157() {
  return <div className="h-[34px] relative shrink-0 w-[10px]" data-name="Frame" />;
}

function Frame160() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p3f778100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame159() {
  return (
    <div className="bg-[#d4a853] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[26px] py-[15px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View Programs</p>
        <Frame160 />
      </div>
      <div aria-hidden className="absolute border border-[#d4a853] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame161() {
  return (
    <div className="bg-[rgba(212,168,83,0.04)] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-center overflow-clip px-[26px] py-[15px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[14px] whitespace-nowrap">Review Trading Rules</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(212,168,83,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame159 />
      <Frame161 />
    </div>
  );
}

function FinalCta() {
  return (
    <div className="relative shrink-0 w-full" data-name="Final CTA">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[88px] py-[120px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[2.64px] whitespace-nowrap">READY WHEN YOU ARE</p>
          <Frame155 />
          <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#eef0f6] text-[52px] text-center tracking-[-1.04px] w-[780px]">Ready to put your strategy to the test?</p>
          <Frame156 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[18px] text-center w-[480px]">Compare the programs, review every condition, and begin when you are ready.</p>
          <Frame157 />
          <Frame158 />
        </div>
      </div>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Frame">
      <div className="h-[100px] relative shrink-0 w-[218px]" data-name="IMG_1080 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg10801} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-[280px]">A simulated-capital prop firm rewarding disciplined traders across 105+ countries.</p>
    </div>
  );
}

function Frame165() {
  return <div className="h-[18px] relative shrink-0 w-[10px]" data-name="Frame" />;
}

function Frame166() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame167() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame168() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame169() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame164() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[1.44px] whitespace-nowrap">PRODUCT</p>
      <Frame165 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Evaluations</p>
      <Frame166 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">How it works</p>
      <Frame167 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Payout ledger</p>
      <Frame168 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Platforms</p>
      <Frame169 />
    </div>
  );
}

function Frame171() {
  return <div className="h-[18px] relative shrink-0 w-[10px]" data-name="Frame" />;
}

function Frame172() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame173() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame174() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame175() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame170() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[1.44px] whitespace-nowrap">COMPANY</p>
      <Frame171 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">About</p>
      <Frame172 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">FAQ</p>
      <Frame173 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Affiliate</p>
      <Frame174 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Contact</p>
      <Frame175 />
    </div>
  );
}

function Frame177() {
  return <div className="h-[18px] relative shrink-0 w-[10px]" data-name="Frame" />;
}

function Frame178() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame179() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame180() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame181() {
  return <div className="relative shrink-0 size-[10px]" data-name="Frame" />;
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d4a853] text-[12px] tracking-[1.44px] whitespace-nowrap">LEGAL</p>
      <Frame177 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Terms of Service</p>
      <Frame178 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Privacy Policy</p>
      <Frame179 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Risk Disclosure</p>
      <Frame180 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eef0f6] text-[14px] whitespace-nowrap">Refund Policy</p>
      <Frame181 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame163 />
      <Frame164 />
      <Frame170 />
      <Frame176 />
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">© 2026 Funding Your Trades. All rights reserved.</p>
      <p className="relative shrink-0">Design concept · Editorial dark direction</p>
    </div>
  );
}

function Frame182() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start not-italic overflow-clip pt-[26px] relative shrink-0 text-[#5f6478] text-[12px] w-full" data-name="Frame">
      <p className="leading-[1.7] relative shrink-0 w-full">Funding Your Trades provides a simulated trading environment for the purpose of evaluating trading skill. Clients are assigned demo accounts with simulated funds; all trading activity is carried out in a simulated environment and no real capital is deposited or traded. FYT is not a broker and does not provide investment services. Trading in financial markets involves significant risk and is not suitable for everyone. Performance in a simulated environment does not guarantee future results.</p>
      <Frame183 />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start pb-[36px] pt-[64px] px-[88px] relative size-full">
          <Frame162 />
          <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
          <Frame182 />
        </div>
      </div>
    </div>
  );
}

export default function FytLandingPage() {
  return (
    <div className="bg-[#070810] content-stretch flex flex-col items-start relative size-full" data-name="FYT - Landing Page">
      <Nav />
      <Hero />
      <div className="bg-[rgba(255,255,255,0.06)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <div className="bg-[#0b0c11] content-stretch flex flex-col gap-[56px] items-center justify-center px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="Toggle Comparison">
        <TogglePill />
        <Frame10 />
        <FeatureCard />
      </div>
      <GlobalNetwork />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Pricing />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Evaluation />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <BentoWhyFyt />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Platform />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Testimonials />
      <Payments />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Faq />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <FinalCta />
      <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Footer />
    </div>
  );
}