---
title: queries
summary: "queries: RTL queries: get/find/query + роли/текст. Важно на собесе и в проде в контексте «React Testing Library»."
---

## Зачем нужно

База уровня CORE. Проверка поведения от unit до пользовательского сценария. Границы unit/integration/e2e и борьба с flaky.

## Как работает

**queries**: RTL queries: get/find/query + роли/текст.

Предпочитайте role/label, не test-id без нужды.

find* для async.

## Что спрашивают

- Объясните queries своими словами на примере из «React Testing Library».
- Какие ошибки и edge cases связаны с queries?
- Какие альтернативы queries и когда они лучше?

## Ответы

### Объясните queries своими словами на примере из «React Testing Library».

RTL queries: get/find/query + роли/текст. Держите структуру: проблема → механизм → пример. find* для async.

### Какие ошибки и edge cases связаны с queries?

Предпочитайте role/label, не test-id без нужды. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы queries и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. find* для async.
