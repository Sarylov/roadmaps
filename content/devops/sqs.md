---
title: SQS
summary: SQS — управляемая очередь сообщений AWS: producers кладут сообщения, consumers забирают с at-least-once семантикой.
---

## Для чего

Чтобы развязать сервисы и сгладить пики без своего Rabbit/Kafka на старте.

## Пример

API кладёт job в SQS → worker polling → обработка → delete. DLQ после N receive.

## Примечание

Visibility timeout ≈ «lock» на время обработки. Standard — высокая throughput, дубли; FIFO — порядок и дедуп в пределах ограничений. Не замена event log с долгим replay как у Kafka.
