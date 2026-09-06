---
title: read replicas
summary: "read replicas: Реплики для read-scale. Важно на собесе и в проде в контексте «Databases at Scale»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Масштабирование хранения и чтения данных. Слои приложения, DI и границы транзакций.

## Как работает

**read replicas**: Реплики для read-scale.

Лаг → stale reads.

Миграции/DDL на primary.

## Что спрашивают

- Объясните read replicas своими словами на примере из «Databases at Scale».
- Какие ошибки и edge cases связаны с read replicas?
- Какие альтернативы read replicas и когда они лучше?

## Ответы

### Объясните read replicas своими словами на примере из «Databases at Scale».

Реплики для read-scale. Держите структуру: проблема → механизм → пример. Миграции/DDL на primary.

### Какие ошибки и edge cases связаны с read replicas?

Лаг → stale reads. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы read replicas и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Миграции/DDL на primary.
