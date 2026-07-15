import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Always show the navbar at the very top of the page
      if (currentScrollY < 10) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // 2. Add a scroll threshold (e.g., 8px) to prevent accidental jitter on tiny trackpad movements
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      if (scrollDifference < 8) return;

      // 3. Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* 
        This empty div acts as a spacer to prevent your page content from 
        suddenly jumping up under the fixed header on page load.
      */}
      <div className="h-[76px] w-full bg-[#070b15]"></div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-[#070b15]/90 backdrop-blur-xl border-b border-white/[0.04] transition-transform duration-300 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-16 py-4.5 max-w-[1280px] mx-auto">
          
          {/* Left: Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#111927] border border-[#1e293b] flex items-center justify-center overflow-hidden">
              <img 
                alt="InterviewPilot AI Logo" 
                className="h-5 w-auto object-contain opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ74CduGONU3PT4EkvguiHLmsjeuIqSg-edAG8NcjfxytsO4mgjvohApOJI1WkzeyF2GEhSN-rlHEAbBg91STyBCZkFWYGQBMf9pu5R0enyZg62QxTNsYH7rV1BaW3kvUlGJh32kfhpQWslsxWAI27IUxNAb6xZF97lqtunreHnyuwW4nviE7t_OegxBGUPAigLooLPRevBQxyuCyrG2dktDstpsI2hLEb-AJdeT2OkKx5fIr4zSRA"
              />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-100">
              InterviewPilot AI
            </span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center">
            <a className="text-[#94a3b8] hover:text-white transition-colors duration-200 text-[14px] font-medium" href="#features">
              Features
            </a>
            <a className="text-[#94a3b8] hover:text-white transition-colors duration-200 text-[14px] font-medium" href="#how-it-works">
              How It Works
            </a>
            <a className="text-[#94a3b8] hover:text-white transition-colors duration-200 text-[14px] font-medium" href="#demo">
              Demo
            </a>
            <a className="text-[#94a3b8] hover:text-white transition-colors duration-200 text-[14px] font-medium" href="#faq">
              FAQ
            </a>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-8">
            <a 
              className="hidden lg:inline-block text-[#94a3b8] hover:text-white transition-colors duration-200 text-[14px] font-medium" 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            
            <button className="bg-[#9ab6ff] hover:bg-[#b3c8ff] text-[#070b15] px-5 py-2 rounded-xl text-[14px] font-extrabold transition-all active:scale-95 duration-150 shadow-[0_0_20px_rgba(154,182,255,0.3)]">
              Get Started
            </button>
          </div>

        </div>
      </header>
    </>
  );
}