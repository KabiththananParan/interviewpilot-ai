import React from 'react';
import type { ChangeEvent } from 'react';
import { Edit3, ArrowRight } from 'lucide-react';

interface JobInputProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
  onAnalyze: () => void;
}

export default function JobInput({ value, onChange, onClear, onAnalyze }: JobInputProps) {
  const maxLength = 50000;

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="bg-[rgba(30,41,59,0.6)] backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:border-white/25 hover:shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <label className="text-base font-semibold text-[#dae2fd] flex items-center">
          <Edit3 className="w-5 h-5 mr-2 text-[#adc6ff]" />
          Job Description Input
        </label>
        <button 
          onClick={onClear} 
          className="text-[#adc6ff] text-sm font-medium hover:underline active:scale-95 transition-transform"
        >
          Clear all
        </button>
      </div>
      <div className="relative">
        <textarea 
          className="w-full bg-[#060e20] border border-white/10 rounded-lg p-4 text-[#dae2fd] font-sans placeholder-[#8c909f] focus:ring-2 focus:ring-[#adc6ff]/50 focus:border-[#adc6ff] transition-all outline-none resize-none min-h-[280px]"
          placeholder="Paste the job description here..."
          value={value}
          onChange={handleTextChange}
        />
        <div className="absolute bottom-4 right-4 font-mono text-xs text-[#c2c6d6]">
          <span>{value.length}</span> / {maxLength}
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button 
          onClick={onAnalyze}
          className="px-8 py-3 rounded-lg bg-[#adc6ff] text-[#002e6a] font-bold hover:brightness-110 shadow-lg transition-all flex items-center active:scale-95"
        >
          Analyze Job
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}