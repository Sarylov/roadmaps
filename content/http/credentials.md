---
title: Credentials
summary: Credentials в CORS/fetch — cookies и HTTP auth: чтобы ушли на cross-origin, нужны `credentials: 'include'` и спец. CORS-заголовки.
---

## Для чего

Чтобы залогиненная сессия/cookie работала с API на другом origin (или subdomain) осознанно.

## Пример

`fetch(api, { credentials: 'include' })`  
Сервер: `Access-Control-Allow-Credentials: true` и конкретный `Allow-Origin` (не `*`).

## Примечание

SameSite cookies влияют сильнее CORS на многих сценариях. Не открывайте credentials + `*` — браузер запретит.
