---
title: Spans
summary: Span представляет одну операцию внутри trace: имя, время, status, attributes, events и связи. Из spans строится критический путь распределённого запроса.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Root/parent span создаёт контекст, child span наследует trace ID и получает свой span ID. Контекст передаётся через W3C `traceparent`; server/client spans окружают RPC, а exporter отправляет завершённые данные асинхронно.

## Что спрашивают

- Как работает Spans на практике?
- Какой типичный failure mode связан с Spans?
- Какие trade-offs важно назвать для Spans?

## Ответы

### Как работает Spans на практике?

Root/parent span создаёт контекст, child span наследует trace ID и получает свой span ID. Контекст передаётся через W3C `traceparent`; server/client spans окружают RPC, а exporter отправляет завершённые данные асинхронно.

### Какой типичный failure mode связан с Spans?

Span на каждую функцию создаёт шум и стоимость; body, SQL с параметрами или user ID могут утечь и дать cardinality explosion. Незавершённый span и потерянный parent искажают latency.

### Какие trade-offs важно назвать для Spans?

Инструментируют удалённые вызовы, очереди и значимые стадии. Attributes должны быть ограниченными и стабильными; error записывают событием/status, но stack не заменяет обычный structured log.
