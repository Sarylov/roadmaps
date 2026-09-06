---
title: Hooks в Fastify
summary: Hooks Fastify встраивают логику в жизненный цикл запроса и приложения. Правильная фаза важна для auth, body, сериализации и освобождения ресурсов.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Последовательность включает `onRequest`, `preParsing`, `preValidation`, `preHandler`, `preSerialization`, `onSend`, `onResponse`; application hooks управляют startup/shutdown. Hook наследуется вниз по plugin scope.

## Что спрашивают

- Как работает Hooks в Fastify на практике?
- Какой типичный failure mode связан с Hooks в Fastify?
- Какие trade-offs важно назвать для Hooks в Fastify?

## Ответы

### Как работает Hooks в Fastify на практике?

Последовательность включает `onRequest`, `preParsing`, `preValidation`, `preHandler`, `preSerialization`, `onSend`, `onResponse`; application hooks управляют startup/shutdown. Hook наследуется вниз по plugin scope.

### Какой типичный failure mode связан с Hooks в Fastify?

Смешивание callback-стиля и `async` вызывает двойное продолжение запроса. В `onRequest` body ещё не разобран, а ошибка в `onResponse` уже не может изменить отправленный ответ. Тяжёлый global hook добавляет latency каждому route.

### Какие trade-offs важно назвать для Hooks в Fastify?

Auth без body ставят в `onRequest`, проверку после schema — в `preHandler`, метрики завершения — в `onResponse`. Бизнес-логику держат в handler/service, чтобы lifecycle не стал скрытым pipeline.
