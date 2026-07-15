from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.roadmap import RoadmapCreate, RoadmapResponse
from app.services.roadmap_service import RoadmapService

router = APIRouter(
    prefix="/roadmaps",
    tags=["Roadmaps"],
)

roadmap_service = RoadmapService()


@router.post(
    "/generate",
    response_model=RoadmapResponse,
    status_code=201,
)
def generate_roadmap(
    roadmap: RoadmapCreate,
    db: Session = Depends(get_db),
):
    try:
        return roadmap_service.generate_roadmap(
            match_id=roadmap.match_id,
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