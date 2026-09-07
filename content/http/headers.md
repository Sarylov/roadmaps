---
title: Headers
summary: Headers — метаданные HTTP-запроса/ответа: Content-Type, Authorization, Cache-Control, Cookie и др.
---

## Для чего

Чтобы передать тип тела, кэш, авторизацию и договорённости клиента с сервером отдельно от payload.

## Пример

```http
GET /api/users HTTP/1.1
Authorization: Bearer <token>
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: private, max-age=60
```

## Примечание

Не логируйте `Authorization`/`Cookie` целиком. Hop-by-hop заголовки (Connection…) не destinат end-to-end как остальные.
