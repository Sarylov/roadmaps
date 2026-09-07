---
title: LCP
summary: LCP (Largest Contentful Paint) — время, когда отрисовался самый крупный видимый контент во viewport (часто hero-картинка или заголовок).
---

## Для чего

Чтобы измерить «когда пользователь увидел основной контент» — ключевой Core Web Vital.

## Пример

Медленный LCP: огромный hero без размеров, CSS блокирует render, картинка с дальнего origin.  
Улучшают: priority hint/`fetchpriority`, CDN, сжатие, SSR/preload critical image.

## Примечание

Цель обычно ≤ 2.5s на хорошем соединении (ориентир Google). Смотрите field (CrUX) и lab (Lighthouse).
