---
title: connection pooling
summary: "connection pooling: Пул ограничивает число соединений к БД. Важно на собесе и в проде в контексте «Data Access Patterns»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Паттерны доступа к данным и контроль типичных проблем. Где уместно — Postgres, планы EXPLAIN и индексы.

## Как работает

**connection pooling**: Пул ограничивает число соединений к БД.

Pool exhaustion → таймауты API.

В serverless — внешний pooler (PgBouncer).

Документация: [PostgreSQL](https://www.postgresql.org/docs/current/).

## Что спрашивают

- Объясните connection pooling своими словами на примере из «Data Access Patterns».
- Какие ошибки и edge cases связаны с connection pooling?
- Какие альтернативы connection pooling и когда они лучше?

## Ответы

### Объясните connection pooling своими словами на примере из «Data Access Patterns».

Пул ограничивает число соединений к БД. Держите структуру: проблема → механизм → пример. В serverless — внешний pooler (PgBouncer).

### Какие ошибки и edge cases связаны с connection pooling?

Pool exhaustion → таймауты API. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы connection pooling и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. В serverless — внешний pooler (PgBouncer).
