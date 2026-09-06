---
title: foreign keys
summary: "foreign keys: FK обеспечивает referential integrity. Важно на собесе и в проде в контексте «Data Modeling»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Проектирование структуры данных и связей между сущностями. Где уместно — Postgres, планы EXPLAIN и индексы.

## Как работает

**foreign keys**: FK обеспечивает referential integrity.

ON DELETE CASCADE опасен без понимания.

Индекс на FK часто нужен.

Документация: [PostgreSQL](https://www.postgresql.org/docs/current/).

## Что спрашивают

- Объясните foreign keys своими словами на примере из «Data Modeling».
- Какие ошибки и edge cases связаны с foreign keys?
- Какие альтернативы foreign keys и когда они лучше?

## Ответы

### Объясните foreign keys своими словами на примере из «Data Modeling».

FK обеспечивает referential integrity. Держите структуру: проблема → механизм → пример. Индекс на FK часто нужен.

### Какие ошибки и edge cases связаны с foreign keys?

ON DELETE CASCADE опасен без понимания. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы foreign keys и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Индекс на FK часто нужен.
