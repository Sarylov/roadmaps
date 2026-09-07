---
title: Services
summary: Service в Kubernetes — стабильный виртуальный IP/DNS на набор подов (по label selector); в Docker Compose «service» — именованный контейнер в compose-файле.
---

## Для чего

Чтобы клиенты ходили на постоянное имя (`orders:80`), пока поды пересоздаются с новыми IP.

## Пример

K8s: `Service` type ClusterIP → `api` pods. Compose: блок `services: api:` / `db:` в `docker-compose.yml`.

## Примечание

K8s Service ≠ Deployment. Type LoadBalancer/NodePort — снаружи кластера. Headless — для прямой адресации подов.
