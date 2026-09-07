---
title: Context propagation
summary: Context propagation — передача trace/span context (и baggage) через границы процессов: HTTP headers, messaging metadata.
---

## Для чего

Чтобы дочерний сервис продолжил тот же trace, а не начал «новый мир» без связи.

## Пример

W3C `traceparent` в HTTP; в Kafka — заголовок сообщения. SDK OpenTelemetry делает inject/extract.

## Примечание

Сломали propagation → «дыры» в трейсах. Обновляйте middleware/клиенты единообразно; не режьте неизвестные headers на proxy без нужды.
