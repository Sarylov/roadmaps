---
title: Repository
summary: Repository скрывает детали хранения за контрактом, сформулированным в терминах домена. Он полезен как граница, но не обязан копировать каждый метод ORM.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Use case вызывает `orders.findById` или `save`, а adapter реализует SQL/ORM и mapping persistence model ↔ domain object. Транзакцию обычно координирует Unit of Work выше нескольких repositories.

## Что спрашивают

- Как работает Repository на практике?
- Какой типичный failure mode связан с Repository?
- Какие trade-offs важно назвать для Repository?

## Ответы

### Как работает Repository на практике?

Use case вызывает `orders.findById` или `save`, а adapter реализует SQL/ORM и mapping persistence model ↔ domain object. Транзакцию обычно координирует Unit of Work выше нескольких repositories.

### Какой типичный failure mode связан с Repository?

Универсальный CRUD repository с `find(options: any)` протекает наружу ORM-языком и не защищает границу. N+1, потеря optimistic lock и сохранение aggregate по частям нарушают инварианты.

### Какие trade-offs важно назвать для Repository?

Repository оправдан для aggregate и сменяемого data adapter. Для простого read model прямой query service часто яснее; CQRS допускает разные модели чтения и записи вместо одной искусственной абстракции.
