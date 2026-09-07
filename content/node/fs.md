---
title: fs
summary: fs — модуль работы с файловой системой; в проде почти всегда берут асинхронный API (`fs/promises` или стримы).
---

## Для чего

Чтобы читать/писать файлы, логи, загрузки, не блокируя event loop на больших объёмах.

## Пример

```js
import { readFile } from 'node:fs/promises'
const text = await readFile('config.json', 'utf8')
```

## Примечание

`readFileSync` / `writeFileSync` в request path — блокировка. Большие файлы — `createReadStream` / `pipeline`, не целиком в память.
