from fastapi import UploadFile
from sqlalchemy.orm import Session

from app.agents.resume_agent import ResumeAgent
from app.models.resume import Resume
from app.services.file_service import FileService
from app.services.pdf_service import PDFService


class ResumeService:
    def __init__(self):
        self.file_service = FileService()
        self.pdf_service = PDFService()
        self.resume_agent = ResumeAgent()

    async def upload_resume(
        self,
        file: UploadFile,
        db: Session,
    ) -> Resume:
        """
        Upload a resume, extract text, analyze it with AI,
        save everything to the database, and return the completed resume.
        """

        # Step 1: Save uploaded file
        file_info = await self.file_service.save_file(file)

        # Step 2: Extract text from PDF
        extracted_text = self.pdf_service.extract_text(
            file_info["file_path"]
        )

        # Step 3: Create Resume record
        resume = Resume(
            original_filename=file_info["original_filename"],
            stored_filename=file_info["stored_filename"],
            file_path=file_info["file_path"],
            file_size=file_info["file_size"],
            extracted_text=extracted_text,
        )

        db.add(resume)
        db.commit()
        db.refresh(resume)

        # Step 4: Analyze resume using AI
        analysis = self.resume_agent.analyze_resume(extracted_text)

        print("Resume Analysis:", analysis)  # Temporary debug

        # Step 5: Update Resume with AI analysis
        resume.ats_score = analysis.get("ats_score")
        resume.summary = analysis.get("summary")
        resume.skills = analysis.get("skills")
        resume.strengths = analysis.get("strengths")
        resume.weaknesses = analysis.get("weaknesses")

        db.commit()
        db.refresh(resume)

        # Step 6: Return updated resume
        return resume