---
title: Render tick
summary: Render / animation frame — кадр отрисовки браузера; `requestAnimationFrame` планирует работу перед paint.
---

## Для чего

Чтобы синхронизировать анимации и DOM-writes с частотой экрана (~60Hz), не дёргая layout лишний раз.

## Пример

`requestAnimationFrame(() => { el.style.transform = … })` вместо `setInterval` на 16ms вслепую.

## Примечание

rAF в фоне троттлится. Между кадрами: JS → style → layout → paint → composite (упрощённо).
