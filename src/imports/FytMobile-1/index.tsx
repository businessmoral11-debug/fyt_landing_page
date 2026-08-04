import svgPaths from "./svg-ocnm1t4vg9";
import imgLine from "./e30d45a56a8eff09bc12bb6b24ad4249063be3e9.png";
import imgElenaRVideo from "./8295e491b324fadeeea490ba571a520a23952bb1.png";
import imgMarcusTVideo from "./54d19c95719cd1f9a5f51b4b4043efab325948a0.png";
import imgBullIcon from "./7dca680e1978188fe7adca05839b49894cdf71f2.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[12px] tracking-[1px] whitespace-nowrap">[ THE PATH TO CAPITAL ]</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.15] min-w-full relative shrink-0 text-[#eef0f6] text-[32px] w-[min-content]">A transparent path to simulated funding.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[15px] w-[min-content]">Select a program, meet clearly defined objectives, and progress to a simulated funded account without unnecessary deadlines.</p>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[8px] shrink-0 w-full" data-name="Step-1">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[12px] relative size-full text-[12px] whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6]">Select Account</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#60a5fa]">Choose your challenge size</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[8px] shrink-0 w-full" data-name="Step-2">
      <div aria-hidden className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[12px] relative size-full text-[12px] whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6]">Trade Evaluation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#60a5fa]">Hit the profit target</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[8px] shrink-0 w-full" data-name="Step-3">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[12px] relative size-full text-[12px] whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6]">Keep Rewards</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#60a5fa]">Get paid, keep profits</p>
      </div>
    </div>
  );
}

function StepIndicators() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] relative shrink-0 w-[358px]" data-name="Step-Indicators">
      <Step />
      <Step1 />
      <Step2 />
    </div>
  );
}

function StepHeadline() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Newsreader:Medium',sans-serif] font-medium gap-[16px] items-center leading-[normal] relative shrink-0 w-full" data-name="Step-Headline">
      <p className="relative shrink-0 text-[72px] text-white whitespace-nowrap">02</p>
      <p className="flex-[1_0_0] min-w-px relative text-[#eef0f6] text-[28px]">Trade the Evaluation</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d={svgPaths.p278a3600} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ViewAllSteps() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="View-All-Steps">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">View all steps</p>
      <ArrowRight />
    </div>
  );
}

function ProveMain() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Prove-Main">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[12px] whitespace-nowrap">PROVE</p>
      <StepHeadline />
      <ViewAllSteps />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[11px] tracking-[1px] whitespace-nowrap">PROFIT TARGET</p>
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="203" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Card-0">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame1 />
        <p className="[word-break:break-word] font-['Newsreader:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#eef0f6] text-[20px] w-full">Clear profit goal to hit</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[13px] w-full">Reach the profit target within a fair, static-drawdown ruleset. One objective, no hidden traps.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[11px] tracking-[1px] whitespace-nowrap">NO TIME LIMIT</p>
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="211" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Card-1">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame2 />
        <p className="[word-break:break-word] font-['Newsreader:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#eef0f6] text-[20px] w-full">Trade at your own pace</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[13px] w-full">No deadline pressure. Take the time you need. News trading and weekends are fully permitted.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[11px] tracking-[1px] whitespace-nowrap">STATIC DRAWDOWN</p>
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="176" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Card-2">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame3 />
        <p className="[word-break:break-word] font-['Newsreader:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#eef0f6] text-[20px] w-full">Fixed, transparent rules</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[13px] w-full">Drawdown limits are set from your starting balance and never move. Know your risk boundaries upfront.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[11px] tracking-[1px] whitespace-nowrap">NO CONSISTENCY RULE</p>
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="153" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Card-3">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame4 />
        <p className="[word-break:break-word] font-['Newsreader:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#eef0f6] text-[20px] w-full">Trade your strategy freely</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9da2b4] text-[13px] w-full">No day-profit caps or forced trading patterns. Just reach the target however your edge dictates.</p>
      </div>
    </div>
  );
}

function EvaluationFeatureCards() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Evaluation-Feature-Cards">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Evaluation() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Evaluation">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[48px] relative size-full">
        <Frame />
        <StepIndicators />
        <ProveMain />
        <EvaluationFeatureCards />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] tracking-[1px] whitespace-nowrap">WHY TRADERS CHOOSE FYT</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.15] min-w-full relative shrink-0 text-[#eef0f6] text-[32px] w-[min-content]">Built for people who take this seriously.</p>
    </div>
  );
}

function Markers() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic relative shrink-0 text-[8px] w-full whitespace-nowrap" data-name="markers">
      <p className="relative shrink-0 text-[rgba(255,255,255,0.13)]">0%</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.13)]">50%</p>
      <p className="relative shrink-0 text-[#3b82f6]">100%</p>
    </div>
  );
}

function ProgressFill() {
  return <div className="bg-[#3b82f6] h-full relative rounded-[6px] shrink-0 w-[220px]" data-name="progress-fill" />;
}

function ProgressTrack() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] h-[12px] relative rounded-[6px] shrink-0 w-full" data-name="progress-track">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <ProgressFill />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.03)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ProgressVisualization() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="progress-visualization">
      <Markers />
      <ProgressTrack />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#f0f2fa] text-[64px] whitespace-nowrap">100%</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#c8ccde] text-[20px] w-[min-content]">Keep what you earn.</p>
    </div>
  );
}

function CardProfitSplit() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[20px] shrink-0 w-full" data-name="Card-Profit-Split">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#285aaf] text-[11px] tracking-[1px] whitespace-nowrap">PROFIT SPLIT</p>
        <ProgressVisualization />
        <Frame6 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[13px] w-[min-content]">Scale your split as you grow - every dollar stays with you.</p>
      </div>
    </div>
  );
}

function CardSpeed() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[20px] shrink-0 w-full" data-name="Card-Speed">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#285aaf] text-[11px] tracking-[1px] whitespace-nowrap">SPEED</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[48px] whitespace-nowrap">105 min</p>
        <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#c8ccde] text-[20px] w-[min-content]">Median payout</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[13px] w-[min-content]">From request to funded - faster than any firm in the space.</p>
      </div>
    </div>
  );
}

function MiniChart() {
  return (
    <div className="bg-[#090b13] h-[60px] relative rounded-[8px] shrink-0 w-full" data-name="mini-chart">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-0 left-0 top-[15px] w-[320px]" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0392157" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[30px] w-[320px]" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0392157" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[45px] w-[320px]" data-name="Line">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <img alt="" className="block max-w-none size-full" height="1.5" src={imgLine} width="320" />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[8px] not-italic text-[#3b82f6] text-[8px] top-[47px] whitespace-nowrap">FIXED FLOOR</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CardDrawdown() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[20px] shrink-0 w-full" data-name="Card-Drawdown">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#285aaf] text-[11px] tracking-[1px] whitespace-nowrap">DRAWDOWN</p>
        <MiniChart />
        <p className="[word-break:break-word] font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#f0f2fa] text-[32px] w-[min-content]">Static drawdown</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[13px] w-[min-content]">A fixed floor that gives you room to breathe and trade freely.</p>
      </div>
    </div>
  );
}

function CardCost() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[20px] shrink-0 w-full" data-name="Card-Cost">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#285aaf] text-[11px] tracking-[1px] whitespace-nowrap">COST</p>
        <p className="font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#f0f2fa] text-[32px] w-[min-content]">Refundable fee</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[13px] w-[min-content]">Your fee returns in full after the second reward - a proven trader pays nothing.</p>
      </div>
    </div>
  );
}

function Day() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="day-0">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9da2b4] text-[10px] whitespace-nowrap">M</p>
    </div>
  );
}

function Day1() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="day-1">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9da2b4] text-[10px] whitespace-nowrap">T</p>
    </div>
  );
}

function Day2() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="day-2">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9da2b4] text-[10px] whitespace-nowrap">W</p>
    </div>
  );
}

function Day3() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="day-3">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9da2b4] text-[10px] whitespace-nowrap">T</p>
    </div>
  );
}

function Day4() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="day-4">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9da2b4] text-[10px] whitespace-nowrap">F</p>
    </div>
  );
}

function Day5() {
  return (
    <div className="bg-[rgba(59,130,246,0.13)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="day-5">
      <div aria-hidden className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[10px] whitespace-nowrap">S</p>
    </div>
  );
}

function Day6() {
  return (
    <div className="bg-[rgba(59,130,246,0.13)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative rounded-[6px]" data-name="day-6">
      <div aria-hidden className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[10px] whitespace-nowrap">S</p>
    </div>
  );
}

function CalendarRow() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="calendar-row">
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
    </div>
  );
}

function CardNews() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[20px] shrink-0 w-full" data-name="Card-News">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#285aaf] text-[11px] tracking-[1px] whitespace-nowrap">TRADING</p>
        <CalendarRow />
        <p className="[word-break:break-word] font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#f0f2fa] text-[36px] w-[min-content]">Trade the news</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[13px] w-[min-content]">Hold through releases and weekends with no penalty. No restrictions on when or how you trade.</p>
      </div>
    </div>
  );
}

function CardHiddenMechanics() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[20px] shrink-0 w-full" data-name="Card-Hidden-Mechanics">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#285aaf] text-[11px] tracking-[1px] whitespace-nowrap">NO HIDDEN MECHANICS</p>
        <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#eef0f6] text-[22px] w-[min-content]">{`Rules that don't move.`}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5f7a] text-[13px] w-[min-content]">No consistency rule, no time limit, no minimum trading days, no surprise restrictions. What you read is exactly what applies.</p>
      </div>
    </div>
  );
}

function BentoGridMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Bento-Grid-Mobile">
      <CardProfitSplit />
      <CardSpeed />
      <CardDrawdown />
      <CardCost />
      <CardNews />
      <CardHiddenMechanics />
    </div>
  );
}

function BentoWhyFyt() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Bento-Why-FYT">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[48px] relative size-full">
        <Frame5 />
        <BentoGridMobile />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] tracking-[1px] whitespace-nowrap">EXECUTION</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.15] min-w-full relative shrink-0 text-[#eef0f6] text-[32px] w-[min-content]">Choose the platform that fits your trading workflow.</p>
    </div>
  );
}

function Crosshair() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="crosshair">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="crosshair">
          <circle cx="36" cy="36" id="Ellipse" r="35.5" stroke="var(--stroke-0, #3B82F6)" strokeOpacity="0.133333" />
          <circle cx="36" cy="36" id="Ellipse_2" r="21.5" stroke="var(--stroke-0, #3B82F6)" strokeOpacity="0.133333" />
          <circle cx="36" cy="36" fill="var(--fill-0, #3B82F6)" id="Ellipse_3" r="4" />
          <rect fill="var(--fill-0, #3B82F6)" fillOpacity="0.133333" height="18" id="Rectangle" width="2" x="35" y="27" />
          <rect fill="var(--fill-0, #3B82F6)" fillOpacity="0.133333" height="2" id="Rectangle_2" width="18" x="27" y="35" />
        </g>
      </svg>
    </div>
  );
}

function LabelDom() {
  return (
    <div className="absolute bg-[rgba(59,130,246,0.08)] content-stretch flex items-center justify-center left-[12px] px-[8px] py-[4px] rounded-[4px] top-[12px]" data-name="label-dom">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[10px] whitespace-nowrap">DOM</p>
    </div>
  );
}

function LabelAlgo() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] content-stretch flex items-center justify-center px-[8px] py-[4px] right-[12px] rounded-[4px] top-[12px]" data-name="label-algo">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[10px] whitespace-nowrap">ALGO</p>
    </div>
  );
}

function LabelL() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.03)] bottom-[12px] content-stretch flex items-center justify-center left-1/2 px-[8px] py-[4px] rounded-[4px]" data-name="label-l2">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[10px] whitespace-nowrap">L2</p>
    </div>
  );
}

function Illustration() {
  return (
    <div className="bg-[#0c0e18] h-[100px] relative shrink-0 w-full" data-name="Illustration">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative size-full">
          <Crosshair />
          <LabelDom />
          <LabelAlgo />
          <LabelL />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">Depth of market</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">50+ indicators</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">Algo-ready</p>
    </div>
  );
}

function Pills() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full" data-name="Pills">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[11px] tracking-[1px] whitespace-nowrap">PRECISION</p>
        <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#eef0f6] text-[24px] w-[min-content]">Platform 5</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-[min-content]">Advanced charting, depth-of-market, and algo-ready execution for traders who want full control.</p>
        <Pills />
      </div>
    </div>
  );
}

function Platform5Card() {
  return (
    <div className="bg-[#0a0e1a] h-[360px] relative rounded-[16px] shrink-0 w-full" data-name="Platform-5-Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Illustration />
        <Frame8 />
      </div>
      <div aria-hidden className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Geometric() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="geometric">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="geometric">
          <circle cx="36" cy="36" id="Ellipse" r="35.5" stroke="var(--stroke-0, #3B82F6)" strokeOpacity="0.133333" />
          <rect height="43" id="Rectangle" rx="9.5" stroke="var(--stroke-0, #3B82F6)" strokeOpacity="0.133333" width="43" x="14.5" y="14.5" />
          <circle cx="36" cy="36" fill="var(--fill-0, #3B82F6)" id="Ellipse_2" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Illustration1() {
  return (
    <div className="bg-[#0c0e18] h-[100px] relative shrink-0 w-full" data-name="Illustration">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[20px] relative size-full">
          <Geometric />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">{`Web & mobile`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">1-click trading</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] whitespace-nowrap">One-tap orders</p>
    </div>
  );
}

function Pills1() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full" data-name="Pills">
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[11px] tracking-[1px] whitespace-nowrap">CLARITY</p>
        <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#eef0f6] text-[24px] w-[min-content]">Match Trader</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-[min-content]">A clean, intuitive web and mobile interface that stays out of your way for fast, focused trading.</p>
        <Pills1 />
      </div>
    </div>
  );
}

function MatchTraderCard() {
  return (
    <div className="bg-[#0a0e1a] h-[360px] relative rounded-[16px] shrink-0 w-full" data-name="Match-Trader-Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Illustration1 />
        <Frame12 />
      </div>
      <div aria-hidden className="absolute border border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PlatformStack() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Platform-Stack">
      <Platform5Card />
      <MatchTraderCard />
    </div>
  );
}

function Platforms() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Platforms">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[48px] relative size-full">
        <Frame7 />
        <PlatformStack />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[12px] tracking-[1px] whitespace-nowrap">TRUSTED BY TRADERS</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium leading-[1.15] min-w-full relative shrink-0 text-[#eef0f6] text-[32px] w-[min-content]">Trusted by traders around the world.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[16px] w-[min-content]">14,000+ funded traders across 105 countries rely on our platform to trade with confidence and grow their capital.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#3b82f6] text-[14px]">★★★★★</p>
      <p className="relative shrink-0 text-[#5f6478] text-[12px] tracking-[1px]">5/5</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#070810] text-[12px] whitespace-nowrap">NP</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[14px]">Nicholas P.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">Funded Trader · United Kingdom</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Testimonial-Card-0">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Frame17 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] min-w-full not-italic relative shrink-0 text-[#e3e5f0] text-[15px] w-[min-content]">{`"Requested Friday, paid before Sunday. Fastest payouts I have seen anywhere."`}</p>
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 1">
              <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="302" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame18 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#3b82f6] text-[14px]">★★★★★</p>
      <p className="relative shrink-0 text-[#5f6478] text-[12px] tracking-[1px]">5/5</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#070810] text-[12px] whitespace-nowrap">ER</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[14px]">Elena R.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">Funded Trader · Spain</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Testimonial-Card-1">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Frame21 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] min-w-full not-italic relative shrink-0 text-[#e3e5f0] text-[15px] w-[min-content]">{`"Traded the news with zero restrictions and kept 90% of my split. Rules are actually fair."`}</p>
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 1">
              <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="302" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame22 />
      </div>
    </div>
  );
}

function PlayBtn() {
  return (
    <div className="bg-[#60a5fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[24px] shrink-0 size-[48px]" data-name="PlayBtn">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a080f] text-[16px] whitespace-nowrap">▶</p>
    </div>
  );
}

function NameLabel() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="NameLabel">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">Elena R.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[10px] text-[rgba(255,255,255,0.8)]">Funded Trader · Spain</p>
    </div>
  );
}

function ElenaRVideo() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="Elena-R.-Video">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgElenaRVideo} />
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[20px] py-[16px] relative size-full">
          <PlayBtn />
          <NameLabel />
        </div>
      </div>
    </div>
  );
}

function PlayBtn1() {
  return (
    <div className="bg-[#60a5fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[24px] shrink-0 size-[48px]" data-name="PlayBtn">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a080f] text-[16px] whitespace-nowrap">▶</p>
    </div>
  );
}

function NameLabel1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="NameLabel">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">Marcus T.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[10px] text-[rgba(255,255,255,0.8)]">Funded Trader · United States</p>
    </div>
  );
}

function MarcusTVideo() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="Marcus-T.-Video">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgMarcusTVideo} />
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[20px] py-[16px] relative size-full">
          <PlayBtn1 />
          <NameLabel1 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#3b82f6] text-[14px]">★★★★★</p>
      <p className="relative shrink-0 text-[#5f6478] text-[12px] tracking-[1px]">5/5</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#070810] text-[12px] whitespace-nowrap">MT</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[14px]">Marcus T.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">Funded Trader · United States</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function TestimonialCard2() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Testimonial-Card-2">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Frame25 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] min-w-full not-italic relative shrink-0 text-[#e3e5f0] text-[15px] w-[min-content]">{`"Scaled from a 25K to a 200K account in four months. The path is genuinely clear."`}</p>
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 1">
              <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="302" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame26 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#3b82f6] text-[14px]">★★★★★</p>
      <p className="relative shrink-0 text-[#5f6478] text-[12px] tracking-[1px]">5/5</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#070810] text-[12px] whitespace-nowrap">JK</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#eef0f6] text-[14px]">James K.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f6478] text-[12px]">Funded Trader · Australia</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function TestimonialCard3() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[16px] shrink-0 w-full" data-name="Testimonial-Card-3">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Frame29 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.65] min-w-full not-italic relative shrink-0 text-[#e3e5f0] text-[15px] w-[min-content]">{`"Hit my first withdrawal within 3 weeks. The support team actually responds and the dashboard is intuitive."`}</p>
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 1">
              <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="302" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame30 />
      </div>
    </div>
  );
}

function TestimonialsStack() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Testimonials-Stack">
      <TestimonialCard />
      <TestimonialCard1 />
      <ElenaRVideo />
      <MarcusTVideo />
      <TestimonialCard2 />
      <TestimonialCard3 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Testimonials">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[48px] relative size-full">
        <Frame16 />
        <TestimonialsStack />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#3b82f6] text-[12px] tracking-[1px] whitespace-nowrap">FAST IN, FAST OUT</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#eef0f6] text-[24px] w-[min-content]">Pay and get paid your way.</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[rgba(59,130,246,0.04)] content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[14px] whitespace-nowrap">Visa</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #60A5FA)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">Mastercard</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[rgba(59,130,246,0.04)] content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[14px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #60A5FA)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">Ethereum</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(59,130,246,0.04)] content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #3B82F6)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[14px] whitespace-nowrap">USDT</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #60A5FA)" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#60a5fa] text-[14px] whitespace-nowrap">USDC</p>
    </div>
  );
}

function PaymentPills() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Payment-Pills">
      <Frame34 />
      <Frame35 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Payments() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Payments">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[48px] pt-[32px] px-[20px] relative size-full">
        <Frame33 />
        <PaymentPills />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#3b82f6] text-[12px] tracking-[1px] whitespace-nowrap">GOOD TO KNOW</p>
      <p className="font-['Newsreader:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#eef0f6] text-[32px] w-[min-content]">Questions, answered plainly.</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqItem() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[12px] shrink-0 w-full" data-name="FAQ-Item-0">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-px overflow-hidden relative text-[#eef0f6] text-[16px] text-ellipsis whitespace-nowrap">When does my evaluation start?</p>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[12px] shrink-0 w-full" data-name="FAQ-Item-1">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-px overflow-hidden relative text-[#eef0f6] text-[16px] text-ellipsis whitespace-nowrap">Do I keep the 18% challenge reward?</p>
          <ChevronRight1 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[12px] shrink-0 w-full" data-name="FAQ-Item-2">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-px overflow-hidden relative text-[#eef0f6] text-[16px] text-ellipsis whitespace-nowrap">What happens if the account loses money?</p>
          <ChevronRight2 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqItem3() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[12px] shrink-0 w-full" data-name="FAQ-Item-3">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-px overflow-hidden relative text-[#eef0f6] text-[16px] text-ellipsis whitespace-nowrap">Is the evaluation fee really refundable?</p>
          <ChevronRight3 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqItem4() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[12px] shrink-0 w-full" data-name="FAQ-Item-4">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-px overflow-hidden relative text-[#eef0f6] text-[16px] text-ellipsis whitespace-nowrap">How does static drawdown work?</p>
          <ChevronRight4 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqItem5() {
  return (
    <div className="bg-[#0c0e18] relative rounded-[12px] shrink-0 w-full" data-name="FAQ-Item-5">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-px overflow-hidden relative text-[#eef0f6] text-[16px] text-ellipsis whitespace-nowrap">When is the registration fee refundable?</p>
          <ChevronRight5 />
        </div>
      </div>
    </div>
  );
}

function FaqAccordionMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="FAQ-Accordion-Mobile">
      <FaqItem />
      <FaqItem1 />
      <FaqItem2 />
      <FaqItem3 />
      <FaqItem4 />
      <FaqItem5 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="FAQ">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[48px] relative size-full">
        <Frame40 />
        <FaqAccordionMobile />
      </div>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-right">
          <path d={svgPaths.p2b607f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View Programs</p>
      <ArrowRight1 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex items-center justify-center py-[14px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.32)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[rgba(59,130,246,0.04)] content-stretch flex items-center justify-center py-[14px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[14px] whitespace-nowrap">Review Trading Rules</p>
    </div>
  );
}

function ButtonsStack() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[8px] relative shrink-0 w-full" data-name="Buttons-Stack">
      <Frame41 />
      <Frame43 />
    </div>
  );
}

function FinalCta() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Final-CTA">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[20px] py-[64px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3b82f6] text-[12px] text-center tracking-[1px] whitespace-nowrap">READY WHEN YOU ARE</p>
          <p className="[word-break:break-word] font-['Newsreader:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#eef0f6] text-[32px] text-center tracking-[-1px] w-[min-content]">Ready to put your strategy to the test?</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[16px] text-center w-[min-content]">Compare the programs, review every condition, and begin when you are ready.</p>
          <ButtonsStack />
        </div>
      </div>
    </div>
  );
}

function BullIcon() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0 w-[140px]" data-name="Bull-Icon">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBullIcon} />
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Brand">
      <BullIcon />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Brand />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9da2b4] text-[14px] w-[min-content]">A simulated-capital prop firm rewarding disciplined traders across 105+ countries.</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#3b82f6] text-[12px] tracking-[1px]">PRODUCT</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Evaluations</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">How it works</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Payout ledger</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Platforms</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#3b82f6] text-[12px] tracking-[1px]">COMPANY</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">About</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">FAQ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Affiliate</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Contact</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#3b82f6] text-[12px] tracking-[1px]">LEGAL</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Terms of Service</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Privacy Policy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Risk Disclosure</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#eef0f6] text-[14px]">Refund Policy</p>
    </div>
  );
}

function FooterLinksMobile() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Footer-Links-Mobile">
      <Frame45 />
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 w-full">© 2026 Funding Your Trades. All rights reserved.</p>
      <p className="relative shrink-0 w-full">Design concept · Editorial dark direction</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start not-italic relative shrink-0 text-[#5f6478] text-[11px] w-full" data-name="Frame">
      <p className="leading-[1.7] relative shrink-0 w-full">Funding Your Trades provides a simulated trading environment for the purpose of evaluating trading skill. Clients are assigned demo accounts with simulated funds; all trading activity is carried out in a simulated environment and no real capital is deposited or traded. FYT is not a broker and does not provide investment services. Trading in financial markets involves significant risk and is not suitable for everyone. Performance in a simulated environment does not guarantee future results.</p>
      <Frame49 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0e1a] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[36px] pt-[48px] px-[20px] relative size-full">
        <Frame44 />
        <FooterLinksMobile />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
              <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="350" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame48 />
      </div>
    </div>
  );
}

export default function FytMobile() {
  return (
    <div className="bg-[#070810] content-stretch flex flex-col items-start relative size-full" data-name="FYT - Mobile">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider-1">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Evaluation />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider-2">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <BentoWhyFyt />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider-3">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Platforms />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider-4">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Testimonials />
      <Payments />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider-5">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Faq />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider-6">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FinalCta />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider-7">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0745098" x2="390" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
}