---
title: Authorization Code
summary: Authorization Code — OAuth 2.0 flow: пользователь логинится у IdP, клиент получает одноразовый `code` и меняет его на токены на back-channel.
---

## Для чего

Чтобы токены не светились в browser redirect URL так, как в устаревшем implicit flow.

## Пример

Redirect на IdP → user consent → redirect с `?code=` → backend `POST /token` с code + secret/PKCE → access/refresh/id token.

## Примечание

Для публичных клиентов (SPA/mobile) — Authorization Code + PKCE, без client secret. Code короткий и одноразовый.
