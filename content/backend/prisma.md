---
title: Prisma
summary: Prisma — ORM с schema-first моделью: описываете модели в `schema.prisma`, получаете типизированный клиент и миграции.
---

## Для чего

Чтобы писать запросы к БД с автодополнением и типобезопасностью, не собирая SQL руками для типового CRUD.

## Пример

```ts
await prisma.user.create({
  data: { email, posts: { create: [{ title }] } },
});
```

## Примечание

Сильная сторона — DX и миграции. Слабее — очень динамические/сырые запросы (есть `$queryRaw`). N+1 ловите через `include`/`select`, не циклом `findMany` + `findUnique`.
