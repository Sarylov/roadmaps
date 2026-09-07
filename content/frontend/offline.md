---
title: Offline
summary: Offline (Service Worker) — перехват fetch и ответы из Cache Storage, когда сети нет или она плохая.
---

## Для чего

Чтобы PWA/приложение открывалось без сети и показывало кэшированный shell/данные.

## Пример

SW `fetch` handler: cache-first для статики, network-first для API с fallback на кэш.

## Примечание

Нужны HTTPS и аккуратная стратегия устаревания. Offline ≠ «все данные всегда свежие».
