import svgPaths from "./svg-e5o4cbkx2r";

function Frame() {
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

function Content() {
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
        <Content />
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

function Content1() {
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
        <Content1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Row() {
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

function Content2() {
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

function CardStaticDrawdown() {
  return (
    <div className="bg-[#0c0e18] flex-[1_0_0] h-[400px] min-w-px relative rounded-[28px]" data-name="card-static-drawdown">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <GraphicDrawdown />
        <Content2 />
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

function Content3() {
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
        <Content3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="row-2">
      <CardStaticDrawdown />
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

function Content4() {
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
        <Content4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row-3">
      <CardTradeTheNews />
    </div>
  );
}

function Frame3() {
  return <div className="bg-[rgba(255,255,255,0.04)] h-[2px] relative rounded-[2px] shrink-0 w-[56px]" data-name="Frame" />;
}

function Frame4() {
  return <div className="bg-[rgba(212,168,83,0.19)] h-[2px] relative rounded-[2px] shrink-0 w-[40px]" data-name="Frame" />;
}

function Frame5() {
  return <div className="bg-[rgba(255,255,255,0.04)] h-[2px] relative rounded-[2px] shrink-0 w-[48px]" data-name="Frame" />;
}

function Frame6() {
  return <div className="bg-[rgba(255,255,255,0.04)] h-[2px] relative rounded-[2px] shrink-0 w-[32px]" data-name="Frame" />;
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-[8px] w-[56px]" data-name="Frame">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#131726] content-stretch flex flex-col items-center justify-center left-0 rounded-[14px] size-[28px] top-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-[#d4a853] h-[2px] relative rounded-[1px] shrink-0 w-[10px]" data-name="Rectangle" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[56px]" data-name="Frame">
      <Frame2 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
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
          <Frame1 />
          <Frame8 />
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
      <Row />
      <Row1 />
      <Row2 />
      <WideRules />
    </div>
  );
}

export default function BentoWhyFyt() {
  return (
    <div className="content-stretch flex flex-col gap-[58px] items-start px-[88px] py-[104px] relative size-full" data-name="Bento - Why FYT">
      <Frame />
      <BentoGrid />
    </div>
  );
}