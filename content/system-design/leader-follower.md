---
title: Leader/follower
summary: Leader/follower (primary/replica) — одна нода принимает writes (leader), остальные копируют и часто служат reads.
---

## Для чего

Чтобы упростить consistency записи: один источник порядка, реплики догоняют.

## Пример

MySQL/Postgres streaming replication; Raft leader для консенсуса метаданных.

## Примечание

Смена лидера при failover — окно риска. Клиенты должны уметь переоткрывать соединения на нового primary.
