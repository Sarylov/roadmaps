---
title: stateless services
summary: "stateless services: Stateless app не хранит сессию локально. Важно на собесе и в проде в контексте «Scalability»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Масштабирование сервисов по мере роста нагрузки. Цифры, bottleneck и явные trade-offs.

## Как работает

**stateless services**: Stateless app не хранит сессию локально.

Проще rolling deploy и scale-out.

State в DB/Redis/object storage.

## Что спрашивают

- Объясните stateless services своими словами на примере из «Scalability».
- Какие ошибки и edge cases связаны с stateless services?
- Какие альтернативы stateless services и когда они лучше?

## Ответы

### Объясните stateless services своими словами на примере из «Scalability».

Stateless app не хранит сессию локально. Держите структуру: проблема → механизм → пример. State в DB/Redis/object storage.

### Какие ошибки и edge cases связаны с stateless services?

Проще rolling deploy и scale-out. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы stateless services и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. State в DB/Redis/object storage.
