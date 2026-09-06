---
title: Distributed traces
summary: Trace собирает причинно связанные spans одного запроса и показывает путь через сервисы. Он помогает найти, где формируется latency и ошибка, но зависит от propagation и sampling.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Trace context проходит по HTTP/message headers; backend собирает spans по trace ID. Head sampling решает в начале и дёшев, tail sampling может сохранить редкие slow/error traces после просмотра результата.

## Что спрашивают

- Как работает Distributed traces на практике?
- Какой типичный failure mode связан с Distributed traces?
- Какие trade-offs важно назвать для Distributed traces?

## Ответы

### Как работает Distributed traces на практике?

Trace context проходит по HTTP/message headers; backend собирает spans по trace ID. Head sampling решает в начале и дёшев, tail sampling может сохранить редкие slow/error traces после просмотра результата.

### Какой типичный failure mode связан с Distributed traces?

Без propagation каждый сервис создаёт отдельный trace. 100% sampling дорого, а слишком низкий random sampling теряет редкие ошибки; часы hosts и async messaging требуют корректных semantic conventions/links.

### Какие trade-offs важно назвать для Distributed traces?

Метрики обнаруживают проблему, traces локализуют путь, logs дают детали события. Sampling выбирают по объёму и SLO: ошибки и high latency сохраняют чаще, health checks — почти никогда.
