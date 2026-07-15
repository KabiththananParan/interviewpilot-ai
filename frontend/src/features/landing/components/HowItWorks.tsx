import { Mic } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#070b15] text-white relative overflow-hidden" id="how-it-works">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-[40px] font-black tracking-tight mb-4">
            Your Path to Hired
          </h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-[1px] bg-white/10 -translate-x-1/2"></div>
          
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mb-28 relative">
            <div className="lg:w-1/2 lg:text-right lg:pr-12">
              <h3 className="text-xl font-bold mb-3 text-slate-100">1. Profile Sync</h3>
              <p className="text-[#94a3b8] text-[14px] leading-relaxed max-w-md lg:ml-auto">
                Upload your resume and LinkedIn profile. Our AI extracts core competencies and projects to build your baseline profile.
              </p>
            </div>
            
            {/* Soft Glowing Blue Node */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#bfdbfe] flex items-center justify-center text-[#0f172a] font-extrabold shrink-0 shadow-[0_0_20px_rgba(191,219,254,0.35)]">
              1
            </div>
            
            <div className="lg:w-1/2 lg:pl-12 w-full flex justify-center lg:justify-start">
              <div className="bg-[#111927] border border-[#1e293b]/40 p-6 rounded-[18px] w-full max-w-[340px] space-y-3 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                <div className="h-3.5 bg-white/[0.04] rounded-md w-11/12"></div>
                <div className="h-3.5 bg-white/[0.04] rounded-md w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-8 mb-28 relative">
            <div className="lg:w-1/2 lg:text-left lg:pl-12">
              <h3 className="text-xl font-bold mb-3 text-slate-100">2. Target Analysis</h3>
              <p className="text-[#94a3b8] text-[14px] leading-relaxed max-w-md lg:mr-auto">
                Provide a job description. We identify the specific expectations of that role—be it specialized tech stacks or seniority expectations.
              </p>
            </div>
            
            {/* Dark Node */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#1e293b] border border-white/10 flex items-center justify-center text-slate-300 font-extrabold shrink-0 shadow-lg">
              2
            </div>
            
            <div className="lg:w-1/2 lg:pr-12 w-full flex justify-center lg:justify-end">
              <div className="bg-[#111927] border border-[#1e293b]/40 p-5 rounded-[18px] w-full max-w-[210px] space-y-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                <span className="text-[10px] font-extrabold tracking-wider text-[#10b981] block">MATCH DETECTED</span>
                <div className="flex gap-2">
                  <div className="h-4 w-4 rounded-md bg-[#10b981]"></div>
                  <div className="h-4 w-4 rounded-md bg-[#10b981]"></div>
                  <div className="h-4 w-4 rounded-md bg-white/[0.08]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mb-28 relative">
            <div className="lg:w-1/2 lg:text-right lg:pr-12">
              <h3 className="text-xl font-bold mb-3 text-slate-100">3. Mock &amp; Feedback</h3>
              <p className="text-[#94a3b8] text-[14px] leading-relaxed max-w-md lg:ml-auto">
                Engage in unlimited mock interviews. Receive a granular score and specific ways to improve your answers.
              </p>
            </div>
            
            {/* Dark Node */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#1e293b] border border-white/10 flex items-center justify-center text-slate-300 font-extrabold shrink-0 shadow-lg">
              3
            </div>
            
            <div className="lg:w-1/2 lg:pl-12 w-full flex justify-center lg:justify-start">
              <div className="bg-[#111927] border border-[#1e293b]/40 p-5 rounded-[18px] w-full max-w-[340px] space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                <div className="flex gap-2.5 items-center text-[#94a3b8]">
                  <Mic className="w-3.5 h-3.5 text-slate-300" />
                  <span className="text-[11px] font-semibold">Analyzing tone...</span>
                </div>
                <div className="h-14 bg-black/20 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-8 relative">
            <div className="lg:w-1/2 lg:text-left lg:pl-12">
              <h3 className="text-xl font-bold mb-3 text-slate-100">4. Constant Growth</h3>
              <p className="text-[#94a3b8] text-[14px] leading-relaxed max-w-md lg:mr-auto">
                Review your personalized roadmap every morning. Track your progress until you hit 100% interview readiness.
              </p>
            </div>
            
            {/* Soft Glowing Purple Node */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#e9d5ff] flex items-center justify-center text-[#0f172a] font-extrabold shrink-0 shadow-[0_0_20px_rgba(233,213,255,0.35)]">
              4
            </div>
            
            <div className="lg:w-1/2 lg:pr-12 w-full flex justify-center lg:justify-end">
              <div className="bg-[#111927] border border-[#1e293b]/40 p-5 rounded-[18px] w-full max-w-[240px] flex items-center gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                {/* Circular Spinning Border Loader */}
                <div className="w-8 h-8 rounded-full border-[2.5px] border-[#a5b4fc] border-t-transparent animate-spin shrink-0"></div>
                <span className="text-[11px] font-bold text-slate-300">Updating study path...</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}