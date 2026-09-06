---
title: CPU-bound tasks
summary: "CPU-bound tasks: CPU-bound нельзя «async-ить» магией на одном потоке. Важно на собесе и в проде в контексте «Workers & Processes»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Работа с CPU-bound задачами и отдельными процессами. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**CPU-bound tasks**: CPU-bound нельзя «async-ить» магией на одном потоке.

worker_threads/child_process/queue.

Батчинг и алгоритмы важнее микрооптимизаций.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните CPU-bound tasks своими словами на примере из «Workers & Processes».
- Какие ошибки и edge cases связаны с CPU-bound tasks?
- Какие альтернативы CPU-bound tasks и когда они лучше?

## Ответы

### Объясните CPU-bound tasks своими словами на примере из «Workers & Processes».

CPU-bound нельзя «async-ить» магией на одном потоке. Держите структуру: проблема → механизм → пример. Батчинг и алгоритмы важнее микрооптимизаций.

### Какие ошибки и edge cases связаны с CPU-bound tasks?

worker_threads/child_process/queue. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы CPU-bound tasks и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Батчинг и алгоритмы важнее микрооптимизаций.
