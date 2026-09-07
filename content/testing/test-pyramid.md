---
title: Test pyramid
summary: Test pyramid — много быстрых unit, меньше integration, ещё меньше E2E: баланс скорости и уверенности.
---

## Для чего

Чтобы не строить стратегию из одних медленных UI/E2E и не ждать час на каждый PR.

## Пример

Доменные правила — unit. SQL/repository — integration. Checkout flow — несколько E2E. Обратная «пицца» из E2E — антипаттерн.

## Примечание

Пирамида — ориентир, не догма. Для API-first бэка mid-слой (API/integration) часто толще UI-E2E.
