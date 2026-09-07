---
title: Pagination
summary: Pagination — отдача списка порциями: offset/limit или cursor/keyset, а не всей таблицы сразу.
---

## Для чего

Чтобы держать latency и память под контролем на больших коллекциях.

## Пример

Offset: `GET /orders?limit=20&offset=40`  
Cursor: `GET /orders?limit=20&cursor=eyJpZCI6MTAwfQ`

## Примечание

Глубокий offset дорожает на больших таблицах. Cursor стабильнее при вставках; total count часто считают отдельно/приближённо.
