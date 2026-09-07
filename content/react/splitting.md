---
title: Splitting
summary: Code splitting — нарезка бандла на куски, подгружаемые по маршруту/действию (`lazy`, `import()`).
---

## Для чего

Чтобы уменьшить initial JS и ускорить первую загрузку.

## Пример

`const Page = lazy(() => import('./Page'))` + `<Suspense>`.  
Роутер делит chunk на `/settings` отдельно от `/`.

## Примечание

Слишком мелкий split → waterfall запросов. Смотрите network и bundle analyzer.
