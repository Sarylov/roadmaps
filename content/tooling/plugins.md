---
title: Plugins (bundler)
summary: Bundler plugins — расширения Vite/Webpack/Rollup, которые вмешиваются в resolve, transform и emit ассетов.
---

## Для чего

Чтобы добавить поддержку SVGR, PWA, визуализацию бандла, env, без изобретения своего пайплайна.

## Пример

Vite: `@vitejs/plugin-react`, `rollup-plugin-visualizer`.  
Webpack: `HtmlWebpackPlugin`, `DefinePlugin`.

## Примечание

Не путать с Fastify plugins. Порядок плагинов важен; слишком много — медленная сборка.
