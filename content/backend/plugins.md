---
title: Plugins
summary: Plugin во Fastify — функция `fp(async (app, opts) => …)`, которая регистрирует роуты, хуки и декораторы в своей encapsulation-контексте.
---

## Для чего

Чтобы собирать приложение из изолированных кусков (auth, db, users) без глобальной каши.

## Пример

```js
await app.register(dbPlugin);
await app.register(usersRoutes, { prefix: '/users' });
```

## Примечание

`fastify-plugin` (`fp`) пробивает encapsulation, если нужно шарить декоратор наружу. Без `fp` декоратор плагина снаружи не виден — это фича, не баг.
