---
title: Throughput
summary: Throughput — сколько операций в единицу времени (RPS, messages/sec, jobs/min).
---

## Для чего

Чтобы понимать нагрузку и запас до предела системы.

## Пример

Сервис держит 2k RPS на checkout. После релиза throughput падает при том же CPU — регрессия или троттлинг.

## Примечание

Высокий throughput при росте error rate — не успех. Смотрите вместе с latency и saturation.
