---
title: Intersection Observer
summary: Intersection Observer — API: колбэк, когда элемент пересекает viewport (или другой root) на заданный порог.
---

## Для чего

Чтобы лениво грузить картинки/виджеты и трекать видимость без scroll-слушателя на каждый кадр.

## Пример

`new IntersectionObserver(cb, { threshold: 0.25 })` → `observe(img)` → при появлении ставим `src`.

## Примечание

Асинхронный, не блокирует main так же агрессивно, как sync layout в scroll handler. RootMargin для prefetch раньше входа.
