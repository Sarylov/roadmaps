---
title: Плагины Fastify
summary: Плагин Fastify инкапсулирует routes, decorators и hooks в отдельном scope. Модель encapsulation позволяет собирать приложение без глобального mutable registry.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

`fastify.register(plugin, options)` создаёт дочерний context: потомки видят decorations предков, но соседние ветки изолированы. `fastify-plugin` используется, когда decoration должна быть доступна родителю/соседям и нужны metadata dependencies.

## Что спрашивают

- Как работает Плагины Fastify на практике?
- Какой типичный failure mode связан с Плагины Fastify?
- Какие trade-offs важно назвать для Плагины Fastify?

## Ответы

### Как работает Плагины Fastify на практике?

`fastify.register(plugin, options)` создаёт дочерний context: потомки видят decorations предков, но соседние ветки изолированы. `fastify-plugin` используется, когда decoration должна быть доступна родителю/соседям и нужны metadata dependencies.

### Какой типичный failure mode связан с Плагины Fastify?

Если зарегистрировать route до async decoration или обратиться к decoration из соседнего scope, приложение падает при старте либо получает `undefined`. Повторная регистрация без уникального prefix может создать конфликт routes.

### Какие trade-offs важно назвать для Плагины Fastify?

Feature routes и локальные hooks оставляют инкапсулированными. Общий database client оформляют инфраструктурным plugin с `onClose`; `fastify-plugin` применяют осознанно, потому что он пробивает границу encapsulation.
