---
title: connection
summary: "connection: WebSocket connection lifecycle: open/message/close/error. Важно на собесе и в проде в контексте «WebSocket»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. HTTP, realtime, auth и защита клиентского периметра. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**connection**: WebSocket connection lifecycle: open/message/close/error.

Нужен backoff reconnect и auth refresh.

Sticky sessions/load balancer для scale.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните connection своими словами на примере из «WebSocket».
- Какие ошибки и edge cases связаны с connection?
- Какие альтернативы connection и когда они лучше?

## Ответы

### Объясните connection своими словами на примере из «WebSocket».

WebSocket connection lifecycle: open/message/close/error. Держите структуру: проблема → механизм → пример. Sticky sessions/load balancer для scale.

### Какие ошибки и edge cases связаны с connection?

Нужен backoff reconnect и auth refresh. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы connection и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Sticky sessions/load balancer для scale.
