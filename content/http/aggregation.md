---
title: Aggregation
summary: Aggregation на gateway/BFF — собрать несколько внутренних вызовов в один ответ клиенту.
---

## Для чего

Чтобы мобильный/web клиент не делал 10 round-trip'ов за один экран.

## Пример

`GET /bff/home` внутри дергает catalog + recommendations + user → один JSON для UI.

## Примечание

Агрегация тянет latency самого медленного dependency (если параллелить — лучше). Кэш и partial failure (fallback полей) обязательны в дизайне.
