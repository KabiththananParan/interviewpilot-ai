export interface Skill {
  name: string;
}

export interface MetricItem {
  title: string;
  status: string;
}

export interface BulletPoint {
  title: string;
  description: string;
}

export interface ResumeData {
  fileName: string;
  fileSize: string;
  uploadedTime: string;
  uploadProgress: number;
  summary: string;
  atsScore: number;
  targetRole: string;
  metrics: {
    atsStructure: MetricItem;
    projectDepth: MetricItem;
    experience: MetricItem;
    skillDensity: MetricItem;
  };
  skills: string[];
  strengths: BulletPoint[];
  weaknesses: BulletPoint[];
}