from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "InterviewPilot AI"
    app_version: str = "1.0.0"

    groq_api_key: str
    model: str

    database_url: str

    upload_dir: str = "uploads"

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()