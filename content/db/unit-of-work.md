---
title: Unit of Work
summary: Unit of Work — паттерн: накопить изменения сущностей и зафиксировать их одной транзакцией/flush в конце бизнес-операции.
---

## Для чего

Чтобы согласованно сохранить несколько объектов и не делать commit после каждого `save`.

## Пример

В TypeORM: меняете entities в памяти → `await dataSource.transaction(manager => manager.save(...))` — один flush.  
Идея: «рабочий набор» изменений → один commit.

## Примечание

В явном SQL/Prisma часто UoW = `$transaction` + один tx-клиент. Не путать с repository: repository — доступ к сущности, UoW — граница фиксации набора изменений.
