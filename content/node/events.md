---
title: events
summary: events.EventEmitter — паттерн pub/sub внутри процесса: emit события, on/once подписки.
---

## Для чего

Чтобы развязать производителя события и обработчиков без жёстких прямых вызовов.

## Пример

```js
import { EventEmitter } from 'node:events'
const bus = new EventEmitter()
bus.on('order', (id) => console.log(id))
bus.emit('order', 42)
```

## Примечание

Забытый `off` / слишком много listeners → утечки и предупреждения. Ошибки в listener лучше ловить: необработанный `'error'` на emitter может уронить процесс.
