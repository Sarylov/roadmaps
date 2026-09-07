---
title: Lazy images
summary: Lazy images — отложенная загрузка картинок вне viewport (`loading="lazy"` или Intersection Observer).
---

## Для чего

Чтобы ускорить первый экран: ниже fold не конкурируют с LCP-ресурсами.

## Пример

`<img loading="lazy" src="…" width height>`  
Hero/LCP — без lazy (иначе метрика хуже).

## Примечание

Нативные lazy достаточно для большинства кейсов; кастомный IO — для background-image и сложной логики.
