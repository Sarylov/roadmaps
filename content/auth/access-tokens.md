---
title: Access tokens
summary: Access token — короткоживущее полномочие для вызова API от имени субъекта. API обязано проверять issuer, audience, срок и разрешения, а не только подпись.
---

## Зачем нужно

Токен отделяет authentication server от resource server и ограничивает доступ scopes/audience.

## Как работает

Token может быть opaque с introspection или self-contained JWT. Client отправляет его как Bearer credential; любой владелец может использовать токен, поэтому TLS и безопасное хранение обязательны. Resource server валидирует алгоритм, ключ, `iss`, `aud`, `exp`/`nbf` и scopes.

## Практические нюансы

Access token делают коротким и узким по audience. В браузере хранение в JavaScript повышает последствия XSS; BFF с HttpOnly cookie часто безопаснее. Логи, URL и analytics не должны получать token. Для высокого риска применяют sender-constrained tokens.

## Что спрашивают

- Чем access token отличается от ID token?
- Почему проверки подписи JWT недостаточно?
- Как отозвать access token?

## Ответы

### Чем access token отличается от ID token?

Access token предназначен API и выражает делегированный доступ. ID token сообщает client о результате authentication; отправлять его как credential в произвольный API нельзя.

### Почему проверки подписи JWT недостаточно?

Корректно подписанный token может быть от другого issuer, для другого audience, истёкшим или без нужного scope. Все контекстные claims обязательны.

### Как отозвать access token?

Opaque token можно выключить в authorization server. JWT обычно делают короткоживущим; для срочного revoke используют denylist/version или key rotation с ценой состояния и нагрузки.
