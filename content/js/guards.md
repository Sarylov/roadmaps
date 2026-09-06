---
title: Guards в NestJS
summary: Guard решает, разрешено ли выполнить handler, используя `ExecutionContext`. Это место для authentication/authorization, но не для валидации body или изменения результата.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Nest запускает global guards, затем guards controller и method; `canActivate` возвращает boolean, Promise или Observable. Metadata из custom decorators читают через `Reflector`, а context переключают для HTTP, GraphQL или RPC.

## Что спрашивают

- Как работает Guards в NestJS на практике?
- Какой типичный failure mode связан с Guards в NestJS?
- Какие trade-offs важно назвать для Guards в NestJS?

## Ответы

### Как работает Guards в NestJS на практике?

Nest запускает global guards, затем guards controller и method; `canActivate` возвращает boolean, Promise или Observable. Metadata из custom decorators читают через `Reflector`, а context переключают для HTTP, GraphQL или RPC.

### Какой типичный failure mode связан с Guards в NestJS?

Проверка только наличия JWT без audience, issuer и актуальных прав даёт ложную авторизацию. Guard, который ходит в БД на каждый request без cache/батчинга, становится bottleneck; порядок нескольких guards нельзя оставлять неявным.

### Какие trade-offs важно назвать для Guards в NestJS?

Authentication guard устанавливает проверенного principal, authorization guard проверяет policy на ресурс. Валидация формы данных относится к pipe, логирование/тайминг — к interceptor, отображение ошибки — к filter.
