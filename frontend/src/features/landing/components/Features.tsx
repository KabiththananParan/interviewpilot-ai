import { 
  FileText, 
  Briefcase, 
  Target, 
  MessageSquareCode, 
  BrainCircuit, 
  Map 
} from 'lucide-react';

const FEATURE_DATA = [
  { 
    icon: FileText, 
    title: 'AI Resume Analysis', 
    desc: 'ATS-optimized scanning to ensure your resume survives the initial filter and highlights the right technical impact.' 
  },
  { 
    icon: Briefcase, 
    title: 'JD Analysis', 
    desc: "Deconstruct job descriptions to find hidden requirements and the specific 'archetype' the company is hiring for." 
  },
  { 
    icon: Target, 
    title: 'AI Skill Matching', 
    desc: 'Automatically identify skill gaps between your profile and target roles. Precise, actionable technical roadmaps.' 
  },
  { 
    icon: MessageSquareCode, 
    title: 'Mock Interviews', 
    desc: 'Real-time conversational AI that grills you on DSA, System Design, and Behavioral patterns with adaptive difficulty.' 
  },
  { 
    icon: BrainCircuit, 
    title: 'Interview Evaluation', 
    desc: 'Get immediate scoring on communication, technical accuracy, and problem-solving depth after every session.' 
  },
  { 
    icon: Map, 
    title: 'Learning Roadmap', 
    desc: 'Customized 4-8 week study plans focused strictly on what you need to master to pass your next interview.' 
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#070b15] text-white relative overflow-hidden" id="features">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-white flex flex-wrap justify-center gap-3">
            <span className="bg-[#1d4ed8] text-white px-4 py-1.5 rounded shadow-[0_4px_24px_rgba(29,78,216,0.35)]">
              Master Every Step of the Funnel
            </span>
          </h2>
          <p className="text-[#94a3b8] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Our AI engine handles the technical heavy lifting, allowing you to focus on performance and execution.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-[#111927] border border-[#1e293b]/40 p-8 rounded-[20px] transition-all duration-300 group hover:border-[#3b82f6]/40 hover:-translate-y-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 bg-[#1e293b]/50 border border-white/[0.03] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3b82f6]/10 group-hover:text-[#60a5fa] transition-all duration-300 text-slate-300">
                  <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Text Area */}
                <h3 className="text-lg font-bold mb-3 text-slate-100 group-hover:text-white transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}