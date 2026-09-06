---
title: template literal types
summary: "template literal types: Шаблонные литеральные типы склеивают string unions. Важно на собесе и в проде в контексте «Advanced Types»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Продвинутые средства построения типов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**template literal types**: Шаблонные литеральные типы склеивают string unions.

API роутов/событий типизируют точно.

Не злоупотреблять — ошибки становятся «простынями».

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните template literal types своими словами на примере из «Advanced Types».
- Какие ошибки и edge cases связаны с template literal types?
- Какие альтернативы template literal types и когда они лучше?

## Ответы

### Объясните template literal types своими словами на примере из «Advanced Types».

Шаблонные литеральные типы склеивают string unions. Держите структуру: проблема → механизм → пример. Не злоупотреблять — ошибки становятся «простынями».

### Какие ошибки и edge cases связаны с template literal types?

API роутов/событий типизируют точно. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы template literal types и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Не злоупотреблять — ошибки становятся «простынями».
