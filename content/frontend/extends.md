---
title: extends
summary: extends — наследование классов: subclass получает прототипную связь с parent, `super` вызывает родителя.
---

## Для чего

Чтобы специализировать поведение (`Dog extends Animal`) с переиспользованием базового API.

## Пример

```js
class Dog extends Animal {
  constructor(name) { super(name); this.kind = 'dog' }
  speak() { return 'woof' }
}
```

## Примечание

В subclass constructor `super` до `this` обязателен. Наследование UI-компонентов часто хуже композиции.
