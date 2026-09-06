---
title: Dead Letter Queue
summary: DLQ хранит сообщения, которые не удалось обработать после заданной политики retry. Это карантин для расследования и replay, а не автоматическое решение ошибок.
---

## Зачем нужно

Без DLQ poison message может бесконечно блокировать partition/queue или создавать дорогой retry storm.

## Как работает

Consumer классифицирует ошибку: transient идёт в retry с backoff, permanent/исчерпавшая попытки — в DLQ вместе с original payload и metadata: topic, offset, attempts, error, trace id. Перемещение должно не приводить к тихой потере исходного сообщения.

## Практические нюансы

Нужны alert, owner, retention, доступ с учётом PII и инструмент controlled replay. Перед replay исправляют причину, сохраняют порядок там, где он важен, и обеспечивают идемпотентность. Размер DLQ — симптом качества, не KPI успеха.

## Что спрашивают

- Какие ошибки отправлять в DLQ?
- Что нужно хранить вместе с сообщением?
- Как безопасно переиграть DLQ?

## Ответы

### Какие ошибки отправлять в DLQ?

Невалидная схема, нарушенный бизнес-инвариант или transient error после исчерпания retry budget. Auth outage или timeout сначала требуют backoff, а не мгновенного карантина всех сообщений.

### Что нужно хранить вместе с сообщением?

Original payload без повреждения, headers, source topic/partition/offset, timestamps, attempts, exception category, consumer version и correlation id.

### Как безопасно переиграть DLQ?

Выбрать причину/диапазон, исправить consumer или данные, replay с rate limit в отдельный поток и наблюдать эффект. Consumer и side effects должны быть идемпотентны.
