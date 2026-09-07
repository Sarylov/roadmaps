---
title: Payment service
summary: Payment service — приём и учёт платежей: идемпотентность, точная денежная арифметика, интеграция с провайдером, ledger.
---

## Для чего

Практика критичного write-path: дубли, reverse/refund, аудит, строгая consistency там, где деньги.

## Пример

`POST /charge` + Idempotency-Key → запись intent → вызов Stripe → ledger entry. Webhook подтверждает статус асинхронно.

## Примечание

Деньги — integer minor units, не float. Exactly-once эффект через идемпотентность + ledger. Reconciliation с провайдером обязателен.
