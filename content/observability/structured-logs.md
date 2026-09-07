---
title: Structured logs
summary: Structured logs — логи как поля (JSON: `level`, `msg`, `requestId`), а не свободный текст для грепа глазами.
---

## Для чего

Чтобы искать и агрегировать события в ELK/Loki/CloudWatch: фильтр по userId, error code, без ломки парсеров.

## Пример

`{"level":"error","msg":"payment failed","orderId":"…","requestId":"…"}`  
а не `Error!!! payment for order blah`.

## Примечание

Не логируйте секреты и огромные body. Один событие = один JSON; многострочный stack — отдельное поле.
