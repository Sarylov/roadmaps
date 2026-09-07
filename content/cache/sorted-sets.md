---
title: Sorted sets
summary: Redis Sorted Set (ZSET) — множество уникальных members с score; порядок по score (лидерборды, очереди по времени).
---

## Для чего

Чтобы быстро брать топ-N, диапазоны по score и rank элемента.

## Пример

`ZADD leaderboard 1500 player:1`  
`ZREVRANGE leaderboard 0 9 WITHSCORES` — топ-10.

## Примечание

Один member — один score (повторный `ZADD` обновляет). Для delayed jobs часто score = timestamp выполнения.
