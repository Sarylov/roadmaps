---
title: timers
summary: Timers в Node — setTimeout / setInterval / setImmediate / process.nextTick: отложенный код, завязанный на фазы event loop.
---

## Для чего

Чтобы откладывать работу, делать retry/backoff и не блокировать текущий стек.

## Пример

```js
const id = setTimeout(() => ping(), 1000)
clearTimeout(id)
```

## Примечание

Таймеры неточные под нагрузкой. `unref()` — чтобы таймер не держал процесс живым. `nextTick` приоритетнее Promise microtasks — легко устроить starvation.
