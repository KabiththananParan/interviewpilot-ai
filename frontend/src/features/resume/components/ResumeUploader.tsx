import React from 'react';
import { Braces, FolderHeart, Briefcase, Brain, Lightbulb, Download, Share2 } from 'lucide-react';
import type { ResumeData } from '../types';

interface ResumeUploaderProps {
  metrics: ResumeData['metrics'];
}

export default function ResumeUploader({ metrics }: ResumeUploaderProps) {
  const icons = [
    <Braces className="w-5 h-5" />,
    <FolderHeart className="w-5 h-5" />,
    <Briefcase className="w-5 h-5" />,
    <Brain className="w-5 h-5" />
  ];

  return (
    <aside className="space-y-6">
      <div>
        <h3 className="text-sm font-bold text-[#c2c6d6] uppercase tracking-widest mb-4 px-2">Resume Health</h3>
        <div className="space-y-4">
          {Object.entries(metrics).map(([key, data], index) => (
            <div key={key} className="bg-[rgba(23,31,51,0.5)] backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:border-[#adc6ff]/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#adc6ff]/10 flex items-center justify-center text-[#adc6ff]">
                  {icons[index]}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#c2c6d6]">
                    {key.replace(/([A-Z])/g, ' $1').trim().replace(/^./, str => str.toUpperCase())}
                  </p>
                  <p className="text-sm font-bold text-[#dae2fd]">{data.status}</p>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border border-[#4ae176]/30 bg-[#4ae176]/10 flex items-center justify-center text-[#4ae176] font-bold text-[10px]">✓</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[rgba(30,41,59,0.3)] border border-white/10 rounded-2xl p-6 relative overflow-hidden before:absolute before:inset-0 before:p-[1px] before:rounded-2xl before:bg-gradient-to-br before:from-[#adc6ff]/40 before:to-[#d0bcff]/40 before:-z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#adc6ff]/20 flex items-center justify-center text-[#adc6ff]">
            <Lightbulb className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-[#dae2fd]">Pro Tip</h4>
        </div>
        <p className="text-xs text-[#c2c6d6] leading-relaxed">
          Engineers with 2+ projects featuring <span className="text-[#adc6ff]">FastAPI</span> and <span className="text-[#adc6ff]">PostgreSQL</span> have a 40% higher response rate for Backend roles in current market trends.
        </p>
      </div>

      <div className="bg-[rgba(23,31,51,0.5)] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h4 className="font-bold text-[#dae2fd] mb-4">Export Options</h4>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 rounded-xl bg-[#131b2e] hover:bg-[#2d3449] text-[#dae2fd] transition-colors">
            <span className="text-sm font-medium">Download Report</span>
            <Download className="w-4 h-4 text-[#c2c6d6]" />
          </button>
          <button className="w-full flex items-center justify-between p-3 rounded-xl bg-[#131b2e] hover:bg-[#2d3449] text-[#dae2fd] transition-colors">
            <span className="text-sm font-medium">Share Analysis</span>
            <Share2 className="w-4 h-4 text-[#c2c6d6]" />
          </button>
        </div>
      </div>
    </aside>
  );
}