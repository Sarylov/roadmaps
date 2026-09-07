---
title: Resource limits
summary: Resource requests/limits — заявка и потолок CPU/памяти контейнера в K8s для scheduling и изоляции.
---

## Для чего

Чтобы планировщик знал, куда класть под, и шумный сосед не съел всю ноду.

## Пример

`requests: {cpu: 100m, memory: 256Mi}`, `limits: {memory: 512Mi}`. OOMKill при превышении memory limit.

## Примечание

Без requests — плохой bin-pack и непредсказуемый HPA. CPU limit может давать throttle; memory limit жёстче.
