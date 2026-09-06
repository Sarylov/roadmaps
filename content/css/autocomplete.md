---
title: autocomplete
summary: "autocomplete: autocomplete подсказывает браузеру тип поля (email, current-password). Важно на собесе и в проде в контексте «Формы»."
---

## Зачем нужно

База уровня CORE. Каркас интерфейса: семантика, раскладка, формы и доступность. Упор на каскад, layout и доступность.

## Как работает

**autocomplete**: autocomplete подсказывает браузеру тип поля (email, current-password).

Неверные токены ломают менеджеры паролей.

Критично для login/checkout и security UX.

MDN: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

## Что спрашивают

- Объясните autocomplete своими словами на примере из «Формы».
- Какие ошибки и edge cases связаны с autocomplete?
- Какие альтернативы autocomplete и когда они лучше?

## Ответы

### Объясните autocomplete своими словами на примере из «Формы».

autocomplete подсказывает браузеру тип поля (email, current-password). Держите структуру: проблема → механизм → пример. Критично для login/checkout и security UX.

### Какие ошибки и edge cases связаны с autocomplete?

Неверные токены ломают менеджеры паролей. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы autocomplete и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Критично для login/checkout и security UX.
