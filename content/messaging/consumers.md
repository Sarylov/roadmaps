---
title: consumers
summary: "consumers: Consumer читает и обрабатывает идемпотентно. Важно на собесе и в проде в контексте «Message Brokers»."
---

## Зачем нужно

База уровня CORE. Асинхронное взаимодействие между сервисами и worker-процессами. Delivery guarantees, порядок и идемпотентность consumer’а.

## Как работает

**consumers**: Consumer читает и обрабатывает идемпотентно.

Автокоммит offset маскирует баги.

Backpressure и slow consumer.

## Что спрашивают

- Объясните consumers своими словами на примере из «Message Brokers».
- Какие ошибки и edge cases связаны с consumers?
- Какие альтернативы consumers и когда они лучше?

## Ответы

### Объясните consumers своими словами на примере из «Message Brokers».

Consumer читает и обрабатывает идемпотентно. Держите структуру: проблема → механизм → пример. Backpressure и slow consumer.

### Какие ошибки и edge cases связаны с consumers?

Автокоммит offset маскирует баги. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы consumers и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Backpressure и slow consumer.
