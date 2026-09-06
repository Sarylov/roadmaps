---
title: filters
summary: "filters: Exception filters мапят ошибки в HTTP. Важно на собесе и в проде в контексте «NestJS»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Основной framework для структурированного production backend на Node.js. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**filters**: Exception filters мапят ошибки в HTTP.

Доменные ошибки ≠ 500 по умолчанию.

Логируйте с correlation id.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните filters своими словами на примере из «NestJS».
- Какие ошибки и edge cases связаны с filters?
- Какие альтернативы filters и когда они лучше?

## Ответы

### Объясните filters своими словами на примере из «NestJS».

Exception filters мапят ошибки в HTTP. Держите структуру: проблема → механизм → пример. Логируйте с correlation id.

### Какие ошибки и edge cases связаны с filters?

Доменные ошибки ≠ 500 по умолчанию. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы filters и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Логируйте с correlation id.
