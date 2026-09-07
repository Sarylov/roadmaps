---
title: Drizzle
summary: Drizzle — TypeScript-first SQL ORM/query builder: схема в коде, запросы близки к SQL, сильная типизация.
---

## Для чего

Чтобы контролировать SQL явнее, чем в «магическом» ORM, но не терять типы и удобные join/where.

## Пример

```ts
await db.select().from(users).where(eq(users.email, email));
```

## Примечание

Ближе к SQL → проще рассуждать про индексы и планы. Меньше «автомагии» relations, чем у Prisma — больше явного кода join'ов.
