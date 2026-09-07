---
title: Metrics
summary: Metrics — числовые ряды во времени (counters, gauges, histograms): RPS, CPU, длительности, размеры очередей.
---

## Для чего

Чтобы строить дашборды и алерты по агрегатам дешевле, чем по полным логам/трейсам.

## Пример

Prometheus: `http_request_duration_seconds` histogram → p95 в Grafana; alert на error rate.

## Примечание

Cardinality взрывается от high-cardinality labels (`userId` на метрике). Метрики — «что», трейсы/логи — «почему».
