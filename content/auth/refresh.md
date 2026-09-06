---
title: refresh
summary: "refresh: Refresh token обновляет access token без re-login. Важно на собесе и в проде в контексте «JWT»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. HTTP, realtime, auth и защита клиентского периметра. Связка login → хранение секрета → refresh/logout и XSS/CSRF риски.

## Как работает

**refresh**: Refresh token обновляет access token без re-login.

Reuse detection при краже refresh.

Короткий access + длинный refresh — обычный компромисс.

Ориентир: [OWASP Auth Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).

## Что спрашивают

- Объясните refresh своими словами на примере из «JWT».
- Какие ошибки и edge cases связаны с refresh?
- Какие альтернативы refresh и когда они лучше?

## Ответы

### Объясните refresh своими словами на примере из «JWT».

Refresh token обновляет access token без re-login. Держите структуру: проблема → механизм → пример. Короткий access + длинный refresh — обычный компромисс.

### Какие ошибки и edge cases связаны с refresh?

Reuse detection при краже refresh. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы refresh и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Короткий access + длинный refresh — обычный компромисс.
