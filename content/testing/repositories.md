---
title: repositories
summary: repositories в блоке «Integration Testing» — нужно уметь объяснить механизм, риск и альтернативы.
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Проверка взаимодействия кода с БД, API и другими компонентами. Границы unit/integration/e2e и борьба с flaky.

## Как работает

**repositories** — тема блока «Integration Testing» (testing). Проверка взаимодействия кода с БД, API и другими компонентами.

Типичная ошибка — использовать repositories «по привычке» без понимания границ и failure modes в «Integration Testing».

Границы unit/integration/e2e и борьба с flaky.

## Что спрашивают

- Объясните repositories своими словами на примере из «Integration Testing».
- Какие ошибки и edge cases связаны с repositories?
- Какие альтернативы repositories и когда они лучше?

## Ответы

### Объясните repositories своими словами на примере из «Integration Testing».

**repositories** — тема блока «Integration Testing» (testing). Проверка взаимодействия кода с БД, API и другими компонентами. Держите структуру: проблема → механизм → пример. Границы unit/integration/e2e и борьба с flaky.

### Какие ошибки и edge cases связаны с repositories?

Типичная ошибка — использовать repositories «по привычке» без понимания границ и failure modes в «Integration Testing». Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы repositories и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Границы unit/integration/e2e и борьба с flaky.
