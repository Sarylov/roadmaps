---
title: instrumentation
summary: instrumentation в блоке «OpenTelemetry» — нужно уметь объяснить механизм, риск и альтернативы.
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Стандартная инструментализация backend для telemetry. Слои приложения, DI и границы транзакций.

## Как работает

**instrumentation** — тема блока «OpenTelemetry» (backend). Стандартная инструментализация backend для telemetry.

Типичная ошибка — использовать instrumentation «по привычке» без понимания границ и failure modes в «OpenTelemetry».

Слои приложения, DI и границы транзакций.

## Что спрашивают

- Объясните instrumentation своими словами на примере из «OpenTelemetry».
- Какие ошибки и edge cases связаны с instrumentation?
- Какие альтернативы instrumentation и когда они лучше?

## Ответы

### Объясните instrumentation своими словами на примере из «OpenTelemetry».

**instrumentation** — тема блока «OpenTelemetry» (backend). Стандартная инструментализация backend для telemetry. Держите структуру: проблема → механизм → пример. Слои приложения, DI и границы транзакций.

### Какие ошибки и edge cases связаны с instrumentation?

Типичная ошибка — использовать instrumentation «по привычке» без понимания границ и failure modes в «OpenTelemetry». Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы instrumentation и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Слои приложения, DI и границы транзакций.
