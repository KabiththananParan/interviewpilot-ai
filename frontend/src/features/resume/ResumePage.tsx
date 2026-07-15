import { History, RotateCw } from "lucide-react";

import AppLayout from "../../layouts/AppLayout";

import UploadZone from "./components/UploadZone";
import ResumeSummary from "./components/ResumeSummary";
import ATSScoreCard from "./components/ATSScoreCard";
import SkillsCard from "./components/SkillsCard";
import StrengthsCard from "./components/StrengthsCard";
import WeaknessesCard from "./components/WeaknessesCard";
import ResumeUploader from "./components/ResumeUploader";
import { useState } from "react";

import { uploadResumeService } from "../../services/resume.service";
import type { ResumeResponse } from "../../services/resume.service";
import type { ResumeData } from "./types";

const mockResumeData: ResumeData = {
  fileName: "Kabiththanan_Paran.pdf",
  fileSize: "96KB",
  uploadedTime: "2 mins ago",
  uploadProgress: 85,

  summary:
    "Highly specialized full-stack profile with a strong emphasis on scalable backend architectures. Exceptional proficiency in React-driven frontends and FastAPI microservices. Demonstrates mature engineering leadership potential through complex project lifecycle management.",

  atsScore: 92,

  targetRole: "Senior Software Engineer",

  metrics: {
    atsStructure: {
      title: "ATS Structure",
      status: "Optimized",
    },

    projectDepth: {
      title: "Project Depth",
      status: "Superior",
    },

    experience: {
      title: "Experience",
      status: "Relevant",
    },

    skillDensity: {
      title: "Skill Density",
      status: "High",
    },
  },

  skills: [
    "Python",
    "FastAPI",
    "Docker",
    "React",
    "Node.js",
    "PostgreSQL",
    "TypeScript",
    "Next.js",
    "Redis",
    "GraphQL",
  ],

  strengths: [
    {
      title: "Backend Depth",
      description:
        "Proven experience building scalable distributed systems and high-throughput APIs.",
    },

    {
      title: "AI Integration",
      description:
        "Solid implementation history of LLMs and generative AI workflows in production.",
    },

    {
      title: "Full-stack Proficiency",
      description:
        "Seamlessly bridges the gap between complex UI logic and efficient data layers.",
    },
  ],

  weaknesses: [
    {
      title: "AWS Infrastructure",
      description:
        "Limited mention of specific AWS services like Lambda, S3, or RDS in work history.",
    },

    {
      title: "Kubernetes Orchestration",
      description:
        "Missing context on container orchestration at scale and Kubernetes configuration.",
    },

    {
      title: "System Design Quantifiers",
      description:
        "Could benefit from more specific metrics such as latency reduction percentages.",
    },
  ],
};

export default function ResumePage() {
  const [loading, setLoading] = useState(false);

  const [resume, setResume] = useState<ResumeResponse | null>(null);

  const handleUpload = async (file: File) => {
    try {
      setLoading(true);

      const result = await uploadResumeService(file);

      setResume(result);
    } catch (error) {
      console.error(error);
      alert("Resume upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      {/* Page Header */}

      <section className="mb-8 animate-fade-up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#dae2fd]">
              Resume Analysis
            </h1>

            <p className="mt-2 text-base text-[#c2c6d6] max-w-2xl">
              Elite AI-driven evaluation of your technical background. We
              analyze parsing compatibility, keyword density, and strategic
              narrative depth.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#222a3d] hover:bg-[#2d3449] text-[#dae2fd] px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition">
              <History className="w-4 h-4" />
              History
            </button>

            <button className="bg-[#adc6ff] text-[#002e6a] px-6 py-2 rounded-lg font-bold shadow-lg shadow-[#adc6ff]/20 hover:shadow-[#adc6ff]/30 flex items-center gap-2 transition">
              <RotateCw className="w-4 h-4" />
              Re-scan
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side */}

        <div className="lg:col-span-8 space-y-8">
          <UploadZone
            progress={loading ? 70 : 100}
            loading={loading}
            onUpload={handleUpload}
          />

          <ResumeSummary
            fileName={mockResumeData.fileName}
            fileSize={mockResumeData.fileSize}
            uploadedTime={mockResumeData.uploadedTime}
            summary={mockResumeData.summary}
          />

          <ATSScoreCard
            score={mockResumeData.atsScore}
            targetRole={mockResumeData.targetRole}
          />

          <SkillsCard skills={mockResumeData.skills} />

          <div className="grid md:grid-cols-2 gap-6">
            <StrengthsCard strengths={mockResumeData.strengths} />

            <WeaknessesCard weaknesses={mockResumeData.weaknesses} />
          </div>

          {/* CTA */}

          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#4d8eff] to-[#571bc1] p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="mb-2 text-2xl font-black text-[#001a42]">
                  Ready to land the job?
                </h3>

                <p className="font-medium text-[#001a42]/80">
                  Compare your resume against a real job description and
                  discover exactly what you should improve.
                </p>
              </div>

              <button className="whitespace-nowrap rounded-xl bg-[#001a42] px-8 py-3 text-lg font-bold text-[#adc6ff] shadow-2xl transition hover:bg-black">
                Analyze Job Description
              </button>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}

        <div className="lg:col-span-4">
          <ResumeUploader metrics={mockResumeData.metrics} />
        </div>
      </div>
    </AppLayout>
  );
}
