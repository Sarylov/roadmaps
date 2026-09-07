---
title: CommonJS
summary: CommonJS — классическая модульная система Node: require / module.exports, синхронная загрузка.
---

## Для чего

Чтобы подключать модули в экосистеме, которая исторически выросла на CJS (много npm-пакетов до сих пор такие).

## Пример

```js
const fs = require('fs')
module.exports = { read: (p) => fs.readFileSync(p) }
```

## Примечание

`require` кэширует по абсолютному пути. Смешение с ESM — частая боль (`exports` map, dual packages). Новый код чаще пишут на ESM.
