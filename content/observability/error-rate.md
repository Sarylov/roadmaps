---
title: Error rate
summary: Error rate — доля неуспешных операций (5xx, failed jobs) от общего числа за окно времени.
---

## Для чего

Чтобы быстро ловить деградации и алертить до жалоб пользователей.

## Пример

`rate(http_requests_errors[5m]) / rate(http_requests[5m])` > 1% → page. Отдельно бизнес-ошибки 4xx, если они ожидаемы.

## Примечание

Не мешайте client errors и server errors без нужды. SLO часто на success rate / availability.
