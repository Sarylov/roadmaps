---
title: Promise.all
summary: "Promise.all: Promise.all ждёт все; reject первого валит набор (fail-fast). Важно на собесе и в проде в контексте «Async JavaScript»."
---

## Зачем нужно

База уровня CORE. Асинхронность и конкурентное выполнение кода. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**Promise.all**: Promise.all ждёт все; reject первого валит набор (fail-fast).

Один reject + остальные «висят» без allSettled учёта.

Параллель независимых запросов — да; нужна частичная успешность — allSettled.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Как работает Promise.all и какая у него семантика?
- Чем Promise.all отличается от близких API в «Async JavaScript»?
- Какой edge case с Promise.all чаще всего ловят на собесе?

## Ответы

### Как работает Promise.all и какая у него семантика?

Promise.all ждёт все; reject первого валит набор (fail-fast). Умейте показать крошечный пример и объяснить edge case. Параллель независимых запросов — да; нужна частичная успешность — allSettled.

### Чем Promise.all отличается от близких API в «Async JavaScript»?

Сравните контракт: успех/ошибка, идемпотентность, сложность, стоимость. Один reject + остальные «висят» без allSettled учёта.

### Какой edge case с Promise.all чаще всего ловят на собесе?

Один reject + остальные «висят» без allSettled учёта. Добавьте, как тестировать и что будет в production под нагрузкой.
