---
title: CSP
summary: CSP (Content-Security-Policy) — HTTP-заголовок/meta: whitelist источников скриптов, стилей, фреймов и запрет inline по умолчанию.
---

## Для чего

Чтобы сильно усложнить XSS даже при дыре в экранировании: чужой скрипт не выполнится.

## Пример

`Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example`  
Без `'unsafe-inline'` инлайн-обработчики и eval режутся.

## Примечание

Nonce/hash для легитимного inline. Report-Only для обкатки. Слишком строгий CSP ломает аналитику/виджеты — настраивайте явно.
