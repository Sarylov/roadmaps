---
title: Constraints
summary: Constraints — правила целостности в БД: NOT NULL, UNIQUE, CHECK, FK, PRIMARY KEY — БД отказывает в нарушении.
---

## Для чего

Чтобы инварианты держала СУБД, а не только валидация в коде.

## Пример

```sql
CHECK (price >= 0),
FOREIGN KEY (user_id) REFERENCES users(id),
UNIQUE (email)
```

## Примечание

Отключённые/deferrable FK меняют момент проверки. Приложение всё равно валидирует UX, но constraint — последний барьер.
