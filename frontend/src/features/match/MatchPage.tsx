import React, { useState } from 'react';
import { LayoutDashboard, BarChart3, GraduationCap, FileText, Settings, History, Rocket } from 'lucide-react';
import MatchInput from './components/MatchInput';
import MatchScoreCard from './components/MatchScoreCard';
import RecommendationCard from './components/RecommendationCard';
import MatchedSkillsCard from './components/MatchedSkillsCard';
import MissingSkillsCard from './components/MissingSkillsCard';
import StrengthsCard from './components/StrengthsCard';
import WeaknessesCard from './components/WeaknessesCard';
import { mockMatchData } from './mockData';

export default function MatchPage() {
  const [data] = useState(mockMatchData);

  const handleRunAnalysis = () => {
    console.log("Analyzing resume match factors...");
  };

  return (
    <div className="bg-[#020617] text-[#dae2fd] min-h-screen font-sans flex flex-col">
      
      {/* Premium Header Navigation */}
      <header className="sticky top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-xl border-b border-white/10">
        <nav className="flex justify-between items-center w-full px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#adc6ff] to-[#d0bcff] bg-clip-text text-transparent">
              InterviewPilot AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm text-[#c2c6d6] hover:text-[#dae2fd] transition-colors" href="#">Features</a>
            <a className="text-sm text-[#c2c6d6] hover:text-[#dae2fd] transition-colors" href="#">How It Works</a>
            <a className="text-sm text-[#c2c6d6] hover:text-[#dae2fd] transition-colors" href="#">Demo</a>
            <a className="text-sm text-[#c2c6d6] hover:text-[#dae2fd] transition-colors" href="#">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block px-5 py-2 text-sm rounded-xl border border-white/10 text-[#dae2fd] font-semibold hover:bg-white/5 transition-all">
              GitHub
            </button>
            <button className="px-5 py-2 text-sm rounded-xl bg-[#4d8eff] text-[#001a42] font-semibold hover:opacity-90 active:scale-95 transition-all">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Main Structural Layout */}
      <div className="max-w-7xl w-full mx-auto flex flex-1">
        
        {/* Dashboard Navigation Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-white/10 p-6 gap-6 shrink-0">
          <div className="space-y-2">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#c2c6d6] hover:bg-white/5 cursor-pointer transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm font-medium">Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4d8eff] text-[#001a42] font-semibold cursor-pointer shadow-md">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm">Match Analysis</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#c2c6d6] hover:bg-white/5 cursor-pointer transition-colors">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm">Mock Interviews</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#c2c6d6] hover:bg-white/5 cursor-pointer transition-colors">
              <FileText className="w-5 h-5" />
              <span className="text-sm">Resumes</span>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#c2c6d6] hover:bg-white/5 cursor-pointer transition-colors">
              <Settings className="w-5 h-5" />
              <span className="text-sm font-medium">Settings</span>
            </div>
          </div>
        </aside>

        {/* Dynamic Page Content View */}
        <main className="flex-1 px-6 md:px-12 py-8 min-w-0">
          
          {/* Dashboard Module Title Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#dae2fd] mb-2 tracking-tight">Match Analysis</h1>
              <p className="text-[#c2c6d6] text-base max-w-2xl">
                Compare your resume with a job description to discover your strengths, missing skills and overall hiring readiness.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-[#c2c6d6] font-medium hover:text-[#dae2fd] hover:bg-white/5 transition-all active:scale-[0.98]">
                <History className="w-4 h-4" />
                Analysis History
              </button>
              <button 
                onClick={handleRunAnalysis}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4d8eff] text-[#001a42] font-semibold shadow-lg shadow-[#4d8eff]/20 hover:opacity-90 active:scale-95 transition-all"
              >
                <Rocket className="w-4 h-4" />
                Run Match Analysis
              </button>
            </div>
          </div>

          {/* Grid Layout Layout Configuration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Primary Information Block (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <MatchInput 
                resume={data.resume} 
                job={data.job} 
                onAnalyze={handleRunAnalysis} 
              />
              <MatchScoreCard 
                score={data.score}
                rating={data.matchRating}
                status={data.matchStatus}
                headline={data.headline}
                summary={data.summary}
              />
              <RecommendationCard recommendations={data.recommendations} />
            </div>

            {/* Right Meta Sidebar Information Block (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <MatchedSkillsCard 
                skills={data.matchedSkills} 
                percentage={data.matchedPercentage} 
              />
              <MissingSkillsCard skills={data.missingSkills} />
              <StrengthsCard strengths={data.strengths} />
              <WeaknessesCard weaknesses={data.weaknesses} />
            </div>

          </div>
        </main>
      </div>

      {/* Footer Branding Component */}
      <footer className="w-full py-8 border-t border-white/5 bg-[#060e20] mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto gap-4">
          <span className="text-xl font-bold text-[#dae2fd]">InterviewPilot AI</span>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-xs text-[#c2c6d6] hover:text-[#adc6ff] transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs text-[#c2c6d6] hover:text-[#adc6ff] transition-colors" href="#">Terms of Service</a>
            <a className="text-xs text-[#c2c6d6] hover:text-[#adc6ff] transition-colors" href="#">Cookie Policy</a>
            <a className="text-xs text-[#c2c6d6] hover:text-[#adc6ff] transition-colors" href="#">Contact Us</a>
          </div>
          <p className="text-xs text-[#c2c6d6]">© 2026 InterviewPilot AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}