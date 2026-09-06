---
title: primary keys
summary: "primary keys: PK уникально идентифицирует строку. Важно на собесе и в проде в контексте «Data Modeling»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Проектирование структуры данных и связей между сущностями. Где уместно — Postgres, планы EXPLAIN и индексы.

## Как работает

**primary keys**: PK уникально идентифицирует строку.

Natural vs surrogate (uuid/bigserial) trade-offs.

Менять PK больно — лучше стабильный surrogate.

Документация: [PostgreSQL](https://www.postgresql.org/docs/current/).

## Что спрашивают

- Объясните primary keys своими словами на примере из «Data Modeling».
- Какие ошибки и edge cases связаны с primary keys?
- Какие альтернативы primary keys и когда они лучше?

## Ответы

### Объясните primary keys своими словами на примере из «Data Modeling».

PK уникально идентифицирует строку. Держите структуру: проблема → механизм → пример. Менять PK больно — лучше стабильный surrogate.

### Какие ошибки и edge cases связаны с primary keys?

Natural vs surrogate (uuid/bigserial) trade-offs. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы primary keys и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Менять PK больно — лучше стабильный surrogate.
