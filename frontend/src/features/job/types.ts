export interface KeyResponsibility {
  text: string;
}

export interface TeamCulture {
  text: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface JobAnalysisData {
  title: string;
  company: string;
  logoUrl: string;
  experienceLevel: string;
  experienceRange: string;
  summaryParagraphs: string[];
  keyResponsibilities: string[];
  teamCulture: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  interviewFocusAreas: FocusArea[];
}