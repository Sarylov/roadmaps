---
title: traffic policies
summary: "traffic policies: Retry/timeout/canary на уровне mesh/gateway. Важно на собесе и в проде в контексте «Service Mesh»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Инфраструктурный слой для трафика между сервисами. Слои приложения, DI и границы транзакций.

## Как работает

**traffic policies**: Retry/timeout/canary на уровне mesh/gateway.

Дубли политик в app и mesh путают.

Единый слой правил.

## Что спрашивают

- Объясните traffic policies своими словами на примере из «Service Mesh».
- Какие ошибки и edge cases связаны с traffic policies?
- Какие альтернативы traffic policies и когда они лучше?

## Ответы

### Объясните traffic policies своими словами на примере из «Service Mesh».

Retry/timeout/canary на уровне mesh/gateway. Держите структуру: проблема → механизм → пример. Единый слой правил.

### Какие ошибки и edge cases связаны с traffic policies?

Дубли политик в app и mesh путают. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы traffic policies и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Единый слой правил.
