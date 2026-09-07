---
title: Database tests
summary: Database integration test — проверка кода против реальной (или testcontainer) БД, не против мока репозитория.
---

## Для чего

Чтобы ловить ошибки SQL, ограничений, транзакций и маппинга ORM, которые unit с моком не увидит.

## Пример

Поднять Postgres → миграции → вставить user → вызвать `findByEmail` → assert строки и unique violation.

## Примечание

Нужны изоляция данных (транзакция rollback / truncate) и стабильный setup. Медленнее unit — гоняйте в CI отдельно или точечно.
