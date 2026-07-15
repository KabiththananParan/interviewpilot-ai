import React from 'react';

interface SkillsCardProps {
  skills: string[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#dae2fd]">Extracted Technical Skills</h3>
        <span className="text-xs text-[#c2c6d6]">{skills.length} Skills Identified</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {skills.map((skill) => (
          <div 
            key={skill} 
            className="bg-[rgba(23,31,51,0.5)] backdrop-blur-xl border border-white/10 p-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-default group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#adc6ff] group-hover:shadow-[0_0_8px_#adc6ff]" />
            <span className="font-mono text-xs font-medium tracking-wide text-[#dae2fd] uppercase">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}