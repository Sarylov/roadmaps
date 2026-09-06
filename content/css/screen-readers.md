---
title: screen readers
summary: "screen readers: Screen readers читают доступное имя, роль и состояние. Важно на собесе и в проде в контексте «Доступность (a11y)»."
---

## Зачем нужно

База уровня CORE. Каркас интерфейса: семантика, раскладка, формы и доступность. Упор на каскад, layout и доступность.

## Как работает

**screen readers**: Screen readers читают доступное имя, роль и состояние.

Иконки-кнопки без accessible name «молчат».

Тестируют VoiceOver/NVDA + keyboard, не только Lighthouse.

MDN: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

## Что спрашивают

- Объясните screen readers своими словами на примере из «Доступность (a11y)».
- Какие ошибки и edge cases связаны с screen readers?
- Какие альтернативы screen readers и когда они лучше?

## Ответы

### Объясните screen readers своими словами на примере из «Доступность (a11y)».

Screen readers читают доступное имя, роль и состояние. Держите структуру: проблема → механизм → пример. Тестируют VoiceOver/NVDA + keyboard, не только Lighthouse.

### Какие ошибки и edge cases связаны с screen readers?

Иконки-кнопки без accessible name «молчат». Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы screen readers и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Тестируют VoiceOver/NVDA + keyboard, не только Lighthouse.
