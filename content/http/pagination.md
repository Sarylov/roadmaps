---
title: Pagination
summary: Pagination ограничивает размер ответа. Offset прост, cursor/keyset стабилен и эффективен на меняющемся большом наборе при детерминированной сортировке.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Offset делает `LIMIT n OFFSET k`, но БД должна пропустить k строк. Keyset кодирует последние sort values, например `(created_at,id)`, и выбирает следующую страницу условием tuple comparison с тем же индексом.

## Что спрашивают

- Как работает Pagination на практике?
- Какой типичный failure mode связан с Pagination?
- Какие trade-offs важно назвать для Pagination?

## Ответы

### Как работает Pagination на практике?

Offset делает `LIMIT n OFFSET k`, но БД должна пропустить k строк. Keyset кодирует последние sort values, например `(created_at,id)`, и выбирает следующую страницу условием tuple comparison с тем же индексом.

### Какой типичный failure mode связан с Pagination?

Сортировка только по неуникальному `created_at` даёт дубли/пропуски. Concurrent inserts сдвигают offset; cursor без подписи позволяет подмену параметров и может раскрыть внутренний ID.

### Какие trade-offs важно назвать для Pagination?

Offset удобен для маленькой admin-таблицы и перехода на номер страницы. Cursor выбирают для feed/API; он должен включать filter/sort/version, быть opaque и иметь лимит `page_size`.
