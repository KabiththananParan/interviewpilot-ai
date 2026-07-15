import json

from groq import Groq

from app.core.config import settings


class ResumeAgent:
    def __init__(self):
        self.client = Groq(api_key=settings.groq_api_key)
        self.model = settings.model

    def analyze_resume(self, resume_text: str) -> dict:
        """
        Analyze a resume using Groq and return structured JSON.
        """

        prompt = f"""
You are an expert technical recruiter and ATS evaluator.

Analyze the following resume.

Return ONLY valid JSON.

The JSON format must be:

{{
    "ats_score": 0,
    "summary": "",
    "skills": [],
    "strengths": [],
    "weaknesses": []
}}

Rules:
- ats_score must be between 0 and 100.
- skills must contain only technical and professional skills.
- strengths must contain 3-6 concise bullet points.
- weaknesses must contain 3-6 constructive improvement points.
- summary should be 2-3 sentences.
- Do NOT include markdown.
- Do NOT include explanations.
- Do NOT wrap JSON in ```.

Resume:

{resume_text}
"""

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": "You are a professional ATS resume analyzer."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.2,
            response_format={"type": "json_object"},
        )

        content = response.choices[0].message.content

        return json.loads(content)