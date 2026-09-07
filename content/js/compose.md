---
title: Compose
summary: Compose — соединение функций справа налево: `compose(f, g)(x) = f(g(x))` (pipe — наоборот).
---

## Для чего

Чтобы собирать маленькие чистые преобразования в пайплайн без промежуточных переменных.

## Пример

`const prep = compose(trim, toLower)` → `prep('  Hi ')` = `'hi'`.  
В lodash/fp / Ramda — готовые helpers.

## Примечание

Удобно с унарными функциями. С async чаще явный `await` pipeline, чем compose.
