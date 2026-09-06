---
title: filtering
summary: "filtering: Filtering в query: поля, операторы, whitelist. Важно на собесе и в проде в контексте «REST API»."
---

## Зачем нужно

База уровня CORE. Проектирование понятных и предсказуемых HTTP API. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**filtering**: Filtering в query: поля, операторы, whitelist.

SQL injection через «умный» filter DSL.

Индексы под частые фильтры.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните filtering своими словами на примере из «REST API».
- Какие ошибки и edge cases связаны с filtering?
- Какие альтернативы filtering и когда они лучше?

## Ответы

### Объясните filtering своими словами на примере из «REST API».

Filtering в query: поля, операторы, whitelist. Держите структуру: проблема → механизм → пример. Индексы под частые фильтры.

### Какие ошибки и edge cases связаны с filtering?

SQL injection через «умный» filter DSL. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы filtering и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Индексы под частые фильтры.
