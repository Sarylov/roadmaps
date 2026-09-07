---
title: Traffic policies
summary: Traffic policies в mesh/gateway — правила маршрутизации и устойчивости: canary, timeout, retry, outlier ejection.
---

## Для чего

Чтобы управлять выкладкой и поведением трафика декларативно, не правя код каждого клиента.

## Пример

Canary 5% на новую версию; timeout 1s; retry только на idempotent GET; выброс нездоровых endpoints.

## Примечание

Политики клиента и mesh могут дублироваться — согласуйте, иначе retry storm. Сначала измерьте, потом ужесточайте.
