---
title: Database state
summary: Database state в E2E — контролируемое состояние БД до/после сценария: seed, assert, cleanup.
---

## Для чего

Чтобы сценарий был воспроизводим и проверки смотрели не только HTTP, но и факт в хранилище.

## Пример

Seed: user + пустая корзина. После checkout — в БД order `paid`, stock уменьшен. Cleanup truncate/transaction.

## Примечание

Не asserтьте только JSON ответа, если баг может быть в записи. Избегайте зависимости от порядка parallel тестов — изолируйте данные.
