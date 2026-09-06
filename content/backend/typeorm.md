---
title: TypeORM
summary: "TypeORM: TypeORM — Active Record/Data Mapper гибрид. Важно на собесе и в проде в контексте «ORM»."
---

## Зачем нужно

База уровня CORE. Абстракция работы с БД внутри TypeScript-приложения. Слои приложения, DI и границы транзакций.

## Как работает

**TypeORM**: TypeORM — Active Record/Data Mapper гибрид.

Декораторы и сюрпризы lazy relations.

Аккуратно с synchronize в проде (выкл).

## Что спрашивают

- Что такое TypeORM и какую задачу закрывает?
- Какие ключевые абстракции TypeORM нужно знать на собесе?
- Какие operational pitfalls у TypeORM?

## Ответы

### Что такое TypeORM и какую задачу закрывает?

TypeORM — Active Record/Data Mapper гибрид. Опишите место в стеке «ORM». Аккуратно с synchronize в проде (выкл).

### Какие ключевые абстракции TypeORM нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. Декораторы и сюрпризы lazy relations.

### Какие operational pitfalls у TypeORM?

Декораторы и сюрпризы lazy relations. Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
