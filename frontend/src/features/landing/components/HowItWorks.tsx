

export default function HowItWorks() {
  return (
    <section className="py-20 bg-surface-container-lowest relative overflow-hidden" id="how-it-works">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Path to Hired</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-24 reveal">
            <div className="lg:w-1/2 lg:text-right">
              <h3 className="text-xl font-bold mb-2">1. Profile Sync</h3>
              <p className="text-on-surface-variant text-base">Upload your resume and LinkedIn profile. Our AI extracts core competencies and projects to build your baseline profile.</p>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shrink-0 shadow-lg shadow-primary/30">1</div>
            <div className="lg:w-1/2">
              <div className="glass-card p-4 rounded-xl max-w-sm">
                <div className="h-4 bg-white/5 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-white/5 rounded w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 mb-24 reveal">
            <div className="lg:w-1/2 text-left">
              <h3 className="text-xl font-bold mb-2">2. Target Analysis</h3>
              <p className="text-on-surface-variant text-base">Provide a job description. We identify the specific expectations of that role—be it specialized tech stacks or seniority expectations.</p>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-on-surface font-bold shrink-0 border border-white/20">2</div>
            <div className="lg:w-1/2 lg:flex lg:justify-end">
              <div className="glass-card p-4 rounded-xl max-w-sm border-tertiary/20">
                <span className="text-xs font-mono text-tertiary">MATCH DETECTED</span>
                <div className="mt-2 flex gap-2"><div className="h-4 w-4 rounded bg-tertiary"></div><div className="h-4 w-4 rounded bg-tertiary"></div><div className="h-4 w-4 rounded bg-white/10"></div></div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-24 reveal">
            <div className="lg:w-1/2 lg:text-right">
              <h3 className="text-xl font-bold mb-2">3. Mock &amp; Feedback</h3>
              <p className="text-on-surface-variant text-base">Engage in unlimited mock interviews. Receive a granular score and specific ways to improve your answers.</p>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-on-surface font-bold shrink-0 border border-white/20">3</div>
            <div className="lg:w-1/2">
              <div className="glass-card p-4 rounded-xl max-w-sm bg-primary/5">
                {/* Fixed the 'class' to 'className' translation error below */}
                <div className="flex gap-2 items-center mb-2"><span className="material-symbols-outlined text-sm text-primary">mic</span><span className="text-xs">Analyzing tone...</span></div>
                <div className="h-12 bg-white/5 rounded"></div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 reveal">
            <div className="lg:w-1/2 text-left">
              <h3 className="text-xl font-bold mb-2">4. Constant Growth</h3>
              <p className="text-on-surface-variant text-base">Review your personalized roadmap every morning. Track your progress until you hit 100% interview readiness.</p>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold shrink-0 shadow-lg shadow-secondary/30">4</div>
            <div className="lg:w-1/2 lg:flex lg:justify-end">
              <div className="glass-card p-4 rounded-xl max-w-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                <span className="text-xs font-semibold">Updating study path...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}