---
title: Kubernetes Pods
summary: Pod — минимальная единица размещения Kubernetes: один или несколько containers с общими network namespace и volumes. Pod эфемерен и не является стабильным сервером.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Containers pod имеют один IP и общаются через localhost; init containers готовят окружение, sidecar обслуживает ту же жизненную единицу. Scheduler назначает pod node, kubelet перезапускает containers, controller заменяет потерянный pod.

## Что спрашивают

- Как работает Kubernetes Pods на практике?
- Какой типичный failure mode связан с Kubernetes Pods?
- Какие trade-offs важно назвать для Kubernetes Pods?

## Ответы

### Как работает Kubernetes Pods на практике?

Containers pod имеют один IP и общаются через localhost; init containers готовят окружение, sidecar обслуживает ту же жизненную единицу. Scheduler назначает pod node, kubelet перезапускает containers, controller заменяет потерянный pod.

### Какой типичный failure mode связан с Kubernetes Pods?

Запись важных данных в container filesystem теряется при пересоздании. Несколько несвязанных приложений в одном pod нельзя масштабировать отдельно; отсутствие requests/limits ухудшает scheduling и вызывает eviction/OOMKill.

### Какие trade-offs важно назвать для Kubernetes Pods?

В один pod помещают containers, которые обязаны жить и масштабироваться вместе. Стабильный доступ даёт Service, состояние — volume/external store, количество pod поддерживает Deployment/StatefulSet.
