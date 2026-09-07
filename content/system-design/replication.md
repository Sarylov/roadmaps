---
title: Replication
summary: Replication — копирование данных на несколько нод для прочности, чтения и failover.
---

## Для чего

Чтобы не потерять данные при падении диска и размазать read-нагрузку.

## Пример

Primary + 2 replicas Postgres: writes на primary, reads на replicas. Object storage — erasure coding/реплики чанков.

## Примечание

Репликация асинхронная → лаг и stale reads. Синхронная — безопаснее, медленнее. Failover и split-brain продумайте явно.
