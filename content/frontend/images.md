---
title: Images (loading)
summary: Image loading — стратегия доставки картинок: формат, размеры, lazy, priority для LCP-изображения.
---

## Для чего

Чтобы картинки не убивали LCP/трафик и не грузились все сразу ниже fold.

## Пример

`loading="lazy"` для below-the-fold; LCP-hero — без lazy, с `fetchpriority="high"`.  
`srcset`/`sizes` под плотность экрана.

## Примечание

Не путать с Docker images. Современный стек: AVIF/WebP + CDN + правильные dimensions против CLS.
