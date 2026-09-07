---
title: Streaming
summary: Streaming SSR — сервер постепенно стримит HTML (и RSC payload), не дожидаясь всего дерева/всех данных.
---

## Для чего

Чтобы пользователь раньше увидел shell и куски страницы (Suspense boundaries), пока грузятся медленные части.

## Пример

`<Suspense fallback={<Skeleton/>}><Slow/></Suspense>` — shell пришёл, Slow достремится позже.

## Примечание

Нужны границы Suspense и поддержка рантайма. Ошибки в куске не должны ронять весь документ без error boundary.
