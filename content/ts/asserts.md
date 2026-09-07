---
title: Asserts
summary: Assertion functions (`asserts x is T`) — функции, которые при успехе говорят компилятору: после вызова значение имеет тип T.
---

## Для чего

Чтобы вынести проверки/инварианты и сузить тип без возврата boolean-guard.

## Пример

```ts
function assertDefined<T>(x: T | null | undefined): asserts x is T {
  if (x == null) throw new Error('undefined');
}
assertDefined(user);
user.name; // user больше не null
```

## Примечание

Если функция врёт (не бросает при провале) — runtime упадёт позже, а типы уже «уверены». `as T` — другое: без проверки.
