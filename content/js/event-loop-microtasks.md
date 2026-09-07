---
title: Microtasks
summary: Microtasks — очередь задач (Promise.then, queueMicrotask), которая полностью опустошается перед следующей macrotask.
---

## Для чего

Чтобы понять порядок: почему `Promise.then` почти всегда раньше `setTimeout(0)`, и как ведёт себя `await`.

## Пример

```js
setTimeout(() => console.log('macro'), 0)
Promise.resolve().then(() => console.log('micro'))
// → micro, затем macro
```

## Примечание

Если microtask снова ставит microtask, очередь не отпустит macrotasks/render — возможен starvation.

## Вопросы и ответы

### Что попадает в microtasks?

В основном колбэки `Promise.then`/`catch`/`finally` и `queueMicrotask`. После `await` продолжение тоже идёт через microtask.

### Почему `Promise.then` раньше `setTimeout(0)`?

После синхронного кода event loop сначала полностью опустошает очередь microtasks, и только потом берёт следующую macrotask (таймер).

### Чем опасен бесконечный поток microtasks?

Каждый microtask может поставить новый — macrotasks и render не получат ход (starvation), UI/таймеры «замрут».
