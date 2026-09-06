---
title: cascade
summary: "cascade: Cascade — порядок применения CSS: origin → specificity → order. Важно на собесе и в проде в контексте «HTML/CSS»."
---

## Зачем нужно

База уровня CORE. Каркас интерфейса: семантика, раскладка, формы и доступность. Упор на каскад, layout и доступность.

## Как работает

**cascade**: Cascade — порядок применения CSS: origin → specificity → order.

!important и specificity wars усложняют поддержку.

Каскад + cascade layers дают предсказуемые перекрытия.

MDN: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

## Что спрашивают

- Объясните cascade своими словами на примере из «HTML/CSS».
- Какие ошибки и edge cases связаны с cascade?
- Какие альтернативы cascade и когда они лучше?

## Ответы

### Объясните cascade своими словами на примере из «HTML/CSS».

Cascade — порядок применения CSS: origin → specificity → order. Держите структуру: проблема → механизм → пример. Каскад + cascade layers дают предсказуемые перекрытия.

### Какие ошибки и edge cases связаны с cascade?

!important и specificity wars усложняют поддержку. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы cascade и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Каскад + cascade layers дают предсказуемые перекрытия.
