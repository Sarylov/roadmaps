---
title: Dependency Injection в NestJS
summary: Dependency Injection передаёт объекту зависимости извне, а NestJS-контейнер собирает граф по tokens. Это уменьшает связанность только при правильно выбранных интерфейсах и границах.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

При bootstrap контейнер читает metadata модулей и конструкторов, разрешает token и создаёт экземпляры в порядке зависимостей. Для TypeScript interface нужен явный runtime token, потому что interface стирается после компиляции.

## Что спрашивают

- Как работает Dependency Injection в NestJS на практике?
- Какой типичный failure mode связан с Dependency Injection в NestJS?
- Какие trade-offs важно назвать для Dependency Injection в NestJS?

## Ответы

### Как работает Dependency Injection в NestJS на практике?

При bootstrap контейнер читает metadata модулей и конструкторов, разрешает token и создаёт экземпляры в порядке зависимостей. Для TypeScript interface нужен явный runtime token, потому что interface стирается после компиляции.

### Какой типичный failure mode связан с Dependency Injection в NestJS?

Инъекция конкретного ORM client во все сервисы связывает домен с инфраструктурой. Циклический граф падает при bootstrap или вынуждает `forwardRef`; огромный constructor часто показывает, что класс делает слишком много.

### Какие trade-offs важно назвать для Dependency Injection в NestJS?

DI полезен для замены adapters и unit-тестов, но не должен превращать всё в интерфейс. Стабильный бизнес-порт оправдывает token; простую чистую функцию лучше импортировать напрямую.
