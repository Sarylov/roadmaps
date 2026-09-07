---
title: Filters (NestJS)
summary: Exception filter в NestJS — ловит исключения и формирует HTTP-ответ (статус, тело ошибки).
---

## Для чего

Чтобы ошибки домена/инфраструктуры превращались в стабильный API error format, а не в сырой stack.

## Пример

`HttpExceptionFilter`: `NotFoundException` → `404` + `{ message, code }`. Непойманное → `500` без внутренностей.

## Примечание

Фильтры бывают глобальные, на контроллер или метод. Бизнес-ошибки лучше кидать типизированными exceptions, а не `throw 'string'`.
