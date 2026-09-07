---
title: path
summary: path — утилиты для путей файловой системы с учётом ОС (разделители Windows/POSIX).
---

## Для чего

Чтобы безопасно склеивать пути и не ломать код на разных платформах.

## Пример

```js
import path from 'node:path'
path.join('/var', 'app', 'data.json')
path.resolve('uploads', userFile)
```

## Примечание

`path.join` не защищает от path traversal (`../`). Для пользовательских имён файлов нужна отдельная проверка/санитизация.
