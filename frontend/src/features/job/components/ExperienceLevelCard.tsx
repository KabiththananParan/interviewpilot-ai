import React from 'react';
import { Award } from 'lucide-react';

interface ExperienceLevelCardProps {
  level: string;
  range: string;
}

export default function ExperienceLevelCard({ level, range }: ExperienceLevelCardProps) {
  return (
    <div className="bg-[rgba(30,41,59,0.6)] backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:border-white/25 hover:shadow-2xl">
      <p className="font-mono text-xs text-[#c2c6d6] mb-3 uppercase tracking-wider font-medium">Experience Level</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Award className="w-7 h-7 text-[#adc6ff]" />
          <span className="text-2xl font-semibold text-[#dae2fd]">{level}</span>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#adc6ff]/10 text-[#adc6ff] font-mono text-xs border border-[#adc6ff]/20">
          {range}
        </span>
      </div>
    </div>
  );
}