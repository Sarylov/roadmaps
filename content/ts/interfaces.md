---
title: interfaces
summary: "interfaces: interface в TS описывает форму значения (структурная типизация). Важно на собесе и в проде в контексте «Основы TypeScript»."
---

## Зачем нужно

База уровня CORE. Типовая модель backend-приложения и его контрактов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**interfaces**: interface в TS описывает форму значения (структурная типизация).

Declaration merging у interface vs type alias.

Для объектов часто interface; для union — type.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните interfaces своими словами на примере из «Основы TypeScript».
- Какие ошибки и edge cases связаны с interfaces?
- Какие альтернативы interfaces и когда они лучше?

## Ответы

### Объясните interfaces своими словами на примере из «Основы TypeScript».

interface в TS описывает форму значения (структурная типизация). Держите структуру: проблема → механизм → пример. Для объектов часто interface; для union — type.

### Какие ошибки и edge cases связаны с interfaces?

Declaration merging у interface vs type alias. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы interfaces и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Для объектов часто interface; для union — type.
