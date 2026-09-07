---
title: Docker
summary: Docker — контейнеризация: image со средой запуска, одинаковый runtime локально и на сервере.
---

## Для чего

Чтобы фронт (или его nginx/node SSR) собирался и ехал в одних и тех же зависимостях OS/Node.

## Пример

Multi-stage: `FROM node AS build` → `vite build` → `FROM nginx` копирует `dist`. Compose для локального API+web.

## Примечание

Не тащите `node_modules` с хоста. Для чистой статики часто достаточно CDN без контейнера приложения.
