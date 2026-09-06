---
title: Generics constraints
summary: Ограничение дженерика (`extends`) — способ сказать TypeScript: «T должен уметь X». Без этого нельзя безопасно обращаться к полям и методам параметра типа.
image_credit: "Официальный Handbook (схема в голове + примеры в коде). Отдельного каноничного YouTube про constraints мало — лучше Handbook."
---

## Зачем нужно

Дженерики без constraints слишком «широкие». Constraints дают переиспользуемые функции с проверкой на этапе компиляции.

## Как работает

```ts
function getLength<T extends { length: number }>(value: T) {
  return value.length
}
```

`T extends U` — T должен быть подтипом U. Можно ограничивать интерфейсами, union, другими дженериками (`keyof`, conditional types).

![TypeScript logo](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)

Документация: [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints).

## Что спрашивают

- Чем `T extends string` отличается от параметра типа `string`?
- Зачем `extends object` / `extends Record<string, unknown>`?
- Как связаны constraints и variance (особенно в React props / API design)?

## Ответы

### Чем `T extends string` отличается от параметра типа `string`?

`function f(x: string)` — аргумент именно `string` (или подтип, но тип параметра зафиксирован).

`function f<T extends string>(x: T)` — **сохраняет литерал/подтип**: для `"hello"` тип `T` может быть `"hello"`, для union — конкретный union. Это нужно для inference, mapped types, возврата того же литерала.

### Зачем `extends object` / `extends Record<string, unknown>`?

Чтобы запретить `null`/`undefined`/примитивы там, где ждут объект с ключами. `Record<string, unknown>` явно говорит: «словарь строковых ключей». Без constraint нельзя безопасно писать `value[key]` / `keyof T` в общем виде. (В новых TS `{}` / `object` имеют нюансы — часто точнее свой shape или `Record`.)

### Как связаны constraints и variance (особенно в React props / API design)?

Constraint задаёт **нижнюю границу** того, что можно подставить в `T`. В React/props это влияет на то, можно ли передать более узкий/широкий компонент: ковариантность пропсов «что отдаём» vs контравариантность «что принимаем». На собеседовании достаточно: constraints сужают допустимые `T`; неправильный constraint ломает переиспользование (`T extends Animal` vs слишком узкий `Dog`) и вывод типов в generic-компонентах/`memo`.
