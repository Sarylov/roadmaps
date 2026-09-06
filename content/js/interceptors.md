---
title: interceptors
summary: "interceptors: Interceptors — AOP вокруг handler (кэш, map, timing). Важно на собесе и в проде в контексте «NestJS»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Основной framework для структурированного production backend на Node.js. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**interceptors**: Interceptors — AOP вокруг handler (кэш, map, timing).

Скрытая магия усложняет дебаг.

Прозрачность важнее «умности».

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните interceptors своими словами на примере из «NestJS».
- Какие ошибки и edge cases связаны с interceptors?
- Какие альтернативы interceptors и когда они лучше?

## Ответы

### Объясните interceptors своими словами на примере из «NestJS».

Interceptors — AOP вокруг handler (кэш, map, timing). Держите структуру: проблема → механизм → пример. Прозрачность важнее «умности».

### Какие ошибки и edge cases связаны с interceptors?

Скрытая магия усложняет дебаг. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы interceptors и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Прозрачность важнее «умности».
