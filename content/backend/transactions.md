---
title: Transactions
summary: Transaction в приложении — несколько операций с БД как одно целое: либо все commit, либо rollback.
---

## Для чего

Чтобы не оставлять полусостояние (заказ без позиций, списание без зачисления) при ошибке посередине.

## Пример

```ts
await prisma.$transaction(async (tx) => {
  await tx.account.update({ ...debit });
  await tx.account.update({ ...credit });
});
```

## Примечание

Держите транзакцию короткой: без HTTP наружу и долгих пауз. В ORM важен один и тот же client/EntityManager внутри tx, иначе часть запросов уйдёт мимо транзакции.
