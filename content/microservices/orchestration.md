---
title: Orchestration
summary: Saga orchestration — центральный оркестратор по шагам вызывает сервисы/команды и решает компенсации при сбоях.
---

## Для чего

Чтобы явный workflow (checkout, onboarding) был в одном месте: проще мониторить и менять порядок шагов.

## Пример

`CheckoutOrchestrator`: reserve stock → charge → confirm order. На fail charge — вызвать `releaseStock`.

## Примечание

Оркестратор не должен стать монолитом всей логики домена — только координация. Нужны идемпотентные шаги и таймауты.
