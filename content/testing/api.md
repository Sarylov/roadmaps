---
title: API tests
summary: API test — дергает HTTP-эндпоинты приложения (supertest/light-my-request) и проверяет статус/тело/заголовки.
---

## Для чего

Чтобы проверить wiring: роут → pipes/guards → handler → ответ, без браузера.

## Пример

`POST /users` с валидным body → `201` + id. Без токена на защищённый → `401`.

## Примечание

Можно на in-process server или на поднятом инстансе. БД — тестовая; внешние API — mock/nock, иначе флейки.
