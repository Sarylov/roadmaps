---
title: process
summary: process — глобальный объект Node о текущем процессе: env, argv, pid, сигналы, exit code.
---

## Для чего

Чтобы читать конфиг, корректно завершаться и понимать, в каком окружении крутится сервис.

## Пример

```js
console.log(process.env.NODE_ENV)
process.on('SIGTERM', () => shutdown().then(() => process.exit(0)))
```

## Примечание

Необработанные `uncaughtException` / `unhandledRejection` — последний рубеж; в проде обычно логируют и планируют рестарт, а не «глотают» молча.
