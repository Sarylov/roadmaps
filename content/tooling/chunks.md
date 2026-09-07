---
title: Chunks
summary: Chunks — куски бандла после split: entry, async route chunks, shared vendors.
---

## Для чего

Чтобы контролировать, что попадает в initial JS и что грузится потом.

## Пример

Vite/Rollup: один entry + `PageA`/`PageB` async chunks + общий `vendor`. Смотрите в Network и analyzer.

## Примечание

Огромный shared chunk сводит на нет splitting. Ручной `manualChunks` — осторожно с дублями.
