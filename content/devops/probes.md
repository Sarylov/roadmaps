---
title: Kubernetes Probes
summary: Liveness, readiness и startup probes отвечают на разные вопросы: перезапускать ли container, направлять ли трафик и закончился ли медленный старт.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Startup probe блокирует остальные проверки до успеха. Ошибка readiness удаляет pod из Service без рестарта; ошибка liveness после threshold перезапускает container. HTTP, TCP и exec probes имеют разные стоимость и точность.

## Что спрашивают

- Как работает Kubernetes Probes на практике?
- Какой типичный failure mode связан с Kubernetes Probes?
- Какие trade-offs важно назвать для Kubernetes Probes?

## Ответы

### Как работает Kubernetes Probes на практике?

Startup probe блокирует остальные проверки до успеха. Ошибка readiness удаляет pod из Service без рестарта; ошибка liveness после threshold перезапускает container. HTTP, TCP и exec probes имеют разные стоимость и точность.

### Какой типичный failure mode связан с Kubernetes Probes?

Liveness, зависящая от общей БД, при её падении перезапускает все pods и усиливает аварию. Одинаковые endpoints для readiness/liveness и слишком малые timeout вызывают restart loop.

### Какие trade-offs важно назвать для Kubernetes Probes?

Liveness проверяет локальный необратимый hang, readiness — способность сейчас обслужить запрос, включая критичные зависимости. Пороги должны переживать краткие spikes, а probe endpoint — быть дешёвым.
