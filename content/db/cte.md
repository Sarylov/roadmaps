---
title: CTE
summary: CTE (WITH) — именованный временный результат запроса, который читают следующие шаги того же SQL.
---

## Для чего

Чтобы разбить сложный SQL на читаемые шаги и переиспользовать промежуточный набор.

## Пример

```sql
WITH paid AS (
  SELECT user_id FROM orders WHERE status = 'paid'
)
SELECT u.* FROM users u JOIN paid p ON p.user_id = u.id;
```

## Примечание

В Postgres CTE иногда был optimization fence (зависит от версии). При странном плане сравнивайте с подзапросом/`EXPLAIN`.
