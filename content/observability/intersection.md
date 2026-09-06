---
title: Intersection
summary: "Intersection: IntersectionObserver — видимость элемента относительно viewport/корня. Важно на собесе и в проде в контексте «Observers»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Как страница парсится, рисуется, работает и живёт в фоне. Сигнал → алерт → кого пейджить; correlation.

## Как работает

**Intersection**: IntersectionObserver — видимость элемента относительно viewport/корня.

Ленивые картинки, infinite scroll, analytics impression.

rootMargin порога важны.

## Что спрашивают

- Объясните Intersection своими словами на примере из «Observers».
- Какие ошибки и edge cases связаны с Intersection?
- Какие альтернативы Intersection и когда они лучше?

## Ответы

### Объясните Intersection своими словами на примере из «Observers».

IntersectionObserver — видимость элемента относительно viewport/корня. Держите структуру: проблема → механизм → пример. rootMargin порога важны.

### Какие ошибки и edge cases связаны с Intersection?

Ленивые картинки, infinite scroll, analytics impression. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы Intersection и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. rootMargin порога важны.
