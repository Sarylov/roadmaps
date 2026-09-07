---
title: ReturnType
summary: `ReturnType<T>` — utility type, который извлекает возвращаемый тип из типа функции T.
---

## Для чего

Чтобы производные типы (DTO ответа, состояние стора) синхронизировались с реализацией функции-источника истины без дублирования.

## Пример

```ts
function createUser(name: string) {
  return { id: crypto.randomUUID(), name }
}

type User = ReturnType<typeof createUser>
// { id: string; name: string }

async function load() {
  return { ok: true as const }
}
type LoadResult = Awaited<ReturnType<typeof load>> // { ok: true }
```

## Примечание

Реализация — через conditional + `infer R`. Для `async` функция вернёт `Promise<...>`; «голое» значение — через `Awaited<ReturnType<T>>`. При overload берётся обычно последняя, самая общая сигнатура.

## Вопросы и ответы

### Как ReturnType связан с infer?

Примерно: `T extends (...args: any) => infer R ? R : any`. `infer R` вытаскивает тип результата из сигнатуры функции.

### Что вернёт ReturnType для async-функции?

`Promise<ResolvedValue>`. Если нужен resolved-тип — `Awaited<ReturnType<typeof fn>>`.

### Когда ReturnType вреден для публичного API?

Если функция — деталь реализации, `ReturnType` протечёт внутреннюю форму наружу. Тогда лучше явный экспортируемый тип результата, а функция к нему приводят.
