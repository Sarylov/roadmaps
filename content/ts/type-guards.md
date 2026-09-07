---
title: Type guards
summary: Type guard — проверка в runtime, которая сужает тип: `typeof`, `instanceof`, `in` или user-defined `x is T`.
---

## Для чего

Чтобы после условия TypeScript знал более точный тип, а не только вы.

## Пример

```ts
function isString(x: unknown): x is string {
  return typeof x === 'string';
}
if (isString(v)) v.toUpperCase();
```

## Примечание

Не путать с NestJS Guard (auth). Предикат `x is T` должен быть правдивым — иначе типы врут.
