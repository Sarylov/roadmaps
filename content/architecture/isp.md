---
title: Interface Segregation Principle
summary: ISP предлагает давать клиенту минимальный интерфейс, который нужен именно ему. Клиент не должен зависеть от методов и причин изменения, которыми не пользуется.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Вместо `UserService` с чтением, записью, экспортом и billing выделяют `UserReader`, `UserWriter`, `UserExporter` на соответствующих границах. Реализация может поддерживать несколько портов, а consumer видит один.

## Что спрашивают

- Как работает Interface Segregation Principle на практике?
- Какой типичный failure mode связан с Interface Segregation Principle?
- Какие trade-offs важно назвать для Interface Segregation Principle?

## Ответы

### Как работает Interface Segregation Principle на практике?

Вместо `UserService` с чтением, записью, экспортом и billing выделяют `UserReader`, `UserWriter`, `UserExporter` на соответствующих границах. Реализация может поддерживать несколько портов, а consumer видит один.

### Какой типичный failure mode связан с Interface Segregation Principle?

Fat interface заставляет test doubles реализовывать заглушки и блокирует adapters, которые естественно поддерживают только часть операций. Слишком мелкие одноразовые interfaces, наоборот, добавляют имена без границы.

### Какие trade-offs важно назвать для Interface Segregation Principle?

Дробят по потребителям и capabilities, а не механически по методу. Внутренний цельный API можно сохранить, экспортируя узкие порты наружу.
