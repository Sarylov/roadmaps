---
title: retry with backoff
summary: "retry with backoff: Backoff+jitter на transient errors. Важно на собесе и в проде в контексте «Resilience Patterns»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Как сервис выживает при отказах соседей и сети. Сеть, частичные сбои и eventual consistency.

## Как работает

**retry with backoff**: Backoff+jitter на transient errors.

Не ретраить 400 без смысла.

Бюджет ретраев и дедлайн.

## Что спрашивают

- Какую проблему решает паттерн retry with backoff?
- Как устроить retry with backoff end-to-end?
- Когда retry with backoff избыточен и чем заменить?

## Ответы

### Какую проблему решает паттерн retry with backoff?

Backoff+jitter на transient errors. Без проблемы паттерн — cargo cult. Бюджет ретраев и дедлайн.

### Как устроить retry with backoff end-to-end?

Шаги, участники, данные, что происходит при сбое. Не ретраить 400 без смысла.

### Когда retry with backoff избыточен и чем заменить?

Сравните с более простым подходом и назовите цену сложности. Для маленькой системы часто хватает монолитного варианта без retry with backoff.
