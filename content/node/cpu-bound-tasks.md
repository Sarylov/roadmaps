---
title: CPU-bound tasks
summary: CPU-bound tasks — задачи, упирающиеся в вычисления на CPU, а не в ожидание I/O.
---

## Для чего

Чтобы не блокировать event loop «тяжёлой математикой» в том же потоке, что и HTTP.

## Пример

Большой sync JSON/parse, image resize, crypto на больших данных в request handler → latency всех клиентов растёт.

Вынос: `worker_threads`, `child_process`, очередь jobs (BullMQ и т.п.).

## Примечание

`async/await` не делает CPU параллельным. Сначала измерьте; иногда достаточно алгоритма/батчинга без воркеров.
