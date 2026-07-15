import React from 'react';
import { Lightbulb } from 'lucide-react';

interface RecommendationCardProps {
  recommendations: string[];
}

export default function RecommendationCard({ recommendations }: RecommendationCardProps) {
  return (
    <section className="bg-[#171f33]/60 backdrop-blur-3xl border border-white/10 rounded-xl p-6 border-l-4 border-l-[#adc6ff] transition-all duration-300 hover:border-y-white/10 hover:border-r-white/10">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-6 h-6 text-[#adc6ff]" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#dae2fd]">AI Recommendations</h2>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec, index) => (
          <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#adc6ff]/30 transition-all group">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-[#adc6ff] shrink-0 group-hover:scale-125 transition-transform" />
            <span className="text-sm md:text-base text-[#c2c6d6]">{rec}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}