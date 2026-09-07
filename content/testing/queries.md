---
title: Queries (RTL)
summary: RTL queries — поиск в DOM как пользователь: `getByRole`, `getByLabelText`, `findBy*` (async), не по class/id в первую очередь.
---

## Для чего

Чтобы тесты отражали доступность и UX, а не детали вёрстки.

## Пример

`screen.getByRole('button', { name: /save/i })`  
Нет элемента → `queryBy*` = null; ждём появления → `findBy*`.

## Примечание

Приоритет: role/label/text → test id в крайнем случае. `getBy*` кидает, если не нашёл — удобно для «должно быть».
