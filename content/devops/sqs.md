---
title: SQS
summary: "SQS: SQS — очередь AWS; standard vs FIFO. Важно на собесе и в проде в контексте «AWS»."
---

## Зачем нужно

База уровня CORE. Практический cloud stack для production backend. Операции, rollback и безопасность поставки.

## Как работает

**SQS**: SQS — очередь AWS; standard vs FIFO.

Visibility timeout и DLQ.

at-least-once.

## Что спрашивают

- Объясните SQS своими словами на примере из «AWS».
- Какие ошибки и edge cases связаны с SQS?
- Какие альтернативы SQS и когда они лучше?

## Ответы

### Объясните SQS своими словами на примере из «AWS».

SQS — очередь AWS; standard vs FIFO. Держите структуру: проблема → механизм → пример. at-least-once.

### Какие ошибки и edge cases связаны с SQS?

Visibility timeout и DLQ. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы SQS и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. at-least-once.
