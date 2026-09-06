---
title: CSRF
summary: Cross-Site Request Forgery — браузер жертвы сам отправляет запрос на ваш сайт с cookies, хотя пользователь открыл другой сайт. Сервер думает, что действие осознанное.
video: vRBihr41JTo
image: https://commons.wikimedia.org/wiki/Special:FilePath/Http-request.png
image_credit: "Схема HTTP request (Wikimedia). Видео: Computerphile — Cross Site Request Forgery (Tom Scott)"
---

## Зачем нужно

Понимание CSRF объясняет SameSite cookies, CSRF-токены и почему «просто JWT в cookie» недостаточно без доп. защиты.

## Как работает

1. Пользователь залогинен на `bank.com` (есть cookie сессии).
2. Открывает `evil.com`.
3. Страница делает `POST bank.com/transfer` — браузер приложит cookies.
4. Банк выполнит перевод, если нет проверки origin/токена.

## Защита

- CSRF-токен (синхронный/двойной submit).
- `SameSite=Lax/Strict` на cookies.
- Проверка `Origin` / `Referer`.
- Для API чаще: token не в cookie (Authorization header) + CORS.

## Что спрашивают

- XSS vs CSRF одной фразой?
- Помогает ли CORS от CSRF?
- Зачем SameSite, если есть CSRF-токен?

## Ответы

### XSS vs CSRF одной фразой?

XSS — «выполняю свой код на твоём сайте»; CSRF — «заставляю твой браузер сам сходить на твой сайт с твоей cookie».

### Помогает ли CORS от CSRF?

**Почти нет** для классического cookie-based CSRF. Простая форма/`img`/`navigator.sendBeacon` делают **simple request** без preflight; браузер всё равно отправит cookies на целевой origin. CORS решает, может ли **JS злоумышленника прочитать ответ**, а не запрещает сам факт cross-site запроса с cookies.

### Зачем SameSite, если есть CSRF-токен?

Defense in depth. **SameSite=Lax/Strict** сильно режет cross-site отправку cookies и закрывает многие CSRF без токена. Токен защищает случаи, где SameSite недостаточен (старые браузеры, `None` + Secure для cross-site сценариев, неcookie-auth edge cases). На практике часто используют оба.
