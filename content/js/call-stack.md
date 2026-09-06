---
title: call stack
summary: "call stack: Call stack — синхронный стек кадров JS. Важно на собесе и в проде в контексте «Event Loop»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Модель выполнения JavaScript и основа Node.js. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**call stack**: Call stack — синхронный стек кадров JS.

Переполнение стека от бесконечной рекурсии.

Долгий стек блокирует event loop.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните call stack своими словами на примере из «Event Loop».
- Какие ошибки и edge cases связаны с call stack?
- Какие альтернативы call stack и когда они лучше?

## Ответы

### Объясните call stack своими словами на примере из «Event Loop».

Call stack — синхронный стек кадров JS. Держите структуру: проблема → механизм → пример. Долгий стек блокирует event loop.

### Какие ошибки и edge cases связаны с call stack?

Переполнение стека от бесконечной рекурсии. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы call stack и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Долгий стек блокирует event loop.
