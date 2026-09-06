---
title: aggregation
summary: "aggregation: BFF/Gateway агрегирует несколько бэков для UI. Важно на собесе и в проде в контексте «API Gateway / BFF»."
---

## Зачем нужно

База уровня CORE. Единая точка входа для клиентов и агрегация вызовов. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**aggregation**: BFF/Gateway агрегирует несколько бэков для UI.

Chatty UI→много API лечится агрегацией.

Кэш и partial failure политики.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните aggregation своими словами на примере из «API Gateway / BFF».
- Какие ошибки и edge cases связаны с aggregation?
- Какие альтернативы aggregation и когда они лучше?

## Ответы

### Объясните aggregation своими словами на примере из «API Gateway / BFF».

BFF/Gateway агрегирует несколько бэков для UI. Держите структуру: проблема → механизм → пример. Кэш и partial failure политики.

### Какие ошибки и edge cases связаны с aggregation?

Chatty UI→много API лечится агрегацией. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы aggregation и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Кэш и partial failure политики.
