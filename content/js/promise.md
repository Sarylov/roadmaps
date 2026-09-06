---
title: Promise
summary: Promise — объект результата асинхронной операции: pending → fulfilled/rejected. Колбэки `.then` / `.catch` попадают в microtask queue и не блокируют текущий стек.
---

## Зачем нужно

Без Promise нельзя уверенно говорить про async/await, параллелизм (`all`/`race`) и обработку ошибок в Node/браузере. Это базовый контракт асинхронного API.

## Как работает

```js
const p = new Promise((resolve, reject) => {
  // sync start; later:
  resolve(42) // или reject(err)
})

p.then(v => v * 2).catch(err => console.error(err))
```

Состояния: **pending**, **fulfilled**, **rejected** (terminal). `.then` всегда возвращает новый Promise. Ошибка в колбэке / `throw` → rejected следующей цепочки. `async/await` — сахар над теми же microtasks.

Спека/гайд: [MDN — Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Что спрашивают

- Чем Promise отличается от callback hell по контролю ошибок?
- Что вернёт `.then`, если колбэк ничего не `return`?
- `Promise.resolve` vs `new Promise(r => r(x))`?

## Ответы

### Чем Promise отличается от callback hell по контролю ошибок?

В колбэках ошибки часто «теряются» между уровнями (`if (err) return cb(err)`). У Promise единый канал rejection: один `.catch` в конце цепочки (или `try/catch` с `await`) ловит сбой любого шага. Плюс композиция (`all`, `race`) без пирамиды вложенности.

### Что вернёт `.then`, если колбэк ничего не `return`?

Новый Promise, который fulfill’ится в **`undefined`**. Если вернуть значение — оно станет fulfillment; если вернуть Promise — цепочка ждёт его; если `throw` — rejection.

### `Promise.resolve` vs `new Promise(r => r(x))`?

Почти эквивалентны для обычного значения. `Promise.resolve(x)` быстрее/короче и **плоско** разворачивает thenable/Promise (`resolve` другого Promise не даёт «Promise в Promise»). `new Promise` нужен, когда результат зависит от колбэков стороннего API (`fs`, DOM events).
