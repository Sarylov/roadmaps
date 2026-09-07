---
title: Sanitization
summary: Sanitization — очистка HTML от опасных тегов/атрибутов, когда нужно разрешить «безопасную» разметку (rich text).
---

## Для чего

Чтобы показывать user-generated HTML (комменты с `<b>`) без XSS.

## Пример

DOMPurify: `DOMPurify.sanitize(html)` перед `dangerouslySetInnerHTML`.  
Запрет `script`, `on*`, `javascript:` URL.

## Примечание

Свой regex «вырезать script» хрупок. Если HTML не нужен — лучше plain text + escaping.
