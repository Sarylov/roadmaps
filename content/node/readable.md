---
title: Readable stream
summary: Readable stream выдаёт данные частями, не загружая весь ресурс в память. Ключевые темы собеседования — paused/flowing mode, backpressure и корректное завершение.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

В paused mode потребитель вызывает `read()` или использует async iterator; в flowing mode чанки приходят через `data`. `pipe()` согласует скорость с downstream, а `highWaterMark` задаёт порог внутреннего буфера, но не жёсткий лимит памяти.

## Что спрашивают

- Как работает Readable stream на практике?
- Какой типичный failure mode связан с Readable stream?
- Какие trade-offs важно назвать для Readable stream?

## Ответы

### Как работает Readable stream на практике?

В paused mode потребитель вызывает `read()` или использует async iterator; в flowing mode чанки приходят через `data`. `pipe()` согласует скорость с downstream, а `highWaterMark` задаёт порог внутреннего буфера, но не жёсткий лимит памяти.

### Какой типичный failure mode связан с Readable stream?

Смешивание `data`, `readable` и async iteration приводит к неожиданному режиму и пропущенным данным. Неограниченная тяжёлая обработка в `data` раздувает память; ошибки и преждевременное закрытие надо обрабатывать через `pipeline`.

### Какие trade-offs важно назвать для Readable stream?

Async iterator удобен для последовательной бизнес-логики; `pipeline` — для цепочки source/transform/sink с backpressure и единым распространением ошибок. Полная буферизация допустима только при заранее ограниченном размере.
