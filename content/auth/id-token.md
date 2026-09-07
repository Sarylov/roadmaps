---
title: ID token
summary: ID token — JWT от OpenID Connect про пользователя (кто залогинился); это доказательство аутентификации, не access к API.
---

## Для чего

Чтобы клиент/приложение узнали identity (`sub`, email) после login у IdP.

## Пример

После code exchange приходят access + id_token. UI читает claims id_token; к API ходит с access token.

## Примечание

Не используйте id_token как Bearer к своему API (для этого access). Проверяйте `iss`, `aud`, подпись, `exp`.
