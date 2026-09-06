---
title: Kubernetes Deployments
summary: Deployment управляет stateless Pods через ReplicaSet и выполняет декларативные rolling updates. Он сравнивает desired state с фактическим и заменяет экземпляры.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Изменение pod template создаёт новый ReplicaSet. `maxSurge` ограничивает дополнительные pods, `maxUnavailable` — недоступные; readiness не пускает трафик до готовности, progress deadline обнаруживает застрявший rollout.

## Что спрашивают

- Как работает Kubernetes Deployments на практике?
- Какой типичный failure mode связан с Kubernetes Deployments?
- Какие trade-offs важно назвать для Kubernetes Deployments?

## Ответы

### Как работает Kubernetes Deployments на практике?

Изменение pod template создаёт новый ReplicaSet. `maxSurge` ограничивает дополнительные pods, `maxUnavailable` — недоступные; readiness не пускает трафик до готовности, progress deadline обнаруживает застрявший rollout.

### Какой типичный failure mode связан с Kubernetes Deployments?

Если readiness поверхностная, rollout считается успешным при сломанной зависимости. Один несовместимый schema migration ломает старую или новую версию; слишком короткий termination grace обрывает requests.

### Какие trade-offs важно назвать для Kubernetes Deployments?

Используют backward-compatible expand/contract migrations, immutable image digest, readiness и graceful shutdown. `rollout undo` возвращает template, но не откатывает БД или внешние side effects.
