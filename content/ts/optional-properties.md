---
title: Optional properties
summary: Опциональное свойство `field?: T` может отсутствовать в объекте; это не всегда то же самое, что `field: T | undefined`.
---

## Для чего

Чтобы описать поля, которые не обязательны при создании объекта — конфиги, partial DTO, опции API.

## Пример

```ts
type Options = {
  timeout?: number;
};

const a: Options = {};           // ок
const b: Options = { timeout: 5 };
```

## Примечание

С флагом `exactOptionalPropertyTypes` нельзя явно передать `timeout: undefined`, если свойство лишь optional — только опустить ключ или задать `number`.

## Вопросы и ответы

### Чем `x?: string` отличается от `x: string | undefined`?

`?:` — ключ может отсутствовать. `string | undefined` — ключ обычно есть, но значение может быть `undefined`. Разница важна при точных optional-типах и при spread/assign.

### Как сделать все поля опциональными?

`Partial<T>` — mapped-тип, помечает каждое свойство как optional.

### Нужен ли `?` у параметра функции?

Да: `fn(x?: number)` — аргумент можно не передать. Это отдельно от optional property у объекта, но идея та же.
