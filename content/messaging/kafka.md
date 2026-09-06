---
title: Kafka
summary: "Kafka: Лог партиций, высокий throughput, replay. Важно на собесе и в проде в контексте «Message Brokers»."
---

## Зачем нужно

База уровня CORE. Асинхронное взаимодействие между сервисами и worker-процессами. Delivery guarantees, порядок и идемпотентность consumer’а.

## Как работает

**Kafka**: Лог партиций, высокий throughput, replay.

Ordering внутри партиции.

Consumer group и offset commit аккуратность.

## Что спрашивают

- Что такое Kafka и какую задачу закрывает?
- Какие ключевые абстракции Kafka нужно знать на собесе?
- Какие operational pitfalls у Kafka?

## Ответы

### Что такое Kafka и какую задачу закрывает?

Лог партиций, высокий throughput, replay. Опишите место в стеке «Message Brokers». Consumer group и offset commit аккуратность.

### Какие ключевые абстракции Kafka нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. Ordering внутри партиции.

### Какие operational pitfalls у Kafka?

Ordering внутри партиции. Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
