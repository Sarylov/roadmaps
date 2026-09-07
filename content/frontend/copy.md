---
title: Copy
summary: Copy объектов — shallow (`Object.assign`/spread) копирует верхний уровень; deep — рекурсивно вложенность.
---

## Для чего

Чтобы не делить ссылку на один объект между «копиями» и случайно не мутировать исходник.

## Пример

`{ ...user }` — новый объект, но `user.address` та же ссылка.  
Deep: `structuredClone(user)` (или библиотека), не `JSON.parse(JSON.stringify)` на всём подряд.

## Примечание

JSON-трюк теряет `undefined`, Date, Map, функции. Знай разницу shallow vs deep на собесе.
