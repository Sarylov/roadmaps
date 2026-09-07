---
title: Webpack
summary: Webpack — бандлер: граф модулей → бандлы через loaders (трансформ файлов) и plugins (жизненный цикл сборки).
---

## Для чего

Чтобы собирать сложные фронт-приложения с кастомным пайплайном (легаси, микрофронты, особое asset handling).

## Пример

`babel-loader` для TS/JSX, `MiniCssExtractPlugin`, `splitChunks` для vendors. DevServer с HMR.

## Примечание

Конфиг тяжелее Vite; для новых SPA чаще Vite. Знать Webpack всё ещё полезно в корпоративном легаси.
