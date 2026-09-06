---
title: authorization code
summary: "authorization code: OAuth code flow: code → token на бэке. Важно на собесе и в проде в контексте «OAuth 2.0 / OpenID Connect»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Стандартные протоколы делегированной авторизации и identity. Кратко держите threat model: кто атакующий и что получает.

## Как работает

**authorization code**: OAuth code flow: code → token на бэке.

Нельзя implicit для новых приложений.

State/PKCE против CSRF/перехвата.

Ориентир: [OWASP Top 10](https://owasp.org/www-project-top-ten/).

## Что спрашивают

- Объясните authorization code своими словами на примере из «OAuth 2.0 / OpenID Connect».
- Какие ошибки и edge cases связаны с authorization code?
- Какие альтернативы authorization code и когда они лучше?

## Ответы

### Объясните authorization code своими словами на примере из «OAuth 2.0 / OpenID Connect».

OAuth code flow: code → token на бэке. Держите структуру: проблема → механизм → пример. State/PKCE против CSRF/перехвата.

### Какие ошибки и edge cases связаны с authorization code?

Нельзя implicit для новых приложений. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы authorization code и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. State/PKCE против CSRF/перехвата.
