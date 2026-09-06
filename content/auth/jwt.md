---
title: JWT
summary: JSON Web Token — подписанный (часто компактный) токен с claims. Сервер проверяет подпись и срок; сам токен обычно stateless, поэтому отзыв и хранение на клиенте — отдельные решения.
---

## Зачем нужно

Стандартный вопрос auth: access/refresh, где хранить, чем JWT отличается от session cookie. Легко наговорить опасный localStorage + долгий TTL.

## Как работает

Формат: `header.payload.signature` (Base64url). Payload (claims): `sub`, `exp`, `iat`, роли… Подпись HMAC/RSA — подделка без секрета/ключа не пройдёт.

Типичный поток: login → access (короткий) + refresh (длинный, часто httpOnly cookie или отдельное хранилище) → API с `Authorization: Bearer …` → refresh при 401.

Спека: [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519). Практика: [jwt.io](https://jwt.io/introduction).

## Что спрашивают

- JWT vs session id в cookie — плюсы/минусы?
- Где хранить access token на фронте?
- Как отозвать JWT до `exp`?

## Ответы

### JWT vs session id в cookie — плюсы/минусы?

**Session id**: сервер хранит сессию (Redis/DB) → простой logout/revoke, легко ротировать данные сессии; нужна sticky/shared store. **JWT**: проверка без lookup (если только подпись+claims) → проще горизонтально; logout/revoke сложнее, токен больше, секреты/ключи критичны. Часто гибрид: JWT access + server-side refresh/session denylist.

### Где хранить access token на фронте?

Компромиссы: **memory** — лучше от XSS, плохо при reload; **httpOnly cookie** — недоступен JS (XSS не украдёт), нужен CSRF-учёт; **localStorage** — удобно, но XSS = кража. Для SPA часто: короткий access в memory + refresh в httpOnly cookie.

### Как отозвать JWT до `exp`?

Чистый stateless JWT **нельзя** «удалить» на клиентах. Варианты: короткий `exp` + refresh rotation; denylist/`jti` в Redis до expiry; смена signing key (жёстко); version claim в user record. Без одного из механизмов logout на API ненадёжен.
