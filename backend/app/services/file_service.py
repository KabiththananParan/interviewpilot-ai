from pathlib import Path
from uuid import uuid4

from fastapi import HTTPException, UploadFile

from app.core.config import settings


class FileService:
    ALLOWED_EXTENSIONS = {".pdf"}

    def __init__(self):
        self.upload_dir = Path(settings.upload_dir)
        self.upload_dir.mkdir(parents=True, exist_ok=True)

    async def save_file(self, file: UploadFile) -> dict:
        """
        Save an uploaded PDF file and return its metadata.
        """

        # Validate file extension
        extension = Path(file.filename).suffix.lower()

        if extension not in self.ALLOWED_EXTENSIONS:
            raise HTTPException(
                status_code=400,
                detail="Only PDF files are allowed."
            )

        # Generate unique filename
        stored_filename = f"{uuid4().hex}{extension}"

        file_path = self.upload_dir / stored_filename

        # Read uploaded file
        content = await file.read()

        if not content:
            raise HTTPException(
                status_code=400,
                detail="Uploaded file is empty."
            )

        # Save file
        file_path.write_bytes(content)

        return {
            "original_filename": file.filename,
            "stored_filename": stored_filename,
            "file_path": str(file_path),
            "file_size": len(content),
        }

    def delete_file(self, file_path: str) -> None:
        """
        Delete a file if it exists.
        """

        path = Path(file_path)

        if path.exists():
            path.unlink()

    def file_exists(self, file_path: str) -> bool:
        """
        Check whether a file exists.
        """

        return Path(file_path).exists()