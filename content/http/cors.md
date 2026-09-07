---
title: CORS
summary: CORS — браузерный механизм: какие чужие origins могут читать ответ вашего API из JS (через заголовки сервера).
---

## Для чего

Чтобы легитимный фронт (`app.example.com`) ходил на API, а произвольный сайт не читал ответы с credentials.

## Пример

`Access-Control-Allow-Origin: https://app.example.com` + при cookies — `Allow-Credentials: true` (не `*`).

## Примечание

CORS не заменяет auth. Preflight (`OPTIONS`) — для «непростых» запросов. Сервер без браузера CORS не ограничивает.
