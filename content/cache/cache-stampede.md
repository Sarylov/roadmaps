---
title: Cache stampede
summary: Cache stampede (thundering herd) — много запросов одновременно ловят miss одного ключа и все бьют в БД.
---

## Для чего

Чтобы горячий ключ с истекшим TTL не устроил всплеск нагрузки на Postgres.

## Пример

Ключ `feed:home` истёк → 1000 подов одновременно делают тяжёлый SQL. Нужны singleflight/lock, soft TTL, early refresh.

## Примечание

Лечат: mutex на пересчёт, probabilistic early expiration, stale-while-revalidate. Симптом — пики latency БД ровно на границе TTL.
