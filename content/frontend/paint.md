---
title: Paint
summary: Paint — заполнение пикселей слоёв: текст, цвета, тени, изображения после layout.
---

## Для чего

Чтобы отличать «перекрасили» от «пересчитали геометрию» при оптимизации анимаций.

## Пример

Смена `color`/`background` → paint (часто без reflow). Смена `width` → layout + paint. DevTools: Paint flashing.

## Примечание

Дорогие paint: большие области, box-shadow, сложные градиенты. Дальше часто composite.
