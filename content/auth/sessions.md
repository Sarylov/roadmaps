---
title: Sessions
summary: Session — сервер помнит факт входа по session id (обычно в cookie); данные сессии лежат в store (память, Redis, БД).
---

## Для чего

Чтобы после логина узнавать пользователя на следующих запросах без повторного ввода пароля.

## Пример

Login → сервер создаёт `sid` → `Set-Cookie: sid=...; HttpOnly`.  
Дальше каждый запрос: cookie → lookup в Redis → `req.user`.

## Примечание

Храните на клиенте только id, не весь профиль. Нужны `Secure`/`HttpOnly`/`SameSite`, ротация и инвалидация при logout.
