---
title: Service Worker updates
summary: SW updates — браузер качает новый service worker; он ждёт activate, пока старый контролирует клиентов (или skipWaiting).
---

## Для чего

Чтобы понимать, почему пользователи «не видят деплой» и как безопасно выкатить новый кэш.

## Пример

Новый SW installed → `waiting` → после закрытия вкладок / `skipWaiting`+`clients.claim` → activate → смена cache bust.

## Примечание

Агрессивный skipWaiting без миграции кэша может отдать полусломанный UI. Версионируйте cache name.
