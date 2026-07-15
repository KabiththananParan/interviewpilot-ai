import React from 'react';
import { AlertTriangle, HelpCircle } from 'lucide-react';
import type { BulletPoint } from '../types';

interface WeaknessesCardProps {
  weaknesses: BulletPoint[];
}

export default function WeaknessesCard({ weaknesses }: WeaknessesCardProps) {
  return (
    <div className="bg-[rgba(23,31,51,0.5)] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      <div className="h-1 bg-[#d0bcff]" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-[#d0bcff]" />
          <h3 className="font-bold text-[#dae2fd]">Growth Areas</h3>
        </div>
        <ul className="space-y-4">
          {weaknesses.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <HelpCircle className="w-5 h-5 text-[#d0bcff] flex-shrink-0 mt-0.5" />
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