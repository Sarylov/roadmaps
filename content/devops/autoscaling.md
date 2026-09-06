---
title: autoscaling
summary: "autoscaling: HPA по CPU/custom metrics. Важно на собесе и в проде в контексте «Kubernetes»."
---

## Зачем нужно

База уровня CORE. Оркестрация контейнеров и запуск сервисов в production. Операции, rollback и безопасность поставки.

## Как работает

**autoscaling**: HPA по CPU/custom metrics.

Правильные метрики важнее «автоскейла ради»

Cold start и scale-to-zero нюансы.

## Что спрашивают

- Объясните autoscaling своими словами на примере из «Kubernetes».
- Какие ошибки и edge cases связаны с autoscaling?
- Какие альтернативы autoscaling и когда они лучше?

## Ответы

### Объясните autoscaling своими словами на примере из «Kubernetes».

HPA по CPU/custom metrics. Держите структуру: проблема → механизм → пример. Cold start и scale-to-zero нюансы.

### Какие ошибки и edge cases связаны с autoscaling?

Правильные метрики важнее «автоскейла ради» Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы autoscaling и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Cold start и scale-to-zero нюансы.
