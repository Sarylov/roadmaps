---
title: Sharding
summary: Sharding — горизонтальный split данных по нескольким БД/нодам по shard key (userId, tenantId…).
---

## Для чего

Чтобы писать и хранить больше, чем тянет один primary.

## Пример

`shard = hash(userId) % N` → пользователи на разных Postgres. Запросы по userId идут в один шард.

## Примечание

Cross-shard join/транзакции болезненны. Выбор ключа критичен (hot shard). Решардинг дорог — планируйте заранее.
