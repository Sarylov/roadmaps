---
title: conditional
summary: "T extends U ? X : Y — это ветвление на уровне типов."
---

## Зачем нужно

Чтобы явно выразить и переиспользовать поведение, связанное с «conditional», а не держать его зашитым в одном месте.

## Как работает

T extends U ? X : Y — это ветвление на уровне типов.

Частая ошибка: distributive conditional по naked type param.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Что такое conditional простыми словами?
- Зачем в коде нужен conditional?
- Какие ошибки и ограничения связаны с conditional?

## Ответы

### Что такое conditional простыми словами?

T extends U ? X : Y — это ветвление на уровне типов.

### Зачем в коде нужен conditional?

Чтобы явно выразить и переиспользовать поведение, связанное с «conditional», а не держать его зашитым в одном месте.

### Какие ошибки и ограничения связаны с conditional?

distributive conditional по naked type param. Имеет смысл сравнить с ближайшей альтернативой и понять, когда механизм избыточен.
