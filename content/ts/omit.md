---
title: Omit
summary: "Omit: Omit<T,K> исключает ключи. Важно на собесе и в проде в контексте «Utility Types»."
---

## Зачем нужно

База уровня CORE. Готовые типовые преобразования, постоянно используемые в проектах. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**Omit**: Omit<T,K> исключает ключи.

Together with Partial — паттерн update DTO.

Не заменяет runtime валидацию.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Как работает Omit и какая у него семантика?
- Чем Omit отличается от близких API в «Utility Types»?
- Какой edge case с Omit чаще всего ловят на собесе?

## Ответы

### Как работает Omit и какая у него семантика?

Omit<T,K> исключает ключи. Умейте показать крошечный пример и объяснить edge case. Не заменяет runtime валидацию.

### Чем Omit отличается от близких API в «Utility Types»?

Сравните контракт: успех/ошибка, идемпотентность, сложность, стоимость. Together with Partial — паттерн update DTO.

### Какой edge case с Omit чаще всего ловят на собесе?

Together with Partial — паттерн update DTO. Добавьте, как тестировать и что будет в production под нагрузкой.
