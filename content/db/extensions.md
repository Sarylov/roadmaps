---
title: Extensions
summary: Extensions — подключаемые модули PostgreSQL (`CREATE EXTENSION`), добавляющие типы, функции, индексы.
---

## Для чего

Чтобы не писать с нуля то, что уже есть в экосистеме Postgres.

## Пример

`uuid-ossp` / `pgcrypto` — UUID; `pg_trgm` — trigram поиск; `postgis` — гео; `pg_stat_statements` — топ запросов.

## Примечание

Extension должен быть разрешён на хостинге. Версия extension — часть схемы, её тоже учитывают в миграциях.
