# Portfolio - Deployment con Dokploy

Este documento contiene las instrucciones para deployar el portfolio usando Dokploy.

## Variables de Entorno Requeridas

### Variables del Backend
Configura estas variables en Dokploy para el proyecto:

```bash
# Configuración básica
PROJECT_NAME=Portfolio Backend API
VERSION=1.0.0

# API Keys
OPENROUTER_API_KEY=tu_openrouter_api_key_aqui
OPENAI_API_KEY=tu_openai_api_key_aqui

# URLs
API_BASE_URL=https://tu-dominio.com
FRONTEND_URL=https://tu-dominio.com
ALLOWED_ORIGINS=https://tu-dominio.com,http://localhost:3000

# Redis
REDIS_URL=redis://redis:6379/0

# Logging
LOG_LEVEL=INFO

# Security
SECRET_KEY=tu_secret_key_super_seguro_aqui
```

### Variables del Frontend
```bash
# API Configuration
NEXT_PUBLIC_OPENROUTER_API_KEY=tu_openrouter_api_key_aqui
NEXT_PUBLIC_API_URL=https://tu-dominio.com

# App Configuration
NEXT_PUBLIC_APP_NAME=Portfolio
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_DOMAIN=tu-dominio.com

# Analytics (opcional)
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

## Configuración en Dokploy

### 1. Crear Nuevo Proyecto
1. Accede a tu panel de Dokploy
2. Crea un nuevo proyecto llamado "Portfolio"
3. Selecciona "Docker Compose" como tipo de deployment

### 2. Configurar Repository
- **Repository URL**: `https://github.com/tu-usuario/portfolio.git`
- **Branch**: `main`
- **Docker Compose File**: `docker-compose.prod.yml`

### 3. Variables de Entorno
En la sección de Environment Variables de Dokploy, agrega todas las variables listadas arriba usando el formato:
- Variable Name: `PROJECT_NAME`
- Variable Value: `Portfolio Backend API`

### 4. Configuración de Dominio
1. En Dokploy, ve a la sección de Domains
2. Agrega tu dominio personalizado
3. Configura SSL automático

### 5. Puertos Expuestos
Dokploy debería detectar automáticamente los puertos del docker-compose:
- **Frontend**: Puerto 3000
- **Backend**: Puerto 8000
- **Nginx**: Puertos 80 y 443

## SSL/TLS Configuration

Para SSL en producción, Dokploy manejará automáticamente los certificados SSL con Let's Encrypt. Solo necesitas:

1. Tener tu dominio apuntando a la IP del servidor
2. Configurar el dominio en Dokploy
3. Habilitar SSL automático

## Arquitectura de Producción

```
Internet → Dokploy Load Balancer → Nginx → Frontend (Next.js)
                                        → Backend (FastAPI)
                                        → Redis
```

## Monitoreo y Logs

Dokploy proporciona:
- Logs en tiempo real de todos los contenedores
- Métricas de CPU y memoria
- Health checks automáticos
- Notificaciones de deployment

## Comandos Útiles

### Verificar el estado de los servicios
```bash
docker-compose -f docker-compose.prod.yml ps
```

### Ver logs de un servicio específico
```bash
docker-compose -f docker-compose.prod.yml logs -f frontend
docker-compose -f docker-compose.prod.yml logs -f backend
```

### Rebuild y redeploy
```bash
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d
```

## Troubleshooting

### Problema: Frontend no puede conectar al Backend
- Verificar que `NEXT_PUBLIC_API_URL` apunte a la URL correcta del backend
- Verificar configuración de CORS en el backend

### Problema: SSL no funciona
- Verificar que el dominio esté apuntando a la IP correcta
- Verificar configuración de SSL en Dokploy
- Verificar que los puertos 80 y 443 estén abiertos

### Problema: Variables de entorno no se cargan
- Verificar formato de variables en Dokploy: `{{ project.VARIABLE_NAME }}`
- Verificar que las variables estén definidas en el proyecto de Dokploy

## Backup y Recuperación

### Backup de Redis
```bash
docker-compose -f docker-compose.prod.yml exec redis redis-cli BGSAVE
```

### Backup de Vectorstores
Los vectorstores se persisten en volúmenes Docker y se respaldan automáticamente.

## Escalabilidad

Para escalar el proyecto:
1. Aumentar recursos en Dokploy (CPU/RAM)
2. Configurar múltiples réplicas del frontend/backend
3. Considerar usar Redis Cluster para mayor volumen

## Seguridad

El setup incluye:
- HTTPS forzado
- Headers de seguridad
- Rate limiting
- CORS configurado correctamente
- Containers ejecutándose con usuarios no-root
