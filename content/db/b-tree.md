---
title: B-tree
summary: B-tree — основной тип индекса в PostgreSQL: сбалансированное дерево для поиска, сортировки и диапазонов.
---

## Для чего

Чтобы `WHERE col = / < / BETWEEN` и `ORDER BY col` не сканировали всю таблицу.

## Пример

```sql
CREATE INDEX ON users (email);
-- ускоряет WHERE email = 'a@b.c'
```

## Примечание

По умолчанию в Postgres индекс — B-tree. Не помогает на `LIKE '%tail'` без спец. индексов. Пишется при каждом изменении строки — цена на INSERT/UPDATE.
