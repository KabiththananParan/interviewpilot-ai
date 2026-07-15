import React from 'react';
import { CloudUpload } from 'lucide-react';

interface UploadZoneProps {
  progress: number;
}

export default function UploadZone({ progress }: UploadZoneProps) {
  return (
    <div className="bg-[rgba(23,31,51,0.5)] backdrop-blur-xl border-2 border-dashed border-[#adc6ff]/30 rounded-3xl p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#adc6ff]/60 transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-[#adc6ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <CloudUpload className="w-8 h-8 text-[#adc6ff]" />
      </div>
      <h3 className="text-xl font-bold text-[#dae2fd] mb-2">Drag & drop your resume</h3>
      <p className="text-[#c2c6d6] mb-6">
        Supported formats: <span className="text-[#adc6ff] font-semibold">PDF only</span> (Max 5MB)
      </p>
      
      <div className="w-full max-w-sm">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-[#c2c6d6]">Uploading...</span>
          <span className="text-xs font-bold text-[#adc6ff]">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#131b2e] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#adc6ff] to-[#d0bcff] rounded-full shadow-[0_0_10px_rgba(173,198,255,0.5)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}