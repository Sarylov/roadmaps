---
title: Dedup keys
summary: Dedup key — ключ дедупликации, по которому consumer/хранилище понимает, что это повтор того же логического сообщения.
---

## Для чего

Чтобы при at-least-once не применить побочный эффект дважды.

## Пример

Таблица `processed_events(event_id PRIMARY KEY)`: вставил id — обработал; повторный insert conflict — skip.

## Примечание

Ключ должен быть стабильным от producer (`eventId` / idempotency-key), не случайный UUID на каждой попытке retry.
