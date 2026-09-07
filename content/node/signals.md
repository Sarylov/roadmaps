---
title: Signals
summary: Signals — ОС-сигналы процессу (SIGTERM, SIGINT): просьба завершиться или прерваться.
---

## Для чего

Чтобы при деплое/остановке контейнера закрыть сервер и соединения gracefully, а не оборвать запросы посередине.

## Пример

```js
process.on('SIGTERM', async () => {
  await server.close()
  await db.end()
  process.exit(0)
})
```

## Примечание

Kubernetes шлёт `SIGTERM`, потом через `terminationGracePeriod` — `SIGKILL`. Нужно успеть уложиться в grace period.
