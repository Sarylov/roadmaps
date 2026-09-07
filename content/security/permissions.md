---
title: Permissions
summary: Permission — атомарное право на действие над ресурсом (`order:cancel`, `user:delete`).
---

## Для чего

Чтобы проверять доступ точечно в коде/политике, а не только по грубой роли.

## Пример

Перед refund: `if (!can(user, 'billing:refund')) throw 403`.

## Примечание

Имена стабильны и auditable. Роли агрегируют permissions; в сложных системах права ещё зависят от атрибутов (ABAC).
