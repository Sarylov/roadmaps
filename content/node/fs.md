---
title: File system в Node.js
summary: Модуль `node:fs` даёт sync, callback, Promise и stream API для файлов. Production-ответ должен учитывать блокировку event loop, атомарность и ограничения файловых дескрипторов.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

`fs/promises` обычно передаёт файловую работу в thread pool libuv. Stream API читает чанками; sync-вызовы выполняются на event-loop thread. Надёжная замена файла делается записью во временный файл, `fsync` при нужной durability и `rename` в пределах filesystem.

## Что спрашивают

- Как работает File system в Node.js на практике?
- Какой типичный failure mode связан с File system в Node.js?
- Какие trade-offs важно назвать для File system в Node.js?

## Ответы

### Как работает File system в Node.js на практике?

`fs/promises` обычно передаёт файловую работу в thread pool libuv. Stream API читает чанками; sync-вызовы выполняются на event-loop thread. Надёжная замена файла делается записью во временный файл, `fsync` при нужной durability и `rename` в пределах filesystem.

### Какой типичный failure mode связан с File system в Node.js?

`readFile` для большого файла раздувает heap/RSS, sync API задерживает все запросы, а `Promise.all` по тысячам файлов исчерпывает descriptors (`EMFILE`) и pool. Нужны streaming, лимит конкурентности и обработка частичных ошибок.

### Какие trade-offs важно назвать для File system в Node.js?

Sync API уместен при старте CLI/процесса до приёма трафика. Для request path выбирают promises с ограниченной конкуренцией или streams; для пользовательских данных часто надёжнее object storage.
