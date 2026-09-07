---
title: Transform
summary: CSS transform — визуальное смещение/масштаб/поворот (`translate`, `scale`, `rotate`) без перестройки layout соседей.
---

## Для чего

Чтобы анимировать и сдвигать элементы дёшево для композитинга (часто на GPU-слое).

## Пример

`transform: translateX(8px) scale(1.02)` на hover. Анимация transform+opacity предпочтительнее `left`/`width`.

## Примечание

Transform создаёт stacking context и влияет на containing block для fixed. Не путать с Node.js stream `Transform`.

## Вопросы и ответы

### Почему анимируют transform, а не left?

`left` трогает layout; transform обычно только composite — меньше jank.

### Меняет ли transform поток документа?

Визуально да, место в layout (box) обычно остаётся — соседи не разъезжаются как при margin.
