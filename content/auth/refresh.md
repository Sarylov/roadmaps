---
title: refresh
summary: refresh — это token обновляет access token без re-login.
---

## Зачем нужно

Чтобы явно выразить и переиспользовать поведение, связанное с «refresh», а не держать его зашитым в одном месте.

## Как работает

refresh — это token обновляет access token без re-login.

Частая ошибка: reuse detection при краже refresh.

Ориентир: [OWASP Auth Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).

## Что спрашивают

- Что такое refresh простыми словами?
- Зачем в коде нужен refresh?
- Какие ошибки и ограничения связаны с refresh?

## Ответы

### Что такое refresh простыми словами?

refresh — это token обновляет access token без re-login.

### Зачем в коде нужен refresh?

Чтобы явно выразить и переиспользовать поведение, связанное с «refresh», а не держать его зашитым в одном месте.

### Какие ошибки и ограничения связаны с refresh?

Reuse detection при краже refresh. Имеет смысл сравнить с ближайшей альтернативой и понять, когда механизм избыточен.
