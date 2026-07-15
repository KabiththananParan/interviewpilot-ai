from sqlalchemy import Column, DateTime, Integer, JSON, String, Text
from sqlalchemy.sql import func

from app.core.database import Base


class Job(Base):
    __tablename__ = "jobs"

    # Primary Key
    id = Column(Integer, primary_key=True, index=True)

    # Basic Information
    title = Column(String(255), nullable=True)
    company = Column(String(255), nullable=True)

    # Original Job Description
    job_description = Column(Text, nullable=False)

    # AI Analysis
    summary = Column(Text, nullable=True)
    experience_level = Column(String(100), nullable=True)

    required_skills = Column(JSON, nullable=True)
    preferred_skills = Column(JSON, nullable=True)

    # Metadata
    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )