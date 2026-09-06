---
title: coercion
summary: "coercion: Coercion — приведение типов (ToPrimitive/ToNumber/ToString/ToBoolean). Важно на собесе и в проде в контексте «Типы и переменные»."
---

## Зачем нужно

База уровня CORE. Язык, runtime и асинхронность, на которых держится весь фронт. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**coercion**: Coercion — приведение типов (ToPrimitive/ToNumber/ToString/ToBoolean).

== включает coercion; [] + {} и странные сравнения — классика собеса.

В API предпочитайте === и явные Number/String/Boolean.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните coercion своими словами на примере из «Типы и переменные».
- Какие ошибки и edge cases связаны с coercion?
- Какие альтернативы coercion и когда они лучше?

## Ответы

### Объясните coercion своими словами на примере из «Типы и переменные».

Coercion — приведение типов (ToPrimitive/ToNumber/ToString/ToBoolean). Держите структуру: проблема → механизм → пример. В API предпочитайте === и явные Number/String/Boolean.

### Какие ошибки и edge cases связаны с coercion?

== включает coercion; [] + {} и странные сравнения — классика собеса. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы coercion и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. В API предпочитайте === и явные Number/String/Boolean.
