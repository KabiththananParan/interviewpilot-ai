from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, JSON, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.core.database import Base


class Match(Base):
    __tablename__ = "matches"

    # Primary Key
    id = Column(Integer, primary_key=True, index=True)

    # Foreign Keys
    resume_id = Column(
        Integer,
        ForeignKey("resumes.id"),
        nullable=False,
    )

    job_id = Column(
        Integer,
        ForeignKey("jobs.id"),
        nullable=False,
    )

    # AI Analysis
    match_score = Column(
        Float,
        nullable=True,
    )

    matching_skills = Column(
        JSON,
        nullable=True,
    )

    missing_skills = Column(
        JSON,
        nullable=True,
    )

    resume_improvements = Column(
        JSON,
        nullable=True,
    )

    interview_focus_areas = Column(
        JSON,
        nullable=True,
    )

    overall_feedback = Column(
        Text,
        nullable=True,
    )

    # Relationships
    resume = relationship(
        "Resume",
        back_populates="matches",
    )

    job = relationship(
        "Job",
        back_populates="matches",
    )

    interviews = relationship(
        "Interview",
        back_populates="match",
        cascade="all, delete-orphan",
    )

    roadmaps = relationship(
        "Roadmap",
        back_populates="match",
        cascade="all, delete-orphan",
    )

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