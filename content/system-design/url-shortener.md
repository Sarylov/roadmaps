---
title: URL shortener
summary: URL shortener — сервис: длинный URL → короткий код; по коду — быстрый redirect на оригинал.
---

## Для чего

Практика дизайна: высокий read RPS, генерация уникальных ключей, хранение mapping, аналитика кликов.

## Пример

`POST /shorten` → `https://sho.rt/aB1x`. `GET /aB1x` → `302` + Location. Кэш кода на edge/Redis; clicks — async в очередь.

## Примечание

Ключи: hash/base62 counter. Боритесь с коллизиями. Writes << reads → кэш и реплики. Не кладите огромный URL как PK без нужды.
