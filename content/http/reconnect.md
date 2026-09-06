---
title: reconnect
summary: "reconnect: Reconnect с exponential backoff + jitter. Важно на собесе и в проде в контексте «WebSockets»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Realtime-коммуникация между клиентом и сервером. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**reconnect**: Reconnect с exponential backoff + jitter.

Без jitter — thundering herd.

Идемпотентность сообщений после reconnect.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните reconnect своими словами на примере из «WebSockets».
- Какие ошибки и edge cases связаны с reconnect?
- Какие альтернативы reconnect и когда они лучше?

## Ответы

### Объясните reconnect своими словами на примере из «WebSockets».

Reconnect с exponential backoff + jitter. Держите структуру: проблема → механизм → пример. Идемпотентность сообщений после reconnect.

### Какие ошибки и edge cases связаны с reconnect?

Без jitter — thundering herd. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы reconnect и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Идемпотентность сообщений после reconnect.
