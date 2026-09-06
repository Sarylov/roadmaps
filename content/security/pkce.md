---
title: PKCE
summary: "PKCE: PKCE защищает public clients от code interception. Важно на собесе и в проде в контексте «OAuth 2.0 / OpenID Connect»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Стандартные протоколы делегированной авторизации и identity. Кратко держите threat model: кто атакующий и что получает.

## Как работает

**PKCE**: PKCE защищает public clients от code interception.

code_verifier/challenge обязателен для SPA/mobile.

Сейчас рекомендуют и confidential clients.

Ориентир: [OWASP Top 10](https://owasp.org/www-project-top-ten/).

## Что спрашивают

- Объясните PKCE своими словами на примере из «OAuth 2.0 / OpenID Connect».
- Какие ошибки и edge cases связаны с PKCE?
- Какие альтернативы PKCE и когда они лучше?

## Ответы

### Объясните PKCE своими словами на примере из «OAuth 2.0 / OpenID Connect».

PKCE защищает public clients от code interception. Держите структуру: проблема → механизм → пример. Сейчас рекомендуют и confidential clients.

### Какие ошибки и edge cases связаны с PKCE?

code_verifier/challenge обязателен для SPA/mobile. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы PKCE и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Сейчас рекомендуют и confidential clients.
