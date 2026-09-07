---
title: API client
summary: API client — слой доступа к бэкенду на фронте: base URL, auth headers, ошибки, типизация, иногда retry/cache.
---

## Для чего

Чтобы компоненты не знали про raw `fetch`/токены и ошибки обрабатывались единообразно.

## Пример

`api.get<User>('/me')` в `shared/api`: подставляет Bearer, парсит JSON, мапит 401 → logout. UI зовёт `userApi.getMe()`.

## Примечание

Тонкий client + React Query часто лучше «божественного» SDK на 20 паттернов. Не светите секреты в клиентском бандле.
