---
title: cluster
summary: "cluster: cluster форкает процессы на портах shared. Важно на собесе и в проде в контексте «Workers & Processes»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Работа с CPU-bound задачами и отдельными процессами. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**cluster**: cluster форкает процессы на портах shared.

Нет shared memory JS-куч.

В k8s чаще несколько pod replicas, не cluster.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните cluster своими словами на примере из «Workers & Processes».
- Какие ошибки и edge cases связаны с cluster?
- Какие альтернативы cluster и когда они лучше?

## Ответы

### Объясните cluster своими словами на примере из «Workers & Processes».

cluster форкает процессы на портах shared. Держите структуру: проблема → механизм → пример. В k8s чаще несколько pod replicas, не cluster.

### Какие ошибки и edge cases связаны с cluster?

Нет shared memory JS-куч. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы cluster и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. В k8s чаще несколько pod replicas, не cluster.
