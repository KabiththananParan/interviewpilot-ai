from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.core.database import Base


class Interview(Base):
    __tablename__ = "interviews"

    # Primary Key
    id = Column(Integer, primary_key=True, index=True)

    # Relationship
    match_id = Column(
        Integer,
        ForeignKey("matches.id"),
        nullable=False,
    )

    # Interview Data
    questions = Column(JSON, nullable=True)

    answers = Column(JSON, nullable=True)

    evaluation = Column(JSON, nullable=True)

    overall_score = Column(Float, nullable=True)

    # ORM Relationship
    match = relationship(
        "Match",
        back_populates="interviews",
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