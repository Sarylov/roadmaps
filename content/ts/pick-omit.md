---
title: Pick / Omit
summary: Pick и Omit — utility types: взять или исключить набор ключей из объектного типа.
---

## Для чего

Чтобы строить DTO/props из модели без копипасты полей.

## Пример

```ts
type User = { id: string; name: string; password: string };
type PublicUser = Omit<User, 'password'>;
type UserIdName = Pick<User, 'id' | 'name'>;
```

## Примечание

Оба поверхностные: вложенные объекты не «omit'ятся» рекурсивно. Для глубокого — свои mapped types.
