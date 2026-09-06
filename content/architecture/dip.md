---
title: Dependency Inversion Principle
summary: DIP требует, чтобы high-level policy не зависела от low-level details: оба зависят от абстракции, принадлежащей смыслу use case. DI-контейнер лишь собирает такую схему.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Use case зависит от порта `PaymentGateway`, а Stripe adapter реализует его. Composition root выбирает adapter и передаёт его; доменная логика не импортирует SDK, HTTP client или Nest decorator.

## Что спрашивают

- Как работает Dependency Inversion Principle на практике?
- Какой типичный failure mode связан с Dependency Inversion Principle?
- Какие trade-offs важно назвать для Dependency Inversion Principle?

## Ответы

### Как работает Dependency Inversion Principle на практике?

Use case зависит от порта `PaymentGateway`, а Stripe adapter реализует его. Composition root выбирает adapter и передаёт его; доменная логика не импортирует SDK, HTTP client или Nest decorator.

### Какой типичный failure mode связан с Dependency Inversion Principle?

Интерфейс, повторяющий все методы vendor SDK, не инвертирует зависимость — detail всё ещё диктует контракт. Создание adapter через `new` внутри use case и service locator скрывают dependency.

### Какие trade-offs важно назвать для Dependency Inversion Principle?

Порт оправдан на изменчивой внешней границе и формулируется операциями домена. Для стабильной стандартной библиотеки дополнительная абстракция может быть лишней.
