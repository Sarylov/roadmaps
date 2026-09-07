---
title: Class syntax
summary: class — синтаксический сахар над прототипами: constructor, методы на prototype, `extends`/`super`.
---

## Для чего

Чтобы писать ООП-структуры читаемее, чем ручной `Fn.prototype.method = …`.

## Пример

```js
class Counter {
  constructor() { this.n = 0 }
  inc() { this.n++ }
}
```

## Примечание

Методы не enumerable на prototype как собственные поля. Поля класса (`n = 0`) — на экземпляре; `#priv` — действительно приватные.
