---
title: SSRF
summary: SSRF (Server-Side Request Forgery) — сервер по просьбе клиента сам ходит на внутренний URL (metadata, localhost, admin).
---

## Для чего

Чтобы пользователь не заставил ваш backend сканировать внутреннюю сеть или облачные metadata endpoints.

## Пример

«Скачать превью по URL» → клиент дал `http://169.254.169.254/` → сервер читает cloud credentials.

## Примечание

Allowlist схем/хостов, запрет private IP, не доверять редиректам. Отдельный network policy для egress.
