---
title: type aliases
summary: "type aliases: type — алиас любой формы типов. Важно на собесе и в проде в контексте «Основы TypeScript»."
---

## Зачем нужно

База уровня CORE. Типовая модель backend-приложения и его контрактов. Упор на систему типов, inference и дизайн публичного API.

## Как работает

**type aliases**: type — алиас любой формы типов.

Не мерджится, в отличие от interface.

Для union/tuple/mapped удобнее type.

Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## Что спрашивают

- Объясните type aliases своими словами на примере из «Основы TypeScript».
- Какие ошибки и edge cases связаны с type aliases?
- Какие альтернативы type aliases и когда они лучше?

## Ответы

### Объясните type aliases своими словами на примере из «Основы TypeScript».

type — алиас любой формы типов. Держите структуру: проблема → механизм → пример. Для union/tuple/mapped удобнее type.

### Какие ошибки и edge cases связаны с type aliases?

Не мерджится, в отличие от interface. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы type aliases и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Для union/tuple/mapped удобнее type.
