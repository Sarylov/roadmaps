---
title: SSRF
summary: Server-Side Request Forgery заставляет сервер отправить запрос к ресурсу, выбранному атакующим. Так обходятся сетевые границы и достигаются внутренние сервисы или metadata endpoints.
---

## Зачем нужно

Даже endpoint «скачать картинку по URL» становится сетевым proxy с привилегиями сервера.

## Как работает

Атакующий подставляет loopback, private IP, link-local адрес, альтернативное представление IP или домен с DNS rebinding. Redirect может увести разрешённый URL во внутреннюю сеть. Ответ не всегда возвращается напрямую: blind SSRF виден по побочному эффекту или таймингу.

## Практические нюансы

Лучше allowlist схем, хостов и портов плюс отдельный egress proxy. После DNS resolution проверяют все IP, запрещают private/link-local и повторяют проверку на каждом redirect; HTTP-клиенту задают timeout, лимит размера и запрет лишних протоколов. Сетевые ACL — обязательный второй слой.

## Что спрашивают

- Почему denylist localhost недостаточен?
- Как защититься от DNS rebinding?
- Что такое blind SSRF?

## Ответы

### Почему denylist localhost недостаточен?

Есть IPv6, integer/hex IP, DNS rebinding, redirects и множество private/link-local ranges. Нормализация сложна; allowlist известных destinations надёжнее.

### Как защититься от DNS rebinding?

Resolve hostname контролируемым resolver, проверить каждый адрес, закрепить соединение за проверенным IP и валидировать Host/TLS name; redirects проходят тот же pipeline.

### Что такое blind SSRF?

Сервер не возвращает тело внутреннего ответа, но атакующий подтверждает запрос через DNS/HTTP callback, изменение состояния или различие времени. Отсутствие response body не устраняет уязвимость.
