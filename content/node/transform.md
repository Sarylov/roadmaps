---
title: Transform
summary: Transform — duplex, где выход вычисляется из входа (сжатие, шифрование, парсинг по мере чтения).
---

## Для чего

Чтобы обрабатывать поток на лету в цепочке `readable → transform → writable`.

## Пример

```js
import { createGzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'
await pipeline(src, createGzip(), dest)
```

## Примечание

Ошибки transform нужно прокидывать, иначе `pipeline`/`pipe` зависнут или проглотят сбой. `objectMode` — когда chunk не Buffer/string.
