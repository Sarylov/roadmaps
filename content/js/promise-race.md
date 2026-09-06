---
title: Promise.race
summary: "Promise.race: Promise.race завершается первым settled. Важно на собесе и в проде в контексте «Async JavaScript»."
---

## Зачем нужно

База уровня CORE. Асинхронность и конкурентное выполнение кода. Упор на event loop, this, coercion и практические ловушки runtime.

## Как работает

**Promise.race**: Promise.race завершается первым settled.

Типично для timeout-pattern.

Проигравшие промисы продолжают работу — отмена отдельно.

MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Что спрашивают

- Как работает Promise.race и какая у него семантика?
- Чем Promise.race отличается от близких API в «Async JavaScript»?
- Какой edge case с Promise.race чаще всего ловят на собесе?

## Ответы

### Как работает Promise.race и какая у него семантика?

Promise.race завершается первым settled. Умейте показать крошечный пример и объяснить edge case. Проигравшие промисы продолжают работу — отмена отдельно.

### Чем Promise.race отличается от близких API в «Async JavaScript»?

Сравните контракт: успех/ошибка, идемпотентность, сложность, стоимость. Типично для timeout-pattern.

### Какой edge case с Promise.race чаще всего ловят на собесе?

Типично для timeout-pattern. Добавьте, как тестировать и что будет в production под нагрузкой.
