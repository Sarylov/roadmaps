---
title: iterables
summary: "iterables: Iterable: Symbol.iterator → iterator { next }. Важно на собесе и в проде в контексте «Массивы и коллекции»."
---

## Зачем нужно

База уровня CORE. Язык, runtime и асинхронность, на которых держится весь фронт. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**iterables**: Iterable: Symbol.iterator → iterator { next }.

for..of, spread, деструктуризация работают через iterable.

Генераторы удобно реализуют кастомные iterable.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните iterables своими словами на примере из «Массивы и коллекции».
- Какие ошибки и edge cases связаны с iterables?
- Какие альтернативы iterables и когда они лучше?

## Ответы

### Объясните iterables своими словами на примере из «Массивы и коллекции».

Iterable: Symbol.iterator → iterator { next }. Держите структуру: проблема → механизм → пример. Генераторы удобно реализуют кастомные iterable.

### Какие ошибки и edge cases связаны с iterables?

for..of, spread, деструктуризация работают через iterable. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы iterables и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Генераторы удобно реализуют кастомные iterable.
