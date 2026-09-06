---
title: Формат HTTP-ошибок
summary: Единый формат ошибки даёт клиенту стабильный machine-readable code, понятное сообщение и correlation ID. Он не должен раскрывать stack, SQL или внутреннюю топологию.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Problem Details (`application/problem+json`) использует `type`, `title`, `status`, `detail`, `instance`; API добавляет стабильный `code` и список field errors. Централизованный handler отображает известные domain errors, неизвестные — в 500.

## Что спрашивают

- Как работает Формат HTTP-ошибок на практике?
- Какой типичный failure mode связан с Формат HTTP-ошибок?
- Какие trade-offs важно назвать для Формат HTTP-ошибок?

## Ответы

### Как работает Формат HTTP-ошибок на практике?

Problem Details (`application/problem+json`) использует `type`, `title`, `status`, `detail`, `instance`; API добавляет стабильный `code` и список field errors. Централизованный handler отображает известные domain errors, неизвестные — в 500.

### Какой типичный failure mode связан с Формат HTTP-ошибок?

Клиент, завязанный на человеческий `message`, ломается после перевода текста. Возврат 200 с `{success:false}` портит retries/metrics/cache; stack и exception message раскрывают секреты.

### Какие trade-offs важно назвать для Формат HTTP-ошибок?

HTTP status описывает класс результата, `code` — конкретную причину для программы, `detail` — безопасный текст. В logs сохраняют полную ошибку с тем же correlation/trace ID, но response минимизируют.
