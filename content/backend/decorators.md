---
title: Decorators
summary: Decorators во Fastify — `decorate` / `decorateRequest` / `decorateReply`: добавить свойство или метод на instance, request или reply.
---

## Для чего

Чтобы внедрять общие сервисы и хелперы (`app.db`, `request.user`) без глобальных переменных.

## Пример

```js
app.decorate('db', pool);
// в handler: await app.db.query(...)
```

## Примечание

Декоратор должен быть объявлен до использования в роуте. Encapsulation плагина ограничивает видимость, пока не обернули в `fastify-plugin`.
