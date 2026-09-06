---
title: stacking
summary: "stacking: Stacking context определяет порядок перекрытия слоёв. Важно на собесе и в проде в контексте «Position/z-index»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Каркас интерфейса: семантика, раскладка, формы и доступность. Упор на каскад, layout и доступность.

## Как работает

**stacking**: Stacking context определяет порядок перекрытия слоёв.

Новый context: opacity<1, transform, position+z-index, filter…

z-index «не работает» часто из-за другого stacking context.

MDN: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

## Что спрашивают

- Объясните stacking своими словами на примере из «Position/z-index».
- Какие ошибки и edge cases связаны с stacking?
- Какие альтернативы stacking и когда они лучше?

## Ответы

### Объясните stacking своими словами на примере из «Position/z-index».

Stacking context определяет порядок перекрытия слоёв. Держите структуру: проблема → механизм → пример. z-index «не работает» часто из-за другого stacking context.

### Какие ошибки и edge cases связаны с stacking?

Новый context: opacity<1, transform, position+z-index, filter… Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы stacking и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. z-index «не работает» часто из-за другого stacking context.
