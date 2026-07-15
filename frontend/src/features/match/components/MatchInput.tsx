import React from 'react';
import { FileText, Briefcase, ChevronDown, Sparkles } from 'lucide-react';
import type { ResumeFile, JobDescription } from '../types';

interface MatchInputProps {
  resume: ResumeFile;
  job: JobDescription;
  onAnalyze: () => void;
}

export default function MatchInput({ resume, job, onAnalyze }: MatchInputProps) {
  return (
    <section className="bg-[#171f33]/60 backdrop-blur-3xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20">
      <h2 className="text-xl md:text-2xl font-semibold text-[#dae2fd] mb-6">Select Inputs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Resume Input Selector */}
        <div className="space-y-2">
          <label className="font-mono text-xs text-[#c2c6d6] uppercase tracking-wider">Resume</label>
          <div className="relative group cursor-pointer p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#adc6ff]/50 transition-all flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#adc6ff]" />
              <div className="flex flex-col">
                <span className="text-base text-[#dae2fd] font-medium">{resume.name}</span>
                <span className="text-xs text-[#c2c6d6]">{resume.lastUpdated}</span>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-[#c2c6d6] group-hover:text-[#adc6ff] transition-colors" />
          </div>
        </div>

        {/* Job Description Input Selector */}
        <div className="space-y-2">
          <label className="font-mono text-xs text-[#c2c6d6] uppercase tracking-wider">Job Description</label>
          <div className="relative group cursor-pointer p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#d0bcff]/50 transition-all flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-[#d0bcff]" />
              <div className="flex flex-col">
                <span className="text-base text-[#dae2fd] font-medium truncate max-w-[180px] md:max-w-xs">{job.title}</span>
                <span className="text-xs text-[#c2c6d6]">{job.company}</span>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-[#c2c6d6] group-hover:text-[#d0bcff] transition-colors" />
          </div>
        </div>
      </div>

      <button 
        onClick={onAnalyze}
        className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-[#00285d] hover:text-[#001a42] font-bold text-lg hover:brightness-110 active:scale-[0.99] transition-all relative overflow-hidden group"
      >
        <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
        Analyze Match
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_infinite] pointer-events-none" />
      </button>
    </section>
  );
}