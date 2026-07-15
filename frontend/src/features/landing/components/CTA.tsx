import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-12 relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="glass-card rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 blur-[120px] -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Guessing. Start Preparing.</h2>
          <p className="text-on-surface-variant text-base max-w-2xl mx-auto mb-10">
            Join 2,000+ engineers who have used InterviewPilot AI to level up their careers and secure higher compensation packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-primary text-on-primary rounded-xl font-bold text-xl hover:shadow-2xl transition-all">Get Started for Free</button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-on-surface rounded-xl font-bold text-xl hover:bg-white/10 transition-all">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}