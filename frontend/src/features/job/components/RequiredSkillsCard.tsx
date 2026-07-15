import React from 'react';

interface RequiredSkillsCardProps {
  skills: string[];
}

export default function RequiredSkillsCard({ skills }: RequiredSkillsCardProps) {
  return (
    <div className="bg-[rgba(30,41,59,0.6)] backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:border-white/25 hover:shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <p className="font-mono text-xs text-[#c2c6d6] uppercase tracking-wider font-medium">Required Skills</p>
        <span className="text-[#4ae176] font-mono text-xs font-bold">100% Match Suggested</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 rounded-full bg-[#00a74b]/10 text-[#4ae176] border border-[#4ae176]/30 font-mono text-xs hover:bg-[#00a74b]/20 cursor-default transition-all"
          >
            {skill.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}