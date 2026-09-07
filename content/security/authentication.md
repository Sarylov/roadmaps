---
title: Authentication
summary: Authentication — проверка, кто вы: логин/пароль, сессия, JWT, OAuth; результат — установленная identity.
---

## Для чего

Чтобы отличать анонима от пользователя и дальше решать authorization.

## Пример

`POST /login` → cookie/session или access token. Следующий `GET /me` с credentials → профиль, без → `401`.

## Примечание

Authentication ≠ authorization. В E2E отдельно проверьте expired/invalid token и logout/revoke.
