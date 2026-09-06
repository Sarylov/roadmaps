---
title: cache
summary: "cache: HTTP/app/framework cache слои отличаются семантикой. Важно на собесе и в проде в контексте «Next.js»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Компонентная модель, состояние, роутинг и серверный React. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**cache**: HTTP/app/framework cache слои отличаются семантикой.

Неверные Cache-Control = stale или no-store боль.

Явно разделяйте CDN cache и client cache.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Объясните cache своими словами на примере из «Next.js».
- Какие ошибки и edge cases связаны с cache?
- Какие альтернативы cache и когда они лучше?

## Ответы

### Объясните cache своими словами на примере из «Next.js».

HTTP/app/framework cache слои отличаются семантикой. Держите структуру: проблема → механизм → пример. Явно разделяйте CDN cache и client cache.

### Какие ошибки и edge cases связаны с cache?

Неверные Cache-Control = stale или no-store боль. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы cache и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Явно разделяйте CDN cache и client cache.
