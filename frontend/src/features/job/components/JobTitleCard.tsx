import React from 'react';

interface TargetRoleProps {
  title: string;
  company: string;
  logoUrl: string;
}

export default function JobTitleCard({ title, company, logoUrl }: TargetRoleProps) {
  return (
    <div className="bg-[rgba(30,41,59,0.6)] backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:border-white/25 hover:shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 overflow-hidden flex-shrink-0">
          <img className="w-8 h-8 object-contain" src={logoUrl} alt={`${company} Logo`} />
        </div>
        <div>
          <p className="font-mono text-xs text-[#c2c6d6] tracking-wider font-medium">TARGET ROLE</p>
          <h4 className="text-2xl font-semibold text-[#dae2fd] leading-tight mt-1">{title}</h4>
          <p className="text-base text-[#adc6ff] mt-0.5">{company}</p>
        </div>
      </div>
    </div>
  );
}