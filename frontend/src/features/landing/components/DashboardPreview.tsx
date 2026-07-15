import { User, } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#070b15] text-white relative overflow-hidden" id="demo">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 space-y-1">
          <span className="text-[11px] font-mono text-[#3b82f6] uppercase tracking-[0.2em] block font-bold">
            The Dashboard
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Visualize Your Advantage
          </h2>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Main Browser Window */}
          <div className="lg:col-span-8 bg-[#0b111e] border border-[#1e293b]/60 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            {/* Browser Window Header */}
            <div className="bg-[#0f172a] px-6 py-4 flex items-center gap-4 border-b border-white/[0.04]">
              {/* Window Controls */}
              <div className="flex gap-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80"></div>
              </div>
              {/* Browser Address Bar */}
              <div className="flex-1 max-w-md h-7 bg-black/35 rounded-lg flex items-center px-4 border border-white/[0.02]">
                <span className="text-[10px] text-slate-400 font-mono tracking-wide">
                  interview-pilot.ai/dashboard/overview
                </span>
              </div>
            </div>

            {/* Browser Content Window */}
            <div className="p-8 space-y-8">
              
              {/* Top Row: 3 Score Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* ATS Score Card */}
                <div className="bg-[#111927]/90 border border-[#1e293b]/40 p-5 rounded-xl space-y-1.5">
                  <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider font-bold">
                    ATS Score
                  </span>
                  <div className="text-3xl font-black text-[#60a5fa]">92%</div>
                  <div className="text-[10px] text-[#10b981] font-semibold">
                    +4% from last scan
                  </div>
                </div>

                {/* Match Score Card */}
                <div className="bg-[#111927]/90 border border-[#1e293b]/40 p-5 rounded-xl space-y-1.5">
                  <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider font-bold">
                    Match Score
                  </span>
                  <div className="text-3xl font-black text-[#c084fc]">89%</div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    Target: Google L4
                  </div>
                </div>

                {/* Interview Readiness Card */}
                <div className="bg-[#111927]/90 border border-[#1e293b]/40 p-5 rounded-xl space-y-1.5">
                  <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider font-bold">
                    Interview Readiness
                  </span>
                  <div className="text-3xl font-black text-[#10b981]">84%</div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    Goal: 95%
                  </div>
                </div>

              </div>

              {/* Middle Section: Skills Analysis */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-base font-bold text-slate-100">Skills Analysis</h4>
                  <button className="text-[11px] text-[#60a5fa] font-bold hover:underline">
                    View Roadmap
                  </button>
                </div>
                {/* Tags Layout */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#10b981]/5 text-[#10b981] rounded-full text-[10px] font-bold border border-[#10b981]/15 tracking-wide">
                    PYTHON
                  </span>
                  <span className="px-3 py-1 bg-[#10b981]/5 text-[#10b981] rounded-full text-[10px] font-bold border border-[#10b981]/15 tracking-wide">
                    FASTAPI
                  </span>
                  <span className="px-3 py-1 bg-[#10b981]/5 text-[#10b981] rounded-full text-[10px] font-bold border border-[#10b981]/15 tracking-wide">
                    DOCKER
                  </span>
                  <span className="px-3 py-1 bg-[#10b981]/5 text-[#10b981] rounded-full text-[10px] font-bold border border-[#10b981]/15 tracking-wide">
                    SYSTEM DESIGN
                  </span>
                  <span className="px-3 py-1 bg-[#f43f5e]/5 text-[#f43f5e] rounded-full text-[10px] font-bold border border-[#f43f5e]/15 tracking-wide">
                    AWS (MISSING)
                  </span>
                  <span className="px-3 py-1 bg-[#f43f5e]/5 text-[#f43f5e] rounded-full text-[10px] font-bold border border-[#f43f5e]/15 tracking-wide">
                    REDIS (MISSING)
                  </span>
                </div>
              </div>

              {/* Bottom Section: Milestone Banner */}
              <div className="p-6 bg-gradient-to-r from-[#111927] to-[#162235] border border-[#1e293b]/60 rounded-2xl relative overflow-hidden flex items-center justify-between">
                <div className="relative z-10 space-y-3 max-w-lg">
                  <h4 className="font-extrabold text-[#60a5fa] text-sm">
                    Next Milestone: System Design Deep Dive
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Your "Match Score" for Vercel is being limited by High-Availability knowledge. We've scheduled 3 mock rounds focusing on Distributed Systems.
                  </p>
                  <button className="bg-[#9ab6ff] text-[#070b15] text-[11px] px-4 py-2.5 rounded-lg font-extrabold hover:shadow-[0_0_15px_rgba(154,182,255,0.4)] transition-all">
                    Start Learning Now
                  </button>
                </div>
                {/* Custom circular grid aesthetic icon decoration on right */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden md:block">
                  <div className="w-24 h-24 rounded-full border-8 border-white"></div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Right: Side Panel (Progress Circle & AI Mentor) */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-stretch">
            
            {/* Phase Progress Card */}
            <div className="bg-[#111927] border border-[#1e293b]/40 p-8 rounded-2xl flex-1 flex flex-col items-center justify-center text-center shadow-md">
              {/* Radial Progress Graphic */}
              <div className="relative w-36 h-36 mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="42" stroke="rgba(255,255,255,0.03)" strokeWidth="6"></circle>
                  <circle 
                    className="text-[#9ab6ff]" 
                    cx="50" 
                    cy="50" 
                    fill="none" 
                    r="42" 
                    stroke="currentColor" 
                    strokeDasharray="263.8" 
                    strokeDashoffset="98" 
                    strokeWidth="6"
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-white">3/8</span>
                  <span className="text-[9px] text-[#94a3b8] tracking-widest font-mono font-bold uppercase mt-0.5">Weeks</span>
                </div>
              </div>
              <h4 className="font-extrabold text-base mb-2 text-slate-100">Phase 2: Execution</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed max-w-xs">
                You're currently in the middle of your customized preparation journey. You've completed 12 mock interviews so far.
              </p>
            </div>

            {/* AI Mentor Chat Panel */}
            <div className="bg-[#111927] border border-[#1e293b]/40 p-6 rounded-2xl shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-slate-200">Interview AI Mentor</div>
                  <div className="text-[9px] text-[#10b981] font-bold flex items-center gap-1.5 mt-0.5">
                    <span className="h-1 w-1 bg-[#10b981] rounded-full"></span>
                    Online - Active
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-[#94a3b8] bg-[#0c121e] p-4 rounded-xl border border-white/[0.02] italic leading-relaxed">
                "Ready to start the System Design round? I've prepared questions about Rate Limiting and Caching."
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}