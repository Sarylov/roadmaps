---
title: child_process
summary: child_process — запуск отдельного OS-процесса (exec/spawn/fork) с IPC.
---

## Для чего

Чтобы вынести работу в другой процесс или вызвать внешнюю утилиту с изоляцией памяти от Node.

## Пример

```js
import { spawn } from 'node:child_process'
const p = spawn('ffprobe', ['-v', 'quiet', file])
```

## Примечание

`shell: true` + пользовательский ввод = command injection. `fork` — удобен для Node-детей. Тяжелее по ресурсам, чем `worker_threads`.
