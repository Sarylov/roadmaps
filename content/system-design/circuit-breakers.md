---
title: Circuit breakers
summary: Circuit breaker в дизайне — предохранитель на вызовах зависимостей: open/half-open/closed по ошибкам и latency.
---

## Для чего

Чтобы каскадные отказы не роняли весь продукт и быстрее включать degraded mode.

## Пример

Search down → breaker open → главная без блока рекомендаций, checkout жив.

## Примечание

На собесе свяжите с timeout, retry budget и fallback. Иначе breaker — просто слово.
