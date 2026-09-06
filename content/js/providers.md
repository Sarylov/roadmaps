---
title: Providers в NestJS
summary: Provider — объект, которым управляет IoC-контейнер NestJS. Через providers оформляют сервисы, repository adapters, factories и внешние клиенты.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Provider регистрируется по token: class, string или symbol. Запись `useClass`, `useValue`, `useFactory` либо `useExisting` определяет создание; scope бывает singleton, request или transient. Constructor injection делает зависимости явными.

## Что спрашивают

- Как работает Providers в NestJS на практике?
- Какой типичный failure mode связан с Providers в NestJS?
- Какие trade-offs важно назвать для Providers в NestJS?

## Ответы

### Как работает Providers в NestJS на практике?

Provider регистрируется по token: class, string или symbol. Запись `useClass`, `useValue`, `useFactory` либо `useExisting` определяет создание; scope бывает singleton, request или transient. Constructor injection делает зависимости явными.

### Какой типичный failure mode связан с Providers в NestJS?

Request-scoped provider протягивает request scope вверх по графу и повышает allocation/latency. Строковые token легко столкнуть, а mutable singleton создаёт утечки данных между запросами.

### Какие trade-offs важно назвать для Providers в NestJS?

По умолчанию выбирают stateless singleton. Symbol token отделяет порт от реализации; factory подходит для конфигурации клиента, `useExisting` — для alias без второго экземпляра. Request scope нужен только для действительно request-local состояния.
