import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface WeaknessesCardProps {
  weaknesses: string[];
}

export default function WeaknessesCard({ weaknesses }: WeaknessesCardProps) {
  return (
    <section className="bg-[#171f33]/60 backdrop-blur-3xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20">
      <h3 className="font-mono text-xs text-[#c2c6d6] uppercase tracking-widest mb-4 font-medium">Gaps to Address</h3>
      <div className="space-y-3">
        {weaknesses.map((gap, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#93000a]/5 border border-[#93000a]/20">
            <AlertTriangle className="w-5 h-5 text-[#ffb4ab] shrink-0" />
            <span className="text-sm text-[#c2c6d6] font-medium">{gap}</span>
          </div>
        ))}
      </div>
    </section>
  );
}