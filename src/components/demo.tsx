import FlowArt, { FlowSection } from './ui/story-scroll';
import { Search, Target, Zap, LineChart, CheckCircle2 } from 'lucide-react';

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="The Forge Methodology">
      <FlowSection aria-label="Diagnostic Audit" style={{ backgroundColor: '#0D1814', color: '#F9F7F2' }}>
        <div className="flex flex-col h-full flex-1">
          <div className="max-w-4xl mb-auto">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B8862A] mb-6">01 — Diagnostic Audit</p>
            <h1
              className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.05] tracking-normal" 
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Identify Constraints
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mt-12 pb-8">
            <div className="lg:col-span-5 relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <img src="/diagnostic_audit_1778700331051.png" alt="Diagnostic Audit" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1814]/80 via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-start gap-4 mb-2">
                <Search className="w-8 h-8 text-[#B8862A] shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-[clamp(1.1rem,1.3vw,1.25rem)] font-light leading-relaxed text-[#F9F7F2]/90">
                  Rigorous analysis of your funnel, competitive positioning, and unit economics. We don't guess—we isolate the exact variables limiting your growth trajectory.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Funnel Mechanics</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Deep-dive into drop-off points, friction zones, and hidden conversion bottlenecks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Unit Economics</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Stress-testing CAC, LTV, and payback periods to guarantee scalable acquisition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Positioning Audit</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Mapping competitive whitespace to establish a category of one in your market.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Technical Health</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Evaluating tech-stack constraints, tracking pixels, and data attribution gaps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Strategic Positioning" style={{ backgroundColor: '#15241D', color: '#F9F7F2' }}>
        <div className="flex flex-col h-full flex-1">
          <div className="max-w-4xl mb-auto">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B8862A] mb-6">02 — Strategic Positioning</p>
            <h1
              className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.05] tracking-normal" 
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Establish Authority
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mt-12 pb-8">
            <div className="lg:col-span-5 relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <img src="/strategic_positioning_1778700351924.png" alt="Strategic Positioning" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15241D]/80 via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-start gap-4 mb-2">
                <Target className="w-8 h-8 text-[#B8862A] shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-[clamp(1.1rem,1.3vw,1.25rem)] font-light leading-relaxed text-[#F9F7F2]/90">
                  Sharpening product marketing, messaging hierarchy, and offer mechanics to establish unassailable market authority before scaling capital deployment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Category Design</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Reframing the market narrative to ensure your solution is the only logical choice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Messaging Architecture</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Developing a resonant hierarchy of claims backed by undeniable proof points.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Offer Engineering</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Structuring pricing, guarantees, and deliverables for maximum perceived value.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Visual Identity</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Aligning your aesthetic execution with the premium nature of your core service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Agile Execution" style={{ backgroundColor: '#0A0F0D', color: '#F9F7F2' }}>
        <div className="flex flex-col h-full flex-1">
          <div className="max-w-4xl mb-auto">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B8862A] mb-6">03 — Agile Execution</p>
            <h1
              className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.05] tracking-normal" 
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Velocity &amp; Impact
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mt-12 pb-8">
            <div className="lg:col-span-5 relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <img src="/agile_execution_1778700365075.png" alt="Agile Execution" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/80 via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-start gap-4 mb-2">
                <Zap className="w-8 h-8 text-[#B8862A] shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-[clamp(1.1rem,1.3vw,1.25rem)] font-light leading-relaxed text-[#F9F7F2]/90">
                  Iterative deployment of creative assets, landing pages, and campaign structures on a weekly, high-velocity sprint cadence. Speed is leverage.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Rapid Prototyping</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Designing and launching high-fidelity assets in days, not months.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Conversion Systems</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Building standalone landing pages engineered specifically for high-intent capture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Omnichannel Orchestration</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Aligning cohesive brand touchpoints across search, paid social, and outbound.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8862A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Feedback Loops</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Utilizing real-time market data to pivot creative and copy instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Optimization Engine" style={{ backgroundColor: '#145940', color: '#F9F7F2' }}>
        <div className="flex flex-col h-full flex-1">
          <div className="max-w-4xl mb-auto">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4A843] mb-6">04 — Optimization Engine</p>
            <h1
              className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.05] tracking-normal" 
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Compound ROI
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mt-12 pb-8">
            <div className="lg:col-span-5 relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-[#D4A843]/20 shadow-2xl">
              <img src="/optimization_engine_1778700383220.png" alt="Optimization Engine" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#145940]/80 via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-start gap-4 mb-2">
                <LineChart className="w-8 h-8 text-[#D4A843] shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-[clamp(1.1rem,1.3vw,1.25rem)] font-light leading-relaxed text-[#F9F7F2]/90">
                  Continuous multivariate testing, data analysis, and budget reallocation to drive compounding ROI and systematically lower acquisition costs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">A/B/n Testing</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Rigorous experimentation on headlines, hooks, offers, and visual anchors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Capital Allocation</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Shifting budgets intra-week to the highest-performing cohorts and channels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Attribution Modeling</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Mapping the true multi-touch customer journey to eliminate wasted spend.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[0.95rem] tracking-wide mb-1">Scale Mechanics</h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">Safely increasing media volume without breaking efficiency thresholds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FlowSection>

    </FlowArt>
  );
}
