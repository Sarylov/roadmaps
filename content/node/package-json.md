---
title: package.json
summary: package.json — манифест пакета/приложения: имя, зависимости, scripts, engines, exports.
---

## Для чего

Чтобы зафиксировать зависимости, точки входа и команды запуска для людей и CI.

## Пример

```json
{
  "name": "api",
  "type": "module",
  "scripts": { "start": "node src/index.js" },
  "dependencies": { "fastify": "^5.0.0" }
}
```

## Примечание

В приложениях коммитьте lockfile. Поле `exports` ограничивает, что можно импортировать снаружи пакета.
