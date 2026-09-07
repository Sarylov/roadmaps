---
title: Scopes
summary: Scopes в OAuth — строки согласия на классы доступа (`openid`, `profile`, `payments:write`), которые несёт access token.
---

## Для чего

Чтобы клиент и пользователь ограничивали, что API можно делать от имени пользователя.

## Пример

Приложение просит `read:email`, не `admin:all`. Resource server отклоняет вызов без нужного scope.

## Примечание

Scope — делегирование клиенту, не замена вашей RBAC внутри ресурса. Least privilege: минимальный набор scopes.
