---
title: Delivery semantics
summary: Delivery semantics — контракт «как именно» доставляем и коммитим: ack, offset commit, идемпотентный produce/consume, транзакции брокера.
---

## Для чего

Чтобы согласовать поведение producer, брокера и consumer под требования бизнеса (деньги vs метрики).

## Пример

Kafka: produce acks=all + idempotent producer; consumer commit после записи в БД (или transactional outbox/EOS).

## Примечание

Семантика на стороне брокера не спасает dual-write в вашу БД. Проектируйте эффект consumer'а под at-least-once по умолчанию.
