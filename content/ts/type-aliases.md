---
title: Type aliases
summary: `type` — именованный алиас любой формы типа: объект, union, intersection, tuple, function и т.д.
---

## Для чего

Чтобы дать короткое имя сложной форме и переиспользовать её в сигнатурах без копипаста.

## Пример

```ts
type Id = string | number;
type Point = { x: number; y: number };
type Handler = (id: Id) => void;
```

## Примечание

В отличие от `interface`, `type` не участвует в declaration merging. Один `type Name = …` — одно определение.

## Вопросы и ответы

### Когда type, когда interface?

Объектный контракт, который могут расширять снаружи → часто `interface`. Union, mapped, условные типы → только `type` (или `type` поверх `interface`).

### type — это новый тип в runtime?

Нет. После компиляции алиасы стираются. Это только проверка на этапе TypeScript.

### Можно ли сделать union через interface?

Нет. `interface` описывает объектную форму (и call/construct signatures), но не `A | B`. Для union нужен `type`.
