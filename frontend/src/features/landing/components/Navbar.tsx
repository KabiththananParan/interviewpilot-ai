import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-4 md:px-12 py-4 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2">
          <img 
            alt="InterviewPilot AI Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ74CduGONU3PT4EkvguiHLmsjeuIqSg-edAG8NcjfxytsO4mgjvohApOJI1WkzeyF2GEhSN-rlHEAbBg91STyBCZkFWYGQBMf9pu5R0enyZg62QxTNsYH7rV1BaW3kvUlGJh32kfhpQWslsxWAI27IUxNAb6xZF97lqtunreHnyuwW4nviE7t_OegxBGUPAigLooLPRevBQxyuCyrG2dktDstpsI2hLEb-AJdeT2OkKx5fIr4zSRA"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            InterviewPilot AI
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-200 text-base" href="#features">Features</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-200 text-base" href="#how-it-works">How It Works</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-200 text-base" href="#demo">Demo</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-200 text-base" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex text-on-surface hover:opacity-80 transition-all text-base">GitHub</button>
          <button className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-2 rounded-xl font-semibold transition-all active:scale-95 duration-150 shadow-lg shadow-primary/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}