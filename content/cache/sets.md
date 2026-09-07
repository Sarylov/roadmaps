---
title: Sets
summary: Redis Set — неупорядоченное множество уникальных строк; операции union/intersect/add/remove за O(1)–O(N).
---

## Для чего

Чтобы хранить уникальные id (теги, онлайн-юзеры, «кто лайкнул») и быстро проверять membership.

## Пример

`SADD online users:42`  
`SISMEMBER online users:42` → 1.  
`SINTER` — пересечение аудиторий.

## Примечание

Нет порядка и дубликатов. Нужен score/ранжирование — Sorted Set. Большие set'ы на `SMEMBERS` могут тормозить — пагинация/`SSCAN`.
