---
title: primitives
summary: "primitives: Примитивы JS: string, number, boolean, null, undefined, symbol, bigint. Важно на собесе и в проде в контексте «Типы и переменные»."
---

## Зачем нужно

База уровня CORE. Язык, runtime и асинхронность, на которых держится весь фронт. UX, bundle и архитектурные границы UI.

## Как работает

**primitives**: Примитивы JS: string, number, boolean, null, undefined, symbol, bigint.

typeof null === "object" — исторический баг.

Обёртки String/Number редко нужны явно.

## Что спрашивают

- Объясните primitives своими словами на примере из «Типы и переменные».
- Какие ошибки и edge cases связаны с primitives?
- Какие альтернативы primitives и когда они лучше?

## Ответы

### Объясните primitives своими словами на примере из «Типы и переменные».

Примитивы JS: string, number, boolean, null, undefined, symbol, bigint. Держите структуру: проблема → механизм → пример. Обёртки String/Number редко нужны явно.

### Какие ошибки и edge cases связаны с primitives?

typeof null === "object" — исторический баг. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы primitives и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Обёртки String/Number редко нужны явно.
