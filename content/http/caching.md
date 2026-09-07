---
title: Caching
summary: HTTP caching — правила, когда ответ можно взять из кэша (браузер/CDN/прокси) вместо повторного похода на origin.
---

## Для чего

Чтобы снизить latency и нагрузку на сервер для повторяющихся чтений.

## Пример

```http
Cache-Control: public, max-age=3600
ETag: "v42"
```

Клиент/CDN при `If-None-Match: "v42"` может получить `304 Not Modified`.

## Примечание

Персонализированные ответы (`Authorization`, cookie-сессия) нельзя слепо класть в `public` кэш — риск утечки. Смотрите `Vary`, `private`/`no-store`.
