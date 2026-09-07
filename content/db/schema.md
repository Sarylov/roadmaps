---
title: Schema
summary: Schema в PostgreSQL — пространство имён объектов БД (таблицы, типы, функции); также слово «схема» = структура таблиц.
---

## Для чего

Чтобы разделять объекты (например `app` / `audit`) и не смешивать всё в `public`.

## Пример

```sql
CREATE SCHEMA billing;
CREATE TABLE billing.invoices (...);
SET search_path TO billing, public;
```

## Примечание

На собесе «схема» часто = DDL модели. В Postgres есть и literal `SCHEMA` как namespace — не путать уровни.
