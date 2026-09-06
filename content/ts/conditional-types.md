---
title: conditional types
summary: "conditional types: Условные типы ветвят по extends. Важно на собесе и в проде в контексте «Advanced Types»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Продвинутые средства построения типов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**conditional types**: Условные типы ветвят по extends.

distributive behavior на union.

Тяжёлые типы замедляют tsc — мера.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните conditional types своими словами на примере из «Advanced Types».
- Какие ошибки и edge cases связаны с conditional types?
- Какие альтернативы conditional types и когда они лучше?

## Ответы

### Объясните conditional types своими словами на примере из «Advanced Types».

Условные типы ветвят по extends. Держите структуру: проблема → механизм → пример. Тяжёлые типы замедляют tsc — мера.

### Какие ошибки и edge cases связаны с conditional types?

distributive behavior на union. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы conditional types и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Тяжёлые типы замедляют tsc — мера.
