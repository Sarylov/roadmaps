---
title: Narrowing
summary: Narrowing — сужение типа внутри ветки кода по control-flow анализу (`typeof`, `in`, equality, type guards).
---

## Для чего

Чтобы безопасно работать с union: после проверки компилятор знает конкретный вариант и разрешает его поля и методы.

## Пример

```ts
function len(x: string | string[]) {
  if (typeof x === "string") return x.length;
  return x.length; // x: string[]
}
```

## Примечание

Свои проверки оформляют как type predicate: `function isUser(v: unknown): v is User`. `asserts` — жёстче: при успехе сужает тип вызывающего scope.

## Вопросы и ответы

### Какие способы narrowing знает TypeScript?

`typeof`, `instanceof`, проверка на `null`/`undefined`, equality, `in`, discriminant поле, user-defined type guards и `asserts`.

### Что такое type guard?

Функция/проверка, по результату которой TS сужает тип. Пример: `typeof x === "string"` или `v is User`.

### Почему после `if (!x) return` тип сужается?

Control-flow analysis: в оставшемся коде `x` не может быть falsy-вариантом из union (с учётом настроек strictness).
