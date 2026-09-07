---
title: Mapped Types
summary: Mapped type — объектный тип, построенный перебором ключей: `{ [K in Keys]: ... }`.
---

## Для чего

Чтобы из одного типа получить другой без копипасты полей: сделать всё optional/readonly, переименовать ключи, обернуть значения.

## Пример

```ts
type ReadonlyProps<T> = {
  readonly [K in keyof T]: T[K]
}

type OptionalFlags<T> = {
  [K in keyof T]?: boolean
}

// Partial / Readonly / Pick — по сути готовые mapped types
```

## Примечание

Модификаторы: `+readonly` / `-readonly`, `+?` / `-?`. С `as` можно фильтровать/переименовывать ключи (`key remapping`). `Partial` и `Required` — частные случаи mapped types.

## Вопросы и ответы

### Чем mapped type отличается от index signature?

Index signature (`[key: string]: T`) описывает «любой строковый ключ». Mapped type перечисляет конкретный набор ключей из `keyof` или union литералов.

### Как связаны с Pick/Partial?

`Partial<T>` ≈ `{ [K in keyof T]?: T[K] }`. `Pick` сужает ключи, mapped type чаще меняет modifiers/значения по всем (или отфильтрованным) ключам.

### Когда писать свой mapped type?

Когда стандартных utility не хватает: например, сделать все поля `Promise<T[K]>` или оставить только ключи, чьи значения — функции.
