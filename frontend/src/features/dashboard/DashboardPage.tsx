import React from 'react';
import { LayoutDashboard, FileText, BarChart3, Merge, Mic, Route, Brain, Settings, ArrowRight } from 'lucide-react';
import DashboardHeader from './components/DashboardHeader';
import StatisticsCards from './components/StatisticsCards';
import QuickActions from './components/QuickActions';
import ProgressOverview from './components/ProgressOverview';
import RecentActivity from './components/RecentActivity';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-[#dae2fd] font-sans overflow-hidden select-none">
      
      {/* Side Navigation */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-white/10 bg-[#171f33]/80 backdrop-blur-xl z-50 flex flex-col py-8 shadow-2xl">
        <div className="px-6 mb-8 flex items-center gap-3">
          <img 
            alt="DevMentor AI Logo" 
            className="w-10 h-10 rounded-lg object-cover" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLtsX3B_paUdUo-9zEVPHZPYvWteL5qT27nimhxV7zuU2oFummTLkvlduaD_L5sowvVErVkF-QE8HGog5nwPIpyXh-6AaWwZBJMejWd-KKqfs5eFcbzravP2jWeRJq6ujMKgj4HVF9bCMyxtk_TSVrbUgW3PTIRf5vP_mWFuLGPXal2k1Oke3y9KtghfvRaPf9T5A5KoTwTCif5aaSTxqBNVa2U1IhGiomL9lysHOGrbzAhvYJny214exh4"
          />
          <div>
            <h1 className="text-lg font-bold text-[#adc6ff] tracking-tight leading-none">DevMentor AI</h1>
            <p className="text-[9px] uppercase tracking-widest text-[#c2c6d6] font-extrabold mt-1">Elite Career Coach</p>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#adc6ff] bg-[#adc6ff]/10 font-bold border-r-2 border-[#adc6ff] transition-all" href="#">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm">Dashboard</span>
          </a>
          {[
            { label: 'Resume', icon: <FileText className="w-5 h-5" /> },
            { label: 'Job Analysis', icon: <BarChart3 className="w-5 h-5" /> },
            { label: 'Match Analysis', icon: <Merge className="w-5 h-5" /> },
            { label: 'Mock Interview', icon: <Mic className="w-5 h-5" /> },
            { label: 'Roadmap', icon: <Route className="w-5 h-5" /> },
            { label: 'Career Coach', icon: <Brain className="w-5 h-5" /> }
          ].map((item, idx) => (
            <a key={idx} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#c2c6d6] hover:text-[#dae2fd] hover:bg-white/5 transition-all" href="#">
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto px-6 pt-6 border-t border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4d8eff] flex items-center justify-center text-[#00285d] font-bold shadow-lg text-sm">
            K
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">Kabiththanan</p>
            <p className="text-[10px] text-[#c2c6d6]">Pro Tier</p>
          </div>
          <button className="ml-auto text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Workspace */}
      <main className="ml-64 flex-1 h-screen overflow-y-auto bg-[#020617] relative custom-scrollbar">
        <DashboardHeader />

        <div className="max-w-[1280px] mx-auto px-12 py-8 space-y-8">
          
          {/* Greeting Hero Header */}
          <section className="animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-[#dae2fd]">Good Morning, Kabiththanan 👋</h1>
            <p className="text-[#c2c6d6] text-base mt-2 font-medium">Let's prepare for your next interview. You're in the top 5% of candidates this week.</p>
          </section>

          {/* Interactive Metric Tracker Grid */}
          <StatisticsCards />

          {/* Core Feature Content Workspace Matrix */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Left Column blocks */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <QuickActions />
              <ProgressOverview />
            </div>

            {/* Right Column recommendation module blocks */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              
              {/* Gradient border wrapped container card */}
              <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#adc6ff]/20 via-transparent to-[#d0bcff]/20">
                <div className="bg-[#171f33]/90 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#adc6ff]/20 rounded-xl text-[#adc6ff]">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold">AI Recommendation</h3>
                  </div>
                  <p className="text-[#c2c6d6] text-sm leading-relaxed mb-6">
                    Focus on <span className="text-[#adc6ff] font-semibold">PostgreSQL</span> and <span className="text-[#adc6ff] font-semibold">Kubernetes</span> this week. Your FastAPI skills are strong. Practice behavioral interviews before applying.
                  </p>
                  <button className="w-full bg-[#adc6ff] py-3 rounded-xl text-[#002e6a] font-extrabold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all active:scale-[0.98]">
                    Continue Learning
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <RecentActivity />
            </div>

          </div>

        </div>

        {/* Ambient background glows */}
        <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#adc6ff]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d0bcff]/5 rounded-full blur-[100px] pointer-events-none"></div>
      </main>
    </div>
  );
}