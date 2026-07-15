import json

from groq import Groq

from app.core.config import settings


class MatchAgent:
    def __init__(self):
        self.client = Groq(api_key=settings.groq_api_key)
        self.model = settings.model

    def analyze_match(
        self,
        resume_data: dict,
        job_data: dict,
    ) -> dict:
        """
        Compare a resume with a job description and return
        structured matching analysis.
        """

        prompt = f"""
You are an experienced Technical Recruiter and Career Coach.

Compare the candidate's resume with the target job.

Return ONLY valid JSON.

JSON format:

{{
    "match_score": 0,
    "matching_skills": [],
    "missing_skills": [],
    "resume_improvements": [],
    "interview_focus_areas": [],
    "overall_feedback": ""
}}

Rules:

- match_score must be between 0 and 100.
- matching_skills should contain only skills present in BOTH resume and job.
- missing_skills should contain required skills missing from the resume.
- resume_improvements should contain 3-5 actionable suggestions.
- interview_focus_areas should list the most important topics the candidate should prepare.
- overall_feedback should be 2-4 concise sentences.
- Return ONLY JSON.
- Do NOT include markdown.
- Do NOT wrap the response in ```.

Resume Analysis:

{json.dumps(resume_data, indent=2)}

Job Analysis:

{json.dumps(job_data, indent=2)}
"""

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an expert recruiter who compares resumes "
                        "against job descriptions."
                    ),
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
            temperature=0.2,
            response_format={"type": "json_object"},
        )

        content = response.choices[0].message.content

        return json.loads(content)