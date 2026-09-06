---
title: Layout и reflow
summary: Layout (reflow) вычисляет размеры и координаты render boxes; изменение геометрии может затронуть потомков и соседние элементы.
---

## Зачем нужно

Синхронные и повторные layout внутри кадра блокируют main thread, повышают INP и вызывают jank при скролле или анимации.

## Как работает

После style calculation браузер решает constraints: доступные размеры, intrinsic content, normal flow, Flexbox и Grid. Изменение `width`, шрифта или содержимого инвалидирует геометрию. Браузер обычно пакетирует изменения до следующего кадра.

Forced synchronous layout возникает, когда код записал стиль, а затем прочитал `offsetWidth`, `getBoundingClientRect()` или другой layout-dependent API: браузер обязан немедленно применить накопленные изменения. Повторение read/write в цикле называется layout thrashing. Решение — группировать чтения, затем записи, уменьшать область изменений и анимировать `transform`.

## Что спрашивают

- Что вызывает reflow?
- Что такое forced synchronous layout?
- Как избежать layout thrashing?

## Ответы

### Что вызывает reflow?

Изменения, влияющие на размеры или положение: DOM-контент, width/height, padding, font, viewport. Реальный охват зависит от layout model и containment.

### Что такое forced synchronous layout?

Это немедленный layout перед чтением геометрии после pending DOM/style writes. В trace он виден как Layout, инициированный JavaScript.

### Как избежать layout thrashing?

Считать нужную геометрию одним блоком до изменений, затем пакетно записывать стили; не чередовать операции в цикле. Для анимации предпочитать `transform`.
