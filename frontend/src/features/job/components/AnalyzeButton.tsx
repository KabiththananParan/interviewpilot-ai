import React from 'react';
import { Sparkles } from 'lucide-react';

interface AnalyzeButtonProps {
  onClick: () => void;
}

export default function AnalyzeButton({ onClick }: AnalyzeButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="px-6 py-2.5 rounded-lg bg-[#adc6ff] text-[#002e6a] font-bold hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all flex items-center"
    >
      <Sparkles className="w-4 h-4 mr-2" />
      Analyze
    </button>
  );
}