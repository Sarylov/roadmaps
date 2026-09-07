---
title: Writable
summary: Writable stream — сток: принимает chunks и пишет куда-то (файл, сокет, HTTP response).
---

## Для чего

Чтобы отдавать/писать данные порциями и получать сигнал, когда нужно притормозить.

## Пример

```js
import { createWriteStream } from 'node:fs'
const out = createWriteStream('out.bin')
if (!out.write(buf)) await once(out, 'drain')
```

## Примечание

`write` вернул `false` → ждите `'drain'`. Игнор = рост буфера. `end()` завершает поток; `destroy()` — аварийно.
