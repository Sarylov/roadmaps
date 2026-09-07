---
title: Error format
summary: Error format — единый JSON-контракт ошибок API: код/тип, сообщение, детали по полям, корреляция.
---

## Для чего

Чтобы клиенты одинаково парсили сбои и поддержка могла найти запрос по id.

## Пример

```json
{
  "type": "validation_error",
  "message": "Invalid body",
  "fields": { "email": "required" },
  "requestId": "01H…"
}
```

Плюс подходящий HTTP status (`400`/`409`/`500`).

## Примечание

Не отдавайте stack trace наружу. Domенные коды ≠ всегда HTTP status один-в-один — документируйте оба слоя.
