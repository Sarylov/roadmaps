---
title: npm
summary: "npm: npm install по lockfile; audit/ci. Важно на собесе и в проде в контексте «Modules & Packages»."
---

## Зачем нужно

База уровня CORE. Модульная система и управление зависимостями. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**npm**: npm install по lockfile; audit/ci.

phantom dependencies — риск.

workspaces для монорепо.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните npm своими словами на примере из «Modules & Packages».
- Какие ошибки и edge cases связаны с npm?
- Какие альтернативы npm и когда они лучше?

## Ответы

### Объясните npm своими словами на примере из «Modules & Packages».

npm install по lockfile; audit/ci. Держите структуру: проблема → механизм → пример. workspaces для монорепо.

### Какие ошибки и edge cases связаны с npm?

phantom dependencies — риск. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы npm и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. workspaces для монорепо.
