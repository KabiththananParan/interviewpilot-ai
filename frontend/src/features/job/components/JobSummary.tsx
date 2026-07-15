import { Brain } from "lucide-react";

interface JobSummaryProps {
  summary: string;
}

export default function JobSummary({ summary }: JobSummaryProps) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-[rgba(30,41,59,0.6)] p-6 backdrop-blur-xl transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:border-white/25 hover:shadow-2xl before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:from-[#adc6ff]/50 before:to-[#d0bcff]/50 before:p-[1px]">
      <div className="mb-6 flex items-center">
        <div className="mr-4 rounded-lg bg-[#adc6ff]/10 p-2 text-[#adc6ff]">
          <Brain className="h-6 w-6" />
        </div>

        <h3 className="text-2xl font-semibold text-[#dae2fd]">
          AI Job Summary
        </h3>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <p className="whitespace-pre-wrap leading-8 text-[#c2c6d6]">
          {summary}
        </p>
      </div>
    </div>
  );
}