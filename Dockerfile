# syntax=docker/dockerfile:1

# ---- Build stage: compile the static bundle with Bun -------------------------
FROM oven/bun:1.3-alpine AS build

WORKDIR /app

# Dependencies are copied first so this layer is cached until the lockfile moves.
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY tsconfig.json bunfig.toml build.ts index.html favicon.svg ./
COPY src ./src

RUN bun run build

# ---- Runtime stage: serve the bundle with nginx ------------------------------
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
