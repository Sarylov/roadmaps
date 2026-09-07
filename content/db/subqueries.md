---
title: Subqueries
summary: Subquery — запрос внутри другого запроса (в FROM, WHERE, SELECT).
---

## Для чего

Чтобы выразить «сначала найди множество, потом по нему отфильтруй/посчитай» без лишней логики в приложении.

## Пример

```sql
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE total > 1000);
```

## Примечание

Коррелированные подзапросы могут быть медленными; часто переписывают в `JOIN`/`EXISTS`/CTE. Смотрите `EXPLAIN`.
