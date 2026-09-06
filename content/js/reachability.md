---
title: reachability
summary: "reachability: GC собирает объекты, недостижимые из roots. Важно на собесе и в проде в контексте «Сборка мусора»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Язык, runtime и асинхронность, на которых держится весь фронт. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**reachability**: GC собирает объекты, недостижимые из roots.

Случайные ссылки в замыканиях/кэшах держат память.

DevTools Heap snapshot ищет retainers.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните reachability своими словами на примере из «Сборка мусора».
- Какие ошибки и edge cases связаны с reachability?
- Какие альтернативы reachability и когда они лучше?

## Ответы

### Объясните reachability своими словами на примере из «Сборка мусора».

GC собирает объекты, недостижимые из roots. Держите структуру: проблема → механизм → пример. DevTools Heap snapshot ищет retainers.

### Какие ошибки и edge cases связаны с reachability?

Случайные ссылки в замыканиях/кэшах держат память. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы reachability и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. DevTools Heap snapshot ищет retainers.
