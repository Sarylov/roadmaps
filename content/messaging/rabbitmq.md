---
title: RabbitMQ
summary: RabbitMQ — брокер сообщений: producers публикуют в exchange, messages маршрутизируются в queues, consumers их забирают.
---

## Для чего

Чтобы связать сервисы асинхронно с гибкой маршрутизацией (direct/topic/fanout) и ack/retry.

## Пример

Order service публикует `order.created` в topic exchange → queue `email` и `analytics` получают копии по routing key.

## Примечание

Силён в task queues и сложных routing. Для огромного log/event stream с replay чаще смотрят на Kafka. Обязательны durable queue + persistent message + ack, если нельзя терять.
