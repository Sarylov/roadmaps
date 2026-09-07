---
title: Interceptors (NestJS)
summary: Interceptor в NestJS — AOP вокруг handler: код до/после вызова, можно менять Observable результата.
---

## Для чего

Чтобы централизовать логирование, маппинг ответа, кэш, таймауты без копипасты в каждом методе.

## Пример

`TransformInterceptor` оборачивает результат в `{ data }`.  
`LoggingInterceptor` пишет duration запроса.

## Примечание

Порядок: guards → interceptors (before) → pipes → handler → interceptors (after) → exception filters при ошибке.
