---
title: Macrotasks
summary: Задачи «крупного» цикла event loop — таймеры, I/O, UI-события. Между ними event loop успевает обработать microtasks и (в браузере) отрисовку.
video: cCOL7MCFHAQ
image_credit: "Видео: Jake Archibald — In The Loop (JSConf.Asia). Лучшая визуализация очередей tasks/microtasks."
---

## Зачем нужно

Macrotasks объясняют, почему `setTimeout(fn, 0)` не мгновенный и почему тяжёлый синхронный код блокирует клики и анимации.

## Как работает

Примеры macrotasks: `setTimeout` / `setInterval`, I/O-колбэки, `setImmediate` (Node), UI-события в браузере.

Один тик: взять одну macrotask → выполнить → опустошить microtasks → (опционально) render → следующая macrotask.

Короткая версия той же модели: [Philip Roberts — What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ).

## Что спрашивают

- Чем macrotask отличается от microtask?
- Почему нельзя «починить» блокировку UI через `setTimeout(0)`, если сама задача всё ещё тяжёлая?
- Как это выглядит в Node (libuv + phases)?

## Ответы

### Чем macrotask отличается от microtask?

**Macrotask** (task) — единица «крупного» цикла: таймер, I/O, UI-событие. Между двумя macrotasks event loop успевает опустошить microtasks и (в браузере) сделать render.

**Microtask** — очередь, которая **полностью** опустошается после текущего синхронного кода / после каждой macrotask: `Promise.then`, `queueMicrotask`, `MutationObserver`.

Поэтому `Promise.resolve().then(fn)` почти всегда раньше `setTimeout(fn, 0)`.

### Почему нельзя «починить» блокировку UI через `setTimeout(0)`, если сама задача всё ещё тяжёлая?

`setTimeout(0)` только **откладывает** работу на следующую macrotask. Если колбэк всё ещё считает миллионы итераций синхронно, он снова блокирует поток на всё время выполнения — клики и анимации ждут конца этой задачи.

Нужно **дробить** работу (чанки + `scheduler.postTask` / `requestIdleCallback` / `setTimeout` между чанками) или уносить в Worker.

### Как это выглядит в Node (libuv + phases)?

В Node event loop идёт фазами libuv: timers → pending → idle/prepare → poll → check (`setImmediate`) → close. Между фазами (и после многих колбэков) обрабатываются **microtasks** / `process.nextTick` (у `nextTick` приоритет выше Promise microtasks).

`setTimeout`/`setInterval` — timers phase; `setImmediate` — check phase. Это не один в один браузерная модель, но идея та же: тяжёлая синхронщина блокирует всё.
