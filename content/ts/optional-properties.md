---
title: optional properties
summary: "optional properties: ?: — свойство может отсутствовать (не всегда = undefined явно). Важно на собесе и в проде в контексте «Функции и объекты»."
---

## Зачем нужно

База уровня CORE. Типизация функций, объектов и reusable-компонентов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**optional properties**: ?: — свойство может отсутствовать (не всегда = undefined явно).

exactOptionalPropertyTypes меняет семантику.

Документируйте разницу absent vs undefined.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните optional properties своими словами на примере из «Функции и объекты».
- Какие ошибки и edge cases связаны с optional properties?
- Какие альтернативы optional properties и когда они лучше?

## Ответы

### Объясните optional properties своими словами на примере из «Функции и объекты».

?: — свойство может отсутствовать (не всегда = undefined явно). Держите структуру: проблема → механизм → пример. Документируйте разницу absent vs undefined.

### Какие ошибки и edge cases связаны с optional properties?

exactOptionalPropertyTypes меняет семантику. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы optional properties и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Документируйте разницу absent vs undefined.
