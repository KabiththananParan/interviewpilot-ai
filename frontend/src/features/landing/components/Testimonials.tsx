import React from 'react';

const TESTIMONIALS_DATA = [
  { name: 'Alex Chen', role: 'L5 SE at Amazon', quote: '"The AI-mock interviews are scarily realistic. It pointed out flaws in my communication style that I never would have noticed on my own."', gradient: 'from-primary to-secondary' },
  { name: 'Sarah Jenkins', role: 'Computer Science Graduate', quote: '"Went from zero interviews to 3 offers in 6 weeks. The resume analysis alone was worth every penny—my response rate tripled."', gradient: 'from-secondary to-tertiary' },
  { name: 'David Miller', role: 'AI Engineer at Stealth Startup', quote: '"The technical roadmap is incredibly efficient. It identified exactly what I didn\'t know about Kafka and Redis, saving me weeks of study."', gradient: 'from-tertiary to-primary' },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-12 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Loved by the Best Minds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill">star</span>
                  ))}
                </div>
                <p className="text-base text-on-surface italic mb-6 leading-relaxed">{item.quote}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient}`}></div>
                <div>
                  <div className="text-sm font-bold">{item.name}</div>
                  <div className="text-[10px] text-on-surface-variant">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}