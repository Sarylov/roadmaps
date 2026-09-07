---
title: Database cache
summary: Database cache — кэш внутри/рядом с СУБД: buffer pool, query cache (где есть), materialized views.
---

## Для чего

Чтобы частые блоки/страницы не читались с диска каждый раз.

## Пример

Postgres shared_buffers держит горячие страницы. Materialized view для тяжёлого отчёта, refresh по расписанию.

## Примечание

Это не замена явному Redis для кросс-инстанс application cache. Настройка памяти БД — часть capacity planning.
