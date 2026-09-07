---
title: Formats
summary: Image formats — JPEG/PNG/WebP/AVIF (и SVG для иконок): баланс качества, прозрачности и веса.
---

## Для чего

Чтобы выбрать формат под тип картинки и сэкономить байты без заметной потери качества.

## Пример

Фото → AVIF/WebP с JPEG fallback. UI-иконки → SVG. Скрин с прозрачностью → WebP/PNG, не JPEG.

## Примечание

`<picture>` + `type` для fallback. AVIF меньше, но encode дороже и поддержка чуть уже у старых клиентов.
