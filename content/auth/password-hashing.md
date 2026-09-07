---
title: Password hashing
summary: Password hashing — пароль в БД хранят как хеш (bcrypt/argon2/scrypt), а не plaintext и не обратимое шифрование.
---

## Для чего

Чтобы при утечке таблицы паролей злоумышленник не получил готовые пароли пользователей.

## Пример

Регистрация: `hash = await argon2.hash(password)` → в БД только hash.  
Логин: `argon2.verify(hash, password)`.

## Примечание

Соль внутри современных алгоритмов. Не используйте MD5/SHA alone для паролей. Сложность (cost/memory) подбирают под latency логина.
