---
title: Contract testing
summary: Contract testing — проверка, что provider и consumer согласованы по формату API/события без полного E2E обоих сервисов.
---

## Для чего

Чтобы ловить breaking changes между микросервисами раньше, чем на стенде.

## Пример

Pact: consumer задаёт ожидание `GET /users/1` → provider прогоняет контракт в CI и подтверждает ответ.

## Примечание

Контракт ≠ полный функциональный тест. Schema (OpenAPI/AsyncAPI) + contract tests хорошо дополняют, не заменяют, пирамиду.
