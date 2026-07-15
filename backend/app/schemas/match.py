from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict


class MatchBase(BaseModel):
    resume_id: int
    job_id: int


class MatchCreate(MatchBase):
    pass


class MatchUpdate(BaseModel):
    match_score: Optional[float] = None
    matching_skills: Optional[List[str]] = None
    missing_skills: Optional[List[str]] = None
    resume_improvements: Optional[List[str]] = None
    interview_focus_areas: Optional[List[str]] = None
    overall_feedback: Optional[str] = None


class MatchResponse(MatchBase):
    id: int

    match_score: Optional[float] = None

    matching_skills: Optional[List[str]] = None
    missing_skills: Optional[List[str]] = None

    resume_improvements: Optional[List[str]] = None
    interview_focus_areas: Optional[List[str]] = None

    overall_feedback: Optional[str] = None

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)