---
title: Required
summary: "Required: Required делает optional поля обязательными. Важно на собесе и в проде в контексте «Utility Types»."
---

## Зачем нужно

База уровня CORE. Готовые типовые преобразования, постоянно используемые в проектах. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**Required**: Required делает optional поля обязательными.

Обратный Partial для финализации конфигов.

Полезно после merge defaults.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Как работает Required и какая у него семантика?
- Чем Required отличается от близких API в «Utility Types»?
- Какой edge case с Required чаще всего ловят на собесе?

## Ответы

### Как работает Required и какая у него семантика?

Required делает optional поля обязательными. Умейте показать крошечный пример и объяснить edge case. Полезно после merge defaults.

### Чем Required отличается от близких API в «Utility Types»?

Сравните контракт: успех/ошибка, идемпотентность, сложность, стоимость. Обратный Partial для финализации конфигов.

### Какой edge case с Required чаще всего ловят на собесе?

Обратный Partial для финализации конфигов. Добавьте, как тестировать и что будет в production под нагрузкой.
