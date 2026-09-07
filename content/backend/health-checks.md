---
title: Health checks
summary: Health checks — зонды liveness/readiness (/health): жив ли процесс и готов ли принимать трафик.
---

## Для чего

Чтобы оркестратор не слал нагрузку на стартующий/сломанный инстанс и перезапускал зависшие.

## Пример

Readiness: «миграции ок, к БД коннект есть». Liveness: «event loop отвечает». K8s снимает с Service при failing readiness.

## Примечание

Не делайте liveness тяжёлой проверкой внешних систем — получите restart loops. Readiness может зависеть от критичных deps.
