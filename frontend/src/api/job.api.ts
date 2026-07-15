import api from "./resume.api";

export const analyzeJob = async (jobDescription: string) => {
  const response = await api.post("/jobs/analyze", {
    job_description: jobDescription,
  });

  return response.data;
};