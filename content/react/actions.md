---
title: actions
summary: "actions: Server Actions/mutations с серверным выполнением. Важно на собесе и в проде в контексте «React Server Components»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Компонентная модель, состояние, роутинг и серверный React. Упор на ререндеры, ключи, эффекты и Strict Mode.

## Как работает

**actions**: Server Actions/mutations с серверным выполнением.

Нужны authz и валидация на сервере.

Идемпотентность и progressive enhancement формы.

Документация: [react.dev](https://react.dev/).

## Что спрашивают

- Объясните actions своими словами на примере из «React Server Components».
- Какие ошибки и edge cases связаны с actions?
- Какие альтернативы actions и когда они лучше?

## Ответы

### Объясните actions своими словами на примере из «React Server Components».

Server Actions/mutations с серверным выполнением. Держите структуру: проблема → механизм → пример. Идемпотентность и progressive enhancement формы.

### Какие ошибки и edge cases связаны с actions?

Нужны authz и валидация на сервере. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы actions и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Идемпотентность и progressive enhancement формы.
