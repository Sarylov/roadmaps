---
title: Vite
summary: Vite — dev-сервер на ESM + быстрый HMR и production-сборку на Rollup; конфиг через `vite.config`.
---

## Для чего

Чтобы быстро разрабатывать фронт без долгого полного rebuild на каждое изменение.

## Пример

`npm create vite@latest` → `vite` в dev (native ESM), `vite build` → оптимизированные chunks в `dist`.

## Примечание

Плагины — Rollup-совместимые + Vite-specific. SSR/библиотечный mode — отдельные настройки.
