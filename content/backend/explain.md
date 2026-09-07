---
title: EXPLAIN
summary: EXPLAIN — показывает план выполнения запроса без (или с) реальным запуском: как Postgres собирается читать данные.
---

## Для чего

Чтобы понять, почему запрос медленный: seq scan, nested loop, отсутствие индекса.

## Пример

```sql
EXPLAIN SELECT * FROM orders WHERE user_id = 1;
```

## Примечание

Без `ANALYZE` — только оценки cost/rows. Цифры плана — модель, не всегда wall-clock.
