---
title: Discriminants
summary: Discriminated union — объединение объектов с общим литеральным полем (`type`), по которому TS сужает остальные поля.
---

## Для чего

Чтобы безопасно моделировать варианты состояния (loading/success/error) без кучи optional-полей.

## Пример

```ts
type Res =
  | { status: 'ok'; data: User }
  | { status: 'err'; error: string };

if (res.status === 'ok') res.data; // User
```

## Примечание

Дискриминант должен быть литералом. После `switch (res.status)` в каждой ветке — узкий тип.
