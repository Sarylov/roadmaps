---
title: WebSocket events
summary: WebSocket events — `open`, `message`, `error`, `close`: жизненный цикл сокета и входящие кадры данных.
---

## Для чего

Чтобы корректно подписаться на поток и отличить данные от обрыва связи.

## Пример

`ws.addEventListener('message', e => JSON.parse(e.data))`  
`close` с кодом 1006 — аномальное закрытие; планируйте reconnect.

## Примечание

Не путать с Node EventEmitter или DOM click. Бинарные кадры — `Blob`/`ArrayBuffer`, не всегда строка JSON.
