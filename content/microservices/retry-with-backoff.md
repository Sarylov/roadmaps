---
title: Retry with backoff
summary: Retry with backoff — повторы с увеличивающейся паузой (часто + jitter), а не сразу пачкой.
---

## Для чего

Чтобы пережить кратковременный сбой, не устроив thundering herd на восстанавливающийся сервис.

## Пример

Retry через 100ms, 200ms, 400ms… с random jitter. После N попыток — fail/DLQ.

## Примечание

Retry только на идемпотентных/безопасных операциях и transient ошибках. На 400 validation — бессмысленно.
