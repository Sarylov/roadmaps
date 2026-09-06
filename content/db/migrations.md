---
title: migrations
summary: "migrations: Миграции версионируют схему. Важно на собесе и в проде в контексте «PostgreSQL»."
---

## Зачем нужно

База уровня CORE. Основная relational database в Node.js backend stack. Где уместно — Postgres, планы EXPLAIN и индексы.

## Как работает

**migrations**: Миграции версионируют схему.

Локовые миграции на больших таблицах опасны.

Zero-downtime: добавить nullable → backfill → constrain.

Документация: [PostgreSQL](https://www.postgresql.org/docs/current/).

## Что спрашивают

- Объясните migrations своими словами на примере из «PostgreSQL».
- Какие ошибки и edge cases связаны с migrations?
- Какие альтернативы migrations и когда они лучше?

## Ответы

### Объясните migrations своими словами на примере из «PostgreSQL».

Миграции версионируют схему. Держите структуру: проблема → механизм → пример. Zero-downtime: добавить nullable → backfill → constrain.

### Какие ошибки и edge cases связаны с migrations?

Локовые миграции на больших таблицах опасны. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы migrations и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Zero-downtime: добавить nullable → backfill → constrain.
