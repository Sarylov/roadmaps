---
title: extensions
summary: "extensions: Расширения: pgcrypto, uuid-ossp, pg_trgm… Важно на собесе и в проде в контексте «PostgreSQL»."
---

## Зачем нужно

База уровня CORE. Основная relational database в Node.js backend stack. Где уместно — Postgres, планы EXPLAIN и индексы.

## Как работает

**extensions**: Расширения: pgcrypto, uuid-ossp, pg_trgm…

В managed PG список ограничен.

Миграции должны создавать extension явно.

Документация: [PostgreSQL](https://www.postgresql.org/docs/current/).

## Что спрашивают

- Объясните extensions своими словами на примере из «PostgreSQL».
- Какие ошибки и edge cases связаны с extensions?
- Какие альтернативы extensions и когда они лучше?

## Ответы

### Объясните extensions своими словами на примере из «PostgreSQL».

Расширения: pgcrypto, uuid-ossp, pg_trgm… Держите структуру: проблема → механизм → пример. Миграции должны создавать extension явно.

### Какие ошибки и edge cases связаны с extensions?

В managed PG список ограничен. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы extensions и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Миграции должны создавать extension явно.
