---
title: crypto
summary: crypto — криптографические примитивы Node: хеши, HMAC, random, шифрование, verify подписей.
---

## Для чего

Чтобы безопасно считать пароли/токены, генерировать секреты и проверять подписи, а не через `Math.random`.

## Пример

```js
import { randomBytes, createHash, timingSafeEqual } from 'node:crypto'
randomBytes(32)
createHash('sha256').update('data').digest('hex')
```

## Примечание

Сравнение секретов — `timingSafeEqual`. Пароли — dedicated KDF (scrypt/argon2/bcrypt), не голый SHA. Часть операций грузит thread pool.
