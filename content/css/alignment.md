---
title: Alignment
summary: Alignment в flex/grid — выравнивание элементов и содержимого по осям (`justify-*`, `align-*`, `place-*`).
---

## Для чего

Чтобы центрировать и распределять элементы предсказуемо, без margin-хаков.

## Пример

Flex: `justify-content: center; align-items: center` — центр по обеим осям.  
Grid: `place-items: center` на контейнере.

## Примечание

`*-content` vs `*-items` vs `*-self`: content — распределение свободного места треков/линий, items — элементы в ячейке/контейнере.

## Вопросы и ответы

### Как центрировать один блок в родителе?

Flex/grid на родителе + `place-items: center` или `margin: auto` в flex-элементе.

### Почему align-items не двигает по горизонтали в row-flex?

В `flex-direction: row` горизонталь — главная ось → `justify-content`.
