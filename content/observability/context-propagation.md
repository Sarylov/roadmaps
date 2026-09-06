---
title: context propagation
summary: context propagation в блоке «Distributed Tracing» — нужно уметь объяснить механизм, риск и альтернативы.
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Отслеживание запроса через несколько сервисов и компонентов. Сигнал → алерт → кого пейджить; correlation.

## Как работает

**context propagation** — тема блока «Distributed Tracing» (observability). Отслеживание запроса через несколько сервисов и компонентов.

Типичная ошибка — использовать context propagation «по привычке» без понимания границ и failure modes в «Distributed Tracing».

Сигнал → алерт → кого пейджить; correlation.

## Что спрашивают

- Объясните context propagation своими словами на примере из «Distributed Tracing».
- Какие ошибки и edge cases связаны с context propagation?
- Какие альтернативы context propagation и когда они лучше?

## Ответы

### Объясните context propagation своими словами на примере из «Distributed Tracing».

**context propagation** — тема блока «Distributed Tracing» (observability). Отслеживание запроса через несколько сервисов и компонентов. Держите структуру: проблема → механизм → пример. Сигнал → алерт → кого пейджить; correlation.

### Какие ошибки и edge cases связаны с context propagation?

Типичная ошибка — использовать context propagation «по привычке» без понимания границ и failure modes в «Distributed Tracing». Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы context propagation и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Сигнал → алерт → кого пейджить; correlation.
