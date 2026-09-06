---
title: Backpressure
summary: Backpressure — механизм «замедли производителя», когда потребитель не успевает. В Node streams: внутренние буферы, `return false` из `write`, `pause`/`resume`, `pipeline`.
---

## Зачем нужно

KILLER для Node: без backpressure легко исчерпать память (`readable.on('data')` без паузы) или потерять контроль над upload/proxy. На собесе — отличие push vs pull.

## Как работает

Producer быстрее consumer → данные копятся. Streams сигнализируют: `writable.write(chunk)` вернул `false` → подожди `'drain'`; Readable в paused mode отдаёт данные по `read()` / `pipe` сам учитывает давление.

```js
import { pipeline } from 'node:stream/promises'
await pipeline(src, transform, dest) // ошибки + backpressure
```

Доки: [Node.js — Backpressuring in Streams](https://nodejs.org/en/learn/modules/backpressuring-in-streams).

## Что спрашивают

- Что будет, если слушать `'data'` и не учитывать backpressure?
- Чем `pipe` / `pipeline` помогают?
- Backpressure в HTTP upload — где проявляется?

## Ответы

### Что будет, если слушать `'data'` и не учитывать backpressure?

Readable переходит в flowing mode и **пушит** чанки так быстро, как может. Если обработка синхронно тяжёлая или пишет в медленный sink без паузы — буфер растёт → **рост RSS / OOM**. Нужны `pause`/`resume`, или лучше `pipeline` / async iterate с учётом давления.

### Чем `pipe` / `pipeline` помогают?

Они связывают потоки так, что сигнал заполнения writable **притормаживает** readable. `pipeline` ещё унифицирует ошибки и уничтожение потоков при сбое (в отличие от голого `pipe` без обработки).

### Backpressure в HTTP upload — где проявляется?

Медленный диск/парсер/прокси: если не читать `req` вовремя или не ждать `drain` при записи в файл/upstream, либо раздуется буфер входящего сокета, либо клиент получит TCP window pressure. Правило: не буферизовать весь body в память без лимита; стримить с контролем.
