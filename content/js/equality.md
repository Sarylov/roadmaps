---
title: Equality
summary: Equality — сравнение: `==` с coercion, `===` без, `Object.is` строже к `NaN` и `±0`.
---

## Для чего

Чтобы выбирать семантику сравнения и не путать `NaN`, `null`/`undefined`.

## Пример

`0 == false` → true; `0 === false` → false.  
`NaN === NaN` → false; `Object.is(NaN, NaN)` → true.

## Примечание

Для бизнес-логики почти всегда `===`. `Object.is` — когда важны edge cases чисел.
