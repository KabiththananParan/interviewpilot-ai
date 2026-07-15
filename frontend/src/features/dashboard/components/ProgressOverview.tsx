import React from 'react';

export default function ProgressOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Radial Card */}
      <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
        <h4 className="text-[#c2c6d6] text-sm mb-6 font-medium">Profile Strength</h4>
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-white/5" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
            <circle className="text-[#adc6ff]" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="40" strokeLinecap="round" strokeWidth="8"></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[#dae2fd]">92%</span>
            <span className="text-[10px] text-[#c2c6d6] font-mono uppercase tracking-widest mt-0.5">ATS Score</span>
          </div>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
        <h4 className="text-[#c2c6d6] text-sm mb-6 font-medium">Interview Progress</h4>
        <div className="flex items-end justify-between h-32 gap-3 px-2">
          {[40, 65, 55, 90, 84].map((height, index) => (
            <div key={index} className="w-full bg-[#adc6ff]/10 rounded-t-lg relative group h-full">
              <div 
                className={`absolute bottom-0 left-0 right-0 rounded-t-lg transition-all duration-500 ${
                  index === 4 ? 'bg-[#adc6ff] shadow-[0_0_15px_rgba(173,198,255,0.4)]' : 'bg-[#adc6ff]/40'
                }`}
                style={{ height: `${height}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-[10px] text-[#c2c6d6] font-mono font-medium px-1">
          <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span>
        </div>
      </div>
    </div>
  );
}