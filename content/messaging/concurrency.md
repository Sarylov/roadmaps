---
title: concurrency
summary: "concurrency: Параллелизм воркеров vs лимиты DB/API. Важно на собесе и в проде в контексте «Queues»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Фоновая обработка задач и разгрузка synchronous request path. Delivery guarantees, порядок и идемпотентность consumer’а.

## Как работает

**concurrency**: Параллелизм воркеров vs лимиты DB/API.

Prefetch слишком большой → шторм.

Per-queue concurrency тюнинг.

## Что спрашивают

- Объясните concurrency своими словами на примере из «Queues».
- Какие ошибки и edge cases связаны с concurrency?
- Какие альтернативы concurrency и когда они лучше?

## Ответы

### Объясните concurrency своими словами на примере из «Queues».

Параллелизм воркеров vs лимиты DB/API. Держите структуру: проблема → механизм → пример. Per-queue concurrency тюнинг.

### Какие ошибки и edge cases связаны с concurrency?

Prefetch слишком большой → шторм. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы concurrency и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Per-queue concurrency тюнинг.
