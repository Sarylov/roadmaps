---
title: Prototypes
summary: Каждый объект связан с прототипом; поиск свойства идёт по цепочке `__proto__` / `[[Prototype]]`. `new`, `class` и наследование — сахар над этой моделью.
---

## Зачем нужно

KILLER-тема JS: без прототипов непонятно `this`, `instanceof`, наследование и почему мутация `Obj.prototype` бьёт по всем инстансам.

## Как работает

```js
const animal = { eat() { return 'nom' } }
const dog = Object.create(animal)
dog.bark = () => 'woof'
dog.eat() // ищет в dog → animal
```

`obj.prop` → собственное → `[[Prototype]]` → … → `null`.  
`new F()` создаёт объект, ставит прототип в `F.prototype`, вызывает `F` с `this`. `class` компилируется в ту же схему.

MDN: [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Что спрашивают

- Чем `__proto__` отличается от `prototype`?
- Что делает `Object.create(null)`?
- Почему методы обычно кладут на `F.prototype`, а не в конструктор?

## Ответы

### Чем `__proto__` отличается от `prototype`?

У **функции-конструктора** есть свойство **`prototype`** — объект, который станет `[[Prototype]]` инстансов после `new`. У **любого объекта** есть внутренний `[[Prototype]]` (в коде часто `__proto__` / `Object.getPrototypeOf`) — ссылка «на кого делегировать». Путаница: `dog.__proto__ === Dog.prototype` (обычно true), но это разные «слоты».

### Что делает `Object.create(null)`?

Объект **без прототипа** — нет `toString`, `hasOwnProperty` с `Object.prototype`. Удобно как чистый словарь ключей (меньше сюрпризов от унаследованных имён). Минус: часть кода ожидает обычные Object methods.

### Почему методы обычно кладут на `F.prototype`, а не в конструктор?

На прототипе метод **один на все инстансы** (память + общий патч). В конструкторе `this.method = () => …` создаёт **новую функцию на каждый** `new` — дороже и ломает сравнение ссылок / прототипные оптимизации, если так делать без нужды.
