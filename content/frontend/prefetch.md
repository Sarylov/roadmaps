---
title: Prefetch
summary: Prefetch — заранее скачать ресурс вероятной следующей навигации (`<link rel="prefetch">`, router prefetch), с низким приоритетом.
---

## Для чего

Чтобы следующий клик открывался быстрее без утяжеления критического пути текущего экрана.

## Пример

`<link rel="prefetch" href="/settings.js">` или `<Link prefetch>` в Next/RR.  
Hover по пункту меню → prefetch chunk.

## Примечание

Prefetch ≠ preload (preload — критично сейчас). На мобильном/Save-Data не злоупотребляйте.
