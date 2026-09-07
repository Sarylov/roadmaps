---
title: Enums
summary: Enum в TypeScript — именованный набор констант; numeric enum ещё и существует в runtime с reverse mapping.
---

## Для чего

Чтобы зафиксировать закрытый список значений (статусы, роли) с понятными именами вместо «магических» чисел и строк.

## Пример

```ts
enum Role {
  Admin = "admin",
  User = "user",
}

const r: Role = Role.Admin;
```

## Примечание

Numeric enum компилируется в объект и даёт reverse mapping (`Role[0]`). Часто вместо enum берут `as const` + union литералов — без лишнего runtime.

## Вопросы и ответы

### Чем string enum лучше numeric?

Нет автоинкремента и reverse mapping, значения читаемы в логах и JSON. Numeric enum путают при сериализации.

### Enum vs union литералов?

`type Status = "a" | "b"` — только типы, ноль runtime. `enum` — и тип, и значение в JS. Для многих команд union + `as const` предпочтительнее.

### Что такое const enum?

`const enum` инлайнит значения при компиляции и может не оставить объект в бандле. С `isolatedModules` / bundler’ами часто неудобен — используют осторожно.
