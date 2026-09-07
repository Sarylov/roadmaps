---
title: Deployments
summary: Deployment — контроллер K8s: желаемое число реплик Pod'ов одного приложения и стратегия обновления.
---

## Для чего

Чтобы декларативно держать N копий сервиса и выкатывать новые образы без ручного create pod.

## Пример

`Deployment api` replicas: 3, image `api:1.4`. Apply → ReplicaSet создаёт/гасит поды rolling update.

## Примечание

Deployment для stateless. StatefulSet — для упорядоченных stateful (Kafka, БД). Не путать Deployment с самим Service.
