import React from 'react';
import { Upload, Search, Mic, Check, RefreshCw } from 'lucide-react';
import type { ActivityItem } from '../types';
import type { RoadmapWeek } from '../types';

const weeks: RoadmapWeek[] = [
  { weekNumber: 1, title: 'Week 1: Fundamentals', subtitle: 'System Design Basics', status: 'completed' },
  { weekNumber: 2, title: 'Week 2: Backend Master', subtitle: 'SQL vs NoSQL Deep Dive', status: 'completed' },
  { weekNumber: 3, title: 'Week 3: Orchestration', subtitle: 'Kubernetes & Deployment', status: 'current', progress: 65 },
];

const activities: ActivityItem[] = [
  { id: '1', title: 'Resume Uploaded', meta: '2 hours ago • ATS updated', type: 'upload', timeAgo: '2h' },
  { id: '2', title: 'Job Analyzed', meta: 'Yesterday • Senior Backend Dev', type: 'search', timeAgo: '1d' },
  { id: '3', title: 'Mock Interview', meta: 'Oct 24, 2023 • 84% score', type: 'mic', timeAgo: '3d' },
];

export default function RecentActivity() {
  return (
    <div className="space-y-6">
      
      {/* Current Roadmap */}
      <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
        <h4 className="text-[#c2c6d6] text-[11px] font-mono mb-6 uppercase tracking-widest font-bold">CURRENT ROADMAP</h4>
        <div className="space-y-4">
          {weeks.map((week, idx) => (
            <div 
              key={idx} 
              className={`p-3.5 rounded-xl border transition-all ${
                week.status === 'current' 
                  ? 'bg-[#adc6ff]/5 border-[#adc6ff]/20' 
                  : 'bg-white/5 border-white/5 opacity-80'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                  week.status === 'completed' ? 'bg-[#4ae176]/10 text-[#4ae176]' : 'bg-[#adc6ff]/20 text-[#adc6ff]'
                }`}>
                  {week.status === 'completed' ? <Check className="w-4 h-4" /> : <RefreshCw className="w-4 h-4 animate-spin-slow" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#dae2fd]">{week.title}</p>
                  <p className="text-[11px] text-[#c2c6d6] mt-0.5">{week.subtitle}</p>
                </div>
              </div>
              {week.progress && (
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-3.5">
                  <div className="h-full bg-[#adc6ff] rounded-full shadow-[0_0_10px_rgba(173,198,255,0.4)]" style={{ width: `${week.progress}%` }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-6 rounded-2xl relative before:absolute before:left-[27px] before:top-[68px] before:bottom-8 before:width-[2px] before:bg-white/5">
        <h4 className="text-[#c2c6d6] text-[11px] font-mono mb-6 uppercase tracking-widest font-bold">RECENT ACTIVITY</h4>
        <div className="space-y-6">
          {activities.map((act) => (
            <div key={act.id} className="relative pl-9 flex flex-col">
              <span className={`absolute left-0 top-0.5 w-6 h-6 rounded-full border flex items-center justify-center z-10 ${
                act.type === 'upload' ? 'bg-[#adc6ff]/20 border-[#adc6ff]/40 text-[#adc6ff]' : 
                act.type === 'search' ? 'bg-[#4ae176]/20 border-[#4ae176]/40 text-[#4ae176]' : 
                'bg-[#d0bcff]/20 border-[#d0bcff]/40 text-[#d0bcff]'
              }`}>
                {act.type === 'upload' && <Upload className="w-3 h-3" />}
                {act.type === 'search' && <Search className="w-3 h-3" />}
                {act.type === 'mic' && <Mic className="w-3 h-3" />}
              </span>
              <span className="text-sm font-medium text-[#dae2fd]">{act.title}</span>
              <span className="text-[11px] text-[#c2c6d6] mt-0.5">{act.meta}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}