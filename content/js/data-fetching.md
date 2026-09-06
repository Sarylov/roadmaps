---
title: data fetching
summary: "data fetching: Где фетчить: server component, loader, client query. Важно на собесе и в проде в контексте «Next.js»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Компонентная модель, состояние, роутинг и серверный React. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**data fetching**: Где фетчить: server component, loader, client query.

Водопады и дубли запросов — главные perf-баги.

Кэш и дедуп на фреймворк-уровне.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните data fetching своими словами на примере из «Next.js».
- Какие ошибки и edge cases связаны с data fetching?
- Какие альтернативы data fetching и когда они лучше?

## Ответы

### Объясните data fetching своими словами на примере из «Next.js».

Где фетчить: server component, loader, client query. Держите структуру: проблема → механизм → пример. Кэш и дедуп на фреймворк-уровне.

### Какие ошибки и edge cases связаны с data fetching?

Водопады и дубли запросов — главные perf-баги. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы data fetching и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Кэш и дедуп на фреймворк-уровне.
