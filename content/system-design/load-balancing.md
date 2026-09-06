---
title: Load balancing
summary: Load balancer распределяет запросы между здоровыми экземплярами, выполняет health checking и часто завершает TLS. Алгоритм должен учитывать неодинаковую стоимость запросов.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Round robin прост, least-connections полезен для долгих соединений, consistent hashing сохраняет affinity. L4 балансирует соединения, L7 видит HTTP route/header; passive и active checks исключают плохие targets.

## Что спрашивают

- Как работает Load balancing на практике?
- Какой типичный failure mode связан с Load balancing?
- Какие trade-offs важно назвать для Load balancing?

## Ответы

### Как работает Load balancing на практике?

Round robin прост, least-connections полезен для долгих соединений, consistent hashing сохраняет affinity. L4 балансирует соединения, L7 видит HTTP route/header; passive и active checks исключают плохие targets.

### Какой типичный failure mode связан с Load balancing?

Readiness, которая проверяет только процесс, отправляет трафик instance без доступа к БД. Sticky sessions скрывают statefulness и дают перекос; retry на нескольких слоях умножает нагрузку.

### Какие trade-offs важно назвать для Load balancing?

L4 выбирают для throughput и произвольного TCP, L7 — для routing/auth/observability. При rollout нужен connection draining; retries ограничивают budget и выполняют только для безопасных операций.
