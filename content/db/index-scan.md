---
title: index scan
summary: "index scan: Index scan/bitmap/index only — разные пути. Важно на собесе и в проде в контексте «Query Optimization»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Поиск узких мест и анализ планов выполнения. Где уместно — Postgres, планы EXPLAIN и индексы.

## Как работает

**index scan**: Index scan/bitmap/index only — разные пути.

Lookup + heap fetch стоимость.

Корреляция порядка индекса и таблицы влияет.

Документация: [PostgreSQL](https://www.postgresql.org/docs/current/).

## Что спрашивают

- Объясните index scan своими словами на примере из «Query Optimization».
- Какие ошибки и edge cases связаны с index scan?
- Какие альтернативы index scan и когда они лучше?

## Ответы

### Объясните index scan своими словами на примере из «Query Optimization».

Index scan/bitmap/index only — разные пути. Держите структуру: проблема → механизм → пример. Корреляция порядка индекса и таблицы влияет.

### Какие ошибки и edge cases связаны с index scan?

Lookup + heap fetch стоимость. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы index scan и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Корреляция порядка индекса и таблицы влияет.
