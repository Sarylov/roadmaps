---
title: DTO
summary: DTO (Data Transfer Object) — структура данных для передачи через границу (API in/out), без поведения домена.
---

## Для чего

Чтобы контракт запроса/ответа не совпадал один в один с таблицей БД и не светил лишние поля.

## Пример

`CreateUserDto { email, password }` на входе.  
`UserResponseDto { id, email }` на выходе — без `passwordHash`.

## Примечание

DTO ≠ entity. Маппинг DTO ↔ domain/persistence — осознанный шаг. Валидация обычно на DTO на границе.
