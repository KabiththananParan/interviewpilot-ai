import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ATSScoreCardProps {
  score: number;
  targetRole: string;
}

export default function ATSScoreCard({ score, targetRole }: ATSScoreCardProps) {
  const [offset, setOffset] = useState(264);
  const radius = 42;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const progressOffset = circumference - (score / 100) * circumference;
    const timer = setTimeout(() => setOffset(progressOffset), 300);
    return () => clearTimeout(timer);
  }, [score, circumference]);

  return (
    <div className="bg-[rgba(23,31,51,0.5)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-10">
      <div className="relative w-40 h-40 flex-shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle className="text-[#2d3449]" cx="50" cy="50" fill="transparent" r={radius} stroke="currentColor" strokeWidth="8" />
          <circle 
            className="text-[#adc6ff] transition-all duration-700 ease-out" 
            cx="50" 
            cy="50" 
            fill="transparent" 
            r={radius} 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeDasharray={circumference} 
            strokeDashoffset={offset} 
            strokeLinecap="round" 
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-black text-[#dae2fd]">{score}</span>
          <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-wider">ATS Match</span>
        </div>
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-bold text-[#dae2fd] mb-3">Exceptional Resume Health</h3>
        <p className="text-[#c2c6d6] leading-relaxed mb-4">
          Your resume is well optimized for top-tier Applicant Tracking Systems. The document structure is highly parsable, and keyword density for <span className="text-[#dae2fd] font-semibold">"{targetRole}"</span> roles is within the 95th percentile.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {['Standard Fonts', 'No Tables', 'Clear Hierarchy'].map((label) => (
            <div key={label} className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4ae176]" />
              <span className="text-xs font-medium text-[#dae2fd]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}