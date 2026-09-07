---
title: Immutability
summary: Immutability — обновление данных через новые объекты/массивы вместо мутации исходных.
---

## Для чего

Чтобы предсказуемо сравнивать state (React), делать undo и избегать скрытых side effects.

## Пример

`setUser({ ...user, name })`, `setItems([...items, x])` — не `user.name =` / `items.push`.

## Примечание

Глубокая иммутабельность дороже — часто хватает аккуратного shallow copy по изменённому пути. Структуры вроде Immutable.js — опция, не обязанность.
