import { analyzeJob } from "../api/job.api";

export interface JobResponse {
  id: number;

  job_description: string;

  title: string;

  company: string;

  summary: string;

  experience_level: string;

  required_skills: string[];

  preferred_skills: string[];

  created_at: string;

  updated_at: string;
}

export async function analyzeJobService(
  jobDescription: string
): Promise<JobResponse> {
  return await analyzeJob(jobDescription);
}