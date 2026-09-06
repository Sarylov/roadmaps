---
title: Consumer groups
summary: Consumer group распределяет партиции между экземплярами одного логического подписчика. Она даёт горизонтальный parallelism и failover, но rebalance влияет на latency и корректность.
---

## Зачем нужно

Группа позволяет каждому сообщению обрабатываться одним экземпляром данного приложения, сохраняя независимость других подписчиков.

## Как работает

Coordinator назначает partitions consumers; offset хранится на пару group+partition. При join, leave или изменении partitions происходит rebalance. Разные group id получают собственную копию потока, одинаковый group id конкурирует за работу.

## Практические нюансы

Offset commit делают после обработки или атомарно с доступным transactional boundary. Долгая обработка может превысить heartbeat/poll interval и вызвать новое назначение, пока старый consumer ещё работает. Cooperative rebalance и статическое membership уменьшают паузы.

## Что спрашивают

- Чем consumer group отличается от нескольких подписчиков?
- Почему после rebalance возможны дубликаты?
- Что ограничивает масштабирование группы?

## Ответы

### Чем consumer group отличается от нескольких подписчиков?

Consumers одной group делят partitions и работу. Разные groups читают поток независимо со своими offsets.

### Почему после rebalance возможны дубликаты?

Сообщение могло быть обработано, но offset не committed до потери assignment. Новый owner начнёт со старого offset; поэтому side effects идемпотентны.

### Что ограничивает масштабирование группы?

Число partitions, skew по ключам и скорость самой медленной partition. Добавление consumers сверх partitions throughput не увеличивает.
