---
title: errors
summary: "errors: Ошибки в async: try/catch вокруг await; .catch на промисах. Важно на собесе и в проде в контексте «Промисы и async/await»."
---

## Зачем нужно

База уровня CORE. Язык, runtime и асинхронность, на которых держится весь фронт. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**errors**: Ошибки в async: try/catch вокруг await; .catch на промисах.

Необработанный rejection — событие process/browser.

Нормализуйте доменные ошибки vs сетевые.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните errors своими словами на примере из «Промисы и async/await».
- Какие ошибки и edge cases связаны с errors?
- Какие альтернативы errors и когда они лучше?

## Ответы

### Объясните errors своими словами на примере из «Промисы и async/await».

Ошибки в async: try/catch вокруг await; .catch на промисах. Держите структуру: проблема → механизм → пример. Нормализуйте доменные ошибки vs сетевые.

### Какие ошибки и edge cases связаны с errors?

Необработанный rejection — событие process/browser. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы errors и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Нормализуйте доменные ошибки vs сетевые.
