---
title: Instrumentation
summary: Instrumentation — встройка сбора телеметрии в код/runtime: ручная или auto (middleware, агенты OpenTelemetry).
---

## Для чего

Чтобы сервисы сами отдавали логи/метрики/трейсы без ручного «printf» на каждый шаг.

## Пример

OTel Node SDK + auto-instrumentation `http`/`pg` → span'ы запросов и SQL. Плюс свои span'ы вокруг бизнес-операций.

## Примечание

Auto закрывает типовые клиенты; доменную семантику (`order.checkout`) добавляют вручную. Следите за overhead и sampling.
