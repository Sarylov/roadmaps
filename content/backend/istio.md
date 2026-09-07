---
title: Istio
summary: Istio — service mesh на Envoy sidecar: трафик, mTLS, политики, телеметрия между сервисами в кластере.
---

## Для чего

Чтобы стандартизировать retries, TLS, canary и observability без SDK в каждом сервисе.

## Пример

VirtualService/DestinationRule: 10% на v2. PeerAuthentication — mTLS strict между сервисами.

## Примечание

Мощный и тяжёлый operationally. Малым командам часто хватает Ingress + app libraries; mesh — когда сервисов и политик много.
