from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, JSON, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.core.database import Base


class Roadmap(Base):
    __tablename__ = "roadmaps"

    # Primary Key
    id = Column(Integer, primary_key=True, index=True)

    # Relationship
    match_id = Column(
        Integer,
        ForeignKey("matches.id"),
        nullable=False,
    )

    # AI Generated Roadmap
    title = Column(
        String(255),
        nullable=True,
    )

    estimated_duration = Column(
        String(100),
        nullable=True,
    )

    roadmap = Column(
        JSON,
        nullable=True,
    )

    # Progress
    completed = Column(
        Boolean,
        default=False,
        nullable=False,
    )

    # ORM Relationship
    match = relationship(
        "Match",
        back_populates="roadmaps",
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