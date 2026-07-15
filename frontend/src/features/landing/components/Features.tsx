import React from 'react';

const FEATURE_DATA = [
  { icon: 'description', title: 'AI Resume Analysis', desc: 'ATS-optimized scanning to ensure your resume survives the initial filter and highlights the right technical impact.' },
  { icon: 'work', title: 'JD Analysis', desc: "Deconstruct job descriptions to find hidden requirements and the specific 'archetype' the company is hiring for." },
  { icon: 'target', title: 'AI Skill Matching', desc: 'Automatically identify skill gaps between your profile and target roles. Precise, actionable technical roadmaps.' },
  { icon: 'chat', title: 'Mock Interviews', desc: 'Real-time conversational AI that grills you on DSA, System Design, and Behavioral patterns with adaptive difficulty.' },
  { icon: 'psychology', title: 'Interview Evaluation', desc: 'Get immediate scoring on communication, technical accuracy, and problem-solving depth after every session.' },
  { icon: 'map', title: 'Learning Roadmap', desc: 'Customized 4-8 week study plans focused strictly on what you need to master to pass your next interview.' },
];

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-12 relative" id="features">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Master Every Step of the Funnel</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Our AI engine handles the technical heavy lifting, allowing you to focus on performance and execution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_DATA.map((item, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}