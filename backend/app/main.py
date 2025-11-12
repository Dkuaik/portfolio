from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import embeddings, health
from app.core.config import settings

# Create FastAPI instance
app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Portfolio Backend API - Sistema de embeddings y búsqueda semántica",
    version=settings.VERSION,
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://portfolio.dkuaik.dev/", "http://localhost:3000", "http://localhost:3001", "http://127.0.0.1:3000", "http://127.0.0.1:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router, prefix="/api/v1", tags=["Health"])
app.include_router(embeddings.router, prefix="/api/v1", tags=["Embeddings"])

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Portfolio Backend API",
        "version": settings.VERSION,
        "docs": "/docs"
    }

def start_server():
    """Entry point for production server"""
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        log_level="info"
    )
