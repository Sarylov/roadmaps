---
title: Testcontainers
summary: Testcontainers — библиотека, которая в тесте поднимает реальные зависимости в Docker (Postgres, Redis, Kafka).
---

## Для чего

Чтобы integration-тесты шли против тех же движков, что в проде, без «у меня локально другая Postgres».

## Пример

Перед suite: контейнер Postgres → connection string в app → миграции → тесты → stop контейнера.

## Примечание

Нужен Docker в CI. Медленнее H2/sqlite-подмен, но честнее. Переиспользуйте контейнер на suite, не на каждый test.
