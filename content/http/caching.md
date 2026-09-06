---
title: caching
summary: "caching: HTTP caching: Cache-Control, ETag, Vary. Важно на собесе и в проде в контексте «HTTP»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Протокол, поверх которого строится большая часть backend API. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**caching**: HTTP caching: Cache-Control, ETag, Vary.

персонализированный контент + public cache = утечки.

Валидация vs expiration модель.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните caching своими словами на примере из «HTTP».
- Какие ошибки и edge cases связаны с caching?
- Какие альтернативы caching и когда они лучше?

## Ответы

### Объясните caching своими словами на примере из «HTTP».

HTTP caching: Cache-Control, ETag, Vary. Держите структуру: проблема → механизм → пример. Валидация vs expiration модель.

### Какие ошибки и edge cases связаны с caching?

персонализированный контент + public cache = утечки. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы caching и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Валидация vs expiration модель.
