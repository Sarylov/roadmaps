---
title: database
summary: database в блоке «Integration Testing» — нужно уметь объяснить механизм, риск и альтернативы.
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Проверка взаимодействия кода с БД, API и другими компонентами. Границы unit/integration/e2e и борьба с flaky.

## Как работает

**database** — тема блока «Integration Testing» (testing). Проверка взаимодействия кода с БД, API и другими компонентами.

Типичная ошибка — использовать database «по привычке» без понимания границ и failure modes в «Integration Testing».

Границы unit/integration/e2e и борьба с flaky.

## Что спрашивают

- Объясните database своими словами на примере из «Integration Testing».
- Какие ошибки и edge cases связаны с database?
- Какие альтернативы database и когда они лучше?

## Ответы

### Объясните database своими словами на примере из «Integration Testing».

**database** — тема блока «Integration Testing» (testing). Проверка взаимодействия кода с БД, API и другими компонентами. Держите структуру: проблема → механизм → пример. Границы unit/integration/e2e и борьба с flaky.

### Какие ошибки и edge cases связаны с database?

Типичная ошибка — использовать database «по привычке» без понимания границ и failure modes в «Integration Testing». Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы database и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Границы unit/integration/e2e и борьба с flaky.
