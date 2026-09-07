---
title: Worker messages
summary: Worker messages — обмен main ↔ worker через `postMessage` (structured clone) и опционально Transferable.
---

## Для чего

Чтобы передать задачу и забрать результат без shared DOM.

## Пример

Main: `worker.postMessage({ buf })`. Worker: считает → `postMessage(result)`.  
`ArrayBuffer` можно transfer — zero-copy, буфер у отправителя отбирается.

## Примечание

Функции/DOM-узлы не клонируются. Частые огромные клоны дорогие — лучше transfer или SharedArrayBuffer (с оговорками COOP/COEP).
