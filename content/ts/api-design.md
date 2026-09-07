---
title: Generic API Design
summary: Generic API design — проектирование публичных типов так, чтобы inference, defaults и constraints давали понятный DX, а не «умные» непрозрачные ошибки.
---

## Для чего

Чтобы библиотечный/внутренний API был переиспользуемым и типобезопасным: вызывающий пишет меньше аннотаций, а ошибки компилятора читаются.

## Пример

```ts
function createIdMap<T extends string = string>(
  ids: readonly T[],
): Record<T, true> {
  return Object.fromEntries(ids.map((id) => [id, true])) as Record<T, true>
}

const map = createIdMap(['a', 'b'] as const)
// map.a, map.b — ок; map.c — ошибка
```

## Примечание

Слишком сложные conditional/mapped types ухудшают сообщения об ошибках. Лучше простые generics + понятные имена параметров (`TEntity`, `TKey`), чем «магия» ради одной строки.

## Вопросы и ответы

### Что важнее: точность типов или читаемость ошибок?

На публичном API — баланс. Если ошибка нечитаема, вызывающий не сможет починить код. Иногда явный простой тип лучше идеально точного, но непрозрачного.

### Зачем default type parameters?

Чтобы вызов без явного `<T>` оставался удобным (`T = string`), а при необходимости можно было сузить. Default не заменяет constraint: `T extends U = Default`.

### Как назвать type parameters?

Коротко и по роли: `T`, `TKey`, `TResult`. Избегать бессмысленных `A`/`B`, если в сигнатуре несколько параметров — на собесе это сигнал, что API продуман.
