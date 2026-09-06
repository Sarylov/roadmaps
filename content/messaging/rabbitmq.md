---
title: RabbitMQ
summary: "RabbitMQ: Брокер очередей: exchanges/queues/bindings. Важно на собесе и в проде в контексте «Message Brokers»."
---

## Зачем нужно

База уровня CORE. Асинхронное взаимодействие между сервисами и worker-процессами. Delivery guarantees, порядок и идемпотентность consumer’а.

## Как работает

**RabbitMQ**: Брокер очередей: exchanges/queues/bindings.

ack/nack/requeue семантика.

Потеря сообщений при неверной durability/ack.

## Что спрашивают

- Что такое RabbitMQ и какую задачу закрывает?
- Какие ключевые абстракции RabbitMQ нужно знать на собесе?
- Какие operational pitfalls у RabbitMQ?

## Ответы

### Что такое RabbitMQ и какую задачу закрывает?

Брокер очередей: exchanges/queues/bindings. Опишите место в стеке «Message Brokers». Потеря сообщений при неверной durability/ack.

### Какие ключевые абстракции RabbitMQ нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. ack/nack/requeue семантика.

### Какие operational pitfalls у RabbitMQ?

ack/nack/requeue семантика. Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
