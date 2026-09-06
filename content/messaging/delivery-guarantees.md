---
title: Гарантии доставки сообщений
summary: At-most-once, at-least-once и effectively-once описывают компромисс между потерей и повторной обработкой. End-to-end exactly-once нельзя получить одной настройкой брокера.
---

## Зачем нужно

Корректность определяется границей: публикация, broker storage, consumer offset и внешний side effect должны рассматриваться вместе.

## Как работает

At-most-once подтверждает до обработки: возможна потеря, но нет retry-дубликата. At-least-once подтверждает после: сообщение не теряется при типичных сбоях, но может повториться. Exactly-once в брокере ограничено его транзакционным контуром; запись в стороннюю БД требует idempotency/inbox или общей транзакции.

## Практические нюансы

Ack/offset фиксируют только после durable side effect. Producer использует outbox или idempotent publish; consumer хранит message id/processed marker атомарно с бизнес-изменением. Retry policy имеет backoff и DLQ.

## Что спрашивают

- Почему at-least-once создаёт дубликаты?
- Что означает exactly-once в Kafka?
- Как сделать consumer идемпотентным?

## Ответы

### Почему at-least-once создаёт дубликаты?

Consumer может выполнить side effect и упасть до ack. Broker не знает об успехе и доставляет сообщение снова.

### Что означает exactly-once в Kafka?

Транзакционный producer и read-process-write могут атомарно связать Kafka offsets и записи в Kafka. Это не делает внешнюю HTTP-оплату или произвольную БД exactly-once.

### Как сделать consumer идемпотентным?

Использовать стабильный event/idempotency id и атомарно записывать inbox marker с бизнес-изменением; повтор видит marker и не дублирует эффект.
