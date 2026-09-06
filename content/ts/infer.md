---
title: infer
summary: "infer: infer извлекает тип внутри conditional extends. Важно на собесе и в проде в контексте «Advanced Types»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Продвинутые средства построения типов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**infer**: infer извлекает тип внутри conditional extends.

Типичный паттерн: ReturnType, параметры функций.

Ошибка — infer вне extends-ветки.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните infer своими словами на примере из «Advanced Types».
- Какие ошибки и edge cases связаны с infer?
- Какие альтернативы infer и когда они лучше?

## Ответы

### Объясните infer своими словами на примере из «Advanced Types».

infer извлекает тип внутри conditional extends. Держите структуру: проблема → механизм → пример. Ошибка — infer вне extends-ветки.

### Какие ошибки и edge cases связаны с infer?

Типичный паттерн: ReturnType, параметры функций. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы infer и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Ошибка — infer вне extends-ветки.
