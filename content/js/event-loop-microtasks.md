---
title: Microtasks
summary: Очередь задач, которая полностью опустошается перед следующей макротаской. Из‑за неё Promise.then и queueMicrotask выполняются «сразу после» текущего кода, но до рендера и таймеров.
video: 8aGhZQkoFbQ
image_credit: "Видео: Philip Roberts — What the heck is the event loop anyway? (JSConf EU). Дополнительно: Jake Archibald — In The Loop."
---

## Зачем нужно

Без microtasks невозможно понять порядок выполнения `async/await`, Promise-цепочек и почему «мгновенный» `.then` всё равно не синхронный.

## Как работает

1. Выполняется текущий синхронный код.
2. Event loop опустошает **microtask queue** целиком.
3. Только потом берёт следующую macrotask (таймер, I/O, click).

В microtasks попадают: `Promise.then/catch/finally`, `queueMicrotask`, мутации `MutationObserver`.

Более глубокий разбор с анимациями очередей: [Jake Archibald — In The Loop](https://www.youtube.com/watch?v=cCOL7MCFHAQ).

Текст: [javascript.info — Event loop](https://javascript.info/event-loop).

## Что спрашивают

- Почему `Promise.resolve().then(...)` раньше `setTimeout(..., 0)`?
- Что будет, если microtask в цикле ставит новую microtask?
- Как `await` связан с microtasks?

## Ответы

### Почему `Promise.resolve().then(...)` раньше `setTimeout(..., 0)`?

`setTimeout(..., 0)` кладёт колбэк в **macrotask** queue. `.then` — в **microtask** queue. После текущего синхронного кода event loop сначала опустошает все microtasks, и только потом берёт следующую macrotask (таймер). Поэтому Promise-колбэк выполняется раньше.

### Что будет, если microtask в цикле ставит новую microtask?

Очередь microtasks опустошается **целиком**, включая задачи, добавленные «по ходу». Бесконечный цикл `queueMicrotask` / `Promise.then`, который снова ставит microtask, **Starve** macrotasks: таймеры, клики и render не наступят (в браузере страница «зависнет»).

### Как `await` связан с microtasks?

`await` разбивает `async`-функцию: после того как Promise resolved, **продолжение** после `await` ставится как microtask (фактически через Promise). Поэтому код после `await` не синхронный — он уступает текущему стеку и другим уже стоящим microtasks.
