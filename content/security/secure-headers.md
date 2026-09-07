---
title: Secure headers
summary: Secure headers — HTTP-заголовки (`CSP`, `HSTS`, `X-Content-Type-Options`…), которые усиливают защиту браузера.
---

## Для чего

Чтобы снизить XSS, clickjacking, MIME-sniffing и принудить HTTPS без правок каждого шаблона.

## Пример

`Strict-Transport-Security`, `Content-Security-Policy`, `X-Frame-Options` / `frame-ancestors`, `Referrer-Policy`.

## Примечание

CSP нужно настраивать под реальное приложение, иначе сломаете фронт. Helmet в Express/Fastify — быстрый старт, не «включил и забыл».
