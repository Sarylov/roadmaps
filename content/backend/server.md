---
title: server
summary: "server: HTTP server слушает порт, принимает соединения. Важно на собесе и в проде в контексте «Fastify»."
---

## Зачем нужно

База уровня CORE. Лёгкий framework для понимания HTTP lifecycle и производительного Node.js API. Слои приложения, DI и границы транзакций.

## Как работает

**server**: HTTP server слушает порт, принимает соединения.

Keep-alive, timeouts, max connections.

Graceful close при деплое.

## Что спрашивают

- Объясните server своими словами на примере из «Fastify».
- Какие ошибки и edge cases связаны с server?
- Какие альтернативы server и когда они лучше?

## Ответы

### Объясните server своими словами на примере из «Fastify».

HTTP server слушает порт, принимает соединения. Держите структуру: проблема → механизм → пример. Graceful close при деплое.

### Какие ошибки и edge cases связаны с server?

Keep-alive, timeouts, max connections. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы server и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Graceful close при деплое.
