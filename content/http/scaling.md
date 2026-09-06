---
title: scaling
summary: "scaling: WebSocket scale: sticky, pub-sub backplane (Redis). Важно на собесе и в проде в контексте «WebSockets»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Realtime-коммуникация между клиентом и сервером. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**scaling**: WebSocket scale: sticky, pub-sub backplane (Redis).

Горизонталь без bus не шарит сообщения.

Fallback long-polling редко нужен явно.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните scaling своими словами на примере из «WebSockets».
- Какие ошибки и edge cases связаны с scaling?
- Какие альтернативы scaling и когда они лучше?

## Ответы

### Объясните scaling своими словами на примере из «WebSockets».

WebSocket scale: sticky, pub-sub backplane (Redis). Держите структуру: проблема → механизм → пример. Fallback long-polling редко нужен явно.

### Какие ошибки и edge cases связаны с scaling?

Горизонталь без bus не шарит сообщения. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы scaling и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Fallback long-polling редко нужен явно.
