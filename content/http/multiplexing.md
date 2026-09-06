---
title: multiplexing
summary: "multiplexing: HTTP/2 multiplexing много потоков в одном TCP. Важно на собесе и в проде в контексте «HTTP/2 / HTTP/3»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Современные версии HTTP и их особенности. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**multiplexing**: HTTP/2 multiplexing много потоков в одном TCP.

Head-of-line на TCP всё ещё возможен.

H/3/QUIC уходит от TCP HOL.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните multiplexing своими словами на примере из «HTTP/2 / HTTP/3».
- Какие ошибки и edge cases связаны с multiplexing?
- Какие альтернативы multiplexing и когда они лучше?

## Ответы

### Объясните multiplexing своими словами на примере из «HTTP/2 / HTTP/3».

HTTP/2 multiplexing много потоков в одном TCP. Держите структуру: проблема → механизм → пример. H/3/QUIC уходит от TCP HOL.

### Какие ошибки и edge cases связаны с multiplexing?

Head-of-line на TCP всё ещё возможен. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы multiplexing и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. H/3/QUIC уходит от TCP HOL.
