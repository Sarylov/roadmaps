---
title: HPA
summary: HPA (Horizontal Pod Autoscaler) — контроллер K8s, меняет `replicas` Deployment/иных по CPU/памяти/custom metrics.
---

## Для чего

Чтобы автоматически scale out/in приложение под нагрузку.

## Пример

HPA min 2 max 20, target CPU 60%. Пик → 12 подов; ночь → обратно к 2.

## Примечание

Метрики из metrics-server/Prometheus adapter. Слишком агрессивный scale-down → флаппинг; настройте stabilization window.
