---
title: async / await
summary: async/await — синтаксис над Promise: await ждёт результат, не блокируя поток, а async-функция всегда возвращает Promise.
---

## Для чего

Чтобы писать асинхронный код линейно и ловить ошибки обычным `try/catch`.

## Пример

```js
async function load() {
  const res = await fetch('/api')
  return res.json()
}
```

## Примечание

Несколько `await` подряд — водопад. Для параллели: `Promise.all([fetch(a), fetch(b)])`. После `await` продолжение идёт через microtask.

## Вопросы и ответы

### Что возвращает `async`-функция?

Всегда Promise: обычный `return` становится fulfilled, `throw` — rejected. Можно и явно `return Promise`.

### Блокирует ли `await` поток?

Нет: функция приостанавливается, поток свободен для другого кода; продолжение после `await` идёт через microtask, когда промис settled.

### Как не сделать водопад из нескольких запросов?

Не писать `await a` затем `await b`, если они независимы. Запускайте параллельно: `Promise.all([fetch(a), fetch(b)])`, потом один `await`.
