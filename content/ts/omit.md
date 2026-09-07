---
title: Omit
summary: `Omit<T, K>` — utility type, который исключает из T ключи K и оставляет остальные.
---

## Для чего

Чтобы получить тип «как T, но без секретных/служебных полей» — create DTO без `id`, ответ без `passwordHash`.

## Пример

```ts
type User = { id: string; name: string; passwordHash: string }

type PublicUser = Omit<User, 'passwordHash'>
// { id: string; name: string }

type CreateUser = Omit<User, 'id'>
```

## Примечание

Частый паттерн update: `Partial<Omit<User, 'id'>>` — все поля кроме id опциональны. `K` должен пересекаться с ключами `T`.

## Вопросы и ответы

### Чем Omit отличается от Pick?

`Omit` вычитает ключи, `Pick` выбирает. При большом объекте и паре лишних полей удобнее `Omit`.

### Omit удаляет вложенные поля?

Нет, только top-level ключи. Для deep omit нужен свой рекурсивный utility.

### Безопасно ли Omit для публичного API?

Если `T` — внутренняя entity, `Omit` может протечь новые поля при расширении entity. Иногда явнее перечислить публичные поля через `Pick`.
