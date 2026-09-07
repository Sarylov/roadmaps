---
title: Composite
summary: Composite — сборка слоёв (layers) на GPU: transform/opacity часто без layout и полного paint.
---

## Для чего

Чтобы анимировать плавно: вынести элемент на слой и двигать `transform`, не трогая layout.

## Пример

`transform: translateX` / `opacity` → composite. `left`/`top`/`width` — layout. `will-change` / отдельные слои — осторожно с памятью.

## Примечание

Лишние слои жрут RAM. Не ставьте `will-change` на всё подряд.
