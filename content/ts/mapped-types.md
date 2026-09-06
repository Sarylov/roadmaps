---
title: mapped types
summary: "mapped types: Mapped types строят новые объектные типы из ключей. Важно на собесе и в проде в контексте «Advanced Types»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Продвинутые средства построения типов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**mapped types**: Mapped types строят новые объектные типы из ключей.

Шаблон для Partial/Pick-подобных.

key remapping — мощный инструмент.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните mapped types своими словами на примере из «Advanced Types».
- Какие ошибки и edge cases связаны с mapped types?
- Какие альтернативы mapped types и когда они лучше?

## Ответы

### Объясните mapped types своими словами на примере из «Advanced Types».

Mapped types строят новые объектные типы из ключей. Держите структуру: проблема → механизм → пример. key remapping — мощный инструмент.

### Какие ошибки и edge cases связаны с mapped types?

Шаблон для Partial/Pick-подобных. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы mapped types и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. key remapping — мощный инструмент.
