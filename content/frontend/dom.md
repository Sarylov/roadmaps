---
title: DOM
summary: DOM (Document Object Model) — дерево узлов страницы после парсинга HTML; JS читает и меняет его через API.
---

## Для чего

Чтобы понимать, из чего браузер строит структуру до стилей и paint, и чем манипулирует React/ваш код.

## Пример

Парсер HTML → DOM. `document.querySelector`, `appendChild`. Большой DOM = дороже style/layout.

## Примечание

Critical rendering path: DOM + CSSOM → Render tree. Не путать DOM с пикселями на экране.
