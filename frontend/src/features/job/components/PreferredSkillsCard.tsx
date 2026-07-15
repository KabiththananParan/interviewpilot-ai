import React from 'react';

interface PreferredSkillsCardProps {
  skills: string[];
}

export default function PreferredSkillsCard({ skills }: PreferredSkillsCardProps) {
  return (
    <div className="bg-[rgba(30,41,59,0.6)] backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:border-white/25 hover:shadow-2xl">
      <p className="font-mono text-xs text-[#c2c6d6] mb-4 uppercase tracking-wider font-medium">Preferred / Bonus Skills</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 rounded-full bg-[#571bc1]/20 text-[#d0bcff] border border-[#d0bcff]/30 font-mono text-xs hover:bg-[#571bc1]/30 cursor-default transition-all"
          >
            {skill.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}