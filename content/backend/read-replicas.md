---
title: Read replicas
summary: Read replica — копия БД только для чтения; writes идут на primary, replicas асинхронно (обычно) догоняют.
---

## Для чего

Чтобы масштабировать read-heavy нагрузку и отчёты отдельно от OLTP-записи.

## Пример

API reads → replicas, `POST`/`checkout` → primary. Аналитика — на отдельной replica с лагом.

## Примечание

Replication lag → stale reads. Нельзя писать на replica. Failover replica→primary — отдельная процедура.
