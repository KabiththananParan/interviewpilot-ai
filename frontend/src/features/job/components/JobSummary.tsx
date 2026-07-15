import React from 'react';
import { Brain } from 'lucide-react';

interface JobSummaryProps {
  paragraphs: string[];
  responsibilities: string[];
  culture: string[];
}

export default function JobSummary({ paragraphs, responsibilities, culture }: JobSummaryProps) {
  return (
    <div className="bg-[rgba(30,41,59,0.6)] backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:border-white/25 hover:shadow-2xl relative before:absolute before:inset-0 before:p-[1px] before:rounded-xl before:bg-gradient-to-r before:from-[#adc6ff]/50 before:to-[#d0bcff]/50 before:-z-10">
      <div className="flex items-center mb-6">
        <div className="p-2 bg-[#adc6ff]/10 rounded-lg mr-4 text-[#adc6ff]">
          <Brain className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-semibold text-[#dae2fd]">Job Summary</h3>
      </div>
      
      <div className="space-y-4 text-[#c2c6d6] text-base leading-relaxed">
        {paragraphs.map((para, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-white/5 rounded-lg border border-white/5">
            <p className="font-mono text-xs tracking-wider text-[#c2c6d6] mb-3 uppercase font-medium">KEY RESPONSIBILITIES</p>
            <ul className="list-disc list-inside text-sm space-y-2 text-[#dae2fd]">
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg border border-white/5">
            <p className="font-mono text-xs tracking-wider text-[#c2c6d6] mb-3 uppercase font-medium">TEAM CULTURE</p>
            <ul className="list-disc list-inside text-sm space-y-2 text-[#dae2fd]">
              {culture.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}