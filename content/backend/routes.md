---
title: Routes
summary: Routes — объявление HTTP-пути и метода с handler'ом: какой URL вызывает какой код.
---

## Для чего

Чтобы явно связать `METHOD + path` с обработчиком и схемой (query/body/response).

## Пример

```js
app.post('/users', {
  schema: { body: userBody },
  handler: createUser,
});
```

## Примечание

Во Fastify route можно регистрировать внутри плагина с prefix (`/api/v1`). Порядок и encapsиляция влияют на hooks/decorators.
