---
title: Cache (frontend)
summary: Cache на фронте/в Next — хранение ответов fetch (HTTP cache, React cache, Data Cache, клиентский RQ) с правилами свежести.
---

## Для чего

Чтобы не бить API повторно и ускорять навигацию/SSR.

## Пример

`fetch(url, { next: { revalidate: 60 } })` в Next.  
React Query: staleTime. HTTP `Cache-Control` на CDN.

## Примечание

Несколько слоёв кэша путают инвалидацию — знайте, какой слой трогаете. Персональные данные не кэшируйте публично.
