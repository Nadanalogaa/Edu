# Education Intelligence: one image serving the React frontend and the API.
# Built by Portainer from the Git repository (see docker-compose.portainer.yml).

# 1. Frontend (Vite)
FROM node:20-alpine AS frontend-builder
WORKDIR /app
ARG GEMINI_API_KEY=
ENV GEMINI_API_KEY=${GEMINI_API_KEY}
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2. Backend (TypeScript -> dist)
FROM node:20-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci
COPY backend/ ./
RUN npm run build

# 3. Runtime
FROM node:20-alpine
RUN apk add --no-cache dumb-init
WORKDIR /app/backend
ENV NODE_ENV=production

COPY backend/package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=backend-builder /app/backend/dist ./dist
COPY --from=frontend-builder /app/dist /app/dist

# Uploaded documents and question files. The stack mounts a named volume here;
# Docker fills an empty volume from the image, ownership included, so the
# non-root user can write to it.
RUN mkdir -p uploads/students uploads/teachers uploads/schools uploads/bulk uploads/questions \
  && chown -R node:node /app
USER node

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 3000) + '/api/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/server.js"]
