---
title: Hashes
summary: Redis Hash — словарь поле→значение под одним ключом (`HSET user:1 email …`).
---

## Для чего

Чтобы хранить объект с полями и читать/менять отдельные поля без перезаписи всего JSON.

## Пример

`HSET session:abc userId 1 role admin`  
`HGET session:abc role` → `admin`.

## Примечание

TTL ставится на весь hash-ключ, не на поле. Много крошечных hash vs один большой — trade-off памяти и удобства.
