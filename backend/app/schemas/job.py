from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict


class JobBase(BaseModel):
    job_description: str


class JobCreate(JobBase):
    pass


class JobUpdate(BaseModel):
    title: Optional[str] = None
    company: Optional[str] = None
    summary: Optional[str] = None
    experience_level: Optional[str] = None
    required_skills: Optional[List[str]] = None
    preferred_skills: Optional[List[str]] = None


class JobResponse(JobBase):
    id: int

    title: Optional[str] = None
    company: Optional[str] = None

    summary: Optional[str] = None
    experience_level: Optional[str] = None

    required_skills: Optional[List[str]] = None
    preferred_skills: Optional[List[str]] = None

    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)