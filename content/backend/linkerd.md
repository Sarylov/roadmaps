---
title: Linkerd
summary: Linkerd — лёгкий service mesh (focus на простоту): mTLS, retries, метрики через ultralight proxy.
---

## Для чего

Чтобы получить security/reliability mesh с меньшим cognitive load, чем у «полного» Istio.

## Пример

Mesh inject на namespace → трафик между pods автоматически в mTLS, dashboard success rate/latency.

## Примечание

Меньше фич traffic shaping «из коробки» vs Istio — смотрите актуальные возможности под ваш кейс.
