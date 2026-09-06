---
title: Record
summary: "Record: Record<K,V> — объект с ключами K и значениями V. Важно на собесе и в проде в контексте «Utility Types»."
---

## Зачем нужно

База уровня CORE. Готовые типовые преобразования, постоянно используемые в проектах. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**Record**: Record<K,V> — объект с ключами K и значениями V.

Часто Record<string, T> вместо index signature.

Ключи-литералы дают точные карты.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Как работает Record и какая у него семантика?
- Чем Record отличается от близких API в «Utility Types»?
- Какой edge case с Record чаще всего ловят на собесе?

## Ответы

### Как работает Record и какая у него семантика?

Record<K,V> — объект с ключами K и значениями V. Умейте показать крошечный пример и объяснить edge case. Ключи-литералы дают точные карты.

### Чем Record отличается от близких API в «Utility Types»?

Сравните контракт: успех/ошибка, идемпотентность, сложность, стоимость. Часто Record<string, T> вместо index signature.

### Какой edge case с Record чаще всего ловят на собесе?

Часто Record<string, T> вместо index signature. Добавьте, как тестировать и что будет в production под нагрузкой.
