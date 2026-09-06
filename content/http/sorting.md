---
title: sorting
summary: "sorting: Sorting: стабильный order by + tie-breaker id. Важно на собесе и в проде в контексте «REST API»."
---

## Зачем нужно

База уровня CORE. Проектирование понятных и предсказуемых HTTP API. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**sorting**: Sorting: стабильный order by + tie-breaker id.

Без id пагинация прыгает.

Индексы под sort+filter.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните sorting своими словами на примере из «REST API».
- Какие ошибки и edge cases связаны с sorting?
- Какие альтернативы sorting и когда они лучше?

## Ответы

### Объясните sorting своими словами на примере из «REST API».

Sorting: стабильный order by + tie-breaker id. Держите структуру: проблема → механизм → пример. Индексы под sort+filter.

### Какие ошибки и edge cases связаны с sorting?

Без id пагинация прыгает. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы sorting и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Индексы под sort+filter.
