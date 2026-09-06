---
title: timers
summary: "timers: setTimeout/setImmediate/setInterval в Node связаны с фазами loop. Важно на собесе и в проде в контексте «Node.js APIs»."
---

## Зачем нужно

База уровня CORE. Базовые модули runtime, необходимые для backend-разработки. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**timers**: setTimeout/setImmediate/setInterval в Node связаны с фазами loop.

unref таймеры, если не должны держать процесс.

Очистка обязательна.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните timers своими словами на примере из «Node.js APIs».
- Какие ошибки и edge cases связаны с timers?
- Какие альтернативы timers и когда они лучше?

## Ответы

### Объясните timers своими словами на примере из «Node.js APIs».

setTimeout/setImmediate/setInterval в Node связаны с фазами loop. Держите структуру: проблема → механизм → пример. Очистка обязательна.

### Какие ошибки и edge cases связаны с timers?

unref таймеры, если не должны держать процесс. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы timers и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Очистка обязательна.
