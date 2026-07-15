import json

from groq import Groq

from app.core.config import settings


class CareerCoachAgent:
    """
    High-level AI Career Coach.

    This agent does NOT analyze resumes or jobs directly.

    Instead, it summarizes all AI analyses into a final
    personalized career coaching report.
    """

    def __init__(self):
        self.client = Groq(api_key=settings.groq_api_key)
        self.model = settings.model

    def generate_career_report(
        self,
        resume_data: dict,
        job_data: dict,
        match_data: dict,
        interview_data: dict,
        roadmap_data: dict,
    ) -> dict:
        """
        Generate the final career coaching report.
        """

        prompt = f"""
You are InterviewPilot AI.

You are an expert Senior Software Engineering Career Coach.

You have already received analyses from several AI systems.

Resume Analysis:

{json.dumps(resume_data, indent=2)}

Job Analysis:

{json.dumps(job_data, indent=2)}

Match Analysis:

{json.dumps(match_data, indent=2)}

Interview Evaluation:

{json.dumps(interview_data, indent=2)}

Learning Roadmap:

{json.dumps(roadmap_data, indent=2)}

Create ONE final career coaching report.

Return ONLY valid JSON.

Format:

{{
    "overall_candidate_score": 0,
    "job_readiness": "",
    "biggest_strengths": [],
    "biggest_gaps": [],
    "priority_actions": [],
    "interview_strategy": [],
    "motivation": ""
}}

Rules:

- overall_candidate_score must be 0-100.
- job_readiness should be one of:
    "Ready"
    "Almost Ready"
    "Needs Improvement"

- biggest_strengths:
    3-5 concise bullet points.

- biggest_gaps:
    3-5 concise bullet points.

- priority_actions:
    Ordered list of highest priority improvements.

- interview_strategy:
    Practical interview advice.

- motivation:
    Write 2-3 encouraging sentences.

Return ONLY JSON.
"""

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an expert AI Career Coach."
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