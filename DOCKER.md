# Portfolio Docker Setup

Este proyecto incluye una configuración completa de Docker para desarrollo y producción.

## Estructura de Servicios

- **Backend**: FastAPI con Python 3.12
- **Frontend**: Next.js 14
- **Redis**: Cache y sessions
- **Nginx**: Reverse proxy (solo en producción)

## Prerrequisitos

- Docker
- Docker Compose
- Make (opcional, para usar el Makefile)

## Configuración Inicial

1. **Copia el archivo de ejemplo de variables de entorno:**
   ```bash
   cp .env.example .env
   ```

2. **Edita el archivo `.env` con tus configuraciones:**
   ```bash
   nano .env
   ```

3. **Crea el archivo `.env` para el backend:**
   ```bash
   cp .env backend/.env
   ```

## Desarrollo

### Usando Docker Compose directamente:

```bash
# Levantar todos los servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar servicios
docker-compose down

# Rebuild de imágenes
docker-compose build
```

### Usando Makefile (recomendado):

```bash
# Levantar servicios de desarrollo
make dev-up

# Ver logs
make dev-logs

# Parar servicios
make dev-down

# Rebuild
make dev-build

# Reiniciar servicios
make dev-restart
```

### Acceso a los servicios:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **Backend Docs**: http://localhost:8000/docs
- **Redis**: localhost:6379

## Producción

### Usando Docker Compose:

```bash
# Levantar servicios de producción
docker-compose -f docker-compose.prod.yml up -d

# Ver logs
docker-compose -f docker-compose.prod.yml logs -f

# Parar servicios
docker-compose -f docker-compose.prod.yml down
```

### Usando Makefile:

```bash
# Levantar servicios de producción
make prod-up

# Ver logs
make prod-logs

# Parar servicios
make prod-down

# Rebuild
make prod-build
```

### Con Nginx (producción completa):

```bash
# Levantar con nginx incluido
docker-compose -f docker-compose.prod.yml --profile production up -d
```

## Comandos Útiles

### Logs específicos:
```bash
make backend-logs   # Solo logs del backend
make frontend-logs  # Solo logs del frontend
make redis-logs     # Solo logs de Redis
```

### Acceso a contenedores:
```bash
make backend-shell   # Shell del backend
make frontend-shell  # Shell del frontend
make redis-cli       # Cliente Redis
```

### Tests:
```bash
make test-backend    # Ejecutar tests del backend
```

### Limpieza:
```bash
make clean          # Limpiar Docker (imágenes, contenedores, volúmenes)
```

### Monitoreo:
```bash
make stats          # Ver estadísticas de contenedores
```

## Troubleshooting

### Problema: Los contenedores no se levantan
```bash
# Ver logs detallados
docker-compose logs

# Rebuild forzado
docker-compose build --no-cache
```

### Problema: Puerto ocupado
```bash
# Ver qué está usando el puerto
sudo netstat -tulpn | grep :3000
sudo netstat -tulpn | grep :8000

# Cambiar puertos en docker-compose.yml si es necesario
```

### Problema: Volúmenes de desarrollo
```bash
# Eliminar volúmenes y recrear
docker-compose down -v
docker-compose up -d
```

### Problema: Hot reload no funciona
Asegúrate de que los volúmenes estén correctamente montados:
- Frontend: `./frontend:/app`
- Backend: `./backend:/app`

## Variables de Entorno Importantes

### Backend (.env):
- `ENVIRONMENT`: development/production
- `OPENROUTER_API_KEY`: Tu API key
- `AWS_ACCESS_KEY_ID`: Credenciales AWS
- `SECRET_KEY`: Clave secreta para JWT

### Frontend:
- `NEXT_PUBLIC_API_URL`: URL del backend

## Backup y Restauración

### Backup de Redis:
```bash
make backup-redis
```

### Restaurar Redis:
```bash
make restore-redis
```

## Arquitectura

```
┌─────────────────┐    ┌─────────────────┐
│     Nginx       │    │    Frontend     │
│   (Reverse      │◄───┤    (Next.js)    │
│     Proxy)      │    │                 │
└─────────┬───────┘    └─────────────────┘
          │
          ▼
┌─────────────────┐    ┌─────────────────┐
│     Backend     │    │      Redis      │
│   (FastAPI)     │◄───┤     (Cache)     │
│                 │    │                 │
└─────────────────┘    └─────────────────┘
```

## Notas de Seguridad

- Cambia `SECRET_KEY` en producción
- Usa HTTPS en producción
- Configura firewall apropiadamente
- Usa variables de entorno para secretos
- No commitees archivos `.env` al repositorio
