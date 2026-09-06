---
title: delays
summary: "delays: Delayed jobs через ETA/visibility. Важно на собесе и в проде в контексте «Queues»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Фоновая обработка задач и разгрузка synchronous request path. Delivery guarantees, порядок и идемпотентность consumer’а.

## Как работает

**delays**: Delayed jobs через ETA/visibility.

Не крутить sleep в воркере.

Планировщик/queue native delay.

## Что спрашивают

- Объясните delays своими словами на примере из «Queues».
- Какие ошибки и edge cases связаны с delays?
- Какие альтернативы delays и когда они лучше?

## Ответы

### Объясните delays своими словами на примере из «Queues».

Delayed jobs через ETA/visibility. Держите структуру: проблема → механизм → пример. Планировщик/queue native delay.

### Какие ошибки и edge cases связаны с delays?

Не крутить sleep в воркере. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы delays и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Планировщик/queue native delay.
