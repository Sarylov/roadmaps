---
title: exports / imports
summary: exports/imports в package.json — карта публичных точек входа пакета (и условий: import/require, node/browser).
---

## Для чего

Чтобы скрыть внутренности пакета и дать один стабильный API вместо deep import `lib/internal/...`.

## Пример

```json
{
  "exports": {
    ".": "./dist/index.js",
    "./plugin": "./dist/plugin.js"
  }
}
```

## Примечание

Неверный `exports` ломает и ESM, и CJS потребителей. Тестируйте оба способа подключения, если поддерживаете dual package.
