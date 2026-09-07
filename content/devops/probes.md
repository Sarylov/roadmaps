---
title: Probes
summary: Probes в K8s — liveness/readiness/(startup): периодические проверки, готов ли контейнер жить и принимать трафик.
---

## Для чего

Чтобы не слать запросы на неготовый под и перезапускать зависшие процессы.

## Пример

Readiness HTTP `/ready` — есть коннект к БД. Liveness `/live` — процесс отвечает. Startup — длинный прогрев без убийства.

## Примечание

Тяжёлый liveness на внешние зависимости → restart loop. Readiness failing убирает под из Service endpoints.
