---
title: versioning
summary: "versioning: Versioning API: URL/header/media type. Важно на собесе и в проде в контексте «REST API»."
---

## Зачем нужно

База уровня CORE. Проектирование понятных и предсказуемых HTTP API. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**versioning**: Versioning API: URL/header/media type.

Параллельная поддержка N версий дорога.

Tolerate & deprecate политика.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните versioning своими словами на примере из «REST API».
- Какие ошибки и edge cases связаны с versioning?
- Какие альтернативы versioning и когда они лучше?

## Ответы

### Объясните versioning своими словами на примере из «REST API».

Versioning API: URL/header/media type. Держите структуру: проблема → механизм → пример. Tolerate & deprecate политика.

### Какие ошибки и edge cases связаны с versioning?

Параллельная поддержка N версий дорога. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы versioning и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Tolerate & deprecate политика.
