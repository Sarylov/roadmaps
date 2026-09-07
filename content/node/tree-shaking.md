---
title: Tree-shaking
summary: Tree-shaking — удаление неиспользуемого export-кода при бандлинге ESM (dead-code elimination).
---

## Для чего

Чтобы в бандл клиента не тащить весь lodash/иконки, если импортировали одну функцию.

## Пример

`import { debounce } from 'lodash-es'` трясётся лучше, чем `import _ from 'lodash'`.  
Нужны ESM и side-effect-free модули (`sideEffects` в package.json).

## Примечание

CJS хуже трясётся. Side effects на top-level (полифилы) мешают. Смотрите bundle analyzer.
