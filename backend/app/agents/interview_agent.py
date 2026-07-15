import json

from groq import Groq

from app.core.config import settings


class InterviewAgent:
    def __init__(self):
        self.client = Groq(api_key=settings.groq_api_key)
        self.model = settings.model

    def generate_questions(
        self,
        resume_data: dict,
        job_data: dict,
        match_data: dict,
    ) -> list:
        """
        Generate personalized interview questions.
        """

        prompt = f"""
You are an experienced Senior Software Engineering Interviewer.

Generate a personalized interview based on:

Resume Analysis:
{json.dumps(resume_data, indent=2)}

Job Analysis:
{json.dumps(job_data, indent=2)}

Match Analysis:
{json.dumps(match_data, indent=2)}

Return ONLY valid JSON.

Format:

{{
  "questions": [
    {{
      "id": 1,
      "type": "technical",
      "difficulty": "Medium",
      "question": ""
    }}
  ]
}}

Rules:

- Generate exactly 10 questions.
- Include:
  - 4 Technical
  - 2 Project-based
  - 2 Behavioral
  - 2 HR
- Questions must relate to the candidate's resume.
- Questions must relate to the target job.
- Focus on missing skills.
- Difficulty should be Easy, Medium or Hard.
- Return JSON only.
"""

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert technical interviewer."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3,
            response_format={"type": "json_object"},
        )

        return json.loads(response.choices[0].message.content)["questions"]

    def evaluate_answers(
        self,
        questions: list,
        answers: list,
    ) -> dict:
        """
        Evaluate candidate interview answers.
        """

        prompt = f"""
You are a Senior Technical Interviewer.

Evaluate the candidate's answers.

Questions:

{json.dumps(questions, indent=2)}

Answers:

{json.dumps(answers, indent=2)}

Return ONLY valid JSON.

Format:

{{
  "overall_score": 0,
  "evaluation": [
    {{
      "question_id": 1,
      "score": 0,
      "feedback": "",
      "ideal_answer": ""
    }}
  ],
  "overall_feedback": ""
}}

Rules:

- Score each answer from 0-10.
- overall_score should be between 0-100.
- Feedback should be constructive.
- ideal_answer should briefly explain what a strong answer should include.
- overall_feedback should summarize strengths and areas for improvement.
- Return JSON only.
"""

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": "You are an experienced software engineering interviewer."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.2,
            response_format={"type": "json_object"},
        )

        return json.loads(response.choices[0].message.content)