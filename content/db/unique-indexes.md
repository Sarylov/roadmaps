---
title: Unique indexes
summary: Unique index — индекс, который запрещает дубликаты значений (основа UNIQUE/PK).
---

## Для чего

Чтобы инвариант «email один на систему» держала БД, а не только приложение.

## Пример

```sql
CREATE UNIQUE INDEX ON users (email);
```

## Примечание

В Postgres несколько `NULL` в UNIQUE обычно допускаются (NULL ≠ NULL). Нужна «один NULL» — partial unique index / другой дизайн.
