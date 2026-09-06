---
title: containing block
summary: "containing block: Containing block — относительно чего считаются % и absolute. Важно на собесе и в проде в контексте «Position/z-index»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Каркас интерфейса: семантика, раскладка, формы и доступность. Упор на каскад, layout и доступность.

## Как работает

**containing block**: Containing block — относительно чего считаются % и absolute.

transform на предке делает его containing block для fixed — сюрприз.

Понимание нужно для sticky/absolute оверлеев.

MDN: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

## Что спрашивают

- Объясните containing block своими словами на примере из «Position/z-index».
- Какие ошибки и edge cases связаны с containing block?
- Какие альтернативы containing block и когда они лучше?

## Ответы

### Объясните containing block своими словами на примере из «Position/z-index».

Containing block — относительно чего считаются % и absolute. Держите структуру: проблема → механизм → пример. Понимание нужно для sticky/absolute оверлеев.

### Какие ошибки и edge cases связаны с containing block?

transform на предке делает его containing block для fixed — сюрприз. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы containing block и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Понимание нужно для sticky/absolute оверлеев.
