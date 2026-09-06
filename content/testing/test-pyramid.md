---
title: test pyramid
summary: test pyramid в блоке «Testing Strategy» — нужно уметь объяснить механизм, риск и альтернативы.
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Выбор правильного уровня тестов и поддержание их стабильности. Границы unit/integration/e2e и борьба с flaky.

## Как работает

**test pyramid** — тема блока «Testing Strategy» (testing). Выбор правильного уровня тестов и поддержание их стабильности.

Типичная ошибка — использовать test pyramid «по привычке» без понимания границ и failure modes в «Testing Strategy».

Границы unit/integration/e2e и борьба с flaky.

## Что спрашивают

- Объясните test pyramid своими словами на примере из «Testing Strategy».
- Какие ошибки и edge cases связаны с test pyramid?
- Какие альтернативы test pyramid и когда они лучше?

## Ответы

### Объясните test pyramid своими словами на примере из «Testing Strategy».

**test pyramid** — тема блока «Testing Strategy» (testing). Выбор правильного уровня тестов и поддержание их стабильности. Держите структуру: проблема → механизм → пример. Границы unit/integration/e2e и борьба с flaky.

### Какие ошибки и edge cases связаны с test pyramid?

Типичная ошибка — использовать test pyramid «по привычке» без понимания границ и failure modes в «Testing Strategy». Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы test pyramid и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Границы unit/integration/e2e и борьба с flaky.
