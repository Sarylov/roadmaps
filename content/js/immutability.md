---
title: immutability
summary: "immutability: Иммутабельность — новые значения вместо мутаций in-place. Важно на собесе и в проде в контексте «ФП и кастом методы»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Язык, runtime и асинхронность, на которых держится весь фронт. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**immutability**: Иммутабельность — новые значения вместо мутаций in-place.

В React мутация state «тихо» ломает рендеры.

structuredClone/immer vs ручной spread — trade-off.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните immutability своими словами на примере из «ФП и кастом методы».
- Какие ошибки и edge cases связаны с immutability?
- Какие альтернативы immutability и когда они лучше?

## Ответы

### Объясните immutability своими словами на примере из «ФП и кастом методы».

Иммутабельность — новые значения вместо мутаций in-place. Держите структуру: проблема → механизм → пример. structuredClone/immer vs ручной spread — trade-off.

### Какие ошибки и edge cases связаны с immutability?

В React мутация state «тихо» ломает рендеры. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы immutability и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. structuredClone/immer vs ручной spread — trade-off.
