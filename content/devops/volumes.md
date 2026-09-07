---
title: Volumes
summary: Volume — постоянное хранилище Docker вне жизненного цикла контейнера (named volume, bind mount).
---

## Для чего

Чтобы данные БД, загрузок и кэшей переживали recreate контейнера.

## Пример

`volumes: - pgdata:/var/lib/postgresql/data` в Compose.  
Bind: `./src:/app` для dev hot-reload.

## Примечание

Bind удобен в dev, в проде чаще named/volume driver. Права UID внутри контейнера должны совпадать с владельцем файлов на хосте.
