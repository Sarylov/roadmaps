---
title: CSRF
summary: CSRF (Cross-Site Request Forgery) — сайт злоумышленника заставляет браузер жертвы отправить запрос на ваш origin с её cookies.
---

## Для чего

Чтобы state-changing запросы (POST перевод денег) нельзя было вызвать «с чужой страницы» от имени залогиненного пользователя.

## Пример

Жертва залогинена на bank.com. На evil.com — форма POST на bank.com/transfer: браузер приложит cookie сессии.

## Примечание

Защита: SameSite cookies, CSRF-token, для SPA часто Bearer не в cookie. GET не должен менять состояние.
