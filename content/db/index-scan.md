---
title: Index scan
summary: Index scan — доступ к строкам через индекс: найти ключи в дереве, затем (часто) достать heap-страницы.
---

## Для чего

Чтобы ускорить селективные фильтры и упорядочивание по индексированным колонкам.

## Пример

`Index Scan using users_email_idx on users` при `WHERE email = $1`.

## Примечание

Bitmap Index Scan / Index Only Scan — варианты. Много попаданий → random I/O в heap может проиграть seq scan; смотрите ANALYZE.
