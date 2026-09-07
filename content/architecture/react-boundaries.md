---
title: React boundaries
summary: React boundaries — границы ответственности в UI: Error Boundary, Suspense, client/server, модульные стены фич.
---

## Для чего

Чтобы сбой/загрузка одной зоны не роняли всё дерево и зависимости не протекали куда не надо.

## Пример

`<ErrorBoundary><Suspense><Feature/></Suspense></ErrorBoundary>`  
`'use client'` только на интерактивной границе; данные — в Server Component выше.

## Примечание

Граница ≠ «ещё одна папка». Это контракт: что пробрасываем props'ами, что ловим ошибкой, что грузим лениво.
