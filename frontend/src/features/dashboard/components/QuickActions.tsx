import React from 'react';
export default function QuickActions() {
  return (
    <div className="space-y-6">
      {/* Mini Grid Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-dashed border-white/10 p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-[#adc6ff]/5 hover:border-white/25 hover:scale-[1.02] transition-all group">
          <span className="text-[#adc6ff] font-medium text-xs tracking-widest font-mono">UPLOAD RESUME</span>
        </button>
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-[#4ae176]/5 hover:border-white/25 hover:scale-[1.02] transition-all group">
          <span className="text-[#4ae176] font-medium text-xs tracking-widest font-mono">ANALYZE JOB</span>
        </button>
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-[#d0bcff]/5 hover:border-white/25 hover:scale-[1.02] transition-all group">
          <span className="text-[#d0bcff] font-medium text-xs tracking-widest font-mono">GENERATE MATCH</span>
        </button>
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-[#adc6ff]/5 hover:border-white/25 hover:scale-[1.02] transition-all group">
          <span className="text-[#adc6ff] font-medium text-xs tracking-widest font-mono">START INTERVIEW</span>
        </button>
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-white/5 hover:border-white/25 hover:scale-[1.02] transition-all group">
          <span className="text-[#c2c6d6] font-medium text-xs tracking-widest font-mono">ROADMAP</span>
        </button>
      </div>

      {/* Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#dae2fd]">
            <span className="w-2 h-2 rounded-full bg-[#4ae176]" />
            Matching Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {['PYTHON', 'FASTAPI', 'DOCKER', 'REST API'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-[#4ae176]/10 text-[#4ae176] rounded-full font-mono text-[11px] border border-[#4ae176]/20 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#dae2fd]">
            <span className="w-2 h-2 rounded-full bg-[#ffb4ab]" />
            Missing Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {['AWS', 'REDIS', 'KUBERNETES'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-[#ffb4ab]/10 text-[#ffb4ab] rounded-full font-mono text-[11px] border border-[#ffb4ab]/20 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}