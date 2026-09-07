---
title: Guards (NestJS)
summary: Guard в NestJS — определяет, можно ли обработать запрос (`canActivate`): auth, роли, права.
---

## Для чего

Чтобы отсечь неавторизованные/запрещённые запросы до контроллера и бизнес-логики.

## Пример

`AuthGuard` проверяет JWT → `RolesGuard` смотрит `@Roles('admin')` → иначе `403`.

## Примечание

Guard возвращает `boolean` / Promise / Observable. Не путать с interceptor: guard — «пускать или нет», interceptor — «обернуть выполнение».
