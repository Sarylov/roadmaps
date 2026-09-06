---
title: Pub/Sub
summary: "Pub/Sub: Pub/Sub: fire-and-forget fanout, без persistence. Важно на собесе и в проде в контексте «Redis Advanced»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Продвинутые сценарии использования Redis. Инвалидация, TTL и stampede — частые темы.

## Как работает

**Pub/Sub**: Pub/Sub: fire-and-forget fanout, без persistence.

Не для критичных событий (нужны Streams/Kafka).

Потеря при offline subscriber.

## Что спрашивают

- Объясните Pub/Sub своими словами на примере из «Redis Advanced».
- Какие ошибки и edge cases связаны с Pub/Sub?
- Какие альтернативы Pub/Sub и когда они лучше?

## Ответы

### Объясните Pub/Sub своими словами на примере из «Redis Advanced».

Pub/Sub: fire-and-forget fanout, без persistence. Держите структуру: проблема → механизм → пример. Потеря при offline subscriber.

### Какие ошибки и edge cases связаны с Pub/Sub?

Не для критичных событий (нужны Streams/Kafka). Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы Pub/Sub и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Потеря при offline subscriber.
