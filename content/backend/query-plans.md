---
title: Query plans
summary: Query plan — дерево операторов, которым СУБД выполняет SQL: scans, joins, aggregates, sorts.
---

## Для чего

Чтобы читать EXPLAIN как карту: где дорого, какой join, нужен ли индекс.

## Пример

`Seq Scan → Nested Loop → Hash Join → Aggregate` — узлы плана; cost и rows на каждом.

## Примечание

Планировщик выбирает план по статистике и cost model. Один и тот же SQL может получить разные планы после `ANALYZE` или роста таблицы.
