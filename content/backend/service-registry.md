---
title: service registry
summary: "service registry: Реестр сервисов для discovery. Важно на собесе и в проде в контексте «Service Discovery и конфигурация»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Как сервисы находят друг друга и получают настройки. Слои приложения, DI и границы транзакций.

## Как работает

**service registry**: Реестр сервисов для discovery.

DNS/k8s Service часто достаточно.

Health и stale records.

## Что спрашивают

- Объясните service registry своими словами на примере из «Service Discovery и конфигурация».
- Какие ошибки и edge cases связаны с service registry?
- Какие альтернативы service registry и когда они лучше?

## Ответы

### Объясните service registry своими словами на примере из «Service Discovery и конфигурация».

Реестр сервисов для discovery. Держите структуру: проблема → механизм → пример. Health и stale records.

### Какие ошибки и edge cases связаны с service registry?

DNS/k8s Service часто достаточно. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы service registry и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Health и stale records.
