---
title: routing
summary: "routing: Файловый/конфиг routing фреймворка. Важно на собесе и в проде в контексте «API Gateway / BFF»."
---

## Зачем нужно

База уровня CORE. Единая точка входа для клиентов и агрегация вызовов. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**routing**: Файловый/конфиг routing фреймворка.

Conflict static vs dynamic segments.

Layouts и parallel routes — продвинутые паттерны.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните routing своими словами на примере из «API Gateway / BFF».
- Какие ошибки и edge cases связаны с routing?
- Какие альтернативы routing и когда они лучше?

## Ответы

### Объясните routing своими словами на примере из «API Gateway / BFF».

Файловый/конфиг routing фреймворка. Держите структуру: проблема → механизм → пример. Layouts и parallel routes — продвинутые паттерны.

### Какие ошибки и edge cases связаны с routing?

Conflict static vs dynamic segments. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы routing и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Layouts и parallel routes — продвинутые паттерны.
