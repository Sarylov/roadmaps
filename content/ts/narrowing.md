---
title: narrowing
summary: "narrowing: Narrowing сужает union control-flow анализом. Важно на собесе и в проде в контексте «Основы TypeScript»."
---

## Зачем нужно

База уровня CORE. Типовая модель backend-приложения и его контрактов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**narrowing**: Narrowing сужает union control-flow анализом.

Type guard и assert помогают компилятору.

После mutate/alias narrowing может сброситься.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните narrowing своими словами на примере из «Основы TypeScript».
- Какие ошибки и edge cases связаны с narrowing?
- Какие альтернативы narrowing и когда они лучше?

## Ответы

### Объясните narrowing своими словами на примере из «Основы TypeScript».

Narrowing сужает union control-flow анализом. Держите структуру: проблема → механизм → пример. После mutate/alias narrowing может сброситься.

### Какие ошибки и edge cases связаны с narrowing?

Type guard и assert помогают компилятору. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы narrowing и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. После mutate/alias narrowing может сброситься.
