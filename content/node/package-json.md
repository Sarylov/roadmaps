---
title: package.json
summary: "package.json: Манифест пакета: deps, exports, scripts, engines. Важно на собесе и в проде в контексте «Modules & Packages»."
---

## Зачем нужно

База уровня CORE. Модульная система и управление зависимостями. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**package.json**: Манифест пакета: deps, exports, scripts, engines.

exports защищает public API пакета.

private:true для приложений.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните package.json своими словами на примере из «Modules & Packages».
- Какие ошибки и edge cases связаны с package.json?
- Какие альтернативы package.json и когда они лучше?

## Ответы

### Объясните package.json своими словами на примере из «Modules & Packages».

Манифест пакета: deps, exports, scripts, engines. Держите структуру: проблема → механизм → пример. private:true для приложений.

### Какие ошибки и edge cases связаны с package.json?

exports защищает public API пакета. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы package.json и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. private:true для приложений.
