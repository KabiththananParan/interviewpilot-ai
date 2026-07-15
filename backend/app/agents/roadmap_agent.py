import json

from groq import Groq

from app.core.config import settings


class RoadmapAgent:
    def __init__(self):
        self.client = Groq(api_key=settings.groq_api_key)
        self.model = settings.model

    def generate_roadmap(
        self,
        resume_data: dict,
        job_data: dict,
        match_data: dict,
        interview_data: dict,
    ) -> dict:
        """
        Generate a personalized learning roadmap.
        """

        prompt = f"""
You are an experienced Senior Software Engineer, Technical Mentor,
and Career Coach.

Create a personalized learning roadmap.

Candidate Resume Analysis:
{json.dumps(resume_data, indent=2)}

Target Job Analysis:
{json.dumps(job_data, indent=2)}

Match Analysis:
{json.dumps(match_data, indent=2)}

Interview Evaluation:
{json.dumps(interview_data, indent=2)}

Return ONLY valid JSON.

Format:

{{
  "title": "",
  "estimated_duration": "",
  "roadmap": [
    {{
      "week": 1,
      "title": "",
      "skills": [],
      "resources": [
        {{
          "title": "",
          "type": "",
          "description": ""
        }}
      ],
      "project": "",
      "estimated_hours": 0,
      "expected_outcome": ""
    }}
  ]
}}

Rules:

- Create an 8-week roadmap.
- Each week should focus on a logical learning progression.
- Prioritize missing skills from the Match Analysis.
- Prioritize weak interview topics.
- Include practical projects every week.
- Resources should include official documentation, reputable courses, or books.
- estimated_hours should be between 6 and 15.
- expected_outcome should describe what the learner should achieve.
- Return ONLY valid JSON.
- Do NOT include markdown.
- Do NOT wrap JSON inside ``` blocks.
"""

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an expert software engineering mentor "
                        "who creates structured learning roadmaps."
                    ),
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
            temperature=0.3,
            response_format={"type": "json_object"},
        )

        content = response.choices[0].message.content

        return json.loads(content)