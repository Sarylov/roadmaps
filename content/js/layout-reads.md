---
title: Layout reads
summary: Layout reads — чтение геометрии (`offsetHeight`, `getBoundingClientRect`) заставляет браузер синхронно посчитать layout.
---

## Для чего

Чтобы не устроить thrashing: чередование write→read→write в цикле убивает FPS.

## Пример

Плохо: в цикле `el.style.width = …; h = el.offsetHeight`.  
Лучше: сначала все чтения, потом все записи (или `rAF`).

## Примечание

Частый собеседовый перф-вопрос. DevTools Performance показывает Forced reflow.
