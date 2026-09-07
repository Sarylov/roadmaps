---
title: ElastiCache
summary: ElastiCache — управляемый Redis/Memcached в AWS для кэша, сессий, pub/sub, rate limit.
---

## Для чего

Чтобы не поднимать Redis сами и получить failover/патчи от облака.

## Пример

Redis cluster для session store и cache-aside. App в VPC, endpoint только внутри сети.

## Примечание

Данные в кэше эфемерны относительно RDS — не единственный source of truth для денег. Следите за eviction и maxmemory policy.
