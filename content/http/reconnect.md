---
title: Reconnect
summary: Reconnect — повторное установление WebSocket (или аналога) после обрыва сети с backoff.
---

## Для чего

Чтобы клиент переживал Wi‑Fi/прокси-обрывы и снова получал события без ручного F5.

## Пример

Обрыв → ждать 1s, 2s, 4s… (exponential backoff + jitter) → новый handshake → при необходимости snapshot состояния / resume с cursor.

## Примечание

Без jitter все клиенты бьют сервер синхронно (thundering herd). Сообщения после reconnect должны быть идемпотентны или с порядком/курсором.
