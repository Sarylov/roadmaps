---
title: Migrations
summary: Migrations — версионированные изменения схемы БД (up/down или только forward), применяемые одинаково на всех окружениях.
---

## Для чего

Чтобы эволюция DDL была повторяемой: local → staging → prod без ручных «поправил в psql».

## Пример

Файлы `001_create_users.sql`, `002_add_email_unique.sql` через Flyway / Liquibase / knex / prisma migrate.

## Примечание

Миграции на больших таблицах могут лочить — нужны expand/contract, concurrent indexes. Откат данных ≠ откат кода: планируйте совместимость.
