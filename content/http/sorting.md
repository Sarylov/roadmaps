---
title: Sorting
summary: Sorting — упорядочивание выдачи по полям и направлению со стабильным tie-breaker (обычно id).
---

## Для чего

Чтобы страницы списка были предсказуемыми и совпадали с индексами в БД.

## Пример

`GET /users?sort=-created_at`  
На сервере: `ORDER BY created_at DESC, id DESC`.

## Примечание

Без уникального tie-breaker при равных значениях страницы «прыгают». Whitelist полей сортировки — как у filtering.
