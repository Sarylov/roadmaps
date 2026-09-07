---
title: Dynamic import
summary: Dynamic `import()` — асинхронная загрузка модуля в runtime, возвращает Promise с exports.
---

## Для чего

Чтобы code-split: грузить тяжёлый кусок по маршруту/действию, а не в начальный бандл.

## Пример

`const { Modal } = await import('./Modal')` по клику.  
В React: `lazy(() => import('./Page'))`.

## Примечание

Статический `import` удобнее для анализа и tree-shaking границ. Dynamic — для условной/ленивой загрузки.
