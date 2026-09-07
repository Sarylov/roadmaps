---
title: Errors
summary: Errors — объекты ошибок (`Error` и подклассы); бросают через `throw`, ловят `try/catch` или `.catch` у Promise.
---

## Для чего

Чтобы сигналить о сбое и обрабатывать его на нужном уровне, не теряя stack.

## Пример

`throw new Error('fail')`.  
`try { await fetch… } catch (e) { showToast(e.message) }`.

## Примечание

Не глотайте ошибки пустым catch. Async без await/`catch` даёт unhandled rejection. `finally` — cleanup.
