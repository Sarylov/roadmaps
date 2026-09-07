---
title: TypeORM
summary: TypeORM — ORM для TypeScript/JavaScript: entities-декораторы, repository API, QueryBuilder, миграции.
---

## Для чего

Чтобы маппить таблицы на классы и работать через repository / QueryBuilder в Nest и похожих стеках.

## Пример

```ts
await userRepo.find({ where: { email }, relations: ['orders'] });
```

## Примечание

Active Record и Data Mapper оба поддерживаются — выберите один стиль. DataSource/connection lifecycle и lazy relations легко дают N+1 и сюрпризы вне Nest scope.
