---
title: discriminants
summary: "discriminants: Discriminated union: общее literal-поле kind/type. Важно на собесе и в проде в контексте «Type Narrowing»."
---

## Зачем нужно

База уровня CORE. Типовая модель приложения и контрактов между слоями. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**discriminants**: Discriminated union: общее literal-поле kind/type.

switch по discriminant — exhaustive check.

Эталон моделирования состояний UI/API.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните discriminants своими словами на примере из «Type Narrowing».
- Какие ошибки и edge cases связаны с discriminants?
- Какие альтернативы discriminants и когда они лучше?

## Ответы

### Объясните discriminants своими словами на примере из «Type Narrowing».

Discriminated union: общее literal-поле kind/type. Держите структуру: проблема → механизм → пример. Эталон моделирования состояний UI/API.

### Какие ошибки и edge cases связаны с discriminants?

switch по discriminant — exhaustive check. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы discriminants и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Эталон моделирования состояний UI/API.
