---
title: Generics Constraints
summary: Constraint (`T extends U`) — ограничение дженерика: T обязан быть подтипом U, иначе TypeScript не даст подставить тип.
---

## Для чего

Чтобы в generic-функции безопасно обращаться к полям/методам `T` и отсекать неподходящие аргументы на этапе компиляции.

## Пример

```ts
function getLength<T extends { length: number }>(value: T) {
  return value.length
}

getLength('hi')      // ok
getLength([1, 2])    // ok
getLength(42)        // error
```

## Примечание

`function f(x: string)` фиксирует параметр как `string`.  
`function f<T extends string>(x: T)` сохраняет литерал/подтип: для `"hello"` тип `T` может быть `"hello"`. Это нужно для inference и точного возврата.

## Вопросы и ответы

### Чем `T extends string` отличается от параметра `string`?

Параметр `string` принимает строку, но не сохраняет конкретный литерал в результате. `T extends string` сужает допустимое, но inference оставляет `"hello"` / union как есть — удобно для mapped types и API, где важен точный тип.

### Зачем `extends object` или `Record<string, unknown>`?

Чтобы запретить примитивы/`null`/`undefined` там, где ждут объект с ключами. Без constraint нельзя безопасно писать `value[key]` или опираться на `keyof T` в общем виде.

### Можно ли ограничить несколькими условиями?

Да: `T extends A & B`, или через интерфейс с нужным shape. Слишком узкий constraint ломает переиспользование; слишком широкий — теряет проверки.
