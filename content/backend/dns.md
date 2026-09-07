---
title: DNS
summary: DNS в сервисах — резолв имени (`orders.default.svc`) в IP endpoints; в Kubernetes основной способ service discovery.
---

## Для чего

Чтобы клиенты ходили на стабильное имя, а не на меняющиеся IP подов.

## Пример

`http://payments:8080` в cluster DNS → Service VIP/Endpoints. Снаружи — внешний DNS на LB.

## Примечание

TTL и кэш DNS могут кратко отдавать старые IP. Headless service — когда нужны прямые pod IP (StatefulSet).
