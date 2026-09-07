---
title: Controller
summary: Controller — слой HTTP-границы: принять запрос, вызвать application/service, вернуть ответ и статус.
---

## Для чего

Чтобы транспорт (HTTP) не смешивался с бизнес-логикой и доступом к БД.

## Пример

`POST /orders` → controller читает body/userId → `orderService.create(...)` → `201` + DTO ответа.

## Примечание

Тонкий controller: без SQL, без «если скидка и склад…». Это уходит в service/domain.
