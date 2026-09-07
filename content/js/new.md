---
title: new
summary: new — создаёт объект, связывает `[[Prototype]]` с `Fn.prototype`, вызывает `Fn` с this = этот объект.
---

## Для чего

Чтобы создавать экземпляры через конструктор (до/вместо class sugar).

## Пример

```js
function User(name) { this.name = name }
const u = new User('A') // u.__proto__ === User.prototype
```

## Примечание

Без `new` в non-strict this может утечь в global. Class конструктор без `new` кидает TypeError.
