# Scripts útiles para Docker

# Desarrollo
dev-up:
	docker-compose up -d

dev-down:
	docker-compose down

dev-logs:
	docker-compose logs -f

dev-build:
	docker-compose build

dev-restart:
	docker-compose restart

# Producción
prod-up:
	docker-compose -f docker-compose.prod.yml up -d

prod-down:
	docker-compose -f docker-compose.prod.yml down

prod-logs:
	docker-compose -f docker-compose.prod.yml logs -f

prod-build:
	docker-compose -f docker-compose.prod.yml build

# Limpieza
clean:
	docker system prune -af
	docker volume prune -f

# Backup de Redis
backup-redis:
	docker exec portfolio-redis redis-cli BGSAVE
	docker cp portfolio-redis:/data/dump.rdb ./backup/redis-$(date +%Y%m%d_%H%M%S).rdb

# Restaurar Redis
restore-redis:
	docker cp ./backup/redis-latest.rdb portfolio-redis:/data/dump.rdb
	docker restart portfolio-redis

# Monitoreo
stats:
	docker stats

# Ver logs específicos
backend-logs:
	docker-compose logs -f backend

frontend-logs:
	docker-compose logs -f frontend

redis-logs:
	docker-compose logs -f redis

nginx-logs:
	docker-compose logs -f nginx

# Ejecutar comandos en contenedores
backend-shell:
	docker exec -it portfolio-backend /bin/bash

frontend-shell:
	docker exec -it portfolio-frontend /bin/sh

redis-cli:
	docker exec -it portfolio-redis redis-cli

# Tests
test-backend:
	docker exec portfolio-backend pytest

# Base de datos (si usas una)
db-migrate:
	docker exec portfolio-backend alembic upgrade head

db-seed:
	docker exec portfolio-backend python scripts/seed_data.py

.PHONY: dev-up dev-down dev-logs dev-build dev-restart prod-up prod-down prod-logs prod-build clean backup-redis restore-redis stats backend-logs frontend-logs redis-logs nginx-logs backend-shell frontend-shell redis-cli test-backend db-migrate db-seed
