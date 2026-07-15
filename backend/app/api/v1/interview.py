from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.interview import InterviewCreate, InterviewResponse
from app.services.interview_service import InterviewService

router = APIRouter(
    prefix="/interviews",
    tags=["Interviews"],
)

interview_service = InterviewService()


class InterviewEvaluationRequest(BaseModel):
    answers: list


@router.post(
    "/generate",
    response_model=InterviewResponse,
    status_code=201,
)
def generate_interview(
    interview: InterviewCreate,
    db: Session = Depends(get_db),
):
    try:
        return interview_service.generate_interview(
            match_id=interview.match_id,
            db=db,
        )
    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


@router.put(
    "/{interview_id}/evaluate",
    response_model=InterviewResponse,
)
def evaluate_interview(
    interview_id: int,
    request: InterviewEvaluationRequest,
    db: Session = Depends(get_db),
):
    try:
        return interview_service.evaluate_interview(
            interview_id=interview_id,
            answers=request.answers,
            db=db,
        )
    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )