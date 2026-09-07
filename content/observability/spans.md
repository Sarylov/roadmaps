---
title: Spans
summary: Span — один отрезок работы в трейсе: операция + timestamps + tags/attributes (например `GET /orders`, `db.query`).
---

## Для чего

Чтобы видеть, где внутри запроса ушло время: ваш код, БД, HTTP-клиент.

## Пример

Корневой span HTTP → child `OrdersService.create` → child `INSERT orders`. В UI waterfall по длительностям.

## Примечание

Слишком много мелких span = шум и cost. Ставьте осмысленные имена и ключевые attributes (`http.status_code`).
