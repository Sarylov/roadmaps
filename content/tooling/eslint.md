---
title: ESLint
summary: ESLint — статический анализ JS/TS: ловит баги и стиль по правилам (в т.ч. React hooks, import, a11y).
---

## Для чего

Чтобы ошибки всплывали в редакторе/CI до рантайма и код выглядел единообразно по смыслу (не только пробелы).

## Пример

`eslint .` + config flat `eslint.config.js`. Правило `react-hooks/exhaustive-deps`. Autofix где безопасно.

## Примечание

Не дублируйте с Prettier правила форматирования — разделите ответственность. Игнор на `dist`/generated.
