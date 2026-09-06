---
title: Шардирование
summary: Шардирование делит набор данных между узлами по shard key, увеличивая write throughput и объём. Главная задача — выбрать ключ без hotspots и поддержать resharing.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Hash partitioning равномерно распределяет keys, range partitioning ускоряет диапазоны, directory даёт гибкое размещение. Router по ключу выбирает shard; rebalance переносит partitions постепенно.

## Что спрашивают

- Как работает Шардирование на практике?
- Какой типичный failure mode связан с Шардирование?
- Какие trade-offs важно назвать для Шардирование?

## Ответы

### Как работает Шардирование на практике?

Hash partitioning равномерно распределяет keys, range partitioning ускоряет диапазоны, directory даёт гибкое размещение. Router по ключу выбирает shard; rebalance переносит partitions постепенно.

### Какой типичный failure mode связан с Шардирование?

Ключ `country` или текущая дата создаёт горячий shard. Cross-shard join, transaction и unique constraint становятся дорогими; изменение числа shard через `hash % N` перемещает почти все данные.

### Какие trade-offs важно назвать для Шардирование?

Сначала исчерпывают indexing, vertical scale и replicas. Sharding нужен при доказанном storage/write потолке; consistent hashing/virtual shards облегчают rebalance, но усложняют эксплуатацию.
