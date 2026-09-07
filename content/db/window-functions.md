---
title: Window functions
summary: Window functions — вычисления по «окну» строк (PARTITION/ORDER) без схлопывания групп как в GROUP BY.
---

## Для чего

Чтобы нумеровать, ранжировать, считать running total, оставляя все строки на месте.

## Пример

```sql
SELECT id, amount,
       ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at) AS rn
FROM orders;
```

## Примечание

`GROUP BY` схлопывает строки; window — нет. Удобно для пагинации «топ-N в группе» и дедупа.
