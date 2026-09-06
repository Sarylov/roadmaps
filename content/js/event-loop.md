---
title: Event loop
summary: Event loop координирует выполнение JavaScript, таймеров и результатов асинхронного I/O. На собеседовании важно объяснить очереди задач, приоритет microtask и причины блокировки.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Синхронный код выполняется на call stack. После опустошения стека runtime дренирует очередь microtask (`process.nextTick`, затем Promise в Node), а затем переходит к очередной фазе loop: timers, poll, check и другим. Callback не исполняется «в фоне»: в loop возвращается только его результат.

## Что спрашивают

- Как работает Event loop на практике?
- Какой типичный failure mode связан с Event loop?
- Какие trade-offs важно назвать для Event loop?

## Ответы

### Как работает Event loop на практике?

Синхронный код выполняется на call stack. После опустошения стека runtime дренирует очередь microtask (`process.nextTick`, затем Promise в Node), а затем переходит к очередной фазе loop: timers, poll, check и другим. Callback не исполняется «в фоне»: в loop возвращается только его результат.

### Какой типичный failure mode связан с Event loop?

Длинный CPU-bound callback или бесконечная цепочка microtask не отдаёт управление фазам I/O: растут event-loop lag и latency всех запросов. Это находят по `monitorEventLoopDelay`, профилю CPU и p99 latency.

### Какие trade-offs важно назвать для Event loop?

Для короткого неблокирующего I/O достаточно event loop. CPU-bound работу дробят или выносят в `worker_threads`; отдельный процесс выбирают, когда нужна изоляция памяти и отказов.
