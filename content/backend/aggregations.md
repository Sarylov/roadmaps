---
title: Aggregations
summary: Aggregations — запросы с `COUNT`/`SUM`/`AVG`/`GROUP BY` (и аналоги в ORM) для сводок, а не построчного списка.
---

## Для чего

Чтобы считать метрики и отчёты в БД, не выгружая все строки в Node.

## Пример

```ts
await db.select({
  status: orders.status,
  n: count(),
}).from(orders).groupBy(orders.status);
```

## Примечание

Тяжёлые агрегации на больших таблицах — кандидаты на материализованные view / read model / кэш. `HAVING` фильтрует уже после группировки.
