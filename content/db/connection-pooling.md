---
title: Connection pooling
summary: Connection pooling — переиспользование ограниченного набора соединений к БД вместо open/close на каждый запрос.
---

## Для чего

Чтобы не исчерпать `max_connections` Postgres и не платить за handshake на каждый HTTP-запрос.

## Пример

PgBouncer / пул в `pg` / Prisma connection pool: 10–50 соединений на инстанс приложения делят тысячи коротких запросов.

## Примечание

Пулов несколько (каждый pod Nest = свой пул) → сумма ≤ лимит БД. В serverless часто нужен внешний pooler. Долгие транзакции держат соединение занятым.
