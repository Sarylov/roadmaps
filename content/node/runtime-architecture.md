---
title: runtime architecture
summary: "runtime architecture: Node: один JS thread + libuv + пулы. Важно на собесе и в проде в контексте «Node.js Runtime»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Как Node.js запускает код и управляет конкурентностью. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**runtime architecture**: Node: один JS thread + libuv + пулы.

CPU-bound блокирует все запросы процесса.

Кластер/worker_threads для CPU; горизонталь для I/O.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните runtime architecture своими словами на примере из «Node.js Runtime».
- Какие ошибки и edge cases связаны с runtime architecture?
- Какие альтернативы runtime architecture и когда они лучше?

## Ответы

### Объясните runtime architecture своими словами на примере из «Node.js Runtime».

Node: один JS thread + libuv + пулы. Держите структуру: проблема → механизм → пример. Кластер/worker_threads для CPU; горизонталь для I/O.

### Какие ошибки и edge cases связаны с runtime architecture?

CPU-bound блокирует все запросы процесса. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы runtime architecture и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Кластер/worker_threads для CPU; горизонталь для I/O.
