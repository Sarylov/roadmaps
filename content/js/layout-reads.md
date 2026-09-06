---
title: layout reads
summary: "layout reads: Чтение layout (offset*, getBoundingClientRect) может форсировать reflow. Важно на собесе и в проде в контексте «DOM и события»."
---

## Зачем нужно

База уровня CORE. Язык, runtime и асинхронность, на которых держится весь фронт. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**layout reads**: Чтение layout (offset*, getBoundingClientRect) может форсировать reflow.

Чередование write/read в цикле = layout thrashing.

Батчить чтения, потом записи; или rAF.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните layout reads своими словами на примере из «DOM и события».
- Какие ошибки и edge cases связаны с layout reads?
- Какие альтернативы layout reads и когда они лучше?

## Ответы

### Объясните layout reads своими словами на примере из «DOM и события».

Чтение layout (offset*, getBoundingClientRect) может форсировать reflow. Держите структуру: проблема → механизм → пример. Батчить чтения, потом записи; или rAF.

### Какие ошибки и edge cases связаны с layout reads?

Чередование write/read в цикле = layout thrashing. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы layout reads и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Батчить чтения, потом записи; или rAF.
