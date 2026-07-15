import React from "react";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  GitFork,
  MessageSquare,
  Route,
  ShieldAlert,
  Search,
  Bell,
  Settings,
  History,
  Sparkles,
} from "lucide-react";
import { useJobAnalysis } from "./hooks/useJobAnalysis";
import JobInput from "./components/JobInput";
import JobSummary from "./components/JobSummary";
import JobTitleCard from "./components/JobTitleCard";
import ExperienceLevelCard from "./components/ExperienceLevelCard";
import RequiredSkillsCard from "./components/RequiredSkillsCard";
import PreferredSkillsCard from "./components/PreferredSkillsCard";
import type { JobAnalysisData } from "./types";

import { useState } from "react";

import { analyzeJobService } from "../../services/job.service";

import type { JobResponse } from "../../services/job.service";

const mockData: JobAnalysisData = {
  title: "Senior Full Stack Engineer",
  company: "Vercel",
  logoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD2FLnx0x_God9_evlJmog_W7BvzECSGsCf1IoqF4RD27NOQ4hJNmsOPTDvI7cD7bTdHuGWZD-3lXGjK0Hkx7V8yNiY3ogDzh-KYSQXfYWMKQXClcELXPA3AKkU_2IuuTsbGk7pmWTNS98aA2pmhZ7R7N9IqAxgsa66piEe4qUClg-2k8jBXS_94KPNtTutRVhAMXeGPA6BwW83lVSGLorHBwB3UGCzkqnBiiPxWEV7yarHBYXtMytX",
  experienceLevel: "Senior / Lead",
  experienceRange: "",
  summaryParagraphs: [
    "As a <span class='text-[#adc6ff] font-medium'>Senior Full Stack Engineer</span> at Vercel, you will be instrumental in building the next generation of web infrastructure. This role focuses on high-performance rendering, edge computing, and seamless developer experiences. You'll be working at the intersection of developer tooling and distributed systems, requiring a deep understanding of how modern web frameworks like Next.js integrate with global infrastructure.",
    "The ideal candidate is a product-minded engineer who doesn't just write code but understands the underlying architecture of the modern web. You will take ownership of core features, drive technical decisions, and mentor junior engineers while maintaining a high bar for code quality and performance.",
  ],
  keyResponsibilities: [
    "Architect and maintain core Edge services",
    "Optimize Next.js framework internals",
    "Lead cross-functional technical initiatives",
  ],
  teamCulture: [
    "Remote-first global collaboration",
    "Heavy focus on open-source contributions",
    "Fast-paced, iterative deployment cycle",
  ],
  requiredSkills: [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Next.js",
    "System Design",
  ],
  preferredSkills: ["AWS", "Docker", "Redis", "GraphQL", "Rust"],
  interviewFocusAreas: [
    {
      title: "Optimization Patterns",
      description:
        "Expect deep dives into ISR, SSR, and client-side performance.",
    },
    {
      title: "Distributed Systems",
      description:
        "Role requires knowledge of Edge caching and cold-start mitigations.",
    },
  ],
};

export default function JobPage() {
  const [loading, setLoading] = useState(false);

  const [jobDescription, setJobDescription] = useState("");

  const [job, setJob] = useState<JobResponse | null>(null);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      alert("Please paste a job description.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeJobService(jobDescription);

      setJob(result);
    } catch (error) {
      console.error(error);
      alert("Job analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  const { inputText, setInputText, clearInput, triggerAnalysis } =
    useJobAnalysis();

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen antialiased font-sans">
      {/* Sidebar Navigation */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-white/10 bg-[#171f33]/80 backdrop-blur-xl flex flex-col py-8 z-50 hidden lg:flex">
        <div className="px-6 mb-10">
          <h1 className="text-2xl font-semibold text-[#adc6ff] tracking-tight">
            DevMentor AI
          </h1>
          <p className="text-sm text-[#c2c6d6]">Elite Career Coach</p>
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {[
            {
              label: "Dashboard",
              icon: <LayoutDashboard className="w-5 h-5 mr-3" />,
            },
            { label: "Resume", icon: <FileText className="w-5 h-5 mr-3" /> },
          ].map((item) => (
            <a
              key={item.label}
              className="flex items-center px-4 py-3 rounded-xl text-[#c2c6d6] hover:text-[#dae2fd] hover:bg-white/5 transition-all"
              href="#"
            >
              {item.icon} <span className="text-base">{item.label}</span>
            </a>
          ))}
          <a
            className="flex items-center px-4 py-3 rounded-xl text-[#adc6ff] bg-[#adc6ff]/10 font-bold border-r-2 border-[#adc6ff]"
            href="#"
          >
            <BarChart3 className="w-5 h-5 mr-3" />{" "}
            <span className="text-base">Job Analysis</span>
          </a>
          {[
            {
              label: "Match Analysis",
              icon: <GitFork className="w-5 h-5 mr-3" />,
            },
            {
              label: "Mock Interview",
              icon: <MessageSquare className="w-5 h-5 mr-3" />,
            },
            { label: "Roadmap", icon: <Route className="w-5 h-5 mr-3" /> },
            {
              label: "Career Coach",
              icon: <ShieldAlert className="w-5 h-5 mr-3" />,
            },
          ].map((item) => (
            <a
              key={item.label}
              className="flex items-center px-4 py-3 rounded-xl text-[#c2c6d6] hover:text-[#dae2fd] hover:bg-white/5 transition-all"
              href="#"
            >
              {item.icon} <span className="text-base">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="px-6 pt-6 border-t border-white/5 flex items-center">
          <img
            className="w-10 h-10 rounded-full border border-white/10 mr-3 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2JJiQeGTbwNrzp8uU1y40igUmcquCAA0dp45hNN_QQEzwfCDDkdxa5-bngSLcpD1iVgJCVuqahydtLbNlKZWIJZ9UENf9N_AwMP-qPqnuc2dPrlNayjoTVRS9qKv1d74MTOplDXhXIqv_huACEPiKHQ7iYfEqczSS0gvmQMRfxHPuRRBN41XnLhcANRBWYyjxHjoCGIDoZekD7VL9CCLFjYuloP6OER-nkFUmiviUKA15ttE1ZNai"
            alt="Mentor profile"
          />
          <div>
            <p className="text-sm font-bold text-[#dae2fd]">Alex Chen</p>
            <p className="text-[10px] text-[#c2c6d6] uppercase tracking-widest">
              Premium Member
            </p>
          </div>
        </div>
      </aside>

      {/* Top Navbar Header */}
      <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 z-40 bg-[#0b1326]/60 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-6 lg:px-12">
        <div className="flex items-center bg-[#060e20] border border-white/10 rounded-full px-4 py-1.5 w-72 md:w-96 focus-within:border-[#adc6ff]/50 transition-all">
          <Search className="text-[#c2c6d6] w-4 h-4 mr-2" />
          <input
            className="bg-transparent border-none focus:ring-0 text-sm text-[#dae2fd] w-full ml-1"
            placeholder="Search analytics, jobs, or resumes..."
            type="text"
          />
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-white/10"></div>
          <img
            className="w-8 h-8 rounded-full object-cover border border-white/10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACWLrwUexKShDkxb94ePX9xjccc30Y2w_pXHf8_0VGSKDCuJK7sjJOWWFDQ2DlFRdN7zvDWi1woTLPjL5UfRl6wGrgvAIa7RhDu3DNJUeGDxnWMiB_QINb7b3KpyIySn4K_ye3tSd-GZ_rZK79NEp_p7v7-uzwsO2ezHtoM-oS4bhYLKtfuF5G7lEkOPOa7dJ-GyEkvUFvEw3O8gmzbXQpQaGQzqukRnseOpwf0yqWisagc5SuCypE"
            alt="User Avatar"
          />
        </div>
      </header>

      {/* Primary Container Viewport */}
      <main className="lg:ml-64 pt-24 px-6 lg:px-12 pb-12 min-h-screen max-w-7xl mx-auto">
        {/* Title Action Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#dae2fd] tracking-tight">
              Job Analysis
            </h2>
            <p className="text-base text-[#c2c6d6] mt-2">
              Paste a job description and let AI analyze the role requirements.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2.5 rounded-lg border border-[#424754] text-[#dae2fd] font-medium hover:bg-white/5 transition-all flex items-center active:scale-95">
              <History className="w-4 h-4 mr-2" /> History
            </button>
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="px-6 py-2.5 rounded-lg bg-[#adc6ff] text-[#002e6a] font-bold hover:brightness-110 shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all flex items-center active:scale-95 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 mr-2" />

              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </div>
        </div>

        {/* 12-Column Layout Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Context Left Side Block */}
          <div className="lg:col-span-8 space-y-6">
            <JobInput
              value={jobDescription}
              onChange={setJobDescription}
              onClear={() => setJobDescription("")}
              onAnalyze={handleAnalyze}
            />

            <JobSummary
              summary={job?.summary ?? mockData.summaryParagraphs.join(" ")}
            />
          </div>

          {/* Right Metrics Metadata Blocks */}
          <div className="lg:col-span-4 space-y-6">
            <JobTitleCard
              title={job?.title ?? mockData.title}
              company={
                job?.company && job.company.trim() !== ""
                  ? job.company
                  : "Unknown Company"
              }
              logoUrl={mockData.logoUrl}
            />

            <ExperienceLevelCard
              level={job?.experience_level ?? mockData.experienceLevel}
              range={mockData.experienceRange}
            />

            <RequiredSkillsCard
              skills={job?.required_skills ?? mockData.requiredSkills}
            />
            <PreferredSkillsCard
              skills={job?.preferred_skills ?? mockData.preferredSkills}
            />

            {/* Hiring Focus Areas Panel */}
            <div className="bg-[rgba(30,41,59,0.6)] backdrop-blur-xl border border-white/10 rounded-xl p-6 bg-gradient-to-br from-[#171f33] to-[#0b1326] transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:border-white/25 hover:shadow-2xl">
              <p className="font-mono text-xs text-[#c2c6d6] mb-4 uppercase tracking-wider font-medium">
                Interview Focus Areas
              </p>
              <div className="space-y-4">
                {mockData.interviewFocusAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Sparkles className="text-[#adc6ff] w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#dae2fd]">
                        {area.title}
                      </p>
                      <p className="text-xs text-[#c2c6d6] leading-normal">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
