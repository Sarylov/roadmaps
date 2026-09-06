---
title: CORS
summary: Cross-Origin Resource Sharing — браузерный механизм: когда страница с origin A может читать ответ API с origin B. Сервер разрешает это заголовками; без них JS не увидит тело ответа.
---

## Зачем нужно

Фронт на `localhost:5173`, API на `api.example.com` — классика. Без понимания CORS «чинят» кривым `*` с credentials или путают с CSRF.

## Как работает

**Origin** = scheme + host + port. Cross-origin XHR/`fetch` браузер либо блокирует чтение ответа, либо сначала шлёт **preflight** (`OPTIONS`), если запрос «непростой» (кастомные headers, метод не GET/POST/HEAD, atypical Content-Type).

Сервер отвечает, например:

- `Access-Control-Allow-Origin: https://app.example.com` (не `*` вместе с credentials)
- `Access-Control-Allow-Credentials: true`
- `Access-Control-Allow-Headers` / `Methods` для preflight

MDN: [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS).

## Что спрашивают

- Что такое simple request и когда нужен preflight?
- Почему нельзя `Allow-Origin: *` с cookies?
- CORS защищает сервер или браузер?

## Ответы

### Что такое simple request и когда нужен preflight?

**Simple** — метод GET/POST/HEAD + «простые» заголовки + простой Content-Type (`text/plain`, `multipart/form-data`, `application/x-www-form-urlencoded`). Иначе браузер сначала шлёт **OPTIONS** (preflight): «можно ли такой запрос?». Ответ preflight кэшируется (`Access-Control-Max-Age`).

### Почему нельзя `Allow-Origin: *` с cookies?

Спека запрещает: при `credentials: 'include'` сервер должен вернуть **конкретный** origin, не `*`. Иначе браузер не отдаст ответ JS. Это мешает случайно «открыть всем» cookie-сессии.

### CORS защищает сервер или браузер?

**Браузер / пользователя**: чужой сайт не читает ответы вашего API из JS жертвы. Сервер по-прежнему может принять curl/Postman без CORS — это не firewall. CSRF через form/simple request CORS не отменяет.
