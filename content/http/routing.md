---
title: Routing
summary: Routing на gateway — решение, на какой backend/сервис отправить входящий запрос по path/host/headers.
---

## Для чего

Чтобы единая точка входа распределяла трафик по микросервисам без знания клиента о всех URL внутри.

## Пример

`/api/orders/*` → Orders, `/api/users/*` → Users. Canary: 5% на `orders-v2` по header.

## Примечание

Gateway routing ≠ бизнес-логика. Держите правила простыми; сложную оркестрацию — в BFF/сервисах.
