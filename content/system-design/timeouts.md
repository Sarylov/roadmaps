---
title: Timeouts
summary: Timeouts в system design — лимиты ожидания на каждом hop (клиент, gateway, сервис, БД), согласованные по budget.
---

## Для чего

Чтобы сбой/замедление зависимости не подвешивало всю цепочку.

## Пример

Клиент 10s → gateway 3s → service 2s → DB 1s. Внутри — отмена, снаружи — ошибка/retry по политике.

## Примечание

Без timeout нет рабочих circuit breaker и bulkhead. Вложенные timeout должны сужаться к краю.
