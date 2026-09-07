---
title: Delivery guarantees
summary: Delivery guarantees — что брокер/клиент обещает про доставку: at-most-once, at-least-once, exactly-once (в узком смысле).
---

## Для чего

Чтобы выбрать модель под риск: дубликаты vs потери vs сложность.

## Пример

At-most-once: можно потерять при сбое.  
At-least-once: могут быть дубли → нужна идемпотентность.  
Exactly-once: дороже/ограниченнее (Kafka EOS в рамках своих API).

## Примечание

«Exactly-once» в маркетинге ≠ магия во всей системе end-to-end. На практике чаще at-least-once + idempotent consumer.
