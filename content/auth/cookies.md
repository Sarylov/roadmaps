---
title: Cookies
summary: Cookie — пара name/value, которую браузер хранит и сам прикладывает к подходящим запросам по Domain, Path, Secure, SameSite и сроку жизни.
---

## Для чего

Чтобы держать сессию или refresh-токен между запросами без ручной передачи с каждой страницы.

## Пример

```http
Set-Cookie: session=abc; HttpOnly; Secure; SameSite=Lax; Path=/
```

Браузер дальше шлёт `Cookie: session=abc` на ваш origin.

## Примечание

`HttpOnly` скрывает от JS (сложнее украсть при XSS). `SameSite` режет CSRF. Cookie-auth для mutate-запросов всё равно нуждается в CSRF-защите.
