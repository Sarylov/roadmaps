---
title: cluster
summary: cluster — форк нескольких Node-процессов, которые делят серверный порт (один master, много workers).
---

## Для чего

Чтобы задействовать несколько CPU на одной машине для I/O-сервиса без внешнего балансировщика.

## Пример

```js
import cluster from 'node:cluster'
import os from 'node:os'
if (cluster.isPrimary) {
  for (const _ of os.cpus()) cluster.fork()
} else {
  // listen(3000) в каждом worker
}
```

## Примечание

Память между воркерами не общая. В Kubernetes чаще несколько реплик pod, а не `cluster` внутри одного контейнера.
