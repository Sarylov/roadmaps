---
title: Helm
summary: Helm — пакетный менеджер K8s: charts (шаблоны манифестов) + values для разных окружений.
---

## Для чего

Чтобы ставить и версионировать сложные приложения одним релизом, не копипая YAML.

## Пример

`helm upgrade --install api ./chart -f values.prod.yaml` — подставляет image tag, replicas, env.

## Примечание

Chart = шаблоны; release = установленный экземпляр. Секреты лучше не в values в git. Понимайте rendered manifests (`helm template`).
