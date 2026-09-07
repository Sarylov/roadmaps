---
title: Primitives
summary: Primitives — базовые значения JS: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` (не объекты).
---

## Для чего

Чтобы понимать копирование по значению и отличия от объектов/ссылок.

## Пример

```js
let a = 1, b = a; b = 2; // a всё ещё 1
typeof null // "object" — исключение
```

## Примечание

У примитивов временно появляются методы через boxing (`"hi".toUpperCase()`), но результат — новый примитив/объект по случаю.
