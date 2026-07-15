import React from 'react';

export default function DashboardPreview() {
  return (
    <section className="py-20 px-4 md:px-12" id="demo">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2 font-bold">The Dashboard</span>
          <h2 className="text-3xl md:text-4xl font-bold">Visualize Your Advantage</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Window */}
          <div className="md:col-span-8 glass-card rounded-2xl overflow-hidden shadow-2xl border-white/10">
            <div className="bg-surface-container-high px-6 py-4 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-error"></div><div className="w-2.5 h-2.5 rounded-full bg-secondary"></div><div className="w-2.5 h-2.5 rounded-full bg-tertiary"></div></div>
              <div className="ml-4 flex-1 h-6 bg-black/20 rounded flex items-center px-3"><span className="text-[10px] text-on-surface-variant">interview-pilot.ai/dashboard/overview</span></div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">ATS Score</span>
                  <div className="text-3xl font-bold text-primary mt-1">92%</div>
                  <div className="text-[10px] text-tertiary mt-1">+4% from last scan</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Match Score</span>
                  <div className="text-3xl font-bold text-secondary mt-1">89%</div>
                  <div className="text-[10px] text-on-surface-variant mt-1">Target: Google L4</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Interview Readiness</span>
                  <div className="text-3xl font-bold text-tertiary mt-1">84%</div>
                  <div className="text-[10px] text-on-surface-variant mt-1">Goal: 95%</div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-bold">Skills Analysis</h4>
                  <button className="text-xs text-primary font-bold">View Roadmap</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-mono border border-tertiary/20">PYTHON</span>
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-mono border border-tertiary/20">FASTAPI</span>
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-mono border border-tertiary/20">DOCKER</span>
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-mono border border-tertiary/20">SYSTEM DESIGN</span>
                  <span className="px-3 py-1 bg-error/10 text-error rounded-full text-xs font-mono border border-error/20">AWS (MISSING)</span>
                  <span className="px-3 py-1 bg-error/10 text-error rounded-full text-xs font-mono border border-error/20">REDIS (MISSING)</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-primary mb-2">Next Milestone: System Design Deep Dive</h4>
                  <p className="text-xs text-on-surface-variant max-w-lg mb-4">Your "Match Score" for Vercel is being limited by High-Availability knowledge. We've scheduled 3 mock rounds focusing on Distributed Systems.</p>
                  <button className="bg-primary text-on-primary text-xs px-4 py-2 rounded-lg font-bold">Start Learning Now</button>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <span className="material-symbols-outlined text-[160px]">lightbulb</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Side Panels */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-card p-6 rounded-2xl flex-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
                  <circle className="text-primary" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="282.7" strokeDashoffset="100" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">3/8</span>
                  <span className="text-[10px] text-on-surface-variant">WEEKS</span>
                </div>
              </div>
              <h4 className="font-bold mb-2">Phase 2: Execution</h4>
              <p className="text-xs text-on-surface-variant">You're currently in the middle of your customized preparation journey. You've completed 12 mock interviews so far.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl overflow-hidden relative group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <div className="text-sm font-bold">Interview AI Mentor</div>
                  <div className="text-[10px] text-tertiary">Online - Active</div>
                </div>
              </div>
              <div className="text-xs text-on-surface-variant bg-white/5 p-3 rounded-lg border border-white/5 italic">
                "Ready to start the System Design round? I've prepared questions about Rate Limiting and Caching."
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}