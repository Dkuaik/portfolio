#!/bin/bash

# Script de deployment para producción
# Uso: ./deploy.sh [desarrollo|produccion|test]

set -e  # Salir si hay errores

ENVIRONMENT=${1:-desarrollo}

echo "🚀 Iniciando deployment para entorno: $ENVIRONMENT"

case $ENVIRONMENT in
    "desarrollo")
        echo "📦 Construyendo para desarrollo..."
        docker-compose down --remove-orphans
        docker-compose build --no-cache
        docker-compose up -d
        echo "✅ Desarrollo iniciado en:"
        echo "   Frontend: http://localhost:3000"
        echo "   Backend: http://localhost:8000"
        echo "   Docs: http://localhost:8000/docs"
        ;;
    
    "produccion")
        echo "🏭 Construyendo para producción..."
        docker-compose -f docker-compose.prod.yml down --remove-orphans
        docker-compose -f docker-compose.prod.yml build --no-cache
        docker-compose -f docker-compose.prod.yml up -d
        echo "✅ Producción iniciada"
        ;;
    
    "test")
        echo "🧪 Ejecutando tests..."
        # Backend tests
        cd backend
        docker build -t portfolio-backend-test .
        docker run --rm portfolio-backend-test uv run pytest
        cd ..
        
        # Frontend build test
        cd frontend
        docker build -t portfolio-frontend-test .
        cd ..
        
        echo "✅ Tests completados"
        ;;
    
    "stop")
        echo "🛑 Deteniendo servicios..."
        docker-compose down
        docker-compose -f docker-compose.prod.yml down
        echo "✅ Servicios detenidos"
        ;;
    
    "clean")
        echo "🧹 Limpiando sistema Docker..."
        docker-compose down --remove-orphans --volumes
        docker-compose -f docker-compose.prod.yml down --remove-orphans --volumes
        docker system prune -f
        echo "✅ Sistema limpio"
        ;;
    
    *)
        echo "❌ Entorno no válido. Opciones disponibles:"
        echo "   desarrollo - Inicia entorno de desarrollo"
        echo "   produccion - Inicia entorno de producción"
        echo "   test - Ejecuta tests"
        echo "   stop - Detiene todos los servicios"
        echo "   clean - Limpia el sistema Docker"
        exit 1
        ;;
esac

echo "🎉 Deployment completado para $ENVIRONMENT"
