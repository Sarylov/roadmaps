---
title: worker_threads
summary: "worker_threads: worker_threads делят память через SharedArrayBuffer/MessageChannel. Важно на собесе и в проде в контексте «Workers & Processes»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Работа с CPU-bound задачами и отдельными процессами. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**worker_threads**: worker_threads делят память через SharedArrayBuffer/MessageChannel.

Тяжёлый CPU вне event loop.

Стартовый overhead — пул воркеров.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните worker_threads своими словами на примере из «Workers & Processes».
- Какие ошибки и edge cases связаны с worker_threads?
- Какие альтернативы worker_threads и когда они лучше?

## Ответы

### Объясните worker_threads своими словами на примере из «Workers & Processes».

worker_threads делят память через SharedArrayBuffer/MessageChannel. Держите структуру: проблема → механизм → пример. Стартовый overhead — пул воркеров.

### Какие ошибки и edge cases связаны с worker_threads?

Тяжёлый CPU вне event loop. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы worker_threads и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Стартовый overhead — пул воркеров.
