---
title: HTTP headers
summary: HTTP headers передают metadata запроса и ответа: представление, caching, authentication, routing и tracing. Имена регистронезависимы, но смысл и возможность объединения зависят от поля.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

`Content-Type` описывает body, `Accept` — желаемый response; `Authorization` несёт credentials, `Cache-Control` — политику cache, `Vary` — какие request headers меняют представление. Hop-by-hop headers proxy не пересылает дальше.

## Что спрашивают

- Как работает HTTP headers на практике?
- Какой типичный failure mode связан с HTTP headers?
- Какие trade-offs важно назвать для HTTP headers?

## Ответы

### Как работает HTTP headers на практике?

`Content-Type` описывает body, `Accept` — желаемый response; `Authorization` несёт credentials, `Cache-Control` — политику cache, `Vary` — какие request headers меняют представление. Hop-by-hop headers proxy не пересылает дальше.

### Какой типичный failure mode связан с HTTP headers?

Доверие `X-Forwarded-For` от прямого клиента подменяет IP; неправильный `Vary` смешивает языки/авторизацию в cache. Большие headers приводят к 431 и могут использоваться для DoS.

### Какие trade-offs важно назвать для HTTP headers?

Приложение доверяет forwarded headers только от известных proxies. Секреты не помещают в URL, чувствительные response помечают `private/no-store`, а custom metadata ограничивают размером и документируют.
