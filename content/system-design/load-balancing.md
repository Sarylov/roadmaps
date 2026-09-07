---
title: Load balancing
summary: Load balancing — распределение входящих запросов по нескольким инстансам сервиса (round-robin, least-conn, L4/L7).
---

## Для чего

Чтобы масштабировать горизонтально и переживать падение одного инстанса.

## Пример

Nginx `upstream api { server a:3000; server b:3000; }` — трафик на оба. Healthcheck убирает мёртвый.

## Примечание

Sticky sessions нужны, если state в памяти процесса — лучше вынести session в Redis. LB не чинит медленный код, только делит нагрузку.
