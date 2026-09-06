---
title: Availability
summary: Availability — доля времени, когда система способна успешно обслужить запрос в пределах SLO. Реплика сама по себе не гарантирует доступность без независимости отказов и failover.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

У доступности составных частей разная математика: последовательные зависимости перемножают availability, резервирование повышает её при независимых отказах. Multi-AZ, health checks, failover, timeout и degradation сокращают downtime.

## Что спрашивают

- Как работает Availability на практике?
- Какой типичный failure mode связан с Availability?
- Какие trade-offs важно назвать для Availability?

## Ответы

### Как работает Availability на практике?

У доступности составных частей разная математика: последовательные зависимости перемножают availability, резервирование повышает её при независимых отказах. Multi-AZ, health checks, failover, timeout и degradation сокращают downtime.

### Какой типичный failure mode связан с Availability?

Общий database, DNS, quota или deployment может одновременно вывести все replicas. Aggressive retry перегружает оставшиеся узлы; ложный health check вызывает flapping.

### Какие trade-offs важно назвать для Availability?

Цель выражают SLI/SLO, например 99.9%, и error budget. Повышение доступности стоит дороже и может ослаблять consistency; архитектуру выбирают по допустимым RTO/RPO и режимам деградации.
