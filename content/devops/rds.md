---
title: RDS
summary: RDS — управляемая реляционная БД в AWS (Postgres/MySQL…): патчи, бэкапы, Multi-AZ по кнопке.
---

## Для чего

Чтобы не админить Postgres на EC2 вручную и быстрее получить HA/бэкапы.

## Пример

RDS Postgres Multi-AZ + read replica. App в private subnet, доступ только из SG приложения.

## Примечание

Меньше суперпользовательского контроля (расширения, тюнинг). Стоимость и лимиты инстанса; connection pooling всё равно нужен.
