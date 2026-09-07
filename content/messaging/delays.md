---
title: Delays
summary: Delayed job — сообщение становится доступным consumer'у только после заданной задержки.
---

## Для чего

Чтобы планировать «сделай через N» (напоминание, soft-delete purge, отложенный retry).

## Пример

Bull/Bee: `queue.add(job, { delay: 60_000 })`.  
Rabbit: TTL + DLX или delayed-message plugin.

## Примечание

Точность не realtime-гарантия — брокер/воркер дают best-effort. Массовые delay на одном ключе могут создать thundering herd в момент fire.
