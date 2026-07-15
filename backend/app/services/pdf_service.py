import fitz  # PyMuPDF
from pathlib import Path

from fastapi import HTTPException


class PDFService:
    @staticmethod
    def extract_text(file_path: str) -> str:
        """
        Extract text from a PDF file.
        """

        path = Path(file_path)

        if not path.exists():
            raise HTTPException(
                status_code=404,
                detail="PDF file not found."
            )

        try:
            document = fitz.open(path)

            text = ""

            for page in document:
                text += page.get_text()

            document.close()

            text = text.strip()

            if not text:
                raise HTTPException(
                    status_code=400,
                    detail="No readable text found in PDF."
                )

            return text

        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Failed to extract PDF text: {str(e)}"
            )