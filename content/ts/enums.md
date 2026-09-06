---
title: enums
summary: "enums: enum (особенно numeric) спорный в TS. Важно на собесе и в проде в контексте «Основы TypeScript»."
---

## Зачем нужно

База уровня CORE. Типовая модель backend-приложения и его контрактов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**enums**: enum (особенно numeric) спорный в TS.

Numeric enum добавляет runtime и reverse mapping.

Часто лучше union литералов.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните enums своими словами на примере из «Основы TypeScript».
- Какие ошибки и edge cases связаны с enums?
- Какие альтернативы enums и когда они лучше?

## Ответы

### Объясните enums своими словами на примере из «Основы TypeScript».

enum (особенно numeric) спорный в TS. Держите структуру: проблема → механизм → пример. Часто лучше union литералов.

### Какие ошибки и edge cases связаны с enums?

Numeric enum добавляет runtime и reverse mapping. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы enums и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Часто лучше union литералов.
