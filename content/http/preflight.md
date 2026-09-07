---
title: Preflight
summary: Preflight — автоматический `OPTIONS`-запрос браузера перед «непростым» cross-origin запросом; сервер отвечает CORS-разрешениями.
---

## Для чего

Чтобы браузер узнал, можно ли слать метод/заголовки/JSON на другой origin.

## Пример

`POST` с `Content-Type: application/json` на другой домен → сначала `OPTIONS`, потом сам POST, если allow-headers/methods ок.

## Примечание

«Simple» GET/POST form-urlencoded без кастомных headers — без preflight. Preflight кэшируется (`Access-Control-Max-Age`).
