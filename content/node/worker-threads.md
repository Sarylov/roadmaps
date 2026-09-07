---
title: worker_threads
summary: worker_threads — отдельные JS-потоки внутри процесса Node для CPU-bound работы без блокировки главного loop.
---

## Для чего

Чтобы считать тяжёлое (парсинг, крипто, image) параллельно, пока HTTP-поток продолжает отвечать.

## Пример

```js
import { Worker } from 'node:worker_threads'
const w = new Worker('./job.js', { workerData: { n: 1e8 } })
w.on('message', console.log)
```

## Примечание

Обмен через `postMessage` (клон/transfer). Старт воркера дорогой — часто пул. Это не замена горизонтальному масштабированию процессов.
