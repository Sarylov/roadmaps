---
title: Traces
summary: Trace — дерево/граф span'ов одного запроса или сценария across процессов; визуализирует путь вызова.
---

## Для чего

Чтобы в микросервисах ответить: «какой сервис тормозит этот checkout?».

## Пример

Trace id `abc` связывает gateway → order → payment → DB. Один медленный span payment = причина p99.

## Примечание

Нужна context propagation между сервисами. Sampling снижает объём (head/tail-based) — иначе дорого.
