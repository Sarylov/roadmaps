---
title: Dockerfile
summary: Dockerfile — рецепт сборки image: базовый образ, копирование файлов, `RUN`, `ENV`, `EXPOSE`, `CMD`/`ENTRYPOINT`.
---

## Для чего

Чтобы сборка была кодом в репозитории, а не ручными шагами на машине.

## Пример

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD ["node", "dist/main.js"]
```

## Примечание

Сначала зависимости — лучше кэш слоёв. Не копируйте `.env` с секретами. Non-root user — хорошая практика для прода.
