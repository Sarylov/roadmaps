---
title: Bulkhead
summary: Bulkhead — изоляция ресурсов (пулы потоков/соединений) по зависимостям, чтобы авария одной не потопила все.
---

## Для чего

Чтобы медленный «отчётный» HTTP не съел все соединения и не убил критичный checkout.

## Пример

Отдельный connection pool / queue concurrency на `billing` и на `recommendations`. Recommendations забит — billing ещё жив.

## Примечание

Идея как отсеки корабля. В Node часто: отдельные агенты, лимиты concurrency, разные очереди worker'ов.
