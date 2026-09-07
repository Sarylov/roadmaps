---
title: Unions
summary: Union `A | B` — значение одного из вариантов: либо тип A, либо тип B (или оба, если совместимы).
---

## Для чего

Чтобы явно описать «одно из нескольких» — статус, ответ API, nullable-поле — и заставить обработать каждый вариант.

## Пример

```ts
type Status = "idle" | "loading" | "error";

function label(s: Status) {
  if (s === "error") return "Ошибка";
  return s; // "idle" | "loading"
}
```

## Примечание

Без narrowing доступны только общие члены union. Discriminated union (`kind: "ok" | "fail"`) — самый читаемый паттерн.

## Вопросы и ответы

### Чем union отличается от intersection?

`A | B` — один из типов. `A & B` — значение сразу удовлетворяет обоим.

### Почему нельзя сразу взять `.data` у `Response | Error`?

Компилятор не знает, какой вариант сейчас. Нужен `typeof`, `in`, discriminant или type guard.

### Что такое discriminated union?

Union объектов с общим полем-меткой (`type`/`kind`). По значению метки TS сужает весь объект до одного варианта.
