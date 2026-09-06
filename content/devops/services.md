---
title: Kubernetes Services
summary: Service даёт стабильный virtual IP и DNS для динамического набора Pods. EndpointSlice формируется selector-ом и содержит только подходящие ready endpoints.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

ClusterIP доступен внутри cluster, NodePort открывает порт nodes, LoadBalancer просит внешний балансировщик, headless Service возвращает адреса pods. kube-proxy/eBPF направляет соединение к endpoint.

## Что спрашивают

- Как работает Kubernetes Services на практике?
- Какой типичный failure mode связан с Kubernetes Services?
- Какие trade-offs важно назвать для Kubernetes Services?

## Ответы

### Как работает Kubernetes Services на практике?

ClusterIP доступен внутри cluster, NodePort открывает порт nodes, LoadBalancer просит внешний балансировщик, headless Service возвращает адреса pods. kube-proxy/eBPF направляет соединение к endpoint.

### Какой типичный failure mode связан с Kubernetes Services?

Неверный selector даёт пустые endpoints, а targetPort — connection refused. Service балансирует соединения, поэтому одно долгое HTTP/2 соединение не перераспределяется по каждому request.

### Какие trade-offs важно назвать для Kubernetes Services?

ClusterIP используют для внутреннего API, LoadBalancer/Ingress/Gateway — для внешнего. Headless нужен клиентскому discovery/stateful workloads; readiness определяет участие pod в трафике.
