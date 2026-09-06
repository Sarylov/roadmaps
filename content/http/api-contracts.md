---
title: API contracts
summary: "API contracts: Контракт: OpenAPI/JSON Schema + примеры. Важно на собесе и в проде в контексте «API Design»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Практические правила построения надёжных API. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**API contracts**: Контракт: OpenAPI/JSON Schema + примеры.

Контракт-тесты ловят дрейф.

Breaking vs non-breaking изменения.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните API contracts своими словами на примере из «API Design».
- Какие ошибки и edge cases связаны с API contracts?
- Какие альтернативы API contracts и когда они лучше?

## Ответы

### Объясните API contracts своими словами на примере из «API Design».

Контракт: OpenAPI/JSON Schema + примеры. Держите структуру: проблема → механизм → пример. Breaking vs non-breaking изменения.

### Какие ошибки и edge cases связаны с API contracts?

Контракт-тесты ловят дрейф. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы API contracts и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Breaking vs non-breaking изменения.
