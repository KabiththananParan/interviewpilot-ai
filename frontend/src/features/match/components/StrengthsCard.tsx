import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface StrengthsCardProps {
  strengths: string[];
}

export default function StrengthsCard({ strengths }: StrengthsCardProps) {
  return (
    <section className="bg-[#171f33]/60 backdrop-blur-3xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20">
      <h3 className="font-mono text-xs text-[#c2c6d6] uppercase tracking-widest mb-4 font-medium">Core Strengths</h3>
      <div className="space-y-3">
        {strengths.map((strength, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#4ae176]/5 border border-[#4ae176]/10">
            <CheckCircle2 className="w-5 h-5 text-[#4ae176] shrink-0" />
            <span className="text-sm text-[#dae2fd] font-medium">{strength}</span>
          </div>
        ))}
      </div>
    </section>
  );
}