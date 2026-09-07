---
title: ESM
summary: ESM — модульная система import/export с статическим анализом зависимостей (ES modules).
---

## Для чего

Чтобы явно описывать публичный API файла и дать бандлерам/рантайму дерево зависимостей без `require` в рантайме.

## Пример

```js
import { readFile } from 'node:fs/promises'
export function load(path) {
  return readFile(path, 'utf8')
}
```

## Примечание

В Node: `"type": "module"` или `.mjs`. `require` в чистом ESM нет (кроме `createRequire`). Top-level `await` допустим в ESM. В браузере — `<script type="module">` и бандлеры.

## Вопросы и ответы

### Чем ESM лучше CommonJS для фронта?

Статический `import`/`export` даёт tree-shaking и предсказуемый граф модулей; CJS `require` динамичнее, но хуже трясётся.

### Можно ли dynamic import в ESM?

Да: `import('./x.js')` возвращает Promise — для code splitting.
