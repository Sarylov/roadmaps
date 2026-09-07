---
title: Deploy
summary: Deploy — выкат артефакта на окружение (staging/prod): rolling, blue/green, canary.
---

## Для чего

Чтобы новая версия дошла до пользователей контролируемо и обратимо.

## Пример

CD job: apply K8s Deployment image `api:sha`. Health/probes зелёные → готово. Canary 5% трафика сначала.

## Примечание

Миграции БД согласовывайте с expand/contract. Deploy ≠ «ssh и docker pull вручную» как единственный процесс.
