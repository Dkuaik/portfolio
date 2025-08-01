"""
Portfolio Backend API
Entry point for running the FastAPI application
"""
import uvicorn
from app.main import app
from app.core.config import settings

if __name__ == "__main__":
    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=8000,
        reload=settings.DEBUG,
        log_level="info"
    )
