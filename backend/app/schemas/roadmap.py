from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict


class RoadmapBase(BaseModel):
    match_id: int


class RoadmapCreate(RoadmapBase):
    pass


class RoadmapUpdate(BaseModel):
    title: Optional[str] = None
    estimated_duration: Optional[str] = None
    roadmap: Optional[List[dict]] = None
    completed: Optional[bool] = None


class RoadmapResponse(RoadmapBase):
    id: int

    title: Optional[str] = None
    estimated_duration: Optional[str] = None

    roadmap: Optional[List[dict]] = None

    completed: bool

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)