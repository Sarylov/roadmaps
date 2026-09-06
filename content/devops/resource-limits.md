---
title: resource limits
summary: "resource limits: requests/limits CPU/RAM. Важно на собесе и в проде в контексте «Kubernetes в эксплуатации»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Обновления, лимиты и разбор проблем в кластере. Операции, rollback и безопасность поставки.

## Как работает

**resource limits**: requests/limits CPU/RAM.

Throttle CPU vs OOMKill RAM.

Завышенные requests = низкая утилизация кластера.

## Что спрашивают

- Объясните resource limits своими словами на примере из «Kubernetes в эксплуатации».
- Какие ошибки и edge cases связаны с resource limits?
- Какие альтернативы resource limits и когда они лучше?

## Ответы

### Объясните resource limits своими словами на примере из «Kubernetes в эксплуатации».

requests/limits CPU/RAM. Держите структуру: проблема → механизм → пример. Завышенные requests = низкая утилизация кластера.

### Какие ошибки и edge cases связаны с resource limits?

Throttle CPU vs OOMKill RAM. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы resource limits и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Завышенные requests = низкая утилизация кластера.
