import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-20 border-t border-white/5 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-12 max-w-[1280px] mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-2xl font-bold text-on-surface">InterviewPilot AI</div>
          <p className="text-sm text-on-surface-variant">The next generation of career acceleration.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-mono" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-mono" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-mono" href="#">Cookie Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-mono" href="#">Contact Us</a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="text-xs font-mono">Twitter</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="text-xs font-mono">LinkedIn</span></a>
          </div>
          <div className="text-sm text-on-surface-variant opacity-60">© 2026 InterviewPilot AI. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}