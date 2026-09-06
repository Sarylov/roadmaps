---
title: user events
summary: "user events: user-event ближе к реальному вводу, чем fireEvent. Важно на собесе и в проде в контексте «React Testing Library»."
---

## Зачем нужно

База уровня CORE. Проверка поведения от unit до пользовательского сценария. Границы unit/integration/e2e и борьба с flaky.

## Как работает

**user events**: user-event ближе к реальному вводу, чем fireEvent.

Асинхронность ввода — await.

pointer/keyboard последовательности важны.

## Что спрашивают

- Объясните user events своими словами на примере из «React Testing Library».
- Какие ошибки и edge cases связаны с user events?
- Какие альтернативы user events и когда они лучше?

## Ответы

### Объясните user events своими словами на примере из «React Testing Library».

user-event ближе к реальному вводу, чем fireEvent. Держите структуру: проблема → механизм → пример. pointer/keyboard последовательности важны.

### Какие ошибки и edge cases связаны с user events?

Асинхронность ввода — await. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы user events и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. pointer/keyboard последовательности важны.
