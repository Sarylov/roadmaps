---
title: gRPC
summary: gRPC — RPC поверх HTTP/2 с Protobuf: строгие контракты, стримы, низкая латентность между сервисами.
---

## Для чего

Чтобы эффективно связать внутренние сервисы с типизированным контрактом `.proto`.

## Пример

`OrderService.CreateOrder(CreateOrderRequest) returns (Order)`. codegen клиент/сервер из proto.

## Примечание

Удобен service-to-service; для публичного браузерного API чаще REST/JSON. Нужна версия proto и load balancing HTTP/2.
