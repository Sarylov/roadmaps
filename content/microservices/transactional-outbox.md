---
title: Transactional outbox
summary: Transactional outbox — в одной DB-транзакции с бизнес-данными пишут запись «событие в outbox»; отдельный процесс публикует в брокер.
---

## Для чего

Чтобы не получить dual-write: заказ в БД есть, а событие в Kafka потеряли (или наоборот).

## Пример

`BEGIN`: insert order + insert outbox(`OrderCreated`). `COMMIT`. Publisher читает outbox → Kafka → помечает sent.

## Примечание

Вместе с идемпотентным consumer закрывает типичный «reliable publish». Inbox/dedup на приёме дополняет картину.
