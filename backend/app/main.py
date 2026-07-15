from fastapi import FastAPI
from app.core.config import settings

app = FastAPI()

@app.get("/")
async def root():
    return {
        "app": settings.app_name,
        "Version": settings.app_version,
        "Model": settings.model
    }
