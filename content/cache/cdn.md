---
title: CDN
summary: CDN — сеть edge-серверов, кэширующих статику (и иногда API) ближе к пользователю.
---

## Для чего

Чтобы снизить latency и bandwidth origin при картинках, JS, видео, публичных страницах.

## Пример

`static.example.com` за CloudFront: cache-hit на edge, origin почти не трогают. Invalidate при деплое ассетов.

## Примечание

Динамика с cookie/персонализацией кэшируется осторожно. Cache-Control и ключ кэша решают hit ratio.
