---
title: Covering indexes
summary: Covering index — индекс, из которого можно ответить на запрос целиком (index-only scan), не читая таблицу (heap).
---

## Для чего

Чтобы ускорить частые узкие SELECT, когда нужны лишь несколько колонок.

## Пример

```sql
CREATE INDEX ON users (email) INCLUDE (id, name);
-- SELECT id, name WHERE email = $1 может стать index-only
```

## Примечание

В Postgres visibility map влияет на index-only. `INCLUDE` добавляет колонки без участия в порядке ключа. Широкий covering дорожает на запись.
