---
title: ECMAScript Modules в Node.js
summary: ESM — стандартная модульная система JavaScript с `import`/`export`, статическим графом и асинхронной загрузкой. В Node важны режим пакета и совместимость с CommonJS.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Файл считается ESM через `.mjs` или поле `type: module`. Импорты разрешаются как URL, локальные пути обычно требуют расширения; доступны `import.meta.url` и top-level await, но нет встроенных `require`, `__dirname`, `__filename`.

## Что спрашивают

- Как работает ECMAScript Modules в Node.js на практике?
- Какой типичный failure mode связан с ECMAScript Modules в Node.js?
- Какие trade-offs важно назвать для ECMAScript Modules в Node.js?

## Ответы

### Как работает ECMAScript Modules в Node.js на практике?

Файл считается ESM через `.mjs` или поле `type: module`. Импорты разрешаются как URL, локальные пути обычно требуют расширения; доступны `import.meta.url` и top-level await, но нет встроенных `require`, `__dirname`, `__filename`.

### Какой типичный failure mode связан с ECMAScript Modules в Node.js?

Смена `type` может переинтерпретировать все `.js`, сломать пути и default/named imports CJS-зависимостей. Top-level await способен задержать построение всего графа или создать цикл ожидания.

### Какие trade-offs важно назвать для ECMAScript Modules в Node.js?

Для нового Node-кода ESM даёт единый веб-стандарт. Миграцию библиотеки проводят через явный `exports` и тесты обоих режимов; dual package опасен двумя экземплярами состояния при смешанном импорте.
