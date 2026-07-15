from sqlalchemy.orm import Session

from app.models.resume import Resume
from app.services.file_service import FileService
from app.services.pdf_service import PDFService


class ResumeService:
    def __init__(self):
        self.file_service = FileService()
        self.pdf_service = PDFService()

    async def upload_resume(
        self,
        file,
        db: Session,
    ) -> Resume:
        """
        Upload a resume and save it to the database.
        """

        # Step 1
        file_info = await self.file_service.save_file(file)

        # Step 2
        extracted_text = self.pdf_service.extract_text(
            file_info["file_path"]
        )

        # Step 3
        resume = Resume(
            original_filename=file_info["original_filename"],
            stored_filename=file_info["stored_filename"],
            file_path=file_info["file_path"],
            file_size=file_info["file_size"],
            extracted_text=extracted_text,
        )

        # Step 4
        db.add(resume)
        db.commit()
        db.refresh(resume)

        # Step 5
        return resume