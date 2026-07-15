import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS_DATA = [
  { 
    name: 'Alex Chen', 
    role: 'L5 SE at Amazon', 
    quote: '"The AI-mock interviews are scarily realistic. It pointed out flaws in my communication style that I never would have noticed on my own."', 
    gradient: 'from-[#c084fc] to-[#bfdbfe]' 
  },
  { 
    name: 'Sarah Jenkins', 
    role: 'Computer Science Graduate', 
    quote: '"Went from zero interviews to 3 offers in 6 weeks. The resume analysis alone was worth every penny—my response rate tripled."', 
    gradient: 'from-[#10b981] to-[#a7f3d0]' 
  },
  { 
    name: 'David Miller', 
    role: 'AI Engineer at Stealth Startup', 
    quote: '"The technical roadmap is incredibly efficient. It identified exactly what I didn\'t know about Kafka and Redis, saving me weeks of study."', 
    gradient: 'from-[#3b82f6] to-[#6ee7b7]' 
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#070b15] text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-[40px] font-black tracking-tight text-center mb-16">
          Loved by the Best Minds
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#111927]/90 border border-[#1e293b]/50 p-10 rounded-[24px] flex flex-col justify-between min-h-[320px] shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="space-y-6">
                {/* 5-Star Outlines */}
                <div className="flex gap-1.5 text-[#9ab6ff]">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-[18px] h-[18px]" 
                      strokeWidth={2}
                    />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-[14px] text-slate-300 italic leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* User Identity Footer */}
              <div className="flex items-center gap-4.5 mt-8">
                {/* Gradient Avatar Circle */}
                <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${item.gradient} shrink-0 opacity-80`}></div>
                <div className="space-y-0.5">
                  <div className="text-sm font-extrabold text-slate-200">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold tracking-wide">
                    {item.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}