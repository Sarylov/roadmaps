---
title: Autoscaling
summary: Autoscaling — автоматическое изменение числа реплик/нод по метрикам нагрузки (CPU, RPS, custom).
---

## Для чего

Чтобы держать capacity под пик без постоянной переплаты за простой.

## Пример

HPA: CPU > 70% → больше pod'ов Deployment. Cluster autoscaler добавит ноды, если поды Pending.

## Примечание

Без resource requests HPA слеп. Скейлинг БД — другая история (вертикаль/шарды), не только «ещё один pod».
