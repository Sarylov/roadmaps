---
title: Inheritance
summary: Inheritance в JS — делегирование по prototype chain: объект не нашёл свойство → смотрит в прототипе.
---

## Для чего

Чтобы шарить методы между экземплярами без копирования функции на каждый объект.

## Пример

`class Dog extends Animal` → `Dog.prototype` → `Animal.prototype` → `Object.prototype`.  
`obj.toString` находится в цепочке.

## Примечание

«Классическое» НО vs прототипное делегирование — частый вопрос. Композиция часто проще глубокой иерархии.
