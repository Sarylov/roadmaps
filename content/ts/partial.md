---
title: Partial
summary: "Partial: Partial делает все поля optional. Важно на собесе и в проде в контексте «Utility Types»."
---

## Зачем нужно

База уровня CORE. Готовые типовые преобразования, постоянно используемые в проектах. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**Partial**: Partial делает все поля optional.

Для deep partial нужен рекурсивный utility.

Не забывайте required поля на runtime.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Как работает Partial и какая у него семантика?
- Чем Partial отличается от близких API в «Utility Types»?
- Какой edge case с Partial чаще всего ловят на собесе?

## Ответы

### Как работает Partial и какая у него семантика?

Partial делает все поля optional. Умейте показать крошечный пример и объяснить edge case. Не забывайте required поля на runtime.

### Чем Partial отличается от близких API в «Utility Types»?

Сравните контракт: успех/ошибка, идемпотентность, сложность, стоимость. Для deep partial нужен рекурсивный utility.

### Какой edge case с Partial чаще всего ловят на собесе?

Для deep partial нужен рекурсивный utility. Добавьте, как тестировать и что будет в production под нагрузкой.
