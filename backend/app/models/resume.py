from sqlalchemy import Column, DateTime, Float, Integer, JSON, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.core.database import Base


class Resume(Base):
    __tablename__ = "resumes"

    # Primary Key
    id = Column(Integer, primary_key=True, index=True)

    # File Information
    original_filename = Column(String(255), nullable=False)
    stored_filename = Column(String(255), nullable=False)
    file_path = Column(String(500), nullable=False)
    file_size = Column(Integer, nullable=False)

    # Resume Content
    extracted_text = Column(Text, nullable=False)

    # AI Analysis
    ats_score = Column(Float, nullable=True)
    summary = Column(Text, nullable=True)

    skills = Column(JSON, nullable=True)
    strengths = Column(JSON, nullable=True)
    weaknesses = Column(JSON, nullable=True)

    # Relationships
    matches = relationship(
        "Match",
        back_populates="resume",
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