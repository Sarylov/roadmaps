---
title: Escaping
summary: Escaping — экранирование спецсимволов при вставке в HTML/атрибуты/URL, чтобы данные не стали кодом.
---

## Для чего

Чтобы пользовательский текст не превратился в XSS (`<script>`, `onerror=`).

## Пример

Текст в React `{user.name}` экранируется сам.  
Опасно: `dangerouslySetInnerHTML` / `el.innerHTML = input` без санитизации.

## Примечание

Контекст важен: HTML, attr, JS, URL — разные правила. Escaping ≠ sanitization HTML-подмножества.
