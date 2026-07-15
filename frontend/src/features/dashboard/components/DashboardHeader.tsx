import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 right-0 h-16 z-40 border-b border-white/10 bg-[#0b1326]/60 backdrop-blur-md flex justify-between items-center px-12 w-full">
      <div className="flex items-center bg-[#222a3d] rounded-full px-4 py-1.5 w-96 border border-white/5">
        <Search className="text-[#8c909f] w-4 h-4 mr-2" />
        <input 
          className="bg-transparent border-none focus:outline-none text-sm text-[#c2c6d6] w-full placeholder:text-[#8c909f]" 
          placeholder="Search roadmap, feedback, or analysis..." 
          type="text"
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-[#c2c6d6] hover:text-[#adc6ff] transition-all duration-200">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#adc6ff] rounded-full"></span>
        </button>
        <div className="h-8 w-px bg-white/10"></div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#dae2fd]">InterviewPilot AI</span>
          <img 
            className="w-8 h-8 rounded-full border border-white/20 object-cover" 
            alt="Profile Avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsdlz494urGXyElupFlTOWXw1PJLQmXUbyDI9zg1SxauQHcs-9vQdhbTjDoi-ikS7dVjcUXTDmX1yMla7Hq9zN79A6fjBqAE-_ZKy2o9Cfl0_ND1pPsjkrNRKbd3kL3rCHB7PyYixA1lTry35256GHw_cTMZaWeR2aauX4U87ktfS4g-mDeLB7Bx9OLI9mtvX2QlSQaTgggilx7JvEP_BJgf7bzUy2dNZFyMWxIL7FGtK1J2lCea4A"
          />
        </div>
      </div>
    </header>
  );
}