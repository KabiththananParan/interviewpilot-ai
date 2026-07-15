from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.resume import ResumeResponse
from app.services.resume_service import ResumeService

router = APIRouter(prefix="/resumes", tags=["Resumes"])

resume_service = ResumeService()


@router.post(
    "/upload",
    response_model=ResumeResponse,
    status_code=201,
)
async def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    return await resume_service.upload_resume(file=file, db=db)