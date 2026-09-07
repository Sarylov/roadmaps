---
title: WebSocket connections
summary: WebSocket connection — долгоживущее двустороннее соединение поверх HTTP upgrade для push-событий в реальном времени.
---

## Для чего

Чтобы сервер сам пушил обновления (чат, котировки, статусы), а не заставлял клиента постоянно поллить.

## Пример

Клиент: `new WebSocket('wss://api.example.com/ws')`  
после handshake шлёт/принимает фреймы, пока соединение живо.

## Примечание

Нужны auth на upgrade, таймауты прокси и план reconnect. Это не «замена REST» для всех CRUD.
