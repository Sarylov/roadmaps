---
title: PKCE
summary: PKCE — расширение OAuth: клиент доказывает, что token exchange делает тот же клиент, что начал auth (code verifier/challenge).
---

## Для чего

Чтобы перехват authorization code на redirect не позволил обменять его на токены злоумышленнику.

## Пример

Клиент генерирует `code_verifier`, шлёт `code_challenge` на authorize; на `/token` предъявляет verifier — IdP сверяет.

## Примечание

Обязателен для public clients; рекомендуется и для confidential. Не заменяет HTTPS и безопасное хранение токенов.
