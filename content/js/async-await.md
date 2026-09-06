---
title: async / await
summary: Синтаксический сахар над Promise: `await` приостанавливает функцию и продолжает её через microtask, когда Promise выполнится. Ошибки ловятся через try/catch.
video: 8aGhZQkoFbQ
image_credit: "Видео: Philip Roberts — event loop (база для понимания, почему await не блокирует поток)."
---

## Зачем нужно

Читаемый асинхронный код без пирамиды `.then`. На собеседованиях почти всегда спрашивают порядок выполнения и обработку ошибок.

## Как работает

```js
async function load() {
  const data = await fetch('/api')
  return data.json()
}
```

- `async`-функция всегда возвращает Promise.
- После `await` продолжение ставится в microtask queue.
- `throw` внутри `async` → rejected Promise; ловится `try/catch` или `.catch`.

## Что спрашивают

- Чем `await` отличается от `.then` по порядку в event loop?
- Что вернёт `async function`, если внутри нет `return`?
- Как параллелить запросы: `Promise.all` vs несколько `await` подряд?

## Ответы

### Чем `await` отличается от `.then` по порядку в event loop?

По смыслу это одно и то же: продолжение после `await` — microtask, как и колбэк `.then`. Разница в читаемости и в том, что `try/catch` вокруг `await` ловит rejection естественно. Тонкости порядка появляются, когда смешивают синхронный код, несколько `.then` и `await` в одном тике — но модель одна: microtasks до следующей macrotask.

### Что вернёт `async function`, если внутри нет `return`?

Всегда **Promise**. Без `return` — `Promise`, который resolve’ится в `undefined`. С `return x` — resolve в `x`. С `throw` / rejected `await` — rejected Promise.

### Как параллелить запросы: `Promise.all` vs несколько `await` подряд?

```js
// последовательно — второй ждёт первого
const a = await fetch('/a')
const b = await fetch('/b')

// параллельно
const [a, b] = await Promise.all([fetch('/a'), fetch('/b')])
```

Несколько `await` подряд — водопад. Чтобы стартовать сразу, создайте Promise’ы до `await` или используйте `Promise.all` / `Promise.allSettled`.
