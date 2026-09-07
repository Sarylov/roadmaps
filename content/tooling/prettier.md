---
title: Prettier
summary: Prettier — opinionated форматтер: сам расставляет пробелы, кавычки, переносы без бесконечных споров в PR.
---

## Для чего

Чтобы diff'ы были про логику, а не «переставил запятую», и стиль был единым.

## Пример

`prettier --write .` + format on save. В CI — `prettier --check`.

## Примечание

Отключите конфликтующие stylistic-правила ESLint (`eslint-config-prettier`). Не форматируйте огромные generated файлы.
