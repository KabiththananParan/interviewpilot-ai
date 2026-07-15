import { uploadResume } from "../api/resume.api";

export interface ResumeResponse {
  id: number;
  original_filename: string;
  stored_filename: string;
  file_path: string;
  file_size: number;
  extracted_text: string;
  ats_score: number;
  summary: string;
  skills: string[];
  strengths: string[];
  weaknesses: string[];
  created_at: string;
  updated_at: string;
}

export async function uploadResumeService(file: File) {
  return await uploadResume(file);
}