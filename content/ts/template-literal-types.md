---
title: Template Literal Types
summary: Template literal types — строковые типы вида `` `${A}-${B}` ``, которые склеивают literal/union в новые строковые литералы.
---

## Для чего

Чтобы точно типизировать имена событий, CSS-классы, route path, ключи вроде `on${Event}` без ручного перечисления всех комбинаций.

## Пример

```ts
type HttpMethod = 'get' | 'post'
type Route = '/users' | '/posts'

type Endpoint = `${HttpMethod} ${Route}`
// 'get /users' | 'get /posts' | 'post /users' | 'post /posts'

type PropEvent<E extends string> = `on${Capitalize<E>}`
```

## Примечание

Union в шаблоне даёт декартово произведение комбинаций — удобно, но взрывается на больших union. Есть intrinsic helpers: `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`.

## Вопросы и ответы

### Чем это лучше обычного `string`?

`string` принимает любую строку. Template literal ловит опечатки в именах событий/роутов на compile time.

### Как извлечь части строки на уровне типов?

Через conditional + `infer`: `` T extends `${infer Head}/${infer Tail}` ? ... `` — типичный паттерн парсинга path.

### Где это используют на бэкенде?

Типизация Redis/Kafka keys, event names, OpenAPI path params, builder'ы query string — везде, где строка — часть контракта.
