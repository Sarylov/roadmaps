---
title: Partial
summary: `Partial<T>` — utility type, который делает все свойства T опциональными (`?`).
---

## Для чего

Чтобы описать частичное обновление, patch-DTO или опции, где вызывающий передаёт только часть полей.

## Пример

```ts
type User = { id: string; name: string; email: string }

function updateUser(id: string, patch: Partial<Omit<User, 'id'>>) {
  // patch.name?, patch.email?
}
```

## Примечание

`Partial` — shallow: вложенные объекты не становятся partial. Для deep partial пишут рекурсивный mapped type.

## Вопросы и ответы

### Чем Partial отличается от опциональных полей вручную?

Поведение то же, но `Partial<T>` синхронизируется с `T`: добавили поле в `T` — оно сразу optional в patch-типе.

### Partial делает значения `T | undefined`?

Поля становятся optional (`prop?: T`). Это не то же самое, что `prop: T | undefined` без `?` — зависит от `exactOptionalPropertyTypes` и того, передаёте ли вы `undefined` явно.

### Когда Partial вреден?

Когда «частичность» на самом деле неверна: например create-DTO, где `name` обязателен. Тогда лучше явный тип или `Pick` + точечные `?`.
