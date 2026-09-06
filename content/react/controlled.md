---
title: controlled
summary: "controlled: Controlled: значение и onChange снаружи; source of truth — parent. Важно на собесе и в проде в контексте «Паттерны»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Компонентная модель, состояние, роутинг и серверный React. Упор на ререндеры, ключи, эффекты и Strict Mode.

## Как работает

**controlled**: Controlled: значение и onChange снаружи; source of truth — parent.

Смешение controlled/uncontrolled даёт warning и баги.

Для форм часто controlled + схема валидации.

Документация: [react.dev](https://react.dev/).

## Что спрашивают

- Объясните controlled своими словами на примере из «Паттерны».
- Какие ошибки и edge cases связаны с controlled?
- Какие альтернативы controlled и когда они лучше?

## Ответы

### Объясните controlled своими словами на примере из «Паттерны».

Controlled: значение и onChange снаружи; source of truth — parent. Держите структуру: проблема → механизм → пример. Для форм часто controlled + схема валидации.

### Какие ошибки и edge cases связаны с controlled?

Смешение controlled/uncontrolled даёт warning и баги. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы controlled и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Для форм часто controlled + схема валидации.
