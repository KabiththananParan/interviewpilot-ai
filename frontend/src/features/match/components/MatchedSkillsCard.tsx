import React from 'react';

interface MatchedSkillsCardProps {
  skills: string[];
  percentage: number;
}

export default function MatchedSkillsCard({ skills, percentage }: MatchedSkillsCardProps) {
  return (
    <section className="bg-[#171f33]/60 backdrop-blur-3xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20">
      <h3 className="font-mono text-xs text-[#c2c6d6] uppercase tracking-widest mb-4 flex justify-between items-center font-medium">
        Matched Skills
        <span className="text-[#4ae176]">{percentage}% Match</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 rounded-full bg-[#4ae176]/10 text-[#4ae176] text-xs font-semibold border border-[#4ae176]/20 transition-all hover:bg-[#4ae176]/20 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}