---
title: Scripts
summary: npm scripts — команды в `package.json` `"scripts"`: единый вход для dev/build/test/lint.
---

## Для чего

Чтобы команда запускала проект одинаково локально и в CI без «какой флаг у vite».

## Пример

`"dev": "vite"`, `"build": "tsc -b && vite build"`, `"test": "vitest"`.  
`npm run build` / `pnpm build`.

## Примечание

Сложную оркестрацию выносите в файлы, не в простыню `&&`. `pre`/`post` hooks существуют, но явность лучше магии.
