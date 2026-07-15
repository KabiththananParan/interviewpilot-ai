from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.job import JobCreate, JobResponse
from app.services.job_service import JobService

router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"],
)

job_service = JobService()


@router.post(
    "/analyze",
    response_model=JobResponse,
    status_code=201,
)
def analyze_job(
    job: JobCreate,
    db: Session = Depends(get_db),
):
    return job_service.analyze_job(
        job_description=job.job_description,
        db=db,
    )