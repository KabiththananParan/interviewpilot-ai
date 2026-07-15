from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict


class InterviewBase(BaseModel):
    match_id: int


class InterviewCreate(InterviewBase):
    pass


class InterviewUpdate(BaseModel):
    questions: Optional[List[dict]] = None
    answers: Optional[List[dict]] = None
    evaluation: Optional[List[dict]] = None
    overall_score: Optional[float] = None


class InterviewResponse(InterviewBase):
    id: int

    questions: Optional[List[dict]] = None
    answers: Optional[List[dict]] = None
    evaluation: Optional[List[dict]] = None

    overall_score: Optional[float] = None

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)