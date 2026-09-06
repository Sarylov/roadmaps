---
title: error propagation
summary: "error propagation: Ошибки async должны всплывать к границе обработки. Важно на собесе и в проде в контексте «Async JavaScript»."
---

## Зачем нужно

База уровня CORE. Асинхронность и конкурентное выполнение кода. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**error propagation**: Ошибки async должны всплывать к границе обработки.

Пустой catch глотает сигнал.

Единый mapper в API-слой.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните error propagation своими словами на примере из «Async JavaScript».
- Какие ошибки и edge cases связаны с error propagation?
- Какие альтернативы error propagation и когда они лучше?

## Ответы

### Объясните error propagation своими словами на примере из «Async JavaScript».

Ошибки async должны всплывать к границе обработки. Держите структуру: проблема → механизм → пример. Единый mapper в API-слой.

### Какие ошибки и edge cases связаны с error propagation?

Пустой catch глотает сигнал. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы error propagation и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Единый mapper в API-слой.
