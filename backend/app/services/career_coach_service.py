from app.agents.career_coach_agent import CareerCoachAgent

class CareerCoachService:

    def __init__(self):
        self.agent = CareerCoachAgent()

    def generate_report(
        self,
        resume,
        job,
        match,
        interview,
        roadmap,
    ):
        return self.agent.generate_career_report(
            resume_data=resume,
            job_data=job,
            match_data=match,
            interview_data=interview,
            roadmap_data=roadmap,
        )