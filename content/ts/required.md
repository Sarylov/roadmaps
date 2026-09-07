---
title: Required
summary: `Required<T>` — utility type, который делает все свойства T обязательными (убирает `?`).
---

## Для чего

Чтобы после слияния с defaults или валидации зафиксировать: конфиг полный, optional больше нет.

## Пример

```ts
type Options = { host?: string; port?: number }

type ResolvedOptions = Required<Options>
// { host: string; port: number }

function resolve(opts: Options): Required<Options> {
  return { host: opts.host ?? 'localhost', port: opts.port ?? 3000 }
}
```

## Примечание

Обратный к `Partial`. Как и `Partial`, работает shallow — вложенные optional не трогает. Не убирает `| undefined` из типа значения, только модификатор `?` у свойства.

## Вопросы и ответы

### Чем Required отличается от NonNullable?

`Required` убирает optional у ключей объекта. `NonNullable<T>` убирает `null | undefined` из самого типа `T` (часто для union/примитивов).

### Зачем Required на собесе?

Показать, что понимаешь пару Partial/Required и сценарий «input частичный → после defaults тип полный».

### Можно ли сделать обязательным только одно поле?

Да, не через голый `Required<T>`, а вручную или `T & { field: NonNullable<T['field']> }` / точечный mapped type — `Required` всегда по всем ключам.
