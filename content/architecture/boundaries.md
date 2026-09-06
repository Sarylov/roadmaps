---
title: boundaries
summary: "boundaries: Границы server/client и error/suspense boundaries. Важно на собесе и в проде в контексте «Clean Architecture»."
---

## Зачем нужно

База уровня CORE. Границы слоёв и направление зависимостей в приложении. Границы модулей и направление зависимостей.

## Как работает

**boundaries**: Границы server/client и error/suspense boundaries.

Слишком широкая client-boundary убивает выгоду RSC.

Error boundary ловит render errors, не все async.

## Что спрашивают

- Объясните boundaries своими словами на примере из «Clean Architecture».
- Какие ошибки и edge cases связаны с boundaries?
- Какие альтернативы boundaries и когда они лучше?

## Ответы

### Объясните boundaries своими словами на примере из «Clean Architecture».

Границы server/client и error/suspense boundaries. Держите структуру: проблема → механизм → пример. Error boundary ловит render errors, не все async.

### Какие ошибки и edge cases связаны с boundaries?

Слишком широкая client-boundary убивает выгоду RSC. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы boundaries и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Error boundary ловит render errors, не все async.
