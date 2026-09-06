---
title: garbage collection
summary: "garbage collection: GC находит недостижимое и освобождает. Важно на собесе и в проде в контексте «Memory & GC»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Понимание памяти и причин утечек в долгоживущих процессах. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**garbage collection**: GC находит недостижимое и освобождает.

Паузы GC влияют на latency.

Избегайте короткоживущего alloc churn в hot path.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните garbage collection своими словами на примере из «Memory & GC».
- Какие ошибки и edge cases связаны с garbage collection?
- Какие альтернативы garbage collection и когда они лучше?

## Ответы

### Объясните garbage collection своими словами на примере из «Memory & GC».

GC находит недостижимое и освобождает. Держите структуру: проблема → механизм → пример. Избегайте короткоживущего alloc churn в hot path.

### Какие ошибки и edge cases связаны с garbage collection?

Паузы GC влияют на latency. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы garbage collection и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Избегайте короткоживущего alloc churn в hot path.
