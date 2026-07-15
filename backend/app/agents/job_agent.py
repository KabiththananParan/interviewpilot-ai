import json

from groq import Groq

from app.core.config import settings


class JobAgent:
    def __init__(self):
        self.client = Groq(api_key=settings.groq_api_key)
        self.model = settings.model

    def analyze_job(self, job_description: str) -> dict:
        """
        Analyze a job description using Groq and return structured JSON.
        """

        prompt = f"""
You are an experienced Technical Recruiter and Hiring Manager.

Analyze the following job description.

Return ONLY valid JSON.

The JSON format must be:

{{
    "title": "",
    "company": "",
    "summary": "",
    "experience_level": "",
    "required_skills": [],
    "preferred_skills": []
}}

Rules:
- Return ONLY valid JSON.
- Do NOT include markdown.
- Do NOT wrap JSON inside ``` blocks.
- title should be the job title.
- company should be the company name if available, otherwise "".
- summary should be 2-3 concise sentences describing the role.
- experience_level should be one of:
    - Internship
    - Junior
    - Mid-Level
    - Senior
    - Lead
- required_skills should only include mandatory skills.
- preferred_skills should include optional or nice-to-have skills.
- Remove duplicate skills.
- Use short skill names.

Job Description:

{job_description}
"""

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an expert recruiter that extracts structured "
                        "information from job descriptions."
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