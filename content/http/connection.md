---
title: WebSocket connection
summary: WebSocket connection — долгоживущее двунаправленное соединение: handshake по HTTP, затем кадры сообщений без повторных HTTP-запросов.
---

## Для чего

Чтобы получать и слать события в реальном времени (чат, котировки, уведомления) с меньшей задержкой, чем polling.

## Пример

`const ws = new WebSocket('wss://api/chat')`  
`onopen` → `send` / `onmessage` → при уходе `close`. За прокси нужен support Upgrade.

## Примечание

Переподключение и heartbeat — на приложении. При нестабильной сети без reconnect UX «замирает».
