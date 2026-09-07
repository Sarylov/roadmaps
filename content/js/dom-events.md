---
title: DOM events
summary: DOM events — система событий браузера: клик, ввод, submit; фазу capture → target → bubble, обработчики на элементах.
---

## Для чего

Чтобы реагировать на действия пользователя и жизненный цикл страницы.

## Пример

`button.addEventListener('click', handler)`.  
`event.preventDefault()` / `stopPropagation()`. Делегирование — слушатель на родителе.

## Примечание

Не путать с Node `EventEmitter`. В React — синтетические события, но идея та же. Чистите слушатели при unmount, если вешали вручную.
