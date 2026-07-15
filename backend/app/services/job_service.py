from sqlalchemy.orm import Session

from app.agents.job_agent import JobAgent
from app.models.job import Job


class JobService:
    def __init__(self):
        self.job_agent = JobAgent()

    def analyze_job(
        self,
        job_description: str,
        db: Session,
    ) -> Job:
        """
        Analyze a job description using AI,
        save the analysis to the database,
        and return the completed Job.
        """

        # Step 1: Create Job record
        job = Job(
            job_description=job_description,
        )

        db.add(job)
        db.commit()
        db.refresh(job)

        # Step 2: Analyze using AI
        analysis = self.job_agent.analyze_job(job_description)

        print("Job Analysis:", analysis)  # Temporary debug

        # Step 3: Update Job
        job.title = analysis.get("title")
        job.company = analysis.get("company")
        job.summary = analysis.get("summary")
        job.experience_level = analysis.get("experience_level")
        job.required_skills = analysis.get("required_skills")
        job.preferred_skills = analysis.get("preferred_skills")

        db.commit()
        db.refresh(job)

        # Step 4: Return completed Job
        return job