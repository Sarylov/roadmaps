---
title: Notification service
summary: Notification service — доставка уведомлений (push, email, SMS, in-app) по событиям с шаблонами и предпочтениями пользователя.
---

## Для чего

Практика: fan-out каналов, retries, приоритеты, rate limits провайдеров, идемпотентность.

## Пример

Событие `order.shipped` → worker выбирает каналы → шаблон → провайдер. Fail email → retry/DLQ; push отдельно.

## Примечание

Не блокируйте checkout на SMTP. Уважайте unsubscribe/quiet hours. Дедуп по `notificationId`.
