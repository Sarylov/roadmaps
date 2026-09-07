---
title: Logs and debug
summary: Logs & debug в K8s — смотреть stdout подов (`kubectl logs`), events, describe, exec для диагностики.
---

## Для чего

Чтобы понять, почему под CrashLoop/Pending и что пишет приложение.

## Пример

`kubectl describe pod` — events (failed mount, OOM). `kubectl logs -p` — предыдущий контейнер. Централизованно — Loki/ELK агентом.

## Примечание

Логи на диске пода пропадут с подом — собирайте наружу. `exec` в прод — осторожно и аудируемо.
