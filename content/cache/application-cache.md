---
title: Application cache
summary: Application cache — кэш в слое приложения (Redis/память): готовые ответы, сессии, дорогие вычисления.
---

## Для чего

Чтобы разгрузить БД и ускорить горячие ключи под контролем кода.

## Пример

Cache-aside: `user:42` в Redis. Miss → SQL → set TTL. После update — invalidate.

## Примечание

Не единственный источник правды. Stampede и inconsistency — типичные темы на дизайне.
