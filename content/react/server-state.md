---
title: Server state
summary: Server state — данные с бэка: кэш, freshness, refetch, ошибки (React Query/SWR), отдельно от клиентского UI state.
---

## Для чего

Чтобы не изобретать кэш/гонки fetch в каждом `useEffect` и синхронизировать UI с сервером.

## Пример

`useQuery(['user', id], fetchUser)` — кэш, loading/error, stale-while-revalidate. Мутации — `useMutation` + invalidate.

## Примечание

Отличается от Redux: источник правды — сервер. Локальный store — для genuinely client state.
