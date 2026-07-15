from sqlalchemy.orm import Session

from app.agents.roadmap_agent import RoadmapAgent
from app.models.interview import Interview
from app.models.job import Job
from app.models.match import Match
from app.models.resume import Resume
from app.models.roadmap import Roadmap


class RoadmapService:
    def __init__(self):
        self.roadmap_agent = RoadmapAgent()

    def generate_roadmap(
        self,
        match_id: int,
        db: Session,
    ) -> Roadmap:
        """
        Generate a personalized learning roadmap.
        """

        # Step 1: Get Match
        match = (
            db.query(Match)
            .filter(Match.id == match_id)
            .first()
        )

        if match is None:
            raise ValueError("Match not found.")

        # Step 2: Get Resume
        resume = (
            db.query(Resume)
            .filter(Resume.id == match.resume_id)
            .first()
        )

        if resume is None:
            raise ValueError("Resume not found.")

        # Step 3: Get Job
        job = (
            db.query(Job)
            .filter(Job.id == match.job_id)
            .first()
        )

        if job is None:
            raise ValueError("Job not found.")

        # Step 4: Get Latest Interview (Optional)
        interview = (
            db.query(Interview)
            .filter(Interview.match_id == match.id)
            .order_by(Interview.created_at.desc())
            .first()
        )

        # Step 5: Prepare Resume Data
        resume_data = {
            "summary": resume.summary,
            "skills": resume.skills,
            "strengths": resume.strengths,
            "weaknesses": resume.weaknesses,
            "ats_score": resume.ats_score,
        }

        # Step 6: Prepare Job Data
        job_data = {
            "title": job.title,
            "company": job.company,
            "summary": job.summary,
            "experience_level": job.experience_level,
            "required_skills": job.required_skills,
            "preferred_skills": job.preferred_skills,
        }

        # Step 7: Prepare Match Data
        match_data = {
            "match_score": match.match_score,
            "matching_skills": match.matching_skills,
            "missing_skills": match.missing_skills,
            "resume_improvements": match.resume_improvements,
            "interview_focus_areas": match.interview_focus_areas,
            "overall_feedback": match.overall_feedback,
        }

        # Step 8: Prepare Interview Data
        interview_data = {}

        if interview:
            interview_data = {
                "overall_score": interview.overall_score,
                "evaluation": interview.evaluation,
                "answers": interview.answers,
            }

        # Step 9: Generate AI Roadmap
        analysis = self.roadmap_agent.generate_roadmap(
            resume_data=resume_data,
            job_data=job_data,
            match_data=match_data,
            interview_data=interview_data,
        )

        # Step 10: Create Roadmap Record
        roadmap = Roadmap(
            match_id=match.id,
            title=analysis.get("title"),
            estimated_duration=analysis.get("estimated_duration"),
            roadmap=analysis.get("roadmap"),
            completed=False,
        )

        db.add(roadmap)
        db.commit()
        db.refresh(roadmap)

        return roadmap