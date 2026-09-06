---
title: ACID
summary: ACID — гарантии транзакции в СУБД: Atomicity, Consistency, Isolation, Durability. На собесе связывают с isolation levels, локами и тем, что «транзакция» в микросервисах ≠ одна ACID-транзакция.
---

## Зачем нужно

Без ACID нельзя объяснить, зачем `BEGIN/COMMIT`, почему «грязное чтение» и чем saga отличается от локальной транзакции Postgres.

## Как работает

- **Atomicity** — всё или ничего (rollback при ошибке).
- **Consistency** — инварианты БД (constraints, FK) после коммита соблюдены.
- **Isolation** — параллельные транзакции не ломают друг другу картину мира (степень = isolation level).
- **Durability** — после commit данные переживают краш (WAL/fsync).

В Postgres по умолчанию обычно **Read Committed**; сильнее — Repeatable Read / Serializable ценой блокировок/ретраев.

Postgres: [Transaction Isolation](https://www.postgresql.org/docs/current/transaction-iso.html).

## Что спрашивают

- Что ломается без Atomicity на примере перевода денег?
- Чем Isolation отличается от Consistency?
- Почему микросервисная «бизнес-транзакция» не ACID?

## Ответы

### Что ломается без Atomicity на примере перевода денег?

Списать со счёта A и не зачислить на B (краш между апдейтами) → деньги «исчезли». Atomicity гарантирует: либо оба апдейта в commit, либо откат обоих.

### Чем Isolation отличается от Consistency?

**Consistency** — «после транзакции данные валидны по правилам БД». **Isolation** — «как параллельные транзакции видят промежуточные состояния друг друга» (anomaly: dirty/non-repeatable/phantom). Можно иметь constraints (C) при слабой изоляции и странных гонках на уровне приложения.

### Почему микросервисная «бизнес-транзакция» не ACID?

Нет одной shared DB-транзакции на все сервисы (без 2PC, который редко хотят). Каждый сервис — свой commit; между ними сеть и частичные сбои → **eventual consistency**, saga/outbox/идемпотентность вместо глобального ACID.
