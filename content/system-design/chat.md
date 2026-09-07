---
title: Chat
summary: Chat system — доставка сообщений в реальном времени между пользователями/комнатами с историей и online-присутствием.
---

## Для чего

Практика: WebSocket/long-poll, фан-out, хранение истории, порядок сообщений, масштабирование соединений.

## Пример

Клиент держит WS к gateway; сообщения в Kafka/каналу комнаты; history в Cassandra/Postgres; presence в Redis.

## Примечание

1:1 vs group fan-out по-разному бьют по записи. Offline push — отдельный канал. Exactly-once UI обычно at-least-once + dedup на клиенте.
