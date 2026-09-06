---
title: exports/imports
summary: "exports/imports: exports/imports conditional maps. Важно на собесе и в проде в контексте «Modules & Packages»."
---

## Зачем нужно

База уровня CORE. Модульная система и управление зависимостями. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**exports/imports**: exports/imports conditional maps.

Неверный exports ломает deep import клиентов.

Тестируйте require и import потребителей.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните exports/imports своими словами на примере из «Modules & Packages».
- Какие ошибки и edge cases связаны с exports/imports?
- Какие альтернативы exports/imports и когда они лучше?

## Ответы

### Объясните exports/imports своими словами на примере из «Modules & Packages».

exports/imports conditional maps. Держите структуру: проблема → механизм → пример. Тестируйте require и import потребителей.

### Какие ошибки и edge cases связаны с exports/imports?

Неверный exports ломает deep import клиентов. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы exports/imports и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Тестируйте require и import потребителей.
