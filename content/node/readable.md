---
title: Readable
summary: Readable stream — источник данных кусками (chunks), а не одним буфером целиком.
---

## Для чего

Чтобы читать большие файлы/ответы сети, не держа всё в RAM.

## Пример

```js
import { createReadStream } from 'node:fs'
createReadStream('big.log').on('data', (chunk) => { /* ... */ })
```

## Примечание

Режимы paused vs flowing. В `data`-режиме без учёта backpressure легко раздуть память — лучше `pipeline` / async iterate.
