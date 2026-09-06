---
title: notification service
summary: "notification service: Уведомления: email/push/sms, шаблоны, предпочтения. Важно на собесе и в проде в контексте «System Design Practice»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Практика проектирования реальных распределённых систем. Цифры, bottleneck и явные trade-offs.

## Как работает

**notification service**: Уведомления: email/push/sms, шаблоны, предпочтения.

Очереди, ретраи, dedup.

Quiet hours и unsubscribe — compliance.

## Что спрашивают

- Объясните notification service своими словами на примере из «System Design Practice».
- Какие ошибки и edge cases связаны с notification service?
- Какие альтернативы notification service и когда они лучше?

## Ответы

### Объясните notification service своими словами на примере из «System Design Practice».

Уведомления: email/push/sms, шаблоны, предпочтения. Держите структуру: проблема → механизм → пример. Quiet hours и unsubscribe — compliance.

### Какие ошибки и edge cases связаны с notification service?

Очереди, ретраи, dedup. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы notification service и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Quiet hours и unsubscribe — compliance.
