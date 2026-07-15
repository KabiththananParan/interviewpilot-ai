import React from 'react';
import { Verified, CheckCircle2 } from 'lucide-react';
import type { BulletPoint } from '../types';

interface StrengthsCardProps {
  strengths: BulletPoint[];
}

export default function StrengthsCard({ strengths }: StrengthsCardProps) {
  return (
    <div className="bg-[rgba(23,31,51,0.5)] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      <div className="h-1 bg-[#4ae176]" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Verified className="w-5 h-5 text-[#4ae176]" />
          <h3 className="font-bold text-[#dae2fd]">Core Strengths</h3>
        </div>
        <ul className="space-y-4">
          {strengths.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#4ae176] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-[#dae2fd]">{item.title}</p>
                <p className="text-xs text-[#c2c6d6] leading-relaxed">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}