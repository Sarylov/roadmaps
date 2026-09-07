---
title: Joins
summary: JOIN в query builder — связать строки таблиц в одном запросе по условию (обычно FK), вместо серии отдельных SELECT.
---

## Для чего

Чтобы достать связанные данные одним round-trip и явно контролировать тип связи (INNER/LEFT).

## Пример

```ts
db.select().from(orders)
  .leftJoin(users, eq(orders.userId, users.id))
  .where(eq(users.id, userId));
```

## Примечание

Не путать с ORM `include`/`relations`: под капотом тоже join или отдельные запросы. Много join'ов на больших таблицах → смотрите план и индексы по ключам связи.
