---
title: Versioning
summary: Versioning API — явная схема эволюции контракта (URL /header / media type), чтобы не ломать старых клиентов.
---

## Для чего

Чтобы выпускать breaking changes, пока старые клиенты ещё живы.

## Пример

`/v1/users` и `/v2/users`  
или заголовок `Accept: application/vnd.myapi.v2+json`.

## Примечание

Каждая активная версия — стоимость поддержки. Нужна политика deprecation и срок отключения.
