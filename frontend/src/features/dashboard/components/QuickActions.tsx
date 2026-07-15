import React from 'react';
import { 
  FileUp, 
  FileSearch, 
  Sparkles, 
  PlayCircle, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle 
} from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="space-y-6">
      {/* Mini Grid Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        
        {/* Upload Resume */}
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-dashed border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-[#adc6ff]/5 hover:border-white/25 hover:scale-[1.02] transition-all group min-h-[120px]">
          <FileUp className="w-6 h-6 text-[#adc6ff] group-hover:scale-110 transition-transform" />
          <span className="text-[#c2c6d6] font-bold text-[11px] tracking-wider uppercase max-w-[80px] leading-tight transition-colors group-hover:text-[#dae2fd]">
            Upload<br />Resume
          </span>
        </button>

        {/* Analyze Job */}
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-[#4ae176]/5 hover:border-white/25 hover:scale-[1.02] transition-all group min-h-[120px]">
          <FileSearch className="w-6 h-6 text-[#4ae176] group-hover:scale-110 transition-transform" />
          <span className="text-[#c2c6d6] font-bold text-[11px] tracking-wider uppercase max-w-[80px] leading-tight transition-colors group-hover:text-[#dae2fd]">
            Analyze Job
          </span>
        </button>

        {/* Generate Match */}
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-[#d0bcff]/5 hover:border-white/25 hover:scale-[1.02] transition-all group min-h-[120px]">
          <Sparkles className="w-6 h-6 text-[#d0bcff] group-hover:scale-110 transition-transform" />
          <span className="text-[#c2c6d6] font-bold text-[11px] tracking-wider uppercase max-w-[80px] leading-tight transition-colors group-hover:text-[#dae2fd]">
            Generate<br />Match
          </span>
        </button>

        {/* Start Interview */}
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-[#adc6ff]/5 hover:border-white/25 hover:scale-[1.02] transition-all group min-h-[120px]">
          <PlayCircle className="w-6 h-6 text-[#adc6ff] group-hover:scale-110 transition-transform" />
          <span className="text-[#c2c6d6] font-bold text-[11px] tracking-wider uppercase max-w-[80px] leading-tight transition-colors group-hover:text-[#dae2fd]">
            Start<br />Interview
          </span>
        </button>

        {/* Roadmap */}
        <button className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-white/5 hover:border-white/25 hover:scale-[1.02] transition-all group min-h-[120px]">
          <TrendingUp className="w-6 h-6 text-[#c2c6d6] group-hover:scale-110 transition-transform" />
          <span className="text-[#c2c6d6] font-bold text-[11px] tracking-wider uppercase max-w-[80px] leading-tight transition-colors group-hover:text-[#dae2fd]">
            Roadmap
          </span>
        </button>

      </div>

      {/* Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
          <h4 className="text-md font-semibold mb-4 flex items-center gap-2 text-[#dae2fd]">
            <CheckCircle className="w-4 h-4 text-[#4ae176]" />
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
          <h4 className="text-md font-semibold mb-4 flex items-center gap-2 text-[#dae2fd]">
            <AlertTriangle className="w-4 h-4 text-[#ffb4ab]" />
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