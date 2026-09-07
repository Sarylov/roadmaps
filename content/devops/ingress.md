---
title: Ingress
summary: Ingress — HTTP(S) вход в кластер: правила host/path → Service, обычно через Ingress Controller (nginx/ALB).
---

## Для чего

Чтобы с одного LB/IP развести много сервисов по доменам и путям и терминировать TLS.

## Пример

`api.example.com/orders` → Service `orders:80`. TLS secret на Ingress. Без Ingress наружу светили бы много LoadBalancer'ов.

## Примечание

Нужен установленный controller. Ingress — L7 HTTP; произвольный TCP — другие ресурсы (Gateway API/NodePort).
