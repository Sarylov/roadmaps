---
title: CloudWatch
summary: CloudWatch — мониторинг AWS: метрики, логи, алерты, дашборды по ресурсам и приложениям.
---

## Для чего

Чтобы видеть CPU RDS, ошибки Lambda, кастомные метрики API и будить on-call.

## Пример

Alarm: `5XX > threshold` → SNS → PagerDuty. Логи приложения → CloudWatch Logs → filter metric.

## Примечание

Кардинальность кастомных метрик = деньги. Для трейсов часто X-Ray/OTel отдельно; CloudWatch — база метрик/логов в AWS.
