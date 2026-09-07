---
title: Web Workers
summary: Web Worker — фоновый поток JS без доступа к DOM; тяжёлая работа не блокирует UI-поток.
---

## Для чего

Чтобы считать/парсить большие данные, не фризя вкладку.

## Пример

`new Worker(new URL('./heavy.js', import.meta.url))` → `postMessage` → `onmessage` с результатом.

## Примечание

Нет DOM/`window` как в main. Данные клонируются (или Transferable). Не путать с Node worker_threads на сервере.
