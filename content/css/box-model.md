---
title: box model
summary: "box model: Box model: content + padding + border (+ margin снаружи). Важно на собесе и в проде в контексте «HTML/CSS»."
---

## Зачем нужно

База уровня CORE. Каркас интерфейса: семантика, раскладка, формы и доступность. Упор на каскад, layout и доступность.

## Как работает

**box model**: Box model: content + padding + border (+ margin снаружи).

content-box vs border-box меняет ширину — путаница в layout.

border-box почти всегда удобнее для UI-разметки.

MDN: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

## Что спрашивают

- Объясните box model своими словами на примере из «HTML/CSS».
- Какие ошибки и edge cases связаны с box model?
- Какие альтернативы box model и когда они лучше?

## Ответы

### Объясните box model своими словами на примере из «HTML/CSS».

Box model: content + padding + border (+ margin снаружи). Держите структуру: проблема → механизм → пример. border-box почти всегда удобнее для UI-разметки.

### Какие ошибки и edge cases связаны с box model?

content-box vs border-box меняет ширину — путаница в layout. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы box model и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. border-box почти всегда удобнее для UI-разметки.
