---
title: Content types
summary: Content-Type — заголовок, который говорит, в каком формате тело запроса или ответа (JSON, form-data, plain text…).
---

## Для чего

Чтобы сервер правильно парсил body, а клиент — ответ, без угадывания по байтам.

## Пример

`Content-Type: application/json` → `JSON.parse`.  
`multipart/form-data` → загрузка файлов.  
Неверный тип → `415 Unsupported Media Type` или тихий мусор в парсере.

## Примечание

`charset` важен для текста. Не путайте `Content-Type` запроса с `Accept` (что клиент хочет получить).
