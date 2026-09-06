---
title: monolith vs microservices
summary: "monolith vs microservices: Монолит проще consistency; микро — независимый deploy ценой distributed pain. Важно на собесе и в проде в контексте «Микросервисы: основы»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Когда монолит стоит делить и по каким границам. Сеть, частичные сбои и eventual consistency.

## Как работает

**monolith vs microservices**: Монолит проще consistency; микро — независимый deploy ценой distributed pain.

Не сплить до product/org готовности.

Modular monolith как промежуточный шаг.

## Что спрашивают

- В чём принципиальная разница сторон в «monolith vs microservices»?
- Когда выбирать каждый вариант из «monolith vs microservices»?
- Какие риски миграции между вариантами «monolith vs microservices»?

## Ответы

### В чём принципиальная разница сторон в «monolith vs microservices»?

Монолит проще consistency; микро — независимый deploy ценой distributed pain. Разложите по осям: consistency, latency, ops-сложность, команда. Modular monolith как промежуточный шаг.

### Когда выбирать каждый вариант из «monolith vs microservices»?

Не сплить до product/org готовности. Привяжите выбор к нагрузке, размеру команды и цене ошибки. Нет универсального победителя без constraints.

### Какие риски миграции между вариантами «monolith vs microservices»?

Миграция почти всегда требует dual-run, совместимости данных и rollback. Назовите один технический и один организационный риск.
