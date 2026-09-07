---
title: Primary keys
summary: Primary key — столбец (или набор), который уникально идентифицирует строку таблицы и не бывает NULL.
---

## Для чего

Чтобы однозначно ссылаться на запись и строить на ней внешние ключи.

## Пример

```sql
CREATE TABLE users (
  id bigserial PRIMARY KEY,
  email text NOT NULL
);
```

## Примечание

Natural key (email) vs surrogate (`id`/`uuid`): менять PK больно — чаще берут стабильный surrogate, uniqueness — отдельным UNIQUE.
