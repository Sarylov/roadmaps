---
title: render tick
summary: "render tick: Кадр: JS → style → layout → paint → composite. Важно на собесе и в проде в контексте «Event Loop»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Язык, runtime и асинхронность, на которых держится весь фронт. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**render tick**: Кадр: JS → style → layout → paint → composite.

Долгий JS или layout на main thread роняет FPS.

requestAnimationFrame для визуальных обновлений.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните render tick своими словами на примере из «Event Loop».
- Какие ошибки и edge cases связаны с render tick?
- Какие альтернативы render tick и когда они лучше?

## Ответы

### Объясните render tick своими словами на примере из «Event Loop».

Кадр: JS → style → layout → paint → composite. Держите структуру: проблема → механизм → пример. requestAnimationFrame для визуальных обновлений.

### Какие ошибки и edge cases связаны с render tick?

Долгий JS или layout на main thread роняет FPS. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы render tick и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. requestAnimationFrame для визуальных обновлений.
