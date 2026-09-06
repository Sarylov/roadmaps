---
title: delivery semantics
summary: "delivery semantics: at-most-once / at-least-once / exactly-once (ограниченно). Важно на собесе и в проде в контексте «Kafka Advanced»."
---

## Зачем нужно

База уровня CORE. Глубокое понимание Kafka для высоконагруженных систем. Delivery guarantees, порядок и идемпотентность consumer’а.

## Как работает

**delivery semantics**: at-most-once / at-least-once / exactly-once (ограниченно).

Exactly-once = комбо продюсер+лог+консьюмер/транзакции.

Практически часто at-least-once + идемпотентность.

## Что спрашивают

- Объясните delivery semantics своими словами на примере из «Kafka Advanced».
- Какие ошибки и edge cases связаны с delivery semantics?
- Какие альтернативы delivery semantics и когда они лучше?

## Ответы

### Объясните delivery semantics своими словами на примере из «Kafka Advanced».

at-most-once / at-least-once / exactly-once (ограниченно). Держите структуру: проблема → механизм → пример. Практически часто at-least-once + идемпотентность.

### Какие ошибки и edge cases связаны с delivery semantics?

Exactly-once = комбо продюсер+лог+консьюмер/транзакции. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы delivery semantics и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Практически часто at-least-once + идемпотентность.
