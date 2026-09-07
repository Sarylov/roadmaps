---
title: Nginx
summary: Nginx — высокопроизводительный reverse proxy/web-server: принимает внешний HTTP(S) и проксирует на upstream (Node, static).
---

## Для чего

Чтобы терминировать TLS, раздавать статику, балансировать и не светить Node напрямую в интернет.

## Пример

`location /api/ { proxy_pass http://api:3000; }`  
`location / { root /var/www; }`

## Примечание

Настройте `proxy_set_header Host/X-Forwarded-For`, лимиты тела, таймауты. Для WebSocket — отдельные upgrade-заголовки.
