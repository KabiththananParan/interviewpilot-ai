from sqlalchemy.orm import Session

from app.agents.interview_agent import InterviewAgent
from app.models.interview import Interview
from app.models.job import Job
from app.models.match import Match
from app.models.resume import Resume


class InterviewService:
    def __init__(self):
        self.interview_agent = InterviewAgent()

    def generate_interview(
        self,
        match_id: int,
        db: Session,
    ) -> Interview:
        """
        Generate interview questions for a match.
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

        # Step 6: Prepare Match Data
        match_data = {
            "match_score": match.match_score,
            "matching_skills": match.matching_skills,
            "missing_skills": match.missing_skills,
            "resume_improvements": match.resume_improvements,
            "interview_focus_areas": match.interview_focus_areas,
            "overall_feedback": match.overall_feedback,
        }

        # Step 7: Generate Questions
        questions = self.interview_agent.generate_questions(
            resume_data=resume_data,
            job_data=job_data,
            match_data=match_data,
        )

        # Step 8: Save Interview
        interview = Interview(
            match_id=match.id,
            questions=questions,
        )

        db.add(interview)
        db.commit()
        db.refresh(interview)

        return interview

    def evaluate_interview(
        self,
        interview_id: int,
        answers: list,
        db: Session,
    ) -> Interview:
        """
        Evaluate interview answers.
        """

        # Step 1: Get Interview
        interview = (
            db.query(Interview)
            .filter(Interview.id == interview_id)
            .first()
        )

        if interview is None:
            raise ValueError("Interview not found.")

        # Step 2: Evaluate Answers
        evaluation = self.interview_agent.evaluate_answers(
            questions=interview.questions,
            answers=answers,
        )

        # Step 3: Save Answers
        interview.answers = answers

        # Step 4: Save Evaluation
        interview.evaluation = evaluation.get("evaluation")
        interview.overall_score = evaluation.get("overall_score")

        db.commit()
        db.refresh(interview)

        return interview