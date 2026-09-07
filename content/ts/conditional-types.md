---
title: Conditional Types
summary: Conditional type — тип вида `T extends U ? X : Y`: ветвление на уровне типов по проверке совместимости.
---

## Для чего

Чтобы вывести разный результат в зависимости от формы входного типа (утилиты вроде `NonNullable`, ветки для union, адаптация API под вход).

## Пример

```ts
type IsString<T> = T extends string ? true : false

type A = IsString<'hi'>   // true
type B = IsString<number> // false

type NonNullable<T> = T extends null | undefined ? never : T
```

## Примечание

Naked `T` в `T extends ...` **distributive** по union: `IsString<string | number>` → `true | false`. Чтобы отключить — обернуть в кортеж: `[T] extends [U] ? ...`.

## Вопросы и ответы

### Что такое distributive conditional types?

Когда проверяемый тип — «голый» type parameter, TypeScript применяет условие к каждому члену union отдельно и склеивает результаты. Это база `Exclude`/`Extract`.

### Чем отличается от runtime `if`?

Это только компиляция: в JS условия нет. Conditional types строят типы, не ветвят выполнение.

### Где это встречается в стандартной библиотеке?

`ReturnType`, `Parameters`, `NonNullable`, `Extract`, `Exclude` — все на conditional types (часто с `infer`).
