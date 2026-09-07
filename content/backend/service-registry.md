---
title: Service registry
summary: Service registry — каталог живых инстансов сервисов (имя → адреса), куда клиенты/балансировщики ходят за discovery.
---

## Для чего

Чтобы не хардкодить IP подов и узнавать, куда слать трафик после scale/restarts.

## Пример

Consul/Eureka: инстанс `orders` регистрируется на старте. Клиент получает список и балансирует. В K8s роль часто у DNS+Endpoints.

## Примечание

Нужен heartbeat/health: мёртвый инстанс вычёркивают. Stale registry → 502.
