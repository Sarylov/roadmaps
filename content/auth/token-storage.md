---
title: Token storage
summary: Token storage — где держать access/refresh на клиенте: memory, sessionStorage, localStorage, httpOnly cookie.
---

## Для чего

Чтобы балансировать удобство «остаться в системе» и риск XSS-кражи токена.

## Пример

Access в memory / короткоживущий; refresh в httpOnly `Secure` `SameSite` cookie.  
localStorage проще, но любой XSS читает токен.

## Примечание

Нет идеального варианта: httpOnly защищает от JS-чтения, но нужен CSRF-контроль для cookie-сессий. Не кладите долгоживущий access в localStorage без жёсткого CSP.
