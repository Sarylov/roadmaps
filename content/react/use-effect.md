---
title: useEffect
summary: useEffect — хук побочных эффектов: подписки, fetch, DOM после отрисовки; cleanup при размонтировании/смене deps.
---

## Для чего

Чтобы синхронизировать React с внешним миром, не делая side effects прямо в рендере.

## Пример

```js
useEffect(() => {
  const id = setInterval(...)
  return () => clearInterval(id)
}, [])
```

## Примечание

Массив зависимостей обязателен к честности. Эффект ≠ «lifecycle componentDidMount навсегда»: думайте «синхронизация». Для данных с сервера чаще React Query / loader, не голый effect.
