---
title: Component contracts
summary: Component contract — явный props/events/slots API компонента: что принимает, что эмитит, что обязан сделать родитель.
---

## Для чего

Чтобы команды согласовали UI-границы без чтения внутренней реализации и ломающих сюрпризов.

## Пример

`Select`: props `value`/`onChange`/`options`; не лезет в глобальный store сам.  
Storybook/типы = живой контракт.

## Примечание

Стабильный public API важнее «гибких» 40 optional props. Версионируйте breaking changes в дизайн-системе.
