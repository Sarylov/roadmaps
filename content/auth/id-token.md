---
title: ID token
summary: "ID token: ID token (OIDC) про пользователя для клиента. Важно на собесе и в проде в контексте «OAuth 2.0 / OpenID Connect»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Стандартные протоколы делегированной авторизации и identity. Связка login → хранение секрета → refresh/logout и XSS/CSRF риски.

## Как работает

**ID token**: ID token (OIDC) про пользователя для клиента.

Не использовать вместо access для API без аудита дизайна.

Проверка подписи и nonce.

Ориентир: [OWASP Auth Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).

## Что спрашивают

- Объясните ID token своими словами на примере из «OAuth 2.0 / OpenID Connect».
- Какие ошибки и edge cases связаны с ID token?
- Какие альтернативы ID token и когда они лучше?

## Ответы

### Объясните ID token своими словами на примере из «OAuth 2.0 / OpenID Connect».

ID token (OIDC) про пользователя для клиента. Держите структуру: проблема → механизм → пример. Проверка подписи и nonce.

### Какие ошибки и edge cases связаны с ID token?

Не использовать вместо access для API без аудита дизайна. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы ID token и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Проверка подписи и nonce.
