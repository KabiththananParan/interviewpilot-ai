from sqlalchemy.orm import Session

from app.agents.match_agent import MatchAgent
from app.models.job import Job
from app.models.match import Match
from app.models.resume import Resume


class MatchService:
    def __init__(self):
        self.match_agent = MatchAgent()

    def analyze_match(
        self,
        resume_id: int,
        job_id: int,
        db: Session,
    ) -> Match:
        """
        Compare a resume with a job description,
        save the AI analysis,
        and return the completed Match.
        """

        # Step 1: Get Resume
        resume = (
            db.query(Resume)
            .filter(Resume.id == resume_id)
            .first()
        )

        if resume is None:
            raise ValueError("Resume not found.")

        # Step 2: Get Job
        job = (
            db.query(Job)
            .filter(Job.id == job_id)
            .first()
        )

        if job is None:
            raise ValueError("Job not found.")

        # Step 3: Create Match Record
        match = Match(
            resume_id=resume.id,
            job_id=job.id,
        )

        db.add(match)
        db.commit()
        db.refresh(match)

        # Step 4: Prepare Resume Data
        resume_data = {
            "summary": resume.summary,
            "skills": resume.skills,
            "strengths": resume.strengths,
            "weaknesses": resume.weaknesses,
            "ats_score": resume.ats_score,
        }

        # Step 5: Prepare Job Data
        job_data = {
            "title": job.title,
            "company": job.company,
            "summary": job.summary,
            "experience_level": job.experience_level,
            "required_skills": job.required_skills,
            "preferred_skills": job.preferred_skills,
        }

        # Step 6: AI Matching
        analysis = self.match_agent.analyze_match(
            resume_data=resume_data,
            job_data=job_data,
        )

        print("Match Analysis:", analysis)

        # Step 7: Save AI Analysis
        match.match_score = analysis.get("match_score")
        match.matching_skills = analysis.get("matching_skills")
        match.missing_skills = analysis.get("missing_skills")
        match.resume_improvements = analysis.get("resume_improvements")
        match.interview_focus_areas = analysis.get("interview_focus_areas")
        match.overall_feedback = analysis.get("overall_feedback")

        db.commit()
        db.refresh(match)

        # Step 8: Return Match
        return match