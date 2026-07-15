export interface ResumeFile {
  name: string;
  lastUpdated: string;
}

export interface JobDescription {
  title: string;
  company: string;
}

export interface MatchAnalysisData {
  resume: ResumeFile;
  job: JobDescription;
  score: number;
  matchRating: string; // e.g., 'Strong'
  matchStatus: string; // e.g., 'Strong Match'
  headline: string;
  summary: string;
  recommendations: string[];
  matchedSkills: string[];
  matchedPercentage: number;
  missingSkills: string[];
  strengths: string[];
  weaknesses: string[];
}