---
title: Refresh tokens
summary: Refresh token — длинноживущий секрет для выпуска новых access token без повторного логина.
---

## Для чего

Чтобы UX «остаться в системе» сочетать с короткими access token.

## Пример

Access истёк → клиент шлёт refresh на `/auth/refresh` → новая пара токенов; старый refresh ротируют/инвалидируют.

## Примечание

Храните refresh как secret (httpOnly cookie / secure store), детектируйте reuse украденного refresh, умейте revoke семейство токенов.
