---
title: CRUD
summary: CRUD — четыре базовых операции над ресурсом: Create, Read, Update, Delete.
---

## Для чего

Чтобы быстро спроектировать типовой API сущности и сопоставить его с HTTP-методами.

## Пример

Create → `POST /items`  
Read → `GET /items`, `GET /items/:id`  
Update → `PUT`/`PATCH /items/:id`  
Delete → `DELETE /items/:id`

## Примечание

Не все бизнес-действия — CRUD (оплата, approve, export). Их моделируют отдельными ресурсами/командами, а не «ломают» семантику POST/PUT.
