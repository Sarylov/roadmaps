---
title: conditional
summary: "conditional: T extends U ? X : Y — ветвление на уровне типов. Важно на собесе и в проде в контексте «Продвинутые типы»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Типовая модель приложения и контрактов между слоями. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**conditional**: T extends U ? X : Y — ветвление на уровне типов.

distributive conditional по naked type param.

Основа многих utility types.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните conditional своими словами на примере из «Продвинутые типы».
- Какие ошибки и edge cases связаны с conditional?
- Какие альтернативы conditional и когда они лучше?

## Ответы

### Объясните conditional своими словами на примере из «Продвинутые типы».

T extends U ? X : Y — ветвление на уровне типов. Держите структуру: проблема → механизм → пример. Основа многих utility types.

### Какие ошибки и edge cases связаны с conditional?

distributive conditional по naked type param. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы conditional и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Основа многих utility types.
