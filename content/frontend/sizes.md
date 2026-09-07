---
title: Sizes
summary: Image sizes — отдача нужного разрешения через `srcset`/`sizes` (и CDN resize), а не одного 4000px на мобилку.
---

## Для чего

Чтобы не качать лишние мегабайты и улучшить LCP на узких экранах.

## Пример

`srcset="a-400.webp 400w, a-800.webp 800w" sizes="(max-width:600px) 100vw, 600px"`.  
Задать width/height или aspect-ratio — против CLS.

## Примечание

`sizes` описывает CSS-ширину слота, не «размер файла». Ошибки в sizes → браузер берёт слишком большое.
