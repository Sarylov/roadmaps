---
title: preflight
summary: "preflight: Preflight — OPTIONS перед «непростым» cross-origin запросом. Важно на собесе и в проде в контексте «CORS»."
---

## Зачем нужно

База уровня CORE. HTTP, realtime, auth и защита клиентского периметра. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**preflight**: Preflight — OPTIONS перед «непростым» cross-origin запросом.

Кастомные headers/Content-Type вызывают preflight.

Кэшируется Access-Control-Max-Age.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните preflight своими словами на примере из «CORS».
- Какие ошибки и edge cases связаны с preflight?
- Какие альтернативы preflight и когда они лучше?

## Ответы

### Объясните preflight своими словами на примере из «CORS».

Preflight — OPTIONS перед «непростым» cross-origin запросом. Держите структуру: проблема → механизм → пример. Кэшируется Access-Control-Max-Age.

### Какие ошибки и edge cases связаны с preflight?

Кастомные headers/Content-Type вызывают preflight. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы preflight и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Кэшируется Access-Control-Max-Age.
