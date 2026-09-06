---
title: Prisma
summary: "Prisma: Prisma — type-safe ORM/client + migrations. Важно на собесе и в проде в контексте «ORM»."
---

## Зачем нужно

База уровня CORE. Абстракция работы с БД внутри TypeScript-приложения. Слои приложения, DI и границы транзакций.

## Как работает

**Prisma**: Prisma — type-safe ORM/client + migrations.

N+1 через include/select тюнинг.

Тяжёлые query лучше raw/SQL views.

## Что спрашивают

- Что такое Prisma и какую задачу закрывает?
- Какие ключевые абстракции Prisma нужно знать на собесе?
- Какие operational pitfalls у Prisma?

## Ответы

### Что такое Prisma и какую задачу закрывает?

Prisma — type-safe ORM/client + migrations. Опишите место в стеке «ORM». Тяжёлые query лучше raw/SQL views.

### Какие ключевые абстракции Prisma нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. N+1 через include/select тюнинг.

### Какие operational pitfalls у Prisma?

N+1 через include/select тюнинг. Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
