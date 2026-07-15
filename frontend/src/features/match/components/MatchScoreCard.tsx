import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface MatchScoreCardProps {
  score: number;
  rating: string;
  status: string;
  headline: string;
  summary: string;
}

export default function MatchScoreCard({ score, rating, status, headline, summary }: MatchScoreCardProps) {
  // Circular gauge background based on the score percentage
  const progressStyle = {
    background: `conic-gradient(#4d8eff ${score}%, #1e293b 0)`
  };

  return (
    <section className="bg-[#171f33]/60 backdrop-blur-3xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Circle Progress Gauge */}
        <div className="relative w-48 h-48 flex items-center justify-center group shrink-0">
          <div 
            style={progressStyle} 
            className="absolute inset-0 rounded-full transition-all duration-500 [mask-image:radial-gradient(farthest-side,transparent_calc(100%-12px),#000_100%)] [-webkit-mask-image:radial-gradient(farthest-side,transparent_calc(100%-12px),#000_100%)] group-hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)]"
          />
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#dae2fd]">{score}%</span>
            <span className="text-[#adc6ff] font-mono text-xs uppercase tracking-wider mt-1">{rating}</span>
          </div>
        </div>

        {/* Text Details Summary */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ae176]/10 text-[#4ae176] border border-[#4ae176]/20 mb-3">
            <CheckCircle2 className="w-4 h-4 fill-current" />
            <span className="font-mono text-xs font-semibold">{status}</span>
          </div>
          <h3 className="text-2xl font-semibold text-[#dae2fd] mb-2">{headline}</h3>
          <p className="text-base text-[#c2c6d6] leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}