from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.match import MatchCreate, MatchResponse
from app.services.match_service import MatchService

router = APIRouter(
    prefix="/matches",
    tags=["Matches"],
)

match_service = MatchService()


@router.post(
    "/analyze",
    response_model=MatchResponse,
    status_code=201,
)
def analyze_match(
    match: MatchCreate,
    db: Session = Depends(get_db),
):
    try:
        return match_service.analyze_match(
            resume_id=match.resume_id,
            job_id=match.job_id,
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