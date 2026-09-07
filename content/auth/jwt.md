---
title: JWT
summary: JWT (JSON Web Token) — компактный токен из header.payload.signature: сервер проверяет подпись и читает claims без обязательного session store.
---

## Для чего

Чтобы передавать доказательство аутентификации между сервисами/клиентом в stateless-схеме.

## Пример

Access JWT: `{ sub: userId, exp }` подписан секретом/ключом. API проверяет подпись и `exp`, не ходит в Redis на каждый запрос.

## Примечание

JWT не «шифрует» payload по умолчанию — не кладите секреты в claims. Отзыв до `exp` сложнее, чем у session: blacklist, короткий TTL + refresh.
