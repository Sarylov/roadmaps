---
title: tree-shaking
summary: "tree-shaking: Tree-shaking удаляет неиспользуемый ESM при бандле. Важно на собесе и в проде в контексте «Модули»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Язык, runtime и асинхронность, на которых держится весь фронт. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**tree-shaking**: Tree-shaking удаляет неиспользуемый ESM при бандле.

CommonJS и side-effects в module ломают shaking.

sideEffects в package.json и чистые ESM-экспорты.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните tree-shaking своими словами на примере из «Модули».
- Какие ошибки и edge cases связаны с tree-shaking?
- Какие альтернативы tree-shaking и когда они лучше?

## Ответы

### Объясните tree-shaking своими словами на примере из «Модули».

Tree-shaking удаляет неиспользуемый ESM при бандле. Держите структуру: проблема → механизм → пример. sideEffects в package.json и чистые ESM-экспорты.

### Какие ошибки и edge cases связаны с tree-shaking?

CommonJS и side-effects в module ломают shaking. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы tree-shaking и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. sideEffects в package.json и чистые ESM-экспорты.
