import React from 'react';

interface MissingSkillsCardProps {
  skills: string[];
}

export default function MissingSkillsCard({ skills }: MissingSkillsCardProps) {
  return (
    <section className="bg-[#171f33]/60 backdrop-blur-3xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20">
      <h3 className="font-mono text-xs text-[#c2c6d6] uppercase tracking-widest mb-4 flex justify-between items-center font-medium">
        Missing Skills
        <span className="text-[#ffb4ab]">Required</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 rounded-full bg-[#571bc1]/10 text-[#d0bcff] text-xs font-semibold border border-[#571bc1]/30 transition-all hover:bg-[#571bc1]/20 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}