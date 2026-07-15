import type { MatchAnalysisData } from './types';

export const mockMatchData: MatchAnalysisData = {
  resume: {
    name: "Kabiththanan_Paran.pdf",
    lastUpdated: "Last updated: 2 days ago"
  },
  job: {
    title: "Senior Full Stack Engineer - Vercel",
    company: "Vercel, Inc."
  },
  score: 89,
  matchRating: "Strong",
  matchStatus: "Strong Match",
  headline: "High Candidate Potential",
  summary: "Your technical profile shows deep alignment with Vercel's stack, particularly in full-stack JavaScript and performance optimization. You exceed the core requirements for system architecture but could strengthen your application by highlighting container orchestration experience.",
  recommendations: [
    "Master Kubernetes fundamentals to address the dev-ops requirements.",
    "Add a Redis-based caching project to your portfolio.",
    "Optimize resume with cloud-native keywords to pass ATS filters.",
    "Emphasize Docker multi-stage builds in your experience summary."
  ],
  matchedSkills: ["Python", "FastAPI", "React", "Node.js", "PostgreSQL"],
  matchedPercentage: 92,
  missingSkills: ["AWS", "Redis", "Kubernetes", "GraphQL"],
  strengths: [
    "Strong Backend Foundation",
    "Modern Frontend Expertise",
    "Database Optimization"
  ],
  weaknesses: [
    "Limited Cloud Infrastructure",
    "No container orchestration"
  ]
};