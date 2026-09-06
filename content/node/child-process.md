---
title: child_process
summary: "child_process: child_process — отдельный OS процесс. Важно на собесе и в проде в контексте «Workers & Processes»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Работа с CPU-bound задачами и отдельными процессами. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**child_process**: child_process — отдельный OS процесс.

Изоляция сильнее threads; IPC тяжелее.

shell:true — риск injection.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните child_process своими словами на примере из «Workers & Processes».
- Какие ошибки и edge cases связаны с child_process?
- Какие альтернативы child_process и когда они лучше?

## Ответы

### Объясните child_process своими словами на примере из «Workers & Processes».

child_process — отдельный OS процесс. Держите структуру: проблема → механизм → пример. shell:true — риск injection.

### Какие ошибки и edge cases связаны с child_process?

Изоляция сильнее threads; IPC тяжелее. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы child_process и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. shell:true — риск injection.
