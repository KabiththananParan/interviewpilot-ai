import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

interface ResumeSummaryProps {
  fileName: string;
  fileSize: string;
  uploadedTime: string;
  summary: string;
}

export default function ResumeSummary({ fileName, fileSize, uploadedTime, summary }: ResumeSummaryProps) {
  return (
    <div className="bg-[rgba(23,31,51,0.5)] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
      <div className="p-4 bg-[#2d3449] rounded-xl text-[#c2c6d6]">
        <FileText className="w-9 h-9" />
      </div>
      
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="text-lg font-bold text-[#dae2fd] break-all">{fileName}</h4>
            <p className="text-xs text-[#c2c6d6]">Size: {fileSize} • Uploaded {uploadedTime}</p>
          </div>
          <span className="bg-[#00a74b]/20 text-[#4ae176] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Processed
          </span>
        </div>
        
        <div className="relative bg-[rgba(30,41,59,0.5)] p-4 rounded-xl mt-4 border border-white/5 shadow-inner">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#adc6ff]" />
            <span className="text-xs font-bold text-[#adc6ff] uppercase tracking-wider">AI Summary</span>
          </div>
          <p className="text-sm text-[#dae2fd] leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}