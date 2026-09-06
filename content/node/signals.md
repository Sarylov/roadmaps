---
title: signals
summary: "signals: SIGTERM/SIGINT для graceful shutdown. Важно на собесе и в проде в контексте «Node.js Runtime»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Как Node.js запускает код и управляет конкурентностью. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**signals**: SIGTERM/SIGINT для graceful shutdown.

Kubernetes шлёт SIGTERM перед kill.

Закрывайте сервер и пул БД.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните signals своими словами на примере из «Node.js Runtime».
- Какие ошибки и edge cases связаны с signals?
- Какие альтернативы signals и когда они лучше?

## Ответы

### Объясните signals своими словами на примере из «Node.js Runtime».

SIGTERM/SIGINT для graceful shutdown. Держите структуру: проблема → механизм → пример. Закрывайте сервер и пул БД.

### Какие ошибки и edge cases связаны с signals?

Kubernetes шлёт SIGTERM перед kill. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы signals и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Закрывайте сервер и пул БД.
