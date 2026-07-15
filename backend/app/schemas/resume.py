from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict


class ResumeBase(BaseModel):
    original_filename: str
    stored_filename: str
    file_path: str
    file_size: int
    extracted_text: str


class ResumeCreate(ResumeBase):
    pass


class ResumeUpdate(BaseModel):
    ats_score: Optional[float] = None
    summary: Optional[str] = None
    skills: Optional[List[str]] = None
    strengths: Optional[List[str]] = None
    weaknesses: Optional[List[str]] = None


class ResumeResponse(ResumeBase):
    id: int

    ats_score: Optional[float] = None
    summary: Optional[str] = None
    skills: Optional[List[str]] = None
    strengths: Optional[List[str]] = None
    weaknesses: Optional[List[str]] = None

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)