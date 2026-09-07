---
title: infer
summary: `infer` — объявление type variable внутри conditional type, чтобы «вытащить» кусок типа из подходящего pattern.
---

## Для чего

Чтобы извлечь вложенный тип из функции, Promise, массива или generic без ручного дублирования сигнатур.

## Пример

```ts
type ReturnType<T> = T extends (...args: any) => infer R ? R : never

type ElementType<T> = T extends (infer U)[] ? U : T

type Unpromisify<T> = T extends Promise<infer U> ? U : T
```

## Примечание

`infer` работает только в ветке `extends ... ?`. Несколько `infer` в одном pattern допустимы; если pattern не сматчился — берётся else-ветка (`never` / fallback).

## Вопросы и ответы

### Чем `infer` отличается от обычного type parameter?

Обычный `<T>` задаёт вызывающий или inference снаружи. `infer R` появляется внутри conditional и заполняется из структуры типа, который проверяют.

### Как через `infer` получить параметры функции?

`T extends (...args: infer P) => any ? P : never` — это идея `Parameters<T>`. `P` будет tuple типов аргументов.

### Почему `infer` часто рядом с `never`?

В else кладут `never`, чтобы «не подошло» исчезло из union (как в `Exclude`) или явно сигнализировало о невозможном результате.
